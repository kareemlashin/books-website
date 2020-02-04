$(document).ready(function () {

    $("#loading").fadeOut(1000, function () {
        $("body").css({ overflow: "auto" })
    })
    $(".nav-item .nav-link , .links li a").click(function () {
        let LinkHref = $(this).attr("href");
        $("html,body").animate({ scrollTop: $(LinkHref).offset().top }, 1000)
    })
    let futureTime = new Date("May 22, 2025 15:37:25").getTime();
    function timer() {
        let now = new Date().getTime();
        let between = futureTime - now;

        var day = Math.floor(between / (1000 * 60 * 60 * 24));
        var hours = Math.floor((between % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((between % (1000 * 60 * 60)) / (1000 * 60));
        var second = Math.floor((between % (1000 * 60)) / 1000);

        $(".days").text(day);
        $(".hours").text(hours);
        $(".minutes").text(minutes);
        $(".second").text(second);
        if (between < 0) {
            clearInterval(timer);

            $(".days").text("it");
            $(".hours").text("is");
            $(".minutes").text("started");
            $(".second").text("now");
        }
    }
    setInterval(timer, 1000);
    $('.owl-carousel').owlCarousel({
        rtl: true,
        loop: true,
        margin: 20,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            }, 1000: {
                items: 3

            }
        }
    })
    $(".owl-prev").empty();
    $(".owl-prev").append("<i class='fas fa-arrow-right pt-3 pl-3'></i>")
    $(".owl-next").empty();
    $(".owl-next").append("<i class='fas fa-arrow-left pt-3 pr-3'></i>")

    let windowHeight = $(window).height();
    let navHeight = $(".navbar").height();
    AOS.init();

    $(".slide , .carousel-item").height(windowHeight - navHeight);
    $(".slide").css({ marginTop: navHeight });
    $(".nav-link").click(function () {
        $(this).addClass("active");
        $(".nav-link").not(this).removeClass("active");
    })

    let contOffset = $(".count").offset().top;
    $(window).scroll(function () {

        let myWindow = $(window).scrollTop();
        if (myWindow > contOffset - navHeight) {
            function inc1() {
                let num1 = $("#oneCount").text();
                if (num1 < 1000) {
                    num1++;
                    clearInterval(inc1)
                }
                $("#oneCount").text(num1)
            }
            function inc2() {
                let num2 = $("#twoCount").text();
                if (num2 < 490) {
                    num2++;
                    clearInterval(inc2)
                }
                $("#twoCount").text(num2)


            }
            function inc3() {
                let num3 = $("#threeCount").text();
                if (num3 < 500) {
                    num3++;
                    clearInterval(inc3)
                }
                $("#threeCount").text(num3)


            }

            function inc4() {
                let num4 = $("#fourCount").text();
                if (num4 < 50) {
                    num4++;
                    clearInterval(inc4)
                }
                $("#fourCount").text(num4)
            }
            setInterval(inc3, 10);
            setInterval(inc2, 20);
            setInterval(inc1, 50);
            setInterval(inc4, 100);
        }
    })


})
/*
$(document).ready(function () {

    $(document).ready(function () {
        $("#load").fadeOut(2000, function () {
            $("body,html").css("overflow", "auto")
        })

        $(".menuBar").click(function () {
            $(".meun").css({ right: 0 + "px" });
            $(".side").css({ right: 0 + "px" });

        })



        $(".closemenu").click(function () {
            $(".meun").css({ right: -350 + "px" });
            $(".side").css({ right: -350 + "px" });

        })

        $(".side  li a").click(function () {
            let myHref = $(this).attr("href");
            $("body,html").animate({ scrollTop: $(myHref).offset().top + 30 + 'px' }, 1000)
        })

        $(".upPage").click(function () {
            $("body ,html").animate({ scrollTop: 0 }, 2000)
        })

        AOS.init();
    })

    let myProg = $(".prog").offset().top + 300;
    $(window).scroll(function () {
        let myWind = $(window).scrollTop();
        if (myWind > myProg) {
            $('#bar1').barfiller({

                // color of bar
                barColor: '#ffb100',

                // shows a tooltip
                tooltip: false,

                // duration in ms
                duration: 1000,

                // re-animate on resize
                animateOnResize: false,

                // custom symbol
                symbol: "%"

            });
            $('#bar2').barfiller({

                // color of bar
                barColor: '#ffb100',

                // shows a tooltip
                tooltip: false,

                // duration in ms
                duration: 1000,

                // re-animate on resize
                animateOnResize: false,

                // custom symbol
                symbol: "%"

            });
            $('#bar3').barfiller({

                // color of bar
                barColor: '#ffb100',

                // shows a tooltip
                tooltip: false,

                // duration in ms
                duration: 1000,

                // re-animate on resize
                animateOnResize: false,

                // custom symbol
                symbol: "%"

            });
            $('#bar4').barfiller({

                // color of bar
                barColor: '#ffb100',

                // shows a tooltip
                tooltip: false,

                // duration in ms
                duration: 1000,

                // re-animate on resize
                animateOnResize: false,

                // custom symbol
                symbol: "%"

            });
            $('#bar5').barfiller({

                // color of bar
                barColor: '',

                // shows a tooltip
                tooltip: false,

                // duration in ms
                duration: 1000,

                // re-animate on resize
                animateOnResize: false,

                // custom symbol
                symbol: "%"

            });
            $('#bar7').barfiller({

                // color of bar
                barColor: '#ffb100',

                // shows a tooltip
                tooltip: false,

                // duration in ms
                duration: 1000,

                // re-animate on resize
                animateOnResize: false,

                // custom symbol
                symbol: "%"

            });
            $('#bar9').barfiller({

                // color of bar
                barColor: '#ffb100',

                // shows a tooltip
                tooltip: false,

                // duration in ms
                duration: 1000,

                // re-animate on resize
                animateOnResize: false,

                // custom symbol
                symbol: "%"

            });
            $('#bar14').barfiller({

                // color of bar
                barColor: '#ffb100',

                // shows a tooltip
                tooltip: false,

                // duration in ms
                duration: 1000,

                // re-animate on resize
                animateOnResize: false,

                // custom symbol
                symbol: "%"

            });
            $('#bar13').barfiller({

                // color of bar
                barColor: '#ffb100',

                // shows a tooltip
                tooltip: false,

                // duration in ms
                duration: 1000,

                // re-animate on resize
                animateOnResize: false,

                // custom symbol
                symbol: "%"

            });
            $('#bar12').barfiller({

                // color of bar
                barColor: '#ffb100',

                // shows a tooltip
                tooltip: false,

                // duration in ms
                duration: 1000,

                // re-animate on resize
                animateOnResize: false,

                // custom symbol
                symbol: "%"

            });
            $('#bar11').barfiller({

                // color of bar
                barColor: '#ffb100',

                // shows a tooltip
                tooltip: false,

                // duration in ms
                duration: 1000,

                // re-animate on resize
                animateOnResize: false,

                // custom symbol
                symbol: "%"

            });
            $('#bar10').barfiller({

                // color of bar
                barColor: '#ffb100',

                // shows a tooltip
                tooltip: false,

                // duration in ms
                duration: 1000,

                // re-animate on resize
                animateOnResize: false,

                // custom symbol
                symbol: "%"

            });
        }
    })
    $("#list li a").click(function () {
        let dataChose = $(this).attr("data-filter");
        if (dataChose == "all") {
            $(".filter").slideDown(1000);
        } else {
            $('.filter').not("." + dataChose).slideUp(1000);
            $('.filter').filter("." + dataChose).slideDown(1000);
        }
    })

    $("#list li a").click(function () {
        $(this).addClass("activeX");
        $("#list li a").not(this).removeClass('activeX');
    })


    function validName(name) {
        let nameRegex = /^[A-zا-ي]{2,}$/;
        if (nameRegex.test(name)) {
            return true;
        } else {
            return false;
        }
    }

    function validEmail(email) {
        let emailRegex = /^[A-z][A-z0-9]{2,}@(yahoo|gmail).com$/;
        if (emailRegex.test(email)) {
            return true;
        } else {
            return false;
        }
    }
    function validPass(pass) {
        let passRegex = /^[A-z0-9]{8,}$/;
        if (passRegex.test(pass)) {
            return true;
        } else {
            return false;
        }
    }
    function validMassage(massage) {
        let massageRegex = /^[A-z0-9]{20,100}$/;
        if (massageRegex.test(massage)) {
            return true;
        } else {
            return false;
        }
    }

    $("#messageInp").keyup(function () {
        let messageValue = $("#messageInp").val();
        if (validMassage(messageValue) == true) {
            $("#errorMassage").css("display", "none")
            $("#send").removeAttr("disabled")

        }
        else {
            $("#errorMassage").css("display", "block")
            $("#send").attr("disabled", "true")

        }
    })

    $("#inpPass").keyup(function () {
        let passValue = $("#inpPass").val();
        if (validPass(passValue) == true) {
            $("#errorPass").css("display", "none")
            $("#send").removeAttr("disabled")

        }
        else {
            $("#errorPass").css("display", "block")
            $("#send").attr("disabled", "true")

        }
    })

    $("#inpName").keyup(function () {
        let nameValue = $("#inpName").val();
        if (validName(nameValue) == true) {
            $("#erorrName").css("display", "none")
            $("#send").removeAttr("disabled")

        }
        else {
            $("#erorrName").css("display", "block")
            $("#send").attr("disabled", "true")

        }
    })

    $("#inpEmail").keyup(function () {
        let emailValue = $("#inpEmail").val();
        if (validEmail(emailValue) == true) {
            $("#erorrEmail").css("display", "none")
            $("#send").removeAttr("disabled")

        }
        else {
            $("#erorrEmail").css("display", "block")
            $("#send").attr("disabled", "true")
        }
    })

    $("#messageInp").keyup(function () {
        $("#manyChar").css("display", "block")
        let manyCharMax = $(this).attr("maxlength");
        let manyChar = document.getElementById("messageInp").value;
        let x = manyChar.length;
        $("#manyChar").text(manyCharMax - x)
        if (manyCharMax - x == 0) {
            $("#manyChar").css("color", "#ffb100")
        } else {
            $("#manyChar").css("color", "#888")

        }
    })


    $("#send").click(function () {

        resetInput();
    })

    function resetInput() {
        let inputs = document.getElementsByClassName("inp");
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
        }
    }


})
*/


