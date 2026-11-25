// Scroll distances are measured in card spacings, independent of canvas dimensions.
const motion={offset:0,activeUntil:0,startedAt:0};
export const getHomeMotion=()=>motion;
export function mountHomeScroll(root){
 let touch=null,blockClickUntil=0;
 const ignore=target=>target.closest('button,a,input,textarea,select,dialog,.track-kit,[contenteditable="true"]');
 const move=(dx,dy)=>{
  const amount=Math.abs(dx)>Math.abs(dy)?-dx:-dy;
  if(!amount)return;
  const now=performance.now();if(now>motion.activeUntil)motion.startedAt=now;
  motion.offset+=Math.max(-180,Math.min(180,amount))/300;
  motion.activeUntil=now+240;
  window.dispatchEvent(new Event('home:motion'));
 };
 const wheel=event=>{
  if(event.ctrlKey||ignore(event.target))return;
  event.preventDefault();const unit=event.deltaMode===1?16:event.deltaMode===2?root.clientHeight:1;
  move(event.deltaX*unit,event.deltaY*unit);
 };
 const start=event=>{if(event.touches.length===1&&!ignore(event.target)){const t=event.touches[0];touch={x:t.clientX,y:t.clientY,startX:t.clientX,startY:t.clientY,moving:false};}};
 const swipe=event=>{
  if(!touch||event.touches.length!==1)return;
  const t=event.touches[0];
  if(!touch.moving&&Math.hypot(t.clientX-touch.startX,t.clientY-touch.startY)<8)return;
  touch.moving=true;event.preventDefault();
  // Swipe names describe finger direction: up/left moves the row right.
  move((t.clientX-touch.x)*1.7,(t.clientY-touch.y)*1.7);
  touch.x=t.clientX;touch.y=t.clientY;blockClickUntil=performance.now()+350;
 };
 const end=()=>{touch=null;};
 const click=event=>{if(performance.now()<blockClickUntil){event.preventDefault();event.stopPropagation();}};
 root.addEventListener('wheel',wheel,{passive:false});root.addEventListener('touchstart',start,{passive:true});root.addEventListener('touchmove',swipe,{passive:false});root.addEventListener('touchend',end);root.addEventListener('touchcancel',end);root.addEventListener('click',click,true);
 return()=>{motion.activeUntil=0;root.removeEventListener('wheel',wheel);root.removeEventListener('touchstart',start);root.removeEventListener('touchmove',swipe);root.removeEventListener('touchend',end);root.removeEventListener('touchcancel',end);root.removeEventListener('click',click,true);};
}
