(function(){
  var b=document.querySelector('.burger'),n=document.querySelector('nav.main');
  if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});}
  document.querySelectorAll('nav.main button.dd').forEach(function(btn){
    btn.addEventListener('click',function(){var li=btn.parentElement,o=li.classList.toggle('open');btn.setAttribute('aria-expanded',o);});
  });
  var s=document.querySelectorAll('.hero .slides img'),i=0;
  if(s.length>1&&!matchMedia('(prefers-reduced-motion: reduce)').matches){setInterval(function(){s[i].classList.remove('on');i=(i+1)%s.length;s[i].classList.add('on');},6000);}
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}})},{threshold:.12});
    document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});
  }else{document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')});}
  var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
})();
