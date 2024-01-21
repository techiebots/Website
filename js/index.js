document.addEventListener('DOMContentLoaded', () => {
    $(".preloader").hide();
    particlesJS.load('particles-js', 'particles.json', function () {
        console.log('callback - particles.js config loaded');
    });


    //SWIPER PART-----------------------------------------------------------------------------------------------------------------------------------
    //SWIPER IS USED IN TWO SECTIONS
    //ABOUT SECTION & OFFICE SECTION



    var swiperH = new Swiper('.swiper-container-h', {
        loop: true,
        direction: 'horizontal',
        autoHeight: true,
        navigation: {
            nextEl: '.next1',
            prevEl: '.prev1',
        },
    });

    var swiperEvents = new Swiper('.swiperEvents', {
        loop: true,
        direction: 'horizontal',
        autoHeight: true,
        navigation: {
            nextEl: '.next2',
            prevEl: '.prev2',
        },
    });

    // var swiperV = new Swiper('.swiper-container-v', {
    //     direction: 'vertical',
    //     slidesPerView: 'auto',
    //     freeMode: true,
    //     scrollbar: {
    //         el: '.swiper-scrollbar',
    //     },
    //     mousewheel: true,
    // });


    var swiper = new Swiper('.swiper2', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
    });
    //SWIPER CODE ENDS HERE----------------------------------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------------------------------------------------------


    //GSAP + SCROLLMAGIC
    //ANIMATION CODE


    const controller = new ScrollMagic.Controller();
    //CODE FOR HEADING
    // ANIMATED HEADING
    $(".box").each(function () {
        var tl = new TimelineMax();
        tl.from($(this), 0.8, { width: "0%", ease: Power4.easeInOut });
        tl.from($(this).children(".box--back-animate"), 0.5, { opacity: 0, x: 50, ease: Power4.easeInOut }, "0.5");

        const scene = new ScrollMagic.Scene({
            triggerElement: this,
            reverse: false
        })
            .setTween(tl)
            .addTo(controller);
    })
    //-------------------------------------------------------------------------------------------------------------------------------------------------

    //CODE FOR ABOUT SECTION----------------------------------------------------------------------------------------------------------------------------
    var t2 = new TimelineMax();
    t2.from("#col1", 1, { opacity: 0, x: -10, ease: Power4.easeInOut }, "0.8");
    t2.from("#col2", 1, { opacity: 0, x: 15, ease: Power4.easeInOut }, "0.8");
    t2.from(".section-about__layer", 1.5, { opacity: 0, scale: 0, ease: Power4.easeInOut }, "0.8");
    const scene1 = new ScrollMagic.Scene({
        triggerElement: "#section-about",
        reverse: false
    }).setTween(t2).addTo(controller);
    //-------------------------------------------------------------------------------------------------------------------------------------------------


    //CODE FOR OFFICE SECTION---------------------------------------------------------------------------------------------------------------------------
    var t3 = new TimelineMax();
    t3.from("#row1", 1.5, { opacity: 0, y: 30, ease: Power4.easeInOut }, "1")
    t3.from("#row2", 1.5, { opacity: 0, y: 30, ease: Power4.easeInOut }, "1.5")
    const scene3 = new ScrollMagic.Scene({
        triggerElement: "#section-office",
        reverse: false
    }).setTween(t3).addTo(controller);
    //-------------------------------------------------------------------------------------------------------------------------------------------------

    //CODE FOR CLUBS SECTION---------------------------------------------------------------------------------------------------------------------------
    var t4 = new TimelineMax();
    t4.from("#anime1", 1.5, { opacity: 0, y: 30, ease: Power4.easeInOut }, "0.5")
    t4.from("#anime2", 1.5, { opacity: 0, y: 30, ease: Power4.easeInOut }, "1.5")
    const scene4 = new ScrollMagic.Scene({
        triggerElement: "#anime1",
        reverse: false
    }).setTween(t4).addTo(controller);
    //----------------------------------------------------------------------------------------------------------------------------------------------


    let timeline = new TimelineMax();
    timeline
        .to('#two', 6, {
            y: -700
        }, '-=6')
        .to('#one', 6, {
            y: -300
        }, '-=6')
        .to('.section-events__content', 6, {
            top: '0%'
        }, '-=6')
        .to('.event-heading', 6, {
            top: '11%'
        }, '-=6')


    let scene2 = new ScrollMagic.Scene({
        triggerElement: '.section-events',
        duration: '150%',
        triggerHook: 'onLeave'
    })
        .setTween(timeline)
        .setPin('.section-events')
        .addTo(controller);




    // footer animation code
    var t5 = new TimelineMax();
    t5.from("#col3", 1, { opacity: 0, x: -10, ease: Power4.easeInOut });
    t5.from("#col4", 1, { opacity: 0, x: 15, ease: Power4.easeInOut }, "0.8");
    const scene5 = new ScrollMagic.Scene({
        triggerElement: "footer",
        reverse: false,
        triggerHook: 0.9
    }).setTween(t5).addTo(controller);

    var t6 = new TimelineMax();
    t6.from("#anime3", 1.5, { opacity: 0, y: 20, ease: Power4.easeInOut }, "0.6")
    const scene6 = new ScrollMagic.Scene({
        triggerElement: "#anime3",
        reverse: false
    }).setTween(t6).addTo(controller);

    $(".navigation__link").click(function () {
        $("#navi-toggle").prop("checked", false);
    });
})





















// var t1 = new TimelineMax({onUpdate: updatePercentage});
// const controller = new ScrollMagic.controller();
// var tl = new TimelineMax({onUpdate:updatePercentage});
// var tl2 = new TimelineMax();
// const controller = new ScrollMagic.Controller();

// tl.from('blockquote', .5, {x:200, opacity: 0});
// tl.from('span', 1, { width: 0}, "=-.5");
// tl.from('#office', 1, {x:-200, opacity: 0,ease: Power4.easeInOut}, "=-1");
// tl.from('#building', 1, {x:200, opacity: 0, ease: Power4.easeInOut}, "=-.7");

// tl2.from("#box", 1, {opacity: 0, scale: 0});
//tl2.to("#box", .5, {left: "20%", scale: 1.3, borderColor: 'white', borderWidth: 12, boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.09)'})

// const scene = new ScrollMagic.Scene({
//   triggerElement: ".sticky",
//             triggerHook: "onLeave",
//             duration: "100%"
// })
//   .setPin(".sticky")
//   .setTween(tl)
// 		.addTo(controller);

// const scene2 = new ScrollMagic.Scene({
//   triggerElement: "blockquote"
// })
//   .setTween(tl2)
// 		.addTo(controller);


// function updatePercentage() {
//   //percent.innerHTML = (tl.progress() *100 ).toFixed();
//   tl.progress();
//   console.log(tl.progress());


//Elastic.easeOut.config(1, 0.3)
// }

