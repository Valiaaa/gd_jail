$(document).ready(function(){

    var menuht = $('#main').height();
    $('.menu').height(menuht);

    //stretched
    $("#stretchsl").on('change',function updateSliderValue() {
        var output = $(this).siblings("output").first();
        $(output).val($(this).val());
        var width = $("#stretchvalue").val().toString();
        var fontwidth = 'scaleX(' + width/100 + ')';
        $("#stretcht").css('transform', fontwidth);

        if ($('#stretchvalue').val() == '100') {
            $("#stretchgif").attr('src',"pic/party.gif");
            $("#stretch").addClass("strike")
        } else {
            $("#stretchgif").attr('src',"pic/bomb.gif");
        }
    });


    //skewed
    $("#skewsl").on('change',function updateSliderValue() {
        var output = $(this).siblings("output").first();
        $(output).val($(this).val());
        var degree = $("#skewvalue").val().toString();
        var fontdegree = 'skew(' + degree + 'deg)';
        $("#skewt").css('transform', fontdegree);

        if ($('#skewvalue').val() == '0' && $('#skewcheck').is(':checked')) {
            $("#skewgif").attr('src',"pic/party.gif");
            $("#skew").addClass("strike")
        } else {
            $("#skewgif").attr('src',"pic/bomb.gif");
        }
    });

    $('#skewcheck').change(function(){
        if ($(this).is(':checked')) {
            $("#skewt").css("font-style", "italic");
        } else {
            $("#skewt").css("font-style", "normal");
        }

        if ($('#skewvalue').val() == '0' && $('#skewcheck').is(':checked')) {
            $("#skewgif").attr('src',"pic/party.gif");
            $("#skew").addClass("strike")
        } else {
            $("#skewgif").attr('src',"pic/bomb.gif");
        }
    });


    //hang
    $('#hangstory').change(function(){
        if ($(this).is(':checked')) {
            $("#hangt").css("hanging-punctuation", "first");
        } else {
            $("#hangt").css("hanging-punctuation", "none");
        }

        if ($(this).is(':checked') && $('#hangsmart').is(':checked')) {
            $("#hanggif").attr('src',"pic/party.gif");
            $("#hang").addClass("strike")
        } else {
            $("#hanggif").attr('src',"pic/bomb.gif");
        }
    });

    $('#hangsmart').change(function(){
        if ($(this).is(':checked')) {
            $("#hangt").html('“This is supposed to be an<br>hanged smart quote.”');
        } else {
            $("#hangt").html('"This is supposed to be an<br>hanged smart quote."');
        }

        if ($(this).is(':checked') && $('#hangstory').is(':checked')) {
            $("#hanggif").attr('src',"pic/party.gif");
            $("#hang").addClass("strike")
        } else {
            $("#hanggif").attr('src',"pic/bomb.gif");
        }
    });


    //hyphen
    $("input[type='radio'][name='a']").change(function() {
        if ($("#hy11").is(':checked')) {
            $("#hy1").html("-");
        } else if ($("#hy12").is(':checked')) {
            $("#hy1").html("–");
        } else {
            $("#hy1").html("—");
        }

        if ($("#hy12").is(':checked') && $("#hy23").is(':checked')) {
            $("#hyphengif").attr('src',"pic/party.gif");
            $("#hyphen").addClass("strike")
        } else {
            $("#hyphengif").attr('src',"pic/bomb.gif");
        }
    });

    $("input[type='radio'][name='b']").change(function() {
        if ($("#hy21").is(':checked')) {
            $("#hy2").html("-");
        } else if ($("#hy22").is(':checked')) {
            $("#hy2").html("–");
        } else {
            $("#hy2").html("—");
        }

        if ($("#hy12").is(':checked') && $("#hy23").is(':checked')) {
            $("#hyphengif").attr('src',"pic/party.gif");
            $("#hyphen").addClass("strike")
        } else {
            $("#hyphengif").attr('src',"pic/bomb.gif");
        }
    });







    checkfinal = setInterval(() => {
        if ($('#stretch').hasClass("strike")) {
            // $('#alarm').show();
            checkfinal = clearInterval(checkfinal);
        } else {

        }
    }, 1);

});