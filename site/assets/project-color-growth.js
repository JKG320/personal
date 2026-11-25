import { controls } from './twombly-controls.js';
const schema={
  Motion: {'Scroll resistance': [640, 200, 1400, 10], 'Return threshold (pixels)': [12, 4, 80, 1], 'Weight / lag (seconds)': [0.32, 0.1, 0.9, 0.01], 'Section transition (seconds)': [1.65, 0.5, 2.5, 0.05], 'Content tint hold (seconds)': [2.5, 0, 10, 0.1], 'Content tint fade (seconds)': [2, 0.2, 6, 0.1]},
  Bloom: {'Height': [0.9, 0.3, 1.8, 0.01], 'Width': [1, 0.5, 1.8, 0.01], 'Strength': [1, 0, 1, 0.01], 'Soft edge': [45, 15, 80, 1]},
  Colors: {'Core': '#b494c8', 'Warm center': '#e99c96', 'Outer halo': '#e5c8f0'},
};
const tuning=controls('Color Growth',schema);
let bloomState={progress:0,...tuning.get()};
const listeners=new Set();
export const getColorBloom=()=>bloomState;
export const subscribeColorBloom=fn=>{listeners.add(fn);return()=>listeners.delete(fn);};
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
export function mountColorGrowth(root,story) {
  if(!story)return()=>{};
  const stage=root.querySelector('.portfolio-stage');
  const bloom=document.createElement('div');bloom.className='project-color-growth';bloom.setAttribute('aria-hidden','true');stage.append(bloom);
  let target=0,value=0,velocity=0,frame=0,last=0,transition=null,lockedUntil=0,lastTouch=0,autoAdvance=false,returning=false,lastScrollTop=root.scrollTop,lastInputAt=0,awaitingFreshUp=false,touchUsed=false,inContent=root.scrollTop>=story.offsetTop-1,returnIntent=0,boundaryTimer=0;
  const originalOverflow=root.style.overflowY;
  const lockNative=()=>{root.style.overflowY='hidden';};
  const unlockNative=()=>{root.style.overflowY=originalOverflow;};
  const releaseBoundary=()=>{
    clearTimeout(boundaryTimer);
    const wait=lockedUntil-performance.now();
    if(wait>0){boundaryTimer=setTimeout(releaseBoundary,wait+1);return;}
    if(!transition)unlockNative();
  };
  const reduced=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
  const settings=()=>tuning.get();
  let tintTimer=0,tintScheduled=false;
  const resetTint=()=>{clearTimeout(tintTimer);tintTimer=0;tintScheduled=false;root.classList.remove('is-story-tint-faded');};
  const fadeContentTint=()=>{
    if(tintScheduled)return;
    tintScheduled=true;
    tintTimer=setTimeout(()=>{root.classList.add('is-story-tint-faded');},settings().Motion['Content tint hold (seconds)']*1000);
  };
  const render=()=>{
    const {Bloom,Colors}=settings();
    const amount=clamp(root.scrollTop/Math.max(1,root.clientHeight));
    const fade=clamp((amount-.08)/.84),softFade=fade*fade*(3-2*fade);
    bloomState={progress:returning?0:value,Bloom:{...Bloom,Strength:Bloom.Strength*(1-softFade)},Colors};for(const fn of listeners)fn();
    bloom.style.setProperty('--growth',value.toFixed(4));
    bloom.style.setProperty('--bloom-width',Bloom.Width);bloom.style.setProperty('--bloom-height',Bloom.Height);
    bloom.style.setProperty('--bloom-strength',Bloom.Strength);bloom.style.setProperty('--bloom-soft-edge',Bloom['Soft edge']+'px');
    bloom.style.setProperty('--bloom-core',Colors.Core);bloom.style.setProperty('--bloom-warm',Colors['Warm center']);bloom.style.setProperty('--bloom-halo',Colors['Outer halo']);
    root.style.setProperty('--story-bloom',Colors['Outer halo']);
    root.style.setProperty('--story-tint-duration',(reduced()?0:settings().Motion['Content tint fade (seconds)'])+'s');
    root.style.setProperty('--story-bloom-strength',value.toFixed(4));
  };
  const start=()=>{if(!frame){last=performance.now();frame=requestAnimationFrame(tick);}};
  const scrollTo=(top)=>{
    // One section transition owns the scroll position until it completes.
    // Repeated wheel, swipe, key, or back-button input never restarts its easing.
    if(transition)return;
    const from=root.scrollTop,distance=Math.abs(top-from);
    const kind=top===0?'return-landing':from>top?'content-top':'forward';
    if(kind==='forward'){resetTint();awaitingFreshUp=false;}
    else{returning=true;autoAdvance=false;target=0;value=0;velocity=0;render();}
    const base=settings().Motion['Section transition (seconds)']*1000;
    const duration=reduced()?1:base*Math.min(1.9,Math.max(1,Math.sqrt(distance/Math.max(1,root.clientHeight))));
    clearTimeout(boundaryTimer);returnIntent=0;lockNative();
    transition={from,to:top,kind,start:performance.now(),duration};
    root.dataset.sectionTransition=kind;
    lockedUntil=Infinity;start();
  };
  function tick(now){
    frame=0;const dt=Math.min(.033,(now-last)/1000);last=now;
    const response=2/Math.max(.08,settings().Motion['Weight / lag (seconds)']);
    const delta=value-target,decay=Math.exp(-response*dt),temp=(velocity+response*delta)*dt;
    value=target+(delta+temp)*decay;velocity=(velocity-response*temp)*decay;
    if(Math.abs(value-target)+Math.abs(velocity)<.002){value=target;velocity=0;}
    render();
    if(transition){
      const p=clamp((now-transition.start)/transition.duration);const eased=p*p*p*(p*(p*6-15)+10);
      root.scrollTop=transition.from+(transition.to-transition.from)*eased;
      if(p===1){
        const kind=transition.kind,destination=transition.to;
        // Commit the destination and section state before native scrolling is restored.
        root.scrollTop=destination;lastScrollTop=destination;
        inContent=kind!=='return-landing';
        transition=null;delete root.dataset.sectionTransition;unlockNative();
        // The content-top stop is a real pause, never a queued second animation.
        awaitingFreshUp=kind==='content-top';
        const quiet=awaitingFreshUp?400:220;
        lockedUntil=Math.max(now+quiet,lastInputAt+quiet);
        if(kind==='forward')fadeContentTint();else{target=0;autoAdvance=false;}
      }
    }else if(autoAdvance&&target===1&&value>.97){autoAdvance=false;scrollTo(story.offsetTop);}
    if(transition||value!==target||velocity!==0)frame=requestAnimationFrame(tick);
  }
  const stopAtContentTop=(source)=>{
    inContent=true;returnIntent=0;lockNative();
    root.scrollTop=story.offsetTop;lastScrollTop=root.scrollTop;
    awaitingFreshUp=true;lockedUntil=performance.now()+120;
    clearTimeout(boundaryTimer);boundaryTimer=setTimeout(releaseBoundary,121);
    if(source==='touch')touchUsed=true;
    returning=true;target=0;value=0;velocity=0;autoAdvance=false;render();
  };
  const input=(delta,source="wheel")=>{
    const now=performance.now(),previousInputAt=lastInputAt;lastInputAt=now;
    if(transition)return true;
    const contentTop=story.offsetTop;
    if(inContent&&root.scrollTop<contentTop-1){
      // Never let stray momentum leave the page parked between the two sections.
      stopAtContentTop(source);return true;
    }
    if(root.scrollTop>contentTop+1){
      // Let the browser scroll the article normally. Only guard its upper boundary.
      if(delta<0&&root.scrollTop+delta<=contentTop){stopAtContentTop(source);return true;}
      awaitingFreshUp=false;
      return false;
    }
    if(root.scrollTop>=contentTop-1){
      if(delta>=0){awaitingFreshUp=false;returnIntent=0;clearTimeout(boundaryTimer);unlockNative();return false;}
      if(source==='touch'&&touchUsed)return true;
      if(now<lockedUntil){lockedUntil=now+120;return true;}
      if(now-previousInputAt>200)returnIntent=0;
      returnIntent+=Math.abs(delta);
      if(returnIntent<settings().Motion['Return threshold (pixels)'])return true;
      awaitingFreshUp=false;autoAdvance=false;
      if(source==='touch')touchUsed=true;
      scrollTo(0);return true;
    }
    if(source==='touch'&&touchUsed)return true;
    if(now<lockedUntil){lockedUntil=now+180;return true;}
    if(root.scrollTop<4){
      if(delta<0&&target<=0)return returning;
      if(delta>0){if(target===0)resetTint();returning=false;}
      target=clamp(target+delta/settings().Motion['Scroll resistance']);autoAdvance=target===1;
      if(reduced()){value=target;render();if(autoAdvance){autoAdvance=false;scrollTo(contentTop);}}else start();return true;
    }
    if(delta<0){scrollTo(0);return true;}
    return false;
  };
  const ignore=el=>el.closest('input,textarea,select,dialog,.track-kit,[contenteditable="true"]');
  const wheel=event=>{if(event.ctrlKey||ignore(event.target))return;if(transition){lastInputAt=performance.now();event.preventDefault();return;}if(Math.abs(event.deltaX)>Math.abs(event.deltaY)){if(!inContent)event.preventDefault();return;}const unit=event.deltaMode===1?16:event.deltaMode===2?root.clientHeight:1;if(input(event.deltaY*unit))event.preventDefault();};
  const touchstart=event=>{touchUsed=!!transition||performance.now()<lockedUntil;lastTouch=event.touches[0]?.clientY??0;};
  const touchmove=event=>{if(ignore(event.target)||event.touches.length!==1)return;const y=event.touches[0].clientY;const delta=lastTouch-y;lastTouch=y;if(input(delta*2,"touch"))event.preventDefault();};
  const key=event=>{if(ignore(event.target))return;if(event.repeat&&(transition||awaitingFreshUp)){event.preventDefault();lastInputAt=performance.now();return;}const deltas={ArrowDown:95,ArrowUp:-95,PageDown:400,PageUp:-400,Home:-1000000,' ':event.shiftKey?-300:300};if(event.key in deltas&&input(deltas[event.key],"key"))event.preventDefault();};
  const go=event=>{if(transition)return;if(event.detail===0){autoAdvance=false;scrollTo(0);}else{returning=false;target=1;autoAdvance=true;start();}};
  const onScroll=()=>{
    const contentTop=story.offsetTop;
    // Catch native touch momentum and scrollbar movement crossing the content boundary,
    // without turning ordinary upward article scrolling into an animation.
    if(!transition&&inContent&&root.scrollTop<contentTop-1){
      stopAtContentTop('native');return;
    }
    if(!transition&&root.scrollTop>=contentTop-1){inContent=true;}
    if(!transition&&root.scrollTop>=contentTop-1&&!returning){target=1;value=1;fadeContentTint();}
    lastScrollTop=root.scrollTop;render();
  };
  root.classList.add('has-color-growth');root.dataset.bottomTransition='true';
  root.addEventListener('wheel',wheel,{passive:false});root.addEventListener('touchstart',touchstart,{passive:true});root.addEventListener('touchmove',touchmove,{passive:false});root.addEventListener('keydown',key);root.addEventListener('project:growth-go',go);root.addEventListener('scroll',onScroll,{passive:true});
  const unsubscribe=tuning.subscribe(()=>{render();start();});render();
  return()=>{clearTimeout(boundaryTimer);unlockNative();resetTint();cancelAnimationFrame(frame);unsubscribe();bloomState={progress:0,...settings()};for(const fn of listeners)fn();bloom.remove();root.classList.remove('has-color-growth');delete root.dataset.bottomTransition;delete root.dataset.sectionTransition;root.removeEventListener('wheel',wheel);root.removeEventListener('touchstart',touchstart);root.removeEventListener('touchmove',touchmove);root.removeEventListener('keydown',key);root.removeEventListener('project:growth-go',go);root.removeEventListener('scroll',onScroll);};
}
