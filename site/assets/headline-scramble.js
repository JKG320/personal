import {controls} from './twombly-controls.js';
const tuning=controls('Headline scramble',{
  'Duration (seconds)':[.28,.1,.8,.01],
  'Cursor radius':[12,2,40,1],
  'Glyph changes per second':[24,8,40,1],
});
const GLYPHS='!<>-_\\/[]{}=+*^?#%01';
export function mountHeadlineScramble(heading){
  if(!heading)return()=>{};
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const originals=[...heading.childNodes].filter(node=>node.nodeType===Node.TEXT_NODE&&node.textContent.trim());
  const lines=[],letters=[];let frame=0,destroyed=false;
  for(const node of originals){
    const line=document.createElement('span');line.className='ascii-line';
    const original=document.createElement('span');original.className='ascii-original';
    const layer=document.createElement('span');layer.className='ascii-glyphs';layer.setAttribute('aria-hidden','true');
    node.replaceWith(line);original.append(node);line.append(original,layer);
    const record={line,node,original,layer,letters:[]};lines.push(record);
    [...node.textContent].forEach((char,index)=>{
      const glyph=document.createElement('span');glyph.className='ascii-glyph';glyph.textContent=char;layer.append(glyph);
      const letter={char,index,glyph,line:record,start:-Infinity,end:-Infinity,next:0,restUntil:0,width:0};
      record.letters.push(letter);letters.push(letter);
    });
  }
  const measure=()=>{
    for(const record of lines){
      const bounds=record.line.getBoundingClientRect();
      for(const letter of record.letters){
        const range=document.createRange();range.setStart(record.node,letter.index);range.setEnd(record.node,letter.index+1);
        const rect=range.getBoundingClientRect();letter.width=rect.width;
        letter.glyph.style.left=(rect.left-bounds.left)+'px';letter.glyph.style.width=rect.width+'px';
      }
    }
  };
  measure();const resize=new ResizeObserver(measure);resize.observe(heading);
  document.fonts?.ready.then(()=>{if(!destroyed)measure();});
  function tick(now){
    frame=0;let running=false;
    const fps=tuning.get()['Glyph changes per second'];
    for(const record of lines){
      let active=false;
      for(const letter of record.letters){
        if(now<letter.start){if(Number.isFinite(letter.start)){running=true;active=true;}continue;}
        if(now<letter.end){
          active=true;running=true;
          if(now>=letter.next){
            const pool=letter.width<9?'!|/.:':GLYPHS;
            letter.glyph.textContent=pool[Math.floor(Math.random()*pool.length)];
            letter.next=now+1000/fps;
          }
        }else{letter.glyph.textContent=letter.char;letter.start=-Infinity;}
      }
      record.line.classList.toggle('is-scrambling',active);
    }
    if(running&&!document.hidden)frame=requestAnimationFrame(tick);
  }
  function trigger(list){
    if(reduced.matches||heading.closest('.is-focused'))return;
    const now=performance.now(),duration=tuning.get()['Duration (seconds)']*1000;
    list.forEach(letter=>{
      if(!letter.char.trim()||now<letter.end||now<letter.restUntil)return;
      letter.start=now;letter.end=letter.start+duration;letter.next=0;letter.restUntil=letter.end+160;
    });
    if(!frame)frame=requestAnimationFrame(tick);
  }
  const enter=event=>{measure();move(event);};
  const move=event=>{
    const radius=tuning.get()['Cursor radius'];
    const near=letters.filter(letter=>{
      const bounds=letter.glyph.getBoundingClientRect();
      const dx=Math.max(bounds.left-event.clientX,0,event.clientX-bounds.right);
      const dy=Math.max(bounds.top-event.clientY,0,event.clientY-bounds.bottom);
      return Math.hypot(dx,dy)<radius;
    });
    trigger(near);
  };
  const reset=()=>{
    cancelAnimationFrame(frame);frame=0;
    for(const record of lines){record.line.classList.remove('is-scrambling');for(const letter of record.letters){letter.glyph.textContent=letter.char;letter.start=letter.end=-Infinity;}}
  };
  const visibility=()=>{if(document.hidden)reset();};
  heading.addEventListener('pointerenter',enter);heading.addEventListener('pointermove',move);heading.addEventListener('pointerdown',enter);
  document.addEventListener('visibilitychange',visibility);reduced.addEventListener('change',reset);
  return()=>{destroyed=true;reset();resize.disconnect();heading.removeEventListener('pointerenter',enter);heading.removeEventListener('pointermove',move);heading.removeEventListener('pointerdown',enter);document.removeEventListener('visibilitychange',visibility);reduced.removeEventListener('change',reset);for(const record of lines)record.line.replaceWith(record.node);};
}
