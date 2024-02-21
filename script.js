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


