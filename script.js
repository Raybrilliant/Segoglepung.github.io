AOS.init();

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#nextnav'
  })

window.onscroll = function() {scrollFunction()};


function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("nextnav").classList.add("fixed-top")
    document.getElementById("nextnav").classList.remove("fixed-bottom")
    document.getElementById("fname").style.color="white";
    document.getElementById("fname").style.transition="1s";
    document.getElementById("box").style.transform ="translateX(-100%)";
    document.getElementById("box").style.transition="1s";
    
    } else {
    document.getElementById("nextnav").classList.remove("fixed-top")
    document.getElementById("nextnav").classList.add("fixed-bottom")
    document.getElementById("fname").style.color="black";
    document.getElementById("box").style.transform ="translateX(0%)";
    
    }
  }