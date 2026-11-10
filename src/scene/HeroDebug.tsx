import GUI from 'lil-gui'
import { useEffect, useRef } from 'react'
import type { HeroConfig } from '../config'

interface HeroDebugProps {
  config: HeroConfig
  onChange: (config: HeroConfig) => void
}

export default function HeroDebug({ config, onChange }: HeroDebugProps) {
  const host = useRef<HTMLDivElement>(null)
  const gui = useRef<GUI | null>(null)
  const values = useRef({ ...config })
  const handleChange = useRef(onChange)

  useEffect(() => {
    handleChange.current = onChange
    Object.assign(values.current, config)
    gui.current?.controllersRecursive().forEach(controller => controller.updateDisplay())
  }, [config, onChange])

  useEffect(() => {
    if (!host.current) return
    const params = values.current
    const panel = new GUI({ container: host.current, title: 'Hero scene', width: 248 })
    gui.current = panel

    panel.add(params, 'cardCount', 1, 24, 1).name('Card count')
    panel.add(params, 'cardSpacing', 0.25, 1.5, 0.01).name('Spacing × width')
    panel.add(params, 'cardYaw', -45, 90, 1).name('Card yaw (°)')
    panel.add(params, 'camElevation', 5, 70, 1).name('Elevation (°)')
    panel.add(params, 'camAzimuth', 0, 90, 1).name('Azimuth (°)')
    panel.add(params, 'fov', 12, 55, 1).name('FOV (°)')
    panel.addColor(params, 'gradientCenter').name('Gradient center')
    panel.addColor(params, 'gradientEdge').name('Gradient edge')
    panel.addColor(params, 'gradientCorner').name('Gradient corner')
    panel.onChange(() => handleChange.current({ ...params }))
    panel.add({ logConfig: () => console.log(JSON.stringify(params, null, 2)) }, 'logConfig').name('Log CONFIG JSON')

    return () => {
      gui.current = null
      panel.destroy()
    }
  }, [])

  return <div ref={host} style={{ position: 'absolute', zIndex: 30, right: 12, bottom: 12, maxHeight: 'calc(100% - 24px)', overflowY: 'auto' }} />
}
