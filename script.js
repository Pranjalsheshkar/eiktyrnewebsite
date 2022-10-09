function show (){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

show()

gsap.from("#page1 nav",{
    opacity: 0,
    duration: 1,
    delay: 1
})

gsap.from(" #page1 .left .contain h1",{
    y: 100,
    opacity:0,
    duration: 1,
    delay: 1
})
gsap.from(" #page1 .left .contain p",{
    y: 100,
    opacity:0,
    duration: 1,
    delay: 1.4
})
gsap.from("#page1 .left .contain h2",{
    y: 100,
    opacity:0,
    duration: 1,
    delay: 1.8
})

gsap.from(".right img",{
    y:700,
    duration: 1,
    delay: 1
})

gsap.from("#page2  img",{
    y:600,
    duration: 1,
    // delay: 1,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start:"top 60%"
        
    }
})

gsap.from(" #page2 h1",{
    y: 100,
    opacity:0,
    duration: 1,
    // delay: 1,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start:"top 60%"
        
    }
})
gsap.from("#page2 p",{
    y: 100,
    opacity:0,
    duration: 1,
    delay: 0.4,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start:"top 60%"
        
    }
})
gsap.from("#page2 h2",{
    y: 100,
    opacity:0,
    duration: 1,
    delay: 0.8,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start:"top 60%"
    }
})

gsap.from("#page3 .up h1",{
    y: 100,
    opacity:0,
    duration: 1,
    // delay: 1, 
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        start:"top 60%"
    }
})

gsap.from("#page3 .up p",{
    y: 100,
    opacity:0,
    duration: 1,
    delay: 0.4,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        start:"top 60%"
        
    }
})

gsap.from("#page3 .up button",{
    y: 100,
    opacity:0,
    duration: 1,
    delay: 0.8,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        start:"top 60%"
        
    }
})

gsap.from("#page3 .down .images img",{
    y: 400,
    opacity:0,
    duration: 1,
    delay: 1.2,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        start:"top 60%"
        
    }
})

gsap.from("#page3 .down button",{
    opacity:0,
    duration: 1,
    delay: 2,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        start:"top 60%"
        
    }
})

gsap.from("#page4 .up h1",{
    y: 100,
    opacity:0,
    duration: 1,
    // delay: 1,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "#main",
        start:"top 60%"
        
    }
})

gsap.from("#page4 .up p",{
    y: 100,
    opacity:0,
    duration: 1,
    delay: 0.4,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "#main",
        start:"top 60%"
        
    }
})

gsap.from("#page4 .up hr",{
    y: 100,
    opacity:0,
    duration: 1,
    delay: 0.8,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "#main",
        start:"top 60%"
        
    }
})

gsap.from("#page4 .down .left h1",{
    y: 100,
    opacity:0,
    duration: 1,
    delay: 1.2,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "#main",
        start:"top 60%"
        
    }
})

gsap.from("#page4 .down .left p",{
    y: 100,
    opacity:0,
    duration: 1,
    delay: 1.6,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "#main",
        start:"top 60%"
        
    }
})

gsap.from("#page4 .down .left input",{
    y: 100,
    opacity:0,
    duration: 1,
    delay: 2,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "#main",
        start:"top 60%"
        
    }
})

gsap.from("#page4 .down .left button",{
    y: 100,
    opacity:0,
    duration: 1,
    delay: 2,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "#main",
        start:"top 60%"
        
    }
})

gsap.from("#page4 .down .left h2",{
    y: 100,
    opacity:0,
    duration: 1,
    delay: 2.4,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "#main",
        start:"top 60%"
        
    }
})

gsap.from("#page4 .down .right",{
    y: 500,
    opacity:0,
    duration: 1,
    delay: 1.2,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "#main",
        start:"top 60%"
        
    }
})

document.querySelector("#menu").addEventListener("click",function(){
    document.querySelector(".overly").style.transform = "translateX(0%)";
    document.querySelector(".overly .left").style.transform = "translateX(0%)";
})

document.querySelector(".cross").addEventListener("click",function(){
    document.querySelector(".overly").style.transform = "translateX(100%)";
    document.querySelector(".overly .left").style.transform = "translateX(100%)";
})

var flag = 0
 

document.querySelector(".btn2").addEventListener("click",function(){
    document.querySelector("#page3 .down .images").scrollBy({left: 225, behavior: "smooth"})
})
document.querySelector(".btn1").addEventListener("click",function(){
    document.querySelector("#page3 .down .images").scrollBy({left: -225, behavior: "smooth"})
})