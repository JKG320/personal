import { CanvasTexture, RepeatWrapping, SRGBColorSpace } from 'three'
import type { Project } from '../data/projects'

function random(seed: number) {
  let value = seed
  return () => {
    value = (value * 16807) % 2147483647
    return (value - 1) / 2147483646
  }
}

function canvas(width: number, height: number) {
  const element = document.createElement('canvas')
  element.width = width
  element.height = height
  const context = element.getContext('2d')!
  return { element, context }
}

function grain(context: CanvasRenderingContext2D, width: number, height: number, amount: number, seed: number) {
  const rand = random(seed)
  const data = context.getImageData(0, 0, width, height)
  for (let pixel = 0; pixel < data.data.length; pixel += 4) {
    const noise = (rand() - 0.5) * amount
    data.data[pixel] += noise
    data.data[pixel + 1] += noise
    data.data[pixel + 2] += noise
  }
  context.putImageData(data, 0, 0)
}

/** Small deterministic texture: no assets, network requests, or per-frame work. */
export function createShellTexture() {
  const { element, context } = canvas(256, 256)
  context.fillStyle = '#929292'
  context.fillRect(0, 0, 256, 256)
  grain(context, 256, 256, 46, 41)
  const rand = random(72)
  for (let index = 0; index < 28; index++) {
    const x = rand() * 256
    const y = rand() * 256
    context.strokeStyle = `rgba(255,255,255,${rand() * 0.14})`
    context.lineWidth = 0.3 + rand() * 0.5
    context.beginPath()
    context.moveTo(x, y)
    context.lineTo(x + rand() * 42, y + rand() * 18)
    context.stroke()
  }
  const texture = new CanvasTexture(element)
  texture.wrapS = texture.wrapT = RepeatWrapping
  texture.repeat.set(3, 4)
  return texture
}

// Rounded strokes keep the tape lettering readable without loading a font.
const markerGlyphs: Record<string, number[][]> = {
  A: [[0, 11, 4, 0, 9, 11], [2, 7, 7, 7.2]],
  '0': [[4, 0, 1, 1.5, 0.5, 7.4, 2.1, 11, 6.5, 10.8, 8.1, 6.9, 7.4, 1.9, 4, 0]],
  '1': [[2, 2.8, 5.3, 0, 5.1, 11], [2.8, 11, 7.8, 11]],
  '2': [[0.8, 2.7, 2.5, 0.8, 5.7, 0.2, 7.8, 2.4, 6.6, 5.6, 0.8, 11, 8.4, 11]],
  '3': [[0.9, 1.3, 4.5, 0.2, 7.7, 1.6, 6.9, 4.3, 3.2, 5.3, 6.8, 5.9, 8.2, 8.6, 6.3, 11, 1.1, 10.5]],
  '4': [[5.3, 0.3, 0.3, 7.5, 8.9, 7.6], [6.8, 2.4, 6.6, 11]],
  '5': [[7.8, 0.7, 2.2, 0.5, 1, 5.1, 5.8, 4.7, 8.1, 7.1, 7, 10.2, 3.4, 11, 0.8, 9.6]],
  '6': [[7, 0.4, 3.6, 0.9, 1, 4.7, 0.8, 8.7, 3.1, 11, 6.8, 10.7, 8.1, 7.8, 6.2, 5.3, 1, 6.2]],
  '7': [[0.8, 0.6, 8.3, 0.6, 5.5, 5, 3.3, 11], [2.5, 5.6, 7.1, 5.5]],
  '8': [[4.7, 5.3, 1.1, 2.6, 2.2, 0.6, 5.8, 0.4, 7.6, 2, 6.9, 4, 4.7, 5.3, 1.1, 7.7, 1.5, 10.1, 4.4, 11, 7.8, 10, 8.2, 7.8, 4.7, 5.3]],
  '9': [[7.4, 5.1, 4.3, 5.9, 1.2, 4.3, 1, 2.1, 2.8, 0.4, 6.2, 0.5, 8, 3.2, 7.5, 7.7, 5.5, 10.5, 2.8, 11]],
}

