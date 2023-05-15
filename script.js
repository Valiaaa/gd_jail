$(document).ready(function(){

    var menuht = $('#main').height();
    $('.menu').height(menuht);

    var menuwt = $('#menu').width();
    $('#ad').width(menuwt);
    var menuh = $('#menu').height();
    $('#ad').css("top", menuh + 14);

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
    var hangwt = $('#hangt1').width();
    $('#hangt2').width(hangwt);

    $('#hangstory').change(function(){
        if ($(this).is(':checked')) {
            $("#hangt2").css("transform", "translateX(1.5vw)");
        } else {
            $("#hangt2").css("transform", "translateX(0)");
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
            $("#hangt1").text($("#hangt1").text().replace('"', "“"));
            $("#hangt2").text($("#hangt2").text().replace('"', "”"));
        } else {
            $("#hangt1").text($("#hangt1").text().replace("“", '"'));
            $("#hangt2").text($("#hangt2").text().replace("”", '"'));
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


    //poor
    $("input[type='radio'][name='c']").change(function() {
        if ($("#poor1").is(':checked')) {
            $("#poort").css("font-family","comic sans ms");
        } else if ($("#poor2").is(':checked')) {
            $("#poort").css("font-family","papyrus");
        } else if ($("#poor3").is(':checked')) {
            $("#poort").css("font-family","Brush Script MT");
        } else if ($("#poor4").is(':checked')) {
            $("#poort").css("font-family","futura");
        } else if ($("#poor5").is(':checked')) {
            $("#poort").css("font-family","freight-big-pro");
        }

        if ($("#hy12").is(':checked') && $("#hy23").is(':checked')) {
            $("#hyphengif").attr('src',"pic/party.gif");
            $("#hyphen").addClass("strike")
        } else {
            $("#hyphengif").attr('src',"pic/bomb.gif");
        }
    });


    //bad
    $("input[type='radio'][name='c']").change(function() {
        if ($("#poor1").is(':checked')) {
            $("#poort").css("font-family","comic sans ms");
        } else if ($("#poor2").is(':checked')) {
            $("#poort").css("font-family","papyrus");
        } else if ($("#poor3").is(':checked')) {
            $("#poort").css("font-family","Brush Script MT");
        } else if ($("#poor4").is(':checked')) {
            $("#poort").css("font-family","futura");
        } else if ($("#poor5").is(':checked')) {
            $("#poort").css("font-family","freight-big-pro");
        }

        if ($("#poor5").is(':checked')) {
            $("#poorgif").attr('src',"pic/party.gif");
            $("#poor").addClass("strike")
        } else {
            $("#poorgif").attr('src',"pic/bomb.gif");
        }
    });





    //check final
    var show = true;

    $("input[type='radio'], input[type='range'], input[type='checkbox']").change(function() {
        if ($('#stretch').hasClass("strike") && $('#skew').hasClass("strike") && show) {
            setTimeout(function()
            {alert("Final Challenge Unlocked!");},40);
            show = false;
        } else {}
    });

});