import { Component, Suspense, lazy, useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { CONFIG, cardCode, type HeroConfig } from './config'
import { projects } from './data/projects'

const Gallery = lazy(() => import('./scene/Gallery').then(module => ({ default: module.Gallery })))
const HeroDebug = lazy(() => import('./scene/HeroDebug'))

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

type Screen = 'hero' | 'project' | 'archive' | 'about' | 'notes'

export default function App({ initialScreen = 'hero' }: { initialScreen?: Screen } = {}) {
  const [config, setConfig] = useState<HeroConfig>(CONFIG)
  const [debug] = useState(() => new URLSearchParams(window.location.search).has('debug'))
  const [selected, setSelected] = useState<number | null>(initialScreen === 'project' || initialScreen === 'notes' ? 1 : null)
  const [hovered, setHovered] = useState<number | null>(null)
  const [overlay, setOverlay] = useState<Overlay>(initialScreen === 'archive' || initialScreen === 'about' || initialScreen === 'notes' ? initialScreen : null)
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)
  const [dragging, setDragging] = useState(false)
  const dialog = useRef<HTMLDialogElement>(null)
  const backButton = useRef<HTMLButtonElement>(null)
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const slotCount = config.cardCount
  const projectCount = String(slotCount).padStart(2, '0')
  const updateConfig = useCallback((next: HeroConfig) => {
    setConfig(next)
    setSelected(slot => slot !== null && slot >= next.cardCount ? null : slot)
  }, [])
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
    const keydown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement
      if (event.defaultPrevented || target.closest('input, textarea, select, .lil-gui, [contenteditable="true"]') || overlay !== null) return
      if (event.key === 'Escape') goHome()
      if (selected !== null && (event.key === 'ArrowRight' || event.key === 'ArrowLeft')) {
        event.preventDefault()
        select((selected + (event.key === 'ArrowRight' ? 1 : slotCount - 1)) % slotCount)
      }
    }
    window.addEventListener('keydown', keydown)
    return () => window.removeEventListener('keydown', keydown)
  }, [goHome, overlay, select, selected, slotCount])
  useEffect(() => {
    const element = dialog.current
    if (overlay !== null && element && !element.open) element.showModal()
    else if (element?.open) element.close()
  }, [overlay])

  const style = {
    '--grain-opacity': config.grainOpacity,
    '--header-color': config.headerColor,
    '--gradient-center': config.gradientCenter,
    '--gradient-edge': config.gradientEdge,
    '--gradient-corner': config.gradientCorner,
    '--accent': project?.color ?? '#de4f36',
  } as CSSProperties

  return <main className={`portfolio ${selected !== null ? 'is-focused' : ''} ${hovered !== null ? 'is-hovering' : ''} ${dragging ? 'is-dragging' : ''}`} style={style}>
    <div className="scene" aria-label="Interactive 3D project archive. Select a card to explore; drag a selected card to rotate it." onPointerLeave={() => onHover(null)}>
      <SceneBoundary onError={onError}>
        <Suspense fallback={null}>
          <Gallery config={config} selected={selected} onSelect={select} onHover={onHover} onReady={onReady} onDragging={setDragging} />
        </Suspense>
      </SceneBoundary>
    </div>
    <div className="grain" aria-hidden="true" />

    <header className="header">
      <button className="wordmark" onClick={goHome} aria-label="REV 000, return to home">REV <span>000</span><i /></button>
      <nav aria-label="Main navigation">
        <button onClick={() => setOverlay('about')}>About <span>↗</span></button>
        <button onClick={() => setOverlay('archive')}>Archive <span className="archive-count">{projectCount}</span></button>
      </nav>
    </header>

    <div className={`loading ${ready ? 'is-ready' : ''}`} aria-live="polite"><span className="loading-indicator" />LOADING MEMORIES</div>
    {failed && <div className="fallback-message"><p>The 3D view couldn’t load on this device.</p><button onClick={() => setOverlay('archive')}>Explore the archive <Arrow /></button></div>}

    <section className="home-caption" aria-hidden={selected !== null}>
      <h1>Small objects.<br />Bigger ideas.</h1>
    </section>

    {project && selected !== null && <>
      <button ref={backButton} className="back-button" onClick={goHome}><Arrow direction="left" /> Back to collection <kbd>ESC</kbd></button>
      <div className="project-shadow" aria-hidden="true" />
      <section className="project-info" key={selected} aria-live="polite">
        <h1>{cardCode(selected)}</h1>
        <p>{project.description}</p>
        <button className="project-chevron" onClick={() => setOverlay('notes')} aria-label="Read more about this project">
          <svg viewBox="0 0 32 20" fill="none" aria-hidden="true"><path d="m2 3 14 14L30 3" stroke="currentColor" strokeWidth="1.25" /></svg>
        </button>
      </section>
    </>}

    <dialog ref={dialog} onCancel={() => setOverlay(null)} onClose={() => setOverlay(null)} onClick={event => { if (event.target === event.currentTarget) setOverlay(null) }}>
      <div className="dialog-content">
        <div className="dialog-top"><span className="eyebrow">REV 000 / {overlay === 'archive' ? 'INDEX' : overlay === 'notes' ? 'PROJECT NOTES' : 'ABOUT'}</span><button className="close-button" aria-label="Close dialog" onClick={() => setOverlay(null)}>×</button></div>
        {overlay === 'archive' ? <>
          <h2 className="dialog-title">The collection<span>{projectCount}</span></h2>
          <p className="dialog-intro">A place for finished things and open questions.</p>
          <div className="archive-list">{Array.from({ length: slotCount }, (_, i) => { const p = projects[i % projects.length]; return <button key={i} onClick={() => select(i)}><span className="archive-number">{String(i + 1).padStart(2, '0')}</span><span className="archive-art" style={{ background: p.color }}>✳</span><span className="archive-name"><strong>{cardCode(i)}</strong><span>{p.discipline}</span></span><span className="archive-year">{p.year}</span><Arrow /></button> })}</div>
          <p className="sample-note">SAMPLE PROJECTS · READY FOR YOUR OWN WORK</p>
        </> : overlay === 'notes' && project ? <>
          <span className="eyebrow" style={{ color: project.color }}>{cardCode(selected ?? 0)} / {project.year}</span>
          <h2 className="dialog-title">{project.title}</h2>
          <p className="about-lead">{project.description}</p><p className="about-copy">{project.note}</p>
          <div className="project-facts"><div><span>DISCIPLINE</span>{project.discipline}</div><div><span>STATUS</span>PLACEHOLDER / IN PROGRESS</div></div>
        </> : <>
          <h2 className="dialog-title">Always a work<br />in progress.</h2>
          <p className="about-lead">An ongoing archive of ideas, experiments, and things made along the way.</p>
          <p className="about-copy">Every card holds a project. Pick one up and turn it around to explore. This collection is built to grow, one memory at a time.</p>
          <div className="about-bottom"><span className="status-dot" /><span>REVISION 000<br />THE FIRST OF MANY.</span><span>DESIGN IS<br />IN THE DETAILS.</span></div>
        </>}
      </div>
    </dialog>

    {debug && <Suspense fallback={null}><HeroDebug config={config} onChange={updateConfig} /></Suspense>}
  </main>
}
