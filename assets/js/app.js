// serviceSection

const slickSlide = jQuery('#slick-slide')

if(slickSlide){
  slickSlide.slick({
    // 슬릭슬라이드의 설정값
    dots : true, // 인디케이터, false 이면 표시안됨 
    arrows : false,
    slidesToShow : 3, // 일반 pC 화면에서는 3개 
    slideToScroll : 1, // 모바일,마우스 로 손가락으로 밀어낼때 몇개의 슬라이드 아이템들이 슬라이드 할지 
    autoplay : true, // 브라우저에서 로딩,리프레시 될때 자동으로 라이딩 동작이 시작되게 
    autoplaySpeed : 3000, // 오토 플레이되는 속도 
    responsive : [
      {
        breakpoint : 768,
        settings : {
          slidesToShow : 2
        }
      },
      {
        breakpoint : 576,
        settings : {
          slidesToShow : 1
        }
      }
    ] // 반응형 설정 
  })
}