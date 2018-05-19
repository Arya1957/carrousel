

//  下面是封装的轮播组件
function Slider(options) {
    this.el = options.el;
    this.interval = options.interval || 3000;
    this.index = 0;
    this.slides = options.slides;
    this.length = this.slides.length;
    this.renderImg();
    this.renderBullet();
    this.start();

}

Slider.prototype = {
    renderImg: function () {
        this.el.innerHTML = '<ul class="slider-group"></ul><ul class="bullets"></ul>';
        this.sliderCt = this.el.firstElementChild;
       // console.log(this.sliderCt);
        this.sliderCt.style.width = this.length * 100 + '%';
        console.log('width:' + this.sliderCt.style.width);
        this.sliderCt.innerHTML = this.slides.map(slide =>
            '<li  class="slider-item"><a href="' + slide.link + '"><img src=" ' + slide.image + ' " alt=""></a></li>'
        ).join('');

    },
    renderBullet: function () {
        this.bulletCt = this.el.lastElementChild;
        var str = '';
        for (let i = 0; i < this.length; i++) {
            str += '<li class="bullet-item"  ></li>';
        }
        this.bulletCt.innerHTML = str
    },
    setBullet: function (index) {
        bullets = this.bulletCt.children;
        for (let i = 0; i < this.length; i++) {
           // console.log(bullets[i]);
            bullets[i].classList.remove('active');
        }
        bullets[index].classList.add('active');
    },

    next: function () {
        this.index++;
        if (this.index === this.length) {
            this.index = 0;
        }
        let x = '-' + (this.index * 100 / this.length + '%');
        //  console.log('translateX:' + x);
        this.sliderCt.style.transform = 'translateX(' + x + ')';
        this.setBullet(this.index);
    },

    start: function () {
        setInterval(() => {
            this.next()
        }, this.interval)
    }
};


//  new 一个轮播对象
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



