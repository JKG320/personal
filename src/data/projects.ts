export type Artwork = 'starburst' | 'orbit' | 'wave' | 'grid' | 'bloom' | 'signal'

export interface Project {
  id: string
  title: string
  discipline: string
  year: string
  color: string
  art: Artwork
  description: string
  note: string
}

// Replace these six sample records with your own projects. The scene and archive
// both read from this single list; no scene code needs to change.
export const projects: Project[] = [
  { id: 'PX–01', title: 'A little out of the ordinary.', discipline: 'EXPERIMENTAL DESIGN', year: '2026', color: '#de4f36', art: 'starburst', description: 'An exploration of familiar things, seen a little differently. A space for unexpected interactions, playful details, and ideas that don’t quite fit in a folder.', note: 'This is a placeholder project. Add the story, process, and details that make this one yours.' },
  { id: 'A–002', title: 'Somewhere between worlds.', discipline: 'DIGITAL EXPERIENCE', year: '2026', color: '#4969a0', art: 'orbit', description: 'A study in space, rhythm, and the feeling of discovering something new. Bringing a small imaginary world to life, one considered interaction at a time.', note: 'Use this space to share the initial question, your approach, and what you discovered along the way.' },
  { id: 'A–003', title: 'A softer kind of signal.', discipline: 'VISUAL IDENTITY', year: '2025', color: '#51917b', art: 'wave', description: 'Finding a visual language in the overlap between nature and technology. An evolving system of shapes, textures, and moments of quiet clarity.', note: 'Replace this copy with your project overview, collaborators, and a few details about the finished work.' },
  { id: 'A–004', title: 'Room for possibility.', discipline: 'SPATIAL EXPLORATION', year: '2025', color: '#9c668f', art: 'grid', description: 'An open-ended experiment in the way objects occupy space. Building a sense of place through simple forms and the relationships between them.', note: 'Tell the story behind this project here. What did you set out to make, and where did the process take you?' },
  { id: 'A–005', title: 'Ideas in full bloom.', discipline: 'CREATIVE CODING', year: '2025', color: '#c99948', art: 'bloom', description: 'A collection of small generative experiments. Rules become patterns, patterns become surprises, and a few lines of code become something worth keeping.', note: 'This is sample content, ready for your images, research, and the little details that matter.' },
  { id: 'A–006', title: 'A frequency of its own.', discipline: 'INTERACTION DESIGN', year: '2024', color: '#b5b6a7', art: 'signal', description: 'Turning an invisible rhythm into something tangible. An investigation of feedback, movement, and the small moments that make an interface feel alive.', note: 'Add your project narrative here, from early experiments to the final outcome.' },
]
