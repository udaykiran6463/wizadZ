
var tl = gsap.timeline();

// Initial animations
tl.from("nav h1, nav h4, nav button", {
    duration: 0.7,
    y: -30,
    opacity: 0,
    stagger: 0.15,
    delay: 0.3,
})
tl.from(".center-part1 h1", {
    x: -300,
    duration: 0.6,
    opacity: 0,
})
tl.from(".center-part1 p", {
    duration: 0.6,
    opacity: 0,
})
tl.from(".center-part1 button", {
    y: 50,
    duration: 0.2,
    opacity: 0,
})
tl.from(".center-part2 img", {
    x: 100,
    duration: 0.6,
    opacity: 0,
}, "-=1");

gsap.from(".section1bottom img", {
    y: 100,
    duration: 1.5,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".section1bottom",
        scroller:"body",
        start: "top 80%",
        end: "top 50%",
        scrub: 2,
    }
})

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        // markers:true,
        start: "top 80%",
        scrub: 1,
        end: "top 70%",
    }
})

tl2.from(".services h3",{
    x: -30,
    duration: 1.5,
    opacity: 0,
})

tl2.from(".services p",{
    x: 50,
    duration: 1.5,
    opacity: 0,
})

const tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".container",
        scroller:"body",
        // markers:true,
        start: "top 40%",
        scrub: 1,
        end: "top 10%",
    }
})

tl3.from("#box1",{
    x: -100,
    duration: 1.5,
    opacity: 0,
},"first")
tl3.from("#box4",{
    x:100,
    duration: 1.5,
    opacity: 0,
},'first')
tl3.from("#box2",{
    x:100,
    duration: 1.5,
    opacity: 0,
},"second")
tl3.from("#box3",{
    x: -100,
    duration: 1.5,
    opacity: 0,
},'second')