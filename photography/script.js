window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle("window_scrolled", window.scrollY > 0);
});

document.addEventListener("DOMContentLoaded", function () {
    var multipleCardCarousel = document.querySelector("#carouselExampleControls");

    // Set scrolling button functionality
    function setScrollingButtons() {
        var carouselWidth = $(".carousel-inner")[0].scrollWidth;
        var cardWidth = $(".carousel-item").width();
        var scrollPosition = 0;

        $("#carouselExampleControls .carousel-control-next").on("click", function () {
            if (scrollPosition < carouselWidth - cardWidth * 3) {
                scrollPosition += cardWidth;
                $("#carouselExampleControls .carousel-inner").animate(
                    { scrollLeft: scrollPosition },
                    600
                );
            }
        });

        $("#carouselExampleControls .carousel-control-prev").on("click", function () {
            if (scrollPosition > 0) {
                scrollPosition -= cardWidth;
                $("#carouselExampleControls .carousel-inner").animate(
                    { scrollLeft: scrollPosition },
                    600
                );
            }
        });
    }

    // Check media query
    if (window.matchMedia("(min-width: 576px)").matches) {
        var carousel = new bootstrap.Carousel(multipleCardCarousel, {
            interval: false
        });

        // Call setScrollingButtons function
        setScrollingButtons();
    } else {
        $(multipleCardCarousel).addClass("slide");
    }
});


// Get references to the open and close buttons
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const menu = document.querySelector(".menu");
const navbar = document.querySelector("nav")

// Hide the close button initially
closeBtn.style.display = 'none';

// Add event listener to the close button
closeBtn.addEventListener('click', function() {
    // Hide the close button
    closeBtn.style.display = 'none';
    // Show the open button
    openBtn.style.display = 'inline-block';
    menu.style.display = "none"
});

// Add event listener to the open button
openBtn.addEventListener('click', function() {
    // Hide the open button
    openBtn.style.display = 'none';
    // Show the close button
    closeBtn.style.display = 'inline-block';
    menu.style.display = "block";
});
