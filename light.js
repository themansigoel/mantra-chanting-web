// Native details work without JavaScript. Keep one FAQ answer open at a time.
document.querySelectorAll('.faq details').forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) document.querySelectorAll('.faq details').forEach(other => { if (other !== item) other.open = false; });
  });
});

(() => {
 const button=document.getElementById('demo-count');
 if(!button)return;
 let count=0;
 const value=document.getElementById('demo-value');
 const hint=document.getElementById('demo-hint');
 const render=()=>{value.textContent=count+' / 108';hint.textContent=count===108?'Practice complete':'Tap to count';button.setAttribute('aria-label',count===108?'108 repetitions complete':'Count one repetition');};
 button.addEventListener('click',()=>{if(count<108){count++;render();}});
 document.getElementById('demo-reset').addEventListener('click',()=>{count=0;render();});
})();
