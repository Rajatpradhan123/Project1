gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".Main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".Main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".Main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".Main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



gsap.to("#Nav2", {

    y: -100,
    duration: 1,
    scrollTrigger:
    {
      trigger: "nav",
      scroller: ".Main",
      scrub: true,
      markers: false,
      start: "top 0",
      end: "top -10%"
  
  
    }
  
  })
  
  gsap.to(".Page1 video",
    {
  
      filter: "blur(20px)",
      transform: "scaleX(0.85)",
      scrollTrigger: {
        trigger: ".Page1",
        scroller: ".Main",
        start: "top 0",
        end: "top -50%",
        scrub: true
      }
  
    })
  
  


    var t1 = gsap.timeline()

t1.from("#head", {

  x: -30,
  opacity: 0,
  delay: 0.5,
  duration: 1,
  scrub: true,
  scrollTrigger: {
    trigger: "#head",
    scroller: ".Main",
    start: "top 50%",
    end: "top 0",
    scrub: true
  }


})



t1.from("#Box2>#p", {
  x:30,
  opacity: 0,
  delay: 0.8,
  duration: 1,
  scrub: true,
  scrollTrigger: {
    trigger: "#p",
    scroller: ".Main",
    start: "top 50%",
    end: "top 25%",
    scrub: true
  }

})

t1.from("#Box2>.btn", {
  y:-30,
  opacity: 0,
  delay: 0.8,
  duration: 0.5,
  scrub: true,
  scrollTrigger: {
    trigger: ".btn",
    scroller: ".Main",
    start: "top 80%",
    end: "top 25%",
    scrub: true
  }

})




var t2 = gsap.timeline()

t2.from(".circle", {

  x:30,
  opacity: 0,
  delay: 0.3,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".circle",
    scroller: ".Main",
    start: "top 80%",
    end: "top 25%",
    scrub: true
  }

})


t2.from(".circle1", {

  y:-70,
  opacity: 0,
  delay: 0.3,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".circle1",
    scroller: ".Main",
    start: "top 80%",
    end: "top 25%",
    scrub: true
  }

})


t2.from(".circle2", {

  y:-80,
  opacity: 0,
  delay: 0.3,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".circle2",
    scroller: ".Main",
    start: "top 80%",
    end: "top 25%",
    scrub: true
  }

})


t2.from(".circle3", {

  y:-70,
  opacity: 0,
  delay: 0.3,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".circle3",
    scroller: ".Main",
    start: "top 80%",
    end: "top 25%",
    scrub: true
  }

})


t2.from(".circle4", {

  x:30,
  opacity: 0,
  delay: 0.3,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".circle4",
    scroller: ".Main",
    start: "top 80%",
    end: "top 25%",
    scrub: true
  }

})


t2.from(".circle5", {

  y:50,
  opacity: 0,
  delay: 0.3,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".circle5",
    scroller: ".Main",
    start: "top 80%",
    end: "top 25%",
    scrub: true
  }

})


t2.from(".circle6", {

  x:-30,
  opacity: 0,
  delay: 0.3,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".circle6",
    scroller: ".Main",
    start: "top 80%",
    end: "top 25%",
    scrub: true
  }

})



var t3 = gsap.timeline()

t3.from("#head3", {

  y:30,
  opacity: 0,
  delay: 0.3,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#head3",
    scroller: ".Main",
    start: "top 50%",
    end: "top 0%",
    scrub: true
  }

})




var t4 = gsap.timeline()

t3.from(".Box3", {

  y:30,
  opacity: 0,
  delay: 0.3,
  duration: 1,
  scrollTrigger: {
    trigger: ".Box3",
    scroller: ".Main",
    start: "top 50%",
    end: "top 0%",
    scrub: true
  }

})



