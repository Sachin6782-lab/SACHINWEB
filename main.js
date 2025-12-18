let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse");

toggle.addEventListener('click' , function(){
    collapse.forEach(col => col.classList.toggle("collapse-toggle"));
})

// with masonry
new Masonry("#posts .grid", {
    itemSelector : '.grid-item',
    gutter : 20
});

// swiper libray initialization
new Swiper('.swiper-container', {
    direction : 'horizontal',
    loop : true,
    slidesPerView : 5,
    autoplay : {
        delay : 3000
    },
    // responsive brakpoints
    breakpoints : {
        '@0' : {
            slidesPerView : 2
        },
        // 888px
        '@1.00' : {
            slidesPerView : 3
        },
        // 1110px
        '@1.25' : {
            slidesPerView : 4
        },
        // 1330px
        '@1.50' : {
            slidesPerView: 5
        }
    }
})

// Sticky Navigation
window.onscroll = function(){ myFunction()};

// get the current value 
let navbar = document.getElementById("header");

// get the navbar position
let sticky = navbar.offsetTop;

// sticky function
function myFunction(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }
}function searchKTM() {
    let query = document.getElementById("searchInput").value.toLowerCase().trim();

    // mapping search terms to pages
    let pages = {
        "duke": "duke.html",
        "rc": "rc.html",
        "adventure": "adventure.html",
        "enduro": "enduro.html",
        "x-bow": "xbow.html",
        "xbow": "xbow.html" // handle without dash
    };

    if (pages[query]) {
        window.location.href = pages[query];
    } else {
        alert("Model not found! Try: Duke, RC, Adventure, Enduro, X-Bow.");
    }
}
