
createSwiper();

function createSwiper() {
    let output = `
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide"><img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381231560_727.jpg" alt=""></div>
            <div class="swiper-slide"><img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381231559_727.jpg" alt=""></div>
            <div class="swiper-slide"><img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381231558_727.jpg" alt=""></div>
            <div class="swiper-slide"><img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381231560_727.jpg" alt=""></div>
            <div class="swiper-slide"><img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381231559_727.jpg" alt=""></div>
            <div class="swiper-slide"><img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381231558_727.jpg" alt=""></div>
            ...
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>
        
        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        
        <!-- If we need scrollbar -->
        <div class="swiper-scrollbar"></div>
    `;
    document.querySelector('.swiper').innerHTML = output;



    const swiper = new Swiper('.swiper', {
        // Optional parameters
        // direction: 'vertical',
        slidesPerView : 1, // 화면에 나타날 콘텐츠 갯수 설정 기본값은 1
        autoplay : { delay:5000, disableOnInteraction: false }, // 자동으로 슬라이드 실행
        loop: true,

        // If we need pagination
        pagination: {
            // el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            // el: '.swiper-scrollbar',
        },
    });
}