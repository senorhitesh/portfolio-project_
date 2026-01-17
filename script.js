const tl = gsap.timeline();

tl.from(".page1", {
  opacity: 0,
  scaleX: 0.4,
  scaleY: 0,
  duration: 1,
  borderRadius: "50px",
  x: -20,
  y: 200,
  ease: "expo.inOut"
});
tl.from(".page1 h1,.page1 p, .page1 div", {
  y: 100,
  opacity: 0,
  ease: "power4.inOut",
  duration: 1
});
tl.from("nav",{
  translateY:-100,
  opacity:0,
  ease: "power4.inOut",
  duration:1
})



let hoverDivs = document.querySelectorAll(".projects-divs");
let arrow = document.querySelector(".arrow");

hoverDivs.forEach((div) =>{
    div.addEventListener("mouseenter",function(){
         gsap.to( div.childNodes[3],{
            opacity:1 ,
            scale:1
         })
    })
    div.addEventListener("mouseleave",function(){
         gsap.to( div.childNodes[3],{
            opacity:0 ,
            scale:0
         })
    })
    div.addEventListener("mousemove",function(value){
        gsap.to( div.childNodes[3],{
           x:value.x - div.getBoundingClientRect().x - 30,
           y:value.y - div.getBoundingClientRect().y -140
         })
    })
})

const sections = document.querySelectorAll(".part1-right");
const cursor = document.querySelector(".cursor");


sections.forEach((ele)=>{

  ele.addEventListener("mouseenter",function(){
   //ele.childNodes[3] selecting the video element of section

   gsap.to(ele.childNodes[3],{
    opacity:1,
    onStart:ele.childNodes[3].play()
   })
   gsap.to(cursor,{
    opacity:1,
    scale:1,
    ease: "power1.out"

   })

  })
  ele.addEventListener("mouseleave",function(){
   //ele.childNodes[3] selecting the video element of section
   gsap.to(ele.childNodes[3],{
    opacity:0,
    onStart:ele.childNodes[3].pause()
   })
   gsap.to(cursor,{
    opacity:0,
    scale:.75,
   })

  })
    ele.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX +10 + "px";
    cursor.style.top = e.clientY +10 + "px";
  });
   
     ele.addEventListener("mousedown",()=>{
     gsap.to(cursor,{
     scale:.75,
     })
     })
     ele.addEventListener("mouseup",()=>{
     gsap.to(cursor,{
     scale:1, 
     })
     })
})
function smoothScroll(){
   gsap.registerPlugin(".main");

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ".main".update);

".main".scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

".main".addEventListener("refresh", () => locoScroll.update());

".main".refresh();
}
smoothScroll()