$(document).ready(function() {

    function couter() {
        var n = $('.c').attr('id');
        var c = n;
        $('.c').text(c);
        setInterval(function() {
            c--;
            if (c >= 0) {
                $('.c').text(c);
            }
            if (c == 0) {
                $('.c').text(n);

                if (array[0] == posao[0] && array[1] == posao[1] && array[2] == posao[2] &&
                    array[3] == posao[3] && array[4] == posao[4] && array[5] == posao[5]) {
                    window.alert("Braaaaaavo, play again!");
                    document.location.href = "/game/";
                } else {
                    window.alert("To slow baby, to slow!");
                    window.location.reload();
                }
            }
        }, 1000);
    }

    var array = [];

    var posao = ['p', 'o', 's', 'a', 'o'];


    $("#triger").click(function() {
        $("#p").addClass("p");
        $("#a").addClass("a");
        $("#s").addClass("s");
        $("#o").addClass("o");
        $("#last").addClass("last");
        $("#triger").css("display", "none");

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            couter();
            setInterval(function() {
                couter();
            }, 2000);
        } else {
            couter();
            setInterval(function() {
                couter();
            }, 4000);
        }
    });

    $("#p").click(function() {
        $("#tp").css("display", "block");
        $("#p").css("display", "none");
        array.push('p');
        if (array.length > 4) {
            if (array[0] == posao[0] && array[1] == posao[1] && array[2] == posao[2] &&
                array[3] == posao[3] && array[4] == posao[4] && array[5] == posao[5]) {
                window.alert("Braaaaaavo, play again!");
                window.location.reload();
            }
        }


    });
    $("#o").click(function() {
        $("#to").css("display", "block");
        $("#o").css("display", "none");
        array.push('o');
        if (array.length > 4) {
            if (array[0] == posao[0] && array[1] == posao[1] && array[2] == posao[2] &&
                array[3] == posao[3] && array[4] == posao[4] && array[5] == posao[5]) {
                window.alert("Braaaaaavo, play again!");
                window.location.reload();
            }
        }
    });
    $("#s").click(function() {
        $("#ts").css("display", "block");
        $("#s").css("display", "none");
        array.push('s');
        if (array.length > 4) {
            if (array[0] == posao[0] && array[1] == posao[1] && array[2] == posao[2] &&
                array[3] == posao[3] && array[4] == posao[4] && array[5] == posao[5]) {
                window.alert("Braaaaaavo, play again!");
                window.location.reload();
            }
        }
    });

    $("#a").click(function() {
        $("#ta").css("display", "block");
        $("#a").css("display", "none");
        array.push('a');
        if (array.length > 4) {
            if (array[0] == posao[0] && array[1] == posao[1] && array[2] == posao[2] &&
                array[3] == posao[3] && array[4] == posao[4] && array[5] == posao[5]) {
                window.alert("Braaaaaavo, play again!");
                window.location.reload();
            }
        }
    });

    $("#last").click(function() {
        $("#tlast").css("display", "block");
        $("#last").css("display", "none");
        array.push('o');
        if (array.length > 4) {
            if (array[0] == posao[0] && array[1] == posao[1] && array[2] == posao[2] &&
                array[3] == posao[3] && array[4] == posao[4] && array[5] == posao[5]) {
                window.alert("Braaaaaavo, play again!");
                window.location.reload();
            }
        }
    });
});