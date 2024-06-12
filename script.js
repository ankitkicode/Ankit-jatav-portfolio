var smallCur = document.querySelector("#cursor");
var bigCur = document.querySelector("#cursor2");
var gola = document.querySelector("#gola");
var videoConElements = document.querySelectorAll(".videoCon");
var imageslide = document.querySelector("#imageslide");

document.addEventListener("mousemove", function(dets) {
    gsap.to(smallCur, {
        left: dets.x,
        top: dets.y
    });

    gsap.to(bigCur, {
        left: dets.x,
        top: dets.y
    });

    gsap.to(gola, {
        left: dets.x,
        top: dets.y,
        delay: 0.1
    });
});

videoConElements.forEach(function(videoCon) {
    videoCon.addEventListener("mouseenter", function(dets) {
        gsap.to(bigCur, {
            scale: 10
        });
    });

    videoCon.addEventListener("mouseleave", function(dets) {
        gsap.to(bigCur, {
            scale: 1
        });
    });
});

function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }
  locomotiveAnimation();
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

gsap.to("#page6 h1",{
    x:"-50%",
    scrollTrigger:{
      trigger:"#page6 h1",
      start:"top 70%",
      end:"top -10%",
     scroller:"#main",
    //  markers:true,
     scrub:3
    }
})

document.addEventListener("mousemove",function(dets){
  gsap.to(imageslide, {
    left: dets.x,
    top: dets.y
});
})

function handleMouseEvents(box, marginTop) {
  box.addEventListener("mouseenter", function() {
    document.querySelector("#photo1").style.marginTop = marginTop;
    imageslide.style.scale = 1;
  });
  box.addEventListener("mouseleave", function() {
    document.querySelector("#photo1").style.marginTop = "0%";
    imageslide.style.scale = 0;
  });
}

var boxes = [
  document.querySelector("#pbox1"),
  document.querySelector("#pbox2"),
  document.querySelector("#pbox3"),
  document.querySelector("#pbox4"),
  document.querySelector("#pbox5")
];

var marginTopValues = ["0%", "-100%", "-200%", "-300%", "-400%"];

for (let i = 0; i < boxes.length; i++) {
  handleMouseEvents(boxes[i], marginTopValues[i]);
}

// gsap.from("#nav",{
//   opacity:0,
//   y:"8vh"
// })

var tl = gsap.timeline();

tl.from("#nav",{
  opacity:0,
  y:"8vh"
})
tl.from("#box1",{
  opacity:0,
  x:"8vh",
  duration:.3
})
tl.from("#box2",{
  opacity:0,
  x:"8vh",
  duration:.3
})
tl.from("#box3",{
  opacity:0,
  y:"8vh",
  duration:.3
})

var menubtn = document.querySelector("#menubtn");
var menu = document.querySelector(".mmenu");
var closebtn = document.querySelector(".ri-close-circle-line");

// Open the menu when the menu button is clicked
menubtn.addEventListener("click", function () {
  menu.style.right = 0;
});

// Close the menu when the close button is clicked
closebtn.addEventListener("click", function () {
  menu.style.right = "-100%"; // You can adjust this value based on your design
});

