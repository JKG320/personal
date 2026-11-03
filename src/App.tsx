import { Component, Suspense, lazy, useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { DialRoot, useDialKitController } from 'dialkit'
import { dialConfig } from './config'
import { projects } from './data/projects'

const Gallery = lazy(() => import('./scene/Gallery').then(module => ({ default: module.Gallery })))
const SLOT_COUNT = projects.length * 3
const PROJECT_COUNT = String(projects.length).padStart(2, '0')

function Arrow({ direction = 'right' }: { direction?: 'right' | 'left' | 'down' }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" style={{ transform: `rotate(${direction === 'left' ? 180 : direction === 'down' ? 90 : 0}deg)` }}><path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.3" /></svg>
}

class SceneBoundary extends Component<{ children: ReactNode; onError: () => void }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  componentDidCatch() { this.props.onError() }
  render() { return this.state.failed ? null : this.props.children }
}

type Overlay = 'about' | 'archive' | 'notes' | null

export default function App() {
  const [selected, setSelected] = useState<number | null>(null)
  const [hovered, setHovered] = useState<number | null>(null)
  const [overlay, setOverlay] = useState<Overlay>(null)
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const dialog = useRef<HTMLDialogElement>(null)
  const backButton = useRef<HTMLButtonElement>(null)
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const dial = useDialKitController('The archive', dialConfig, {
    id: 'rev-000-settings-v1', persist: true, defaultCollapsed: true,
    onAction: action => { if (action === 'reset') dial.resetValues() },
  })
  const s = dial.values
  const project = selected === null ? null : projects[selected % projects.length]

  const select = useCallback((slot: number) => {
    setSelected(slot)
    setHovered(null)
    setOverlay(null)
    window.setTimeout(() => backButton.current?.focus({ preventScroll: true }), 50)
  }, [])
  const goHome = useCallback(() => {
    setSelected(null)
    setHovered(null)
    setDragging(false)
  }, [])
  const onReady = useCallback(() => setReady(true), [])
  const onError = useCallback(() => { setFailed(true); setReady(true) }, [])
  const onHover = useCallback((slot: number | null) => {
    clearTimeout(hoverTimeout.current)
    if (slot === null) hoverTimeout.current = setTimeout(() => setHovered(null), 160)
    else setHovered(slot)
  }, [])

  useEffect(() => () => clearTimeout(hoverTimeout.current), [])
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const change = () => setReducedMotion(media.matches)
    media.addEventListener('change', change)
    return () => media.removeEventListener('change', change)
  }, [])
  useEffect(() => {
    const keydown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement
      if (event.defaultPrevented || target.closest('input, textarea, select, .dialkit-root, .dialkit-version-overlay, [contenteditable="true"]') || overlay !== null) return
      if (event.key === 'Escape') goHome()
      if (selected !== null && (event.key === 'ArrowRight' || event.key === 'ArrowLeft')) {
        event.preventDefault()
        select((selected + (event.key === 'ArrowRight' ? 1 : SLOT_COUNT - 1)) % SLOT_COUNT)
      }
    }
    window.addEventListener('keydown', keydown)
    return () => window.removeEventListener('keydown', keydown)
  }, [goHome, overlay, select, selected])
  useEffect(() => {
    const element = dialog.current
    if (overlay !== null && element && !element.open) element.showModal()
    else if (element?.open) element.close()
  }, [overlay])

  const style = {
    '--grain-opacity': s.Interface.grain,
    '--vignette-opacity': s.Interface.vignette,
    '--label-scale': s.Interface.labelSize,
    '--accent': project?.color ?? '#de4f36',
  } as CSSProperties

  return <main className={`portfolio ${selected !== null ? 'is-focused' : ''} ${hovered !== null ? 'is-hovering' : ''} ${dragging ? 'is-dragging' : ''}`} style={style}>
    <div className="scene" aria-label="Interactive 3D project archive. Select a card to explore; drag a selected card to rotate it." onPointerLeave={() => onHover(null)}>
      <SceneBoundary onError={onError}>
        <Suspense fallback={null}>
          <Gallery settings={s} selected={selected} hovered={hovered} reducedMotion={reducedMotion} paused={overlay !== null} onSelect={select} onHover={onHover} onReady={onReady} onDragging={setDragging} />
        </Suspense>
      </SceneBoundary>
    </div>
    <div className="atmosphere" aria-hidden="true" />
    <div className="grain" aria-hidden="true" />

    <header className="header">
      <button className="wordmark" onClick={goHome} aria-label="REV 000, return to home">REV <span>000</span><i /></button>
      <nav aria-label="Main navigation">
        <button onClick={() => setOverlay('about')}>About <span>↗</span></button>
        <button onClick={() => setOverlay('archive')}>Archive <span className="archive-count">{PROJECT_COUNT}</span></button>
      </nav>
    </header>

    <div className={`loading ${ready ? 'is-ready' : ''}`} aria-live="polite"><span className="loading-indicator" />LOADING MEMORIES</div>
    {failed && <div className="fallback-message"><p>The 3D view couldn’t load on this device.</p><button onClick={() => setOverlay('archive')}>Explore the archive <Arrow /></button></div>}

    <section className="home-caption" aria-hidden={selected !== null}>
      <h1>Small objects.<br />Bigger ideas.</h1>
    </section>

    {project && selected !== null && <>
      <button ref={backButton} className="back-button" onClick={goHome}><Arrow direction="left" /> Back to collection <kbd>ESC</kbd></button>
      <div className="rotation-hint"><span>↔</span> DRAG TO TURN · TAKE A CLOSER LOOK</div>
      <section className="project-info" key={selected} aria-live="polite">
        <div className="project-meta"><span className="status-dot" />{project.discipline}<span>/</span>{project.year}</div>
        <h1>{project.id}</h1>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <button className="notes-button" onClick={() => setOverlay('notes')}>PROJECT NOTES <Arrow direction="down" /></button>
      </section>
      <div className="project-navigation">
        <button onClick={() => select((selected + SLOT_COUNT - 1) % SLOT_COUNT)} aria-label="Previous project"><Arrow direction="left" /></button>
        <span>{String(selected % projects.length + 1).padStart(2, '0')} <i>/</i> {PROJECT_COUNT}</span>
        <button onClick={() => select((selected + 1) % SLOT_COUNT)} aria-label="Next project"><Arrow /></button>
      </div>
    </>}

    <footer className="footer">
      <div className="collection-label"><span className="eyebrow">SELECTED WORK</span><span className="date-range">2024 — 2026</span></div>
      <button className="pause-button" disabled={reducedMotion} title={reducedMotion ? 'Automatic motion is disabled by your system preference' : undefined} onClick={() => dial.setValue('Row.paused', !s.Row.paused)} aria-label={s.Row.paused ? 'Resume card motion' : 'Pause card motion'} aria-pressed={s.Row.paused}><span>{s.Row.paused || reducedMotion ? '▶' : 'Ⅱ'}</span> {s.Row.paused || reducedMotion ? 'STILL LIFE' : 'IN MOTION'}</button>
    </footer>

    <dialog ref={dialog} onCancel={() => setOverlay(null)} onClose={() => setOverlay(null)} onClick={event => { if (event.target === event.currentTarget) setOverlay(null) }}>
      <div className="dialog-content">
        <div className="dialog-top"><span className="eyebrow">REV 000 / {overlay === 'archive' ? 'INDEX' : overlay === 'notes' ? 'PROJECT NOTES' : 'ABOUT'}</span><button className="close-button" aria-label="Close dialog" onClick={() => setOverlay(null)}>×</button></div>
        {overlay === 'archive' ? <>
          <h2 className="dialog-title">The collection<span>{PROJECT_COUNT}</span></h2>
          <p className="dialog-intro">A place for finished things and open questions.</p>
          <div className="archive-list">{projects.map((p, i) => <button key={p.id} onClick={() => select(i)}><span className="archive-number">{String(i + 1).padStart(2, '0')}</span><span className="archive-art" style={{ background: p.color }}>✳</span><span className="archive-name"><strong>{p.id}</strong><span>{p.discipline}</span></span><span className="archive-year">{p.year}</span><Arrow /></button>)}</div>
          <p className="sample-note">SAMPLE PROJECTS · READY FOR YOUR OWN WORK</p>
        </> : overlay === 'notes' && project ? <>
          <span className="eyebrow" style={{ color: project.color }}>{project.id} / {project.year}</span>
          <h2 className="dialog-title">{project.title}</h2>
          <p className="about-lead">{project.description}</p><p className="about-copy">{project.note}</p>
          <div className="project-facts"><div><span>DISCIPLINE</span>{project.discipline}</div><div><span>STATUS</span>PLACEHOLDER / IN PROGRESS</div></div>
        </> : <>
          <h2 className="dialog-title">Always a work<br />in progress.</h2>
          <p className="about-lead">An ongoing archive of ideas, experiments, and things made along the way.</p>
          <p className="about-copy">Every card holds a project. Hover to make a little space, pick one up, and turn it around. This collection is built to grow, one memory at a time.</p>
          <div className="about-bottom"><span className="status-dot" /><span>REVISION 000<br />THE FIRST OF MANY.</span><span>DESIGN IS<br />IN THE DETAILS.</span></div>
        </>}
      </div>
    </dialog>

    <DialRoot position="bottom-right" theme="dark" defaultOpen={false} productionEnabled versions="menu" />
  </main>
}
