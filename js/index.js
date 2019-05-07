$(function(){
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 5000,//可选选项，自动滑动
        loop:true,
        // pagination : '.swiper-pagination',
        slidesPerView: 'auto',
        // loopedSlides: 3,
        autoplayDisableOnInteraction : false
    });

    $('#e').rollNoInterval().left();
    var mySwiper2 = new Swiper('.slider2',{
        // pagination : '.swiper-pagination2',
        autoplay:3000,
        loop : true,
        // slidesPerView: 4.5,
        // spaceBetween: 30,
        effect : 'fade',
    });
});
function ale() {  
        //弹出一个对话框  
        alert("该赛区暂未开放！");  
}  



