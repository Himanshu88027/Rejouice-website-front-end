function locoJs() {
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}

locoJs();

const pageContent = document.querySelector("#page1-content");
const cursor = document.querySelector("#cursor");

function cursorEffect() {
    pageContent.addEventListener("mousemove", (e)=>{
        gsap.to(cursor,{
            x:e.x,
            y:e.y
        })
    });
    
    pageContent.addEventListener("mouseenter", ()=>{
        gsap.to(cursor,{
            scale: 1,
            opacity: 1
        });
    });
    
    pageContent.addEventListener("mouseleave", ()=>{
        gsap.to(cursor,{
            scale: 0,
            opacity: 0
        });
    });
}
cursorEffect();



function page2Animation() {
    gsap.from("#page2-elem h1", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 70%",
            end: "top 60%",
            // markers: true,
            scrub: 2
        }
    });
    gsap.from("#page4-elem h1", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top 70%",
            end: "top 60%",
            // markers: true,
            scrub: 2
        }
    });
    gsap.from("#page6-elem h1", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#page6",
            scroller: "#main",
            start: "top 70%",
            end: "top 60%",
            // markers: true,
            scrub: 2
        }
    });
    
}

page2Animation();
