$(function () {
    //banner part
    $('#banner_full').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
        nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
        prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
    });
    //banner part end

    //venobox start
    $('.venobox').venobox({
        spinner: 'wave',
    });
    //venobox end

    //  mixitup start  //
    var containerEl = document.querySelector('.img_mixit');

    var mixer = mixitup(containerEl);
    //mixit end//

    //about banner part start
    $('#about_full').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
        nextArrow: '<i class="fas fa-chevron-right nxt_arr_about"></i>',
        prevArrow: '<i class="fas fa-chevron-left prv_arr_about"></i>',
    });
    //about banner part end

    //color switcher start
    var colorSheets = [
        {
            color: "#ff8400",
            title: "Switch to Orange",
            href: "./css/color-Orange.css"
            },
        {
            color: "#ff463a",
            title: "Switch to Red",
            href: "./css/color-red.css"
            },
        {
            color: "#4bda28",
            title: "Switch to Green",
            href: "./css/color-green.css"
            },
        {
            color: "#4650dc",
            title: "Switch to Blue",
            href: "./css/color-blue.css"
            },
        {
            color: "#f41c54",
            title: "Switch to Magenta",
            href: "./css/color-magenta.css"
            },
        {
            color: "#f5f5f5",
            title: "Switch to Default",
            href: "./css/responsive.css"
            }
        ];

    ColorSwitcher.init(colorSheets);
    //color switcher end

    //menu fix start
    var navoff = $('.main_menu').offset().top;


    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $('.main_menu').addClass('menu_fix');
        } else {
            $('.main_menu').removeClass('menu_fix');
        }
    });
    //menu fix end


    //smooth scroll start
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });
    //smooth scroll end

})

//form validation

var fname = document.getElementById('fname');
var fname_err = document.getElementById('fname_err');

var email = document.getElementById('fmail');
var email_err = document.getElementById('fmail_err');
var regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var fsub = document.getElementById('fsub');
var fsub_err = document.getElementById('fsub_err');

var fmsg = document.getElementById('fmsg');
var fmsg_err = document.getElementById('fmsg_err');


function form_validation() {
    if (fname.value == '') {
        fname_err.innerHTML = '*Please Put Your Name';
        fname_err.style = 'color:red;';
        fname.style = 'border: 1px solid red;';
        fname.focus();
        return false;
    } else if (email.value == '') {
        email_err.innerHTML = '*Please give your Email';
        email_err.style = 'color:red;';
        email.style = 'border: 1px solid red;';
        email.focus();
        return false;
    } else if (!regx.test(email.value)) {
        email_err.innerHTML = 'Email Format doesnt match';
        email_err.style = 'color:red;';
        email.style = 'border: 1px solid red;';
        email.focus();
        return false;
    } else if (fsub.value == '') {
        fsub_err.innerHTML = '*Give a subject name'
        fsub_err.style = 'color:red;';
        fsub.style = 'border: 1px solid red;';
        fsub.focus();
        return false;
    } else if (fmsg.value == '') {
        fmsg_err.innerHTML = '*Give a message'
        fmsg_err.style = 'color:red;';
        fmsg.style = 'border: 1px solid red;';
        fmsg.focus();
        return false;
    }


}



function remove() {
    if (fname.value !== '') {
        fname_err.innerHTML = '';
        fname.style = 'border: 1px solid inherit;';
    }
    if (email.value !== '') {
        email_err.innerHTML = '';
        email.style = 'border: 1px solid inherit;';
    }
    if (fsub.value !== '') {
        fsub_err.innerHTML = '';
        fsub.style = 'border 1px solid inherit;';
    }
    if (fmsg.value !== '') {
        fmsg_err.innerHTML = '';
        fmsg.style = 'border 1px solid inherit;';
    }

}


fname.addEventListener('blur', remove);
email.addEventListener('blur', remove);
fsub.addEventListener('blur', remove);
fmsg.addEventListener('blur', remove);
