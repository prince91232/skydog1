gsap.to("#slide-page-bar",{
    scrollTrigger:{
        trigger:"#page1",
        // scroller:"#main",
        // markers:true,
        start:"27% 15%",
        end:"top top",
        scrub:1,
        pin :true,
        anticipatePin: 1
    },
    x:"-80%",
})
// gsap.form("#gifimg",{
//     y:-100,
//     delay:5,
//     opacity:0,
//     stagger:0.3
// })


document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector("video");
    const initialBlur = 0;
    const targetBlur = 5; 
    const targetScroll = document.body.clientHeight * 0.5; 
  
    // Set up GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        scroller:"#main",
        markers:true,
        trigger: ".background",
        start: "50%",
        end: `+=${targetScroll}`, 
        scrub: true, 
      },
    });
  

    tl.to(
      video,
      {
        filter: `blur(${targetBlur}px)`,
        ease: "none",
      },
      5 
    );
  });
 
const container = document.getElementById("p2limg");


const images = document.querySelectorAll("#gifimg");


const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });

images.forEach((image, index) => {
  timeline.to(image, {
    opacity: 1,    
    duration: 1, 
  });
  timeline.to(image, {
    opacity: 0,    
    duration: 1,  
  }, `+=${index === images.length - 1 ? 0 : 1}`); 
});
