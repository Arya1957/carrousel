# carrousel
轮播

### version1 : 写的未封装的轮播
1. 原理：拷贝第一个和最后一个轮播对象，让所有轮播对象横向排列，让轮播对象的容器相对它的父容器绝对定位,然后通过改变轮播对象的容器的 left 值来达到轮播的目的。

2. 几个关键点： 
- 自适应： 动态rem 
- 取当前轮播对象的index：  这个写了两种方法 ：取余数的方法（这个更简洁）和 用if 语句判断临界条件并重置index(这个更好理解）
3. 抽象出的主要函数： 
autoPlay()  ： 自动播放
stop() ： 停止自动播放
playNext(index) 
bullet(index) 

### version2 :  封装的轮播
1. 原理： 主要还是通过改变轮播对象的容器的位移来达到轮播的目的，这次用的 transform 来改变轮播对象的容器的位移。
         创建一个 Slider 对象，通过 new 一个对象的方式来调用轮播。
2. 关键点：
- 传参： new 一个轮播的时候传入一个参数对象， 构造函数如下： 

```
function Slider(options) {
    this.el = options.el; //必需，需要添加轮播的DOM节点
    this.interval = options.interval || 3000; //如果没有这个参数，将会默认轮播间隔为 3 秒
    this.index = 0; 
    this.slides = options.slides;//必需且必需传入一个数组，包含了“点击链接” 和“轮播的图片的链接” 信息
    this.length = this.slides.length;
    this.renderImg();
    this.renderBullet();
    this.start();
}
``` 
在version2 的 例子中，是这样做的： 
```
let slider = new Slider({
    el: document.querySelector('.slider'),
    slides: [
        {link: '#1', image: '../images/lizhi.jpg'},
        {link: '#2', image: '../images/xuezhiqian.jpg'},
        {link: '#3', image: '../images/GMA.jpg'},
        {link: '#4', image: '../images/Jay.jpg'},
        {link: '#5', image: '../images/lizongsheng.jpg'}
    ]
});
```

    

