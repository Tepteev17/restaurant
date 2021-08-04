
$('.slider').slick({
        dots: true,
        infinite: true,
        speed: 800,
        fade: true,
        cssEase: 'linear',
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
})
$('.slider-second').slick()
$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    const arr = $('.slider-item')
    const inactiveSlide = arr[currentSlide]
    const activeSlide = arr[nextSlide]
    $(inactiveSlide).children('.content-item').removeClass('active')
    $(activeSlide).children('.content-item').addClass('active')
});
//animate
const animItems =  $('.anim-items')

if(animItems.length > 0){
    window.addEventListener('scroll',animOnScroll)
    function animOnScroll(){
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight
            const animItemOffset = offset(animItem).top
            const animStart = 1
 
            let animItemPoint = window.innerHeight - animItemHeight / animStart
            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset <(animItemOffset + animItemHeight)){
                $(animItem).addClass('active') 
            } else {
                $(animItem).removeClass('active') 
            }
        }   
    }

    function offset(el){
        const rect = el.getBoundingClientRect(),
         scrollTop  = window.pageYOffset || document.documentElement.scrollTop
        return{ top: rect.top + scrollTop}
    }
}