function drawCode(ctx: CanvasRenderingContext2D, code: string, rand: () => number) {
  const glyphs = [...code].map(character => markerGlyphs[character])
  if (glyphs.some(glyph => !glyph)) {
    ctx.fillStyle = '#25231e'
    ctx.font = 'italic 94px cursive'
    ctx.textAlign = 'center'
    ctx.fillText(code, 0, 30, 420)
    return
  }
  const size = Math.min(8, 43 / glyphs.length)
  ctx.strokeStyle = '#25231e'
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  glyphs.forEach((glyph, index) => {
    ctx.save()
    ctx.translate((index - (glyphs.length - 1) / 2) * size * 11.7 - size * 4.4, -size * 5.5 + (rand() - 0.5) * 7)
    ctx.rotate((rand() - 0.5) * 0.11)
    ctx.scale(size, size)
    ctx.lineWidth = 0.95 + rand() * 0.3
    for (const stroke of glyph) {
      ctx.beginPath()
      ctx.moveTo(stroke[0], stroke[1])
      for (let i = 2; i < stroke.length; i += 2) ctx.lineTo(stroke[i], stroke[i + 1])
      ctx.stroke()
    }
    ctx.restore()
  })
}

export function createProjectTexture(project: Project, code: string, artworkCoverage: number) {
  const { element, context: ctx } = canvas(512, 768)
  const rand = random(project.art.charCodeAt(0) * 183)
  const ink = '#161b1a'
  const cream = '#e5dfc8'
  const artworkHeight = 768 * artworkCoverage
  const tapeHeight = 768 - artworkHeight
  ctx.fillStyle = project.color
  ctx.fillRect(0, 0, 512, 768)

  ctx.save()
  ctx.scale(1, artworkHeight / 550)
  ctx.beginPath()
  ctx.rect(0, 0, 512, 550)
  ctx.clip()
  ctx.translate(256, 275)

  if (project.art === 'starburst') {
    ctx.fillStyle = ink
    ctx.beginPath()
    for (let index = 0; index < 32; index++) {
      const angle = index * Math.PI / 16 - Math.PI / 2
      const radius = index % 2 === 0 ? 200 : 91
      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius
      if (index === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.closePath()
    ctx.fill()
    ctx.strokeStyle = 'rgba(229,223,200,0.6)'
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.arc(0, 0, 230, Math.PI * 0.8, Math.PI * 1.78)
    ctx.stroke()
    ctx.fillStyle = cream
    ctx.beginPath()
    ctx.arc(170, -151, 5, 0, Math.PI * 2)
    ctx.fill()
  } else if (project.art === 'orbit' || project.art === 'grid') {
    ctx.strokeStyle = 'rgba(229,236,226,.56)'
    ctx.lineWidth = 1.4
    for (let index = -6; index <= 6; index++) {
      ctx.beginPath()
      ctx.moveTo(-300, index * 52)
      ctx.lineTo(300, index * 52)
      ctx.moveTo(index * 52, -300)
      ctx.lineTo(index * 52, 300)
      ctx.stroke()
    }
    ctx.fillStyle = project.art === 'orbit' ? '#192a48' : '#442d4b'
    ctx.beginPath()
    ctx.arc(0, 15, 183, 0, Math.PI * 2)
    ctx.fill()
    ctx.save()
    ctx.clip()
    ctx.strokeStyle = cream
    ctx.lineWidth = 1.6
    for (let index = 1; index <= 6; index++) {
      ctx.beginPath()
      ctx.ellipse(0, 15, index * 29, 183, 0, 0, Math.PI * 2)
      ctx.stroke()
      ctx.beginPath()
      ctx.ellipse(0, 15, 183, index * 29, 0, 0, Math.PI * 2)
      ctx.stroke()
    }
    ctx.restore()
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.arc(0, 15, 183, 0, Math.PI * 2)
    ctx.stroke()
    ctx.save()
    ctx.rotate(-0.55)
    ctx.strokeStyle = cream
    ctx.lineWidth = 2.5
    ctx.beginPath()
    ctx.ellipse(0, 15, 239, 80, 0, 0, Math.PI * 2)
    ctx.stroke()
    ctx.restore()
  } else if (project.art === 'wave') {
    ctx.strokeStyle = ink
    ctx.lineWidth = 3
    for (let line = -10; line <= 12; line++) {
      ctx.beginPath()
      for (let x = -300; x <= 300; x += 4) {
        const y = line * 22 + Math.sin(x / 90 + line * 0.26) * 84 + Math.cos(x / 48) * 24
        if (x === -300) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()
    }
    ctx.strokeStyle = cream
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(0, 0, 180, 0, Math.PI * 2)
    ctx.stroke()
  } else if (project.art === 'bloom') {
    ctx.strokeStyle = ink
    ctx.lineWidth = 2.7
    for (let petal = 0; petal < 18; petal++) {
      ctx.save()
      ctx.rotate(petal * Math.PI / 9)
      ctx.beginPath()
      ctx.ellipse(0, -83, 51, 122, 0, 0, Math.PI * 2)
      ctx.stroke()
      ctx.restore()
    }
    ctx.fillStyle = ink
    ctx.beginPath()
    ctx.arc(0, 0, 21, 0, Math.PI * 2)
    ctx.fill()
  } else {
    ctx.fillStyle = ink
    for (let line = -9; line <= 9; line++) {
      const height = 36 + Math.pow(Math.cos(line * 0.41), 2) * 278
      ctx.fillRect(line * 23 - 5, -height / 2, 11, height)
    }
    ctx.strokeStyle = ink
    ctx.lineWidth = 1
    ctx.strokeRect(-228, -204, 456, 408)
  }
  ctx.restore()

  ctx.fillStyle = cream
  ctx.save()
  ctx.scale(1, artworkHeight / 550)
  ctx.font = '15px monospace'
  ctx.letterSpacing = '2px'
  ctx.fillText('REV 000 / FIELD NOTES', 29, 37)
  ctx.font = '13px monospace'
  ctx.fillText(project.discipline, 29, 521)
  ctx.letterSpacing = '0px'
  ctx.restore()

  ctx.fillStyle = '#31312c'
  ctx.fillRect(0, artworkHeight, 512, tapeHeight)

  // A slightly torn strip of paper is printed into the label, with its own grain.
  ctx.save()
  ctx.translate(256, artworkHeight + tapeHeight * 0.5)
  ctx.rotate(-0.021)
  ctx.scale(1, tapeHeight / 220)
  ctx.shadowColor = 'rgba(0,0,0,.36)'
  ctx.shadowBlur = 8
  ctx.shadowOffsetY = 5
  const tape = ctx.createLinearGradient(-245, -95, 245, 95)
  tape.addColorStop(0, '#c9b694')
  tape.addColorStop(0.45, '#ded0b2')
  tape.addColorStop(1, '#c4af8f')
  ctx.fillStyle = tape
  ctx.beginPath()
  ctx.moveTo(-249, -97)
  for (let x = -249; x <= 249; x += 9) ctx.lineTo(x, -100 + rand() * 13)
  for (let y = -98; y <= 100; y += 9) ctx.lineTo(249 - rand() * 13, y)
  for (let x = 249; x >= -249; x -= 9) ctx.lineTo(x, 99 - rand() * 12)
  for (let y = 99; y >= -100; y -= 9) ctx.lineTo(-249 + rand() * 13, y)
  ctx.closePath()
  ctx.fill()
  ctx.shadowColor = 'transparent'
  ctx.clip()
  for (let i = 0; i < 120; i++) {
    const x = (rand() - 0.5) * 512
    const y = (rand() - 0.5) * 220
    ctx.strokeStyle = rand() < 0.55 ? 'rgba(255,247,226,.19)' : 'rgba(85,69,49,.13)'
    ctx.lineWidth = 0.4 + rand()
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x + rand() * 35 - 12, y + rand() * 7 - 3)
    ctx.stroke()
  }
  drawCode(ctx, code, rand)
  ctx.restore()

  ctx.strokeStyle = 'rgba(250,244,225,.13)'
  ctx.lineWidth = 0.8
  for (let scratch = 0; scratch < 35; scratch++) {
    const x = rand() * 512
    const y = rand() * 768
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x + rand() * 45, y + rand() * 50)
    ctx.stroke()
  }
  grain(ctx, 512, 768, 22, 719)
  const texture = new CanvasTexture(element)
  texture.colorSpace = SRGBColorSpace
  texture.anisotropy = 4
  return texture
}

export function createBackTexture(project: Project, code: string) {
  const { element, context: ctx } = canvas(512, 512)
  ctx.fillStyle = '#222724'
  ctx.fillRect(0, 0, 512, 512)
  ctx.fillStyle = '#8e9590'
  ctx.font = 'bold 42px Arial, sans-serif'
  ctx.fillText('REV 000', 39, 92)
  ctx.font = '18px monospace'
  ctx.fillText('MEMORY ARCHIVE', 39, 130)
  ctx.fillText(code + ' / ' + project.year, 39, 170)
  ctx.fillStyle = '#717971'
  ctx.font = '13px monospace'
  ctx.fillText('A SMALL COLLECTION OF IDEAS.', 39, 248)
  ctx.fillText('HANDLE WITH CURIOSITY.', 39, 272)
  ctx.fillText('MADE OF THOUGHTS & POSSIBILITIES', 39, 298)
  const rand = random(411)
  for (let x = 40; x < 300; x += 4) {
    if (rand() > 0.35) ctx.fillRect(x, 348, rand() > 0.5 ? 2 : 1, 56)
  }
  ctx.font = '12px monospace'
  ctx.fillText('000 001 026 / ' + code, 39, 432)
  grain(ctx, 512, 512, 12, 721)
  const texture = new CanvasTexture(element)
  texture.colorSpace = SRGBColorSpace
  return texture
}
