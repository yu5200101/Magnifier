let minL = 0,minT = 0, maxL = 0,maxT = 0;
let box1L = $('#box1').offset().left;
let box1T = $('#box1').offset().top;
let L = 0,T = 0;
$('#box1').mouseenter(function () {
    $('#mark').css({display:'block'});
    $('#box2').css({display:'block'});
    maxL = $(this).outerWidth()-$('#mark').outerWidth();
    maxT = $(this).outerHeight() -$('#mark').outerHeight();
    $(this).mousemove(function (e) {
        L = e.clientX - box1L - $('#mark').outerWidth()/2;
        T = e.clientY - box1T -$('#mark').outerHeight()/2;
        L = L <= minL ? minL : L >= maxL ? maxL : L;
        T = T <= minT ? minT : T >= maxT ? maxT : T;
        $('#mark').css({left:L,top:T});
        $('#box2 img').css({marginLeft:-3*L,marginTop:-3*T});
    })
}).mouseleave(function () {
    $('#mark').css({display:'block'});
    $('#box2').css({display:'block'});
})