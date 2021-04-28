var text=document.getElementById('text');
var bird1=document.getElementById('bird1');
var bird2=document.getElementById('bird2');
var btn=document.getElementById('btn');
var rocks=document.getElementById('rocks');
var water=document.getElementById('water');
var forest=document.getElementById('forest');
var header=document.getElementById('header');

window.addEventListener('scroll',function(){
    var value = window.scrollY;
    text.style.top = 50 + value * -0.5 + '%';
bird1.style.top = value * -1.5 + 'px';
bird1.style.left = value * 2 + 'px';
bird2.style.top = value * -1.5 + 'px';
bird2.style.left = value * -5 + 'px';
btn.style.marginTop= value * 1.5 + 'px';
rocks.style.top= value * -0.12 + 'px';
forest.style.top= value * 0.25 + 'px';
header.style.top= value * 0.5 + 'px';
})




