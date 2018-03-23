let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let mark = document.getElementById('mark');
let img = box2.getElementsByTagName('img')[0];
let box1L = $.offset(box1).left;
let box1T = $.offset(box1).top;
let minL = 0,minT = 0, maxL = 0,maxT = 0;
let L = 0,T = 0;
box1.onmouseenter = function () {
    mark.style.display = 'block';
    box2.style.display = 'block';
    maxT = this.offsetHeight - mark.offsetHeight;
    maxL = this.offsetWidth - mark.offsetWidth;
    this.onmousemove = function (e) {
        L = e.clientX - box1L - mark.offsetWidth/2;
        T = e.clientY - box1T - mark.offsetHeight/2;
        L = L <= minL ? minL : L >= maxL ? maxL : L;
        T = T <= minT ? minT : T >= maxT ? maxT : T;
        $.css(mark,{left:L,top:T});
        $.css(img,{
            marginLeft:-3*L,
            marginTop:-3*T
        })
    }
};
box1.onmouseleave = function () {
    mark.style.display = 'none';
    box2.style.display = 'none';
};