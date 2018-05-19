// REM
rem();
function rem(){
    var pageWidth = window.innerWidth;
    var html = document.getElementsByTagName('html');
    html[0].style.fontSize = pageWidth/10 + 'px' ;
}

//  轮播
// 用取余数的方法获取目录
var sliderCt = document.querySelector('.slider>.slider-group');
var sliderItems = document.querySelectorAll('.slider>.slider-group>.slider-item');
var sliderWidth = getComputedStyle(sliderItems[0]).width;
console.log('sliderWidth'+ sliderWidth);
var count = sliderItems.length;
var lastItem = sliderItems[count - 1].cloneNode(true);
var firstItem = sliderItems[0].cloneNode(true);
var pageIndex = 0;
var bullets  = document.querySelectorAll('.slider>.bullets>.bullet-item');
var clock;

sliderCt.insertBefore(lastItem, sliderItems[0]);
sliderCt.appendChild(firstItem);
sliderCt.style.width = (count + 2) * parseInt(sliderWidth) + 'px';  //  用JS 控制宽度，使代码可复用
sliderCt.style.left = '-' + sliderWidth;

 autoPlay();
function autoPlay(){
    clock = setInterval(playNext,2500)
}
function playNext(index){
    index = (pageIndex + 1)% count;
    sliderCt.style.left = -parseInt(sliderWidth) * ((index)+1) + 'px';
    console.log(sliderCt.style.left +'  play:'+ index);
    bullet(index);
    pageIndex ++;
}

function bullet(index){
    for(var i=0,len= bullets.length;i<len;i++){
        bullets[i].classList.remove('active');
    }
    bullets[index].classList.add('active');
}

function stop(){
    clearInterval(clock)
}

/* 一个个判断目录
var sliderCt = document.querySelector('.slider>.slider-group');
var sliderItems = document.querySelectorAll('.slider>.slider-group>.slider-item');
var sliderWidth = getComputedStyle(sliderItems[0]).width;
var count = sliderItems.length;
var lastItem = sliderItems[count - 1].cloneNode(true);
var firstItem = sliderItems[0].cloneNode(true);
var pageIndex = 0;
var bullets  = document.querySelectorAll('.slider>.bullets>.bullet-item');
var bulletCt = document.querySelector('.slider>.bullets');

sliderCt.insertBefore(lastItem, sliderItems[0]);
sliderCt.appendChild(firstItem);
sliderCt.style.width = (count + 2) * parseInt(sliderWidth) + 'px';  //  用JS 控制宽度，使代码可复用
sliderCt.style.left = '-' + sliderWidth;

autoPlay();
var clock ;
function autoPlay() {
     clock = setInterval(function () {
        next()
    }, 3000)
}

function next() {
    pageIndex++;
    var offset = -parseInt(sliderWidth) * (pageIndex + 1) + 'px';
    sliderCt.style.left = offset;
    if (pageIndex === count) {
        pageIndex = 0;
        sliderCt.style.left = '-' + sliderWidth;
    }
    console.log(offset + '  pageIndex:' + pageIndex);
    bullet(pageIndex)
}

function pre() { //  没有点击上一个的按钮的需求，可以不要
    pageIndex--;
    if (pageIndex < 0) {
        pageIndex = count-1;
        sliderCt.style.left = -(pageIndex
            +1)* parseInt(sliderWidth) + 'px'
    }
    var offset = -parseInt(sliderWidth) * (pageIndex+1) + 'px';
    sliderCt.style.left = offset;
    console.log(offset + ' pageIndex:' + pageIndex);
    bullet(pageIndex);
}

function bullet(index){
   for(var i=0,len= bullets.length;i<len;i++){
       bullets[i].classList.remove('active');
   }
    bullets[index].classList.add('active');
}

bulletCt.onclick = function(e){ //  手机端没有click事件，这个可以省了
    var target = e.target;
    if(target.tagName.toLowerCase() === 'li'){
        // console.log(this)
        var index = parseInt(target.getAttribute('data-id'));  //  getAttribute拿到的index是字符串 !!!
        bullet(index);
       sliderCt.style.left =  -parseInt(sliderWidth) * (index + 1) + 'px';
    }
};
*/
