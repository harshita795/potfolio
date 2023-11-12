
function revealToSpan() {
    document.querySelectorAll(".reveal")
        .forEach(function (elem) {
            // creating two spans
            let spanParent = document.createElement("span");
            let spanChild = document.createElement("span");
            
            // Adding classes to the parent and child span
            spanParent.classList.add("parent");
            spanChild.classList.add("child");
    
            // span parent gets child and child gets elem details
            spanChild.innerHTML = elem.innerHTML;
            spanParent.appendChild(spanChild);
    
            // elem replaces its value with parent span
            elem.innerHTML = "";
            elem.appendChild(spanParent);
        });
}

function valueSetters(){
    gsap.set("#nav a", { y: "-100%", opacity: 0 });
    gsap.set("#home span .child", {y: "100%"});
    gsap.set("#home .row img", { opacity: 0 });

    document.querySelectorAll("#Visual>g").forEach(function (e) {
        var character = e.childNodes[1].childNodes[1];
        character.style.strokeDasharray = character.getTotalLength() + "px"; 
        character.style.strokeDashoffset = character.getTotalLength() + "px";
    })

}

function loaderAnimation() {
var tl = gsap.timeline();

tl
.from("#loader .child span", {
     x: "100",
     duration: 1.4,
     stagger: .2,
     ease: Power3.easeInOut
})
.to("#loader .parent .child", {
    y: "-100%",
    duration: 1,
    ease: Circ.easeInOut
})
.to("#loader", {
    height: 0,
    duration: 1,
    ease: Circ.easeInOut
})
.to("#green", {
    height : "100%",
    top:0,
    duration: 1,
    delay: -.8,
    ease: Circ.easeInOut
})
.to("#green", {
    height : "0%",
    duration: 1,
    delay: -.5,
    ease: Circ.easeInOut,
    onComplete: function(){
        animateHomepage();
    }
})

}

function animateHomepage(){
   
    var tl = gsap.timeline();

    tl.to("#nav a", {
        y: 0,
        opacity: 1,
        stagger: .05,
        ease:Expo.easeInOut
    })
    tl.to("#home .parent .child", {
        y: 0,
        stagger: .1,
        duration: 1.5,
        ease:Expo.easeInOut
    })
    tl.to("#home .row img", {
        opacity: 1,
        delay:-.5,
        ease:Expo.easeInOut,
        onComplete: function(){
            animateSvg();
        }
    })
}

function animateSvg(){
    

    gsap.to("#Visual>g>g>path, #Visual>g>g>polyline", {
            strokeDashoffset: 0,
            duration:2,
            ease:Expo.easeInOut,
            
        }
    )
}

function locoInitialize(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}

function cardHoverEffect() {
    document.querySelectorAll(".cnt")
    .forEach(function(cnt){
        var showingImage;
        cnt.addEventListener("mousemove", function(dets) {
            document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
            showingImage = dets.target;
            document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
            showingImage.style.filter = "grayscale(1)";

            document.querySelector("#work").style.backgroundColor = "#" + dets.target.dataset.color;
        })

        cnt.addEventListener("mouseleave", function(dets) {
            document.querySelector("#cursor").children[showingImage.dataset.index].style.opacity = 0;
            showingImage.style.filter = "grayscale(0)";
            document.querySelector("#work").style.backgroundColor = "#f2f2f2";
        })
    })
}




revealToSpan(); 
valueSetters();
loaderAnimation();
// locoInitialize();
cardHoverEffect();




