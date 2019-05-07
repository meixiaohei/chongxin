var key = window.location.search;
key = key.split('=');
key = key[1];
console.log(key);
if(key){
    $('#'+key).show().siblings('.map-init-lists').hide();

}
var mySwiper = new Swiper('.banner2', {
    autoplay: 5000,//可选选项，自动滑动
    loop:true,
    pagination : '.swiper-pagination',
    slidesPerView: 'auto',
    autoplayDisableOnInteraction : false
})
$(document).scroll(function(){
    var scrTop = $(window).scrollTop();
    var n_t = $('body').height() * 1;
    console.log(n_t)
    console.log(scrTop);
    if(scrTop > 600){
        $('#box').fadeIn()
    }else{
        $('#box').fadeOut()
    }
})
var timer  = null;
box.onclick = function(){
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn(){
        var oTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(oTop > 0){
            scrollBy(0,-50);
            timer = requestAnimationFrame(fn);
        }else{
            cancelAnimationFrame(timer);
        }
    });
}


$('.map-img>div>img').each(function (index) {
    $(this).mouseover(function () {
        $(".map-init-lists").eq(index).show().siblings('.map-init-lists').hide();
    })
})