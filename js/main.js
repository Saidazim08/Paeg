$(document).ready(function () {
    $(".news").owlCarousel({
        margin: 20,
        responsiveClass: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
                loop: false
            }
        }
    });

    $(".news1").owlCarousel({
        margin: 20,
        responsiveClass: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 2,
                loop: false
            }
        }
    });
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

