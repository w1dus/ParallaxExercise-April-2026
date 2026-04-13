

document.addEventListener("DOMContentLoaded", function(e){
    
    section1ScrollHandler();
    section2ScrollHandler();
})

const section2ScrollHandler = () => {
    const section = document.querySelector(".main .section2");
    if (!section) return;
    const triggerEl = section.querySelector(".scroll-event");
    if (!triggerEl) return;

    const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
            trigger: section, 
            start: "top top",
            end: "+=250%", 
            scrub: true, 
            pin: section,
            anticipatePin: 1, 
            invalidateOnRefresh: true 
        }
    });
    tl.fromTo(
        ".main .section2 .text-box.text1 .active-text",
        { width: "0%" }, //from
        { width: "100%", duration: 1 }, //to
        0
    )
    .fromTo(
        ".main .section2 .text-box.text2 .active-text",
        { width: "0%" },
        { width: "100%", duration: 1 },
        1
    );
    
}

const section1ScrollHandler = () => {
    const section = document.querySelector(".main .section1");
    if (!section) return;
    const triggerEl = section.querySelector(".scroll-event");
    if (!triggerEl) return;
    /* 
        1. 초기 상태 (초기 상태 먼저 잡아줘야 함) 
        autoAlpha는 gasp속성으로 opacity + visibility를 같이 제어하는 축약 옵션 
        ex)autoAlpha : 1 = (opacity: 1 , visibility: visible)
    */
    gsap.set(".main .section1 .img-div .type1-img1", 
        { 
            y: () =>
            window.innerWidth >= 1251 ? "100px" :
            window.innerWidth >= 651 ? "10vw" : "10vw", 
            transformOrigin: "50% 0%" 
        }
    ); 
    gsap.set(".main .section1 .img-div .type1-img2", { scale: .9, transformOrigin: "50% 0%", }); 
    gsap.set(".section1 .typo1 .t2", { autoAlpha: 0, y: 20 }); //왼쪽 두번째 문장 hidden
    gsap.set(".section1 .typo2 .t1", { autoAlpha: 0, y: 20 }); //오른쪽 첫번째 문장 hidden
    gsap.set(".section1 .typo2 .t2", { autoAlpha: 0, y: 20 }); //오른쪽 두번째 문장 hidden
    gsap.set(".section1 .type2", { autoAlpha: 0, scale: 0.05, rotation: -8 }); //꽃 이미지 hidden
    /* 
        gsap.timeline()은 여러 애니메이션을 
        시간축으로 묶어서 순서/동시 실행을 제어하는 컨테이너

        애니메이션 효과를 줄 때 사용하는 옵션
        ex) ease: "power2.out" = (감속 효과를 줄 때 사용하는 옵션)
        ex) ease: "power2.in" = (가속 효과를 줄 때 사용하는 옵션)
        ex) ease: "power2.inOut" = (가속 효과와 감속 효과를 줄 때 사용하는 옵션)
        ex) ease: "power2.outIn" = (가속 효과와 감속 효과를 줄 때 사용하는 옵션)
        ex) ease: "power2.inOut" = (가속 효과와 감속 효과를 줄 때 사용하는 옵션)
    */
    const tl = gsap.timeline({
        // defaults: { ease: "power2.inOut" },
        scrollTrigger: {
            trigger: triggerEl, // triggerEl은 스크롤 트리거를 적용할 요소 (컨테이너)
            start: "top top", //뷰포트 화면의 top에 닿는 순간 시작 
            end: "+=1000%", //시작 지점부터 추가로 200% 스크롤 거리에서 종료
            scrub: 1.2, //스크롤 속도를 조절하는 옵션
            pin: true, //스크롤 트리거를 적용할 요소를 고정하는 옵션
            anticipatePin: 1, //스크롤 트리거를 적용할 요소를 고정하는 옵션
            invalidateOnRefresh: true //스크롤 트리거를 적용할 요소를 고정하는 옵션
        }
    });
    /*  
        오른쪽 첫번째 글자 스르륵 나오게 
        "매 한끼마다"
    */
    tl.to(".section1 .typo2 .t1", {
        autoAlpha: 1,
        y: 0,
        duration: 0.6
    }, 0) // to로 연결해서 동시에 다른 효과 주기 
    .to(".section1 .type1-img2", { 
        /* 반원 반대방향으로 회전 */
        rotation: -12,
        y: () =>
            window.innerWidth >= 1251 ? "-2vw" :
            window.innerWidth >= 651 ? "0vw" : "0vw",
    }, '')
    .to(".section1 .type1-img2", { 
        /* 반원 반대방향으로 회전 */
        rotation: 12,
        y: () =>
            window.innerWidth >= 1251 ? "-2vw" :
            window.innerWidth >= 651 ? "0vw" : "0vw",
    }, '>')
    .to(".section1 .type1-img2", { 
        /* 반원 180도 회전 (위 아래 = 위) */
        rotation: 100,
        y: () =>
            window.innerWidth >= 1251 ? "7vw" :
            window.innerWidth >= 651 ? "5vw" : "0vw",
        scale: .55,
    }, '>')
    .to(".section1 .type1-img1", { 
        /* 반원 180도 회전 (위 아래 = 아래) */
        rotation: 10,
        y: () =>
            window.innerWidth >= 1251 ? "8vw" :
            window.innerWidth >= 651 ? "7vw" : "2vw",
        scale: .6,
    }, '<')
    .to(".section1 .type1-img2", { 
        /* 반원 180도 회전 (위 아래 = 위) */
        rotation: 180,
        y: () =>
            window.innerWidth >= 1251 ? "7vw" :
            window.innerWidth >= 651 ? "15vw" : "15vw",
        x: '.5vw',
        scale: .3,
    }, '>')
    .to(".section1 .type1-img1", { 
        /* 반원 180도 회전 (위 아래 = 아래) */
        rotation: 50,
        y: () =>
            window.innerWidth >= 1251 ? "7.3vw" :
            window.innerWidth >= 651 ? "15vw" : "15vw",
        scale: .3,
    }, '<')
    .to(".section1 .typo1 .t1", { 
        /* 봄, 여름, 가을, 겨울 텍스트 삭제 */
        autoAlpha: 0,
        y: () =>
            window.innerWidth >= 1251 ? "0" :
            window.innerWidth >= 651 ? "15vw" : "15vw",
        duration: 0.6
    }, '<')
    .to(".section1 .typo2 .t1", {
         /* 매 한끼마다 텍스트 삭제 */
        autoAlpha: 0,
        y: () =>
            window.innerWidth >= 1251 ? "0" :
            window.innerWidth >= 651 ? "15vw" : "15vw",
        duration: 0.6
    }, '<')
    .to(".section1 .type1-img2", { 
        /* 반원 180도 회전 (위 아래 = 위) */
        rotation: 250,
        y: () =>
            window.innerWidth >= 1251 ? "9.45vw" :
            window.innerWidth >= 651 ? "15vw" : "15vw",
        x: 0,
        scale: .025
    }, '>')
    .to(".section1 .type1-img1", { 
        /* 반원 180도 회전 (위 아래 = 아래) */
        rotation: 67,
        y: () =>
            window.innerWidth >= 1251 ? "9.45vw" :
            window.innerWidth >= 651 ? "15vw" : "15vw",
        scale: .025,
    }, '<')
    /* 2번째 애니메이션 텍스트 나오고 꽃 등장 */
    .to(".section1 .typo1 .t2", { 
        /* 계절이 새 옷을 갈아입을 때마다의 수고스러움은 등장 */
        autoAlpha: 1,
        y: 0,
        duration: 0.6
    }, '>')
    .to(".section1 .type1-img2", { 
        /* 동그라미 삭제 (위 아래 = 위) */
        autoAlpha: 0,
    }, '<')
    .to(".section1 .type1-img1", { 
        /* 동그라미 삭제 (위 아래 = 아래) */
        autoAlpha: 0,
    }, '<')
    .to(".section1 .type2", { 
        /* 꽃 등장 (위 아래 = 아래) */
        autoAlpha: 1,
        rotation: 180,
        scale:.2,
    }, '<')
    .to(".section1 .typo2 .t2", {
         /* 제품에 담긴 진실한 마음으로 정성으로 피어납니다 등장 */
        autoAlpha: 1,
        y: 0,
        duration: 0.6
    }, '>')
    .to(".section1 .type2", { 
        /* 꽃 등장 (위 아래 = 아래) */
        autoAlpha: 1,
        rotation: 250,
        scale:.8,
    }, '<')
    .to(".section1 .type2", { 
        /* 꽃 등장 (위 아래 = 아래) */
        autoAlpha: 1,
        rotation: 360,
        scale:1,
    }, '<')
    .to(".section1 .type2", { 
        /* 꽃 등장 (위 아래 = 아래) */
        autoAlpha: 1,
        rotation: 535,
        scale:1,
    }, '>')
}