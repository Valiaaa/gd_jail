$(document).ready(function(){

    var menuht = $('#main').height();
    $('.menu').height(menuht);

    var menuwt = $('#menu').width();
    $('#ad').width(menuwt);
    var menuh = $('#menu').height();
    $('#ad').css("top", menuh + 14);



    //final
    $('#control2').change(function(){
        if ($(this).is(':checked')) {
            $(".control2").hide();
            $(".control").show();
            $(this).prop("checked", false);
        } else {
            $(".control2").show();
            $(".control").hide();
        }
    });

    $('#control').change(function(){
        if ($(this).is(':checked')) {
            $(".control").hide();
            $(".control2").css("display","inline-block");
            $(this).prop("checked", false);
        } else {
            $(".control").show();
            $(".control2").hide();
        }
    });

    $('#catgif').change(function(){
        if ($(this).is(':checked')) {
            $(".catjail").show();
        } else {
            $(".catjail").hide();
        }
    });

    $('#advertisement').change(function(){
        if ($(this).is(':checked')) {
            $("#ad2").css({"opacity": "1" , 'transition': 'none'});
        } else {
            $("#ad2").css({"opacity": "0" , 'transition': 'none'});
        }
    });

    $("#bgred, #bggreen, #bgblue").on('change',function updateSliderValue() {
        var output = $(this).siblings("output").first();
        $(output).val($(this).val());
        var redValue = $("#bgredvalue").val().toString();
        var greenValue = $("#bggreenvalue").val().toString();
        var blueValue = $("#bgbluevalue").val().toString();
        var color = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
        $(":root").css("--bg", color);
    });

    $("#titlefont").each(function(){
        $(this).on('change',function updateSliderValue() {
            output = $(this).val();
            $(output).val($(this).val());
            $('#title2').css('font-family', output);
        });
    });

    $("#titlered, #titlegreen, #titleblue").on('change',function updateSliderValue() {
        var output = $(this).siblings("output").first();
        $(output).val($(this).val());
        var redValue = $("#titleredvalue").val().toString();
        var greenValue = $("#titlegreenvalue").val().toString();
        var blueValue = $("#titlebluevalue").val().toString();
        var color = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
        $("#title2").css("color", color);
    });

    $("#titlesize").on('change',function updateSliderValue() {
        var output = $(this).siblings("output").first();
        $(output).val($(this).val());
        var size = $("#titlesizevalue").val().toString();
        $("#title2").css({'font-size': size + "px"});
    });

    $("#titlescale").on('change',function updateSliderValue() {
        var output = $(this).siblings("output").first();
        $(output).val($(this).val());
        var size = $("#titlescalevalue").val().toString();
        var realsize = size / 100
        $("#title2").css({'transform': 'scaleX(' + realsize + ")", 'transform-origin': 'top left'});
    });

    $("#titletracking").on('change',function updateSliderValue() {
        var output = $(this).siblings("output").first();
        $(output).val($(this).val());
        var size = $("#titletrackingvalue").val().toString();
        $("#title2").css({'letter-spacing': size + 'px'});
    });

    $("#titleleading").on('change',function updateSliderValue() {
        var output = $(this).siblings("output").first();
        $(output).val($(this).val());
        var size = $("#titleleadingvalue").val().toString();
        $("#title2").css({'line-height': size + 'px'});
    });

    $("#titletop").on('change',function updateSliderValue() {
        var output = $(this).siblings("output").first();
        $(output).val($(this).val());
        var size = $("#titletopvalue").val().toString();
        $("#title2").css({'margin-top': size + 'px'});
    });

    $("#titleleft").on('change',function updateSliderValue() {
        var output = $(this).siblings("output").first();
        $(output).val($(this).val());
        var size = $("#titleleftvalue").val().toString();
        $("#title2").css({'margin-left': size + 'px'});
    });


    $("#textfont").each(function(){
        $(this).on('change',function updateSliderValue() {
            output = $(this).val();
            $(output).val($(this).val());
            $('.text').css('font-family', output);
        });
    });

    $("#textred, #textgreen, #textblue").on('change',function updateSliderValue() {
        var output = $(this).siblings("output").first();
        $(output).val($(this).val());
        var redValue = $("#textredvalue").val().toString();
        var greenValue = $("#textgreenvalue").val().toString();
        var blueValue = $("#textbluevalue").val().toString();
        var color = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
        $(".text").css("color", color);
    });

    $("#textsize").on('change',function updateSliderValue() {
        var output = $(this).siblings("output").first();
        $(output).val($(this).val());
        var size = $("#textsizevalue").val().toString();
        $(".text").css({'font-size': size + "px"});
    });

    $("#textscale").on('change',function updateSliderValue() {
        var output = $(this).siblings("output").first();
        $(output).val($(this).val());
        var size = $("#textscalevalue").val().toString();
        var realsize = size / 100
        $(".text").css({'transform': 'scaleX(' + realsize + ")", 'transform-origin': 'top left'});
    });

    $("#texttracking").on('change',function updateSliderValue() {
        var output = $(this).siblings("output").first();
        $(output).val($(this).val());
        var size = $("#texttrackingvalue").val().toString();
        $(".text").css({'letter-spacing': size + 'px'});
    });

    $("#textleading").on('change',function updateSliderValue() {
        var output = $(this).siblings("output").first();
        $(output).val($(this).val());
        var size = $("#textleadingvalue").val().toString();
        $(".text").css({'line-height': size + 'px'});
    });

    $("#texttop").on('change',function updateSliderValue() {
        var output = $(this).siblings("output").first();
        $(output).val($(this).val());
        var size = $("#texttopvalue").val().toString();
        $(".text").css({'margin-top': size + 'px'});
    });

    $("#textleft").on('change',function updateSliderValue() {
        var output = $(this).siblings("output").first();
        $(output).val($(this).val());
        var size = $("#textleftvalue").val().toString();
        $(".text").css({'margin-left': size + 'px'});
    });




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

        if ($("#poor5").is(':checked')) {
            $("#poorgif").attr('src',"pic/party.gif");
            $("#poor").addClass("strike")
        } else {
            $("#poorgif").attr('src',"pic/bomb.gif");
        }
    });


    //width
    $("#widthsl").on('change',function updateSliderValue() {
        var output = $(this).siblings("output").first();
        $(output).val($(this).val());
        var width = $("#widthvalue").val().toString();
        $(".widtht").css('width', width + "%");

        if ($('#widthvalue').val() >= '30' && $('#widthvalue').val() <= '50') {
            $("#widthgif").attr('src',"pic/party.gif");
            $("#width").addClass("strike")
        } else {
            $("#widthgif").attr('src',"pic/bomb.gif");
        }
    });


    //caps
    $("input[type='radio'][name='d']").change(function() {
        if ($("#caps1").is(':checked')) {
            $(".capst").css("text-transform","uppercase");
        } else if ($("#caps2").is(':checked')) {
            $(".capst").css("text-transform","lowercase");
        } else if ($("#caps3").is(':checked')) {
            $(".capst").css("text-transform","capitalize");
        } else if ($("#caps4").is(':checked')) {
            $(".capst").css("text-transform","none");
        }

        if ($("#caps4").is(':checked')) {
            $("#capsgif").attr('src',"pic/party.gif");
            $("#caps").addClass("strike")
        } else {
            $("#capsgif").attr('src',"pic/bomb.gif");
        }
    });


    //display
    $("input[type='radio'][name='e']").change(function() {
        if ($("#display1").is(':checked')) {
            $(".displayt").css("font-family","freight-display-pro, serif");
        } else if ($("#display2").is(':checked')) {
            $(".displayt").css("font-family","freight-big-pro, serif");
        } else if ($("#display3").is(':checked')) {
            $(".displayt").css("font-family","freightdispcmp-pro, serif");
        } else if ($("#display4").is(':checked')) {
            $(".displayt").css("font-family","freight-text-pro, serif");
        }

        if ($("#display4").is(':checked')) {
            $("#displaygif").attr('src',"pic/party.gif");
            $("#display").addClass("strike")
        } else {
            $("#displaygif").attr('src',"pic/bomb.gif");
        }
    });


    //paragraph
    $('#paragraphcheck1').change(function(){
        if ($(this).is(':checked')) {
            $(".paragrapht").css('text-indent', '30px');
        } else {
            $(".paragrapht").css('text-indent', '0');
        }
    });

    $('#paragraphcheck2').change(function(){
        if ($(this).is(':checked')) {
            $(".paragrapht").css('margin-bottom', '20px');
        } else {
            $(".paragrapht").css('margin-bottom', '0');
        }
    });

    $('#paragraphcheck1, #paragraphcheck2').change(function(){
        if ($('#paragraphcheck1').is(':checked') && $('#paragraphcheck2').is(':checked')){
            show1 = false
        } else if ($('#paragraphcheck1').is(':checked') || $('#paragraphcheck2').is(':checked')) {
            show1 = true
        } else {
            show1 = false
        }

        if (show1) {
            $("#paragraphgif").attr('src',"pic/party.gif");
            $("#paragraph").addClass("strike")
        } else {
            $("#paragraphgif").attr('src',"pic/bomb.gif");
        }
    });


    //tracking
    $("#trackingsl").on('change',function updateSliderValue() {
        var output = $(this).siblings("output").first();
        $(output).val($(this).val());
        var width = $("#trackingvalue").val().toString();
        $(".trackingt").css('letter-spacing', width + "px");

        if ($('#trackingvalue').val() == '0' || $('#trackingvalue').val() == '1') {
            show1 = true
        } else {
            show1 = false
        }
    });

    $("#leadingsl").on('change',function updateSliderValue() {
        var output = $(this).siblings("output").first();
        $(output).val($(this).val());
        var width = $("#leadingvalue").val().toString();
        $(".trackingt").css('line-height', width + "px");

        if ($('#leadingvalue').val() >= '22' && $('#leadingvalue').val() <= '25') {
            show2 = true
        } else {
            show2 = false
        }
    });

    $('#trackingsl, #leadingsl').change(function(){
        if (show1 && show2) {
            $("#trackinggif").attr('src',"pic/party.gif");
            $("#tracking").addClass("strike")
        } else {
            $("#trackinggif").attr('src',"pic/bomb.gif");
        }
    });


    //check final
    var show = true;

    $("input[type='radio'], input[type='range'], input[type='checkbox']").change(function() {
        if ($('#stretch').hasClass("strike") && $('#skew').hasClass("strike") && $('#hang').hasClass("strike") && $('#hyphen').hasClass("strike") && $('#poor').hasClass("strike") && $('#width').hasClass("strike") && $('#caps').hasClass("strike") && $('#display').hasClass("strike") && $('#paragraph').hasClass("strike") && $('#tracking').hasClass("strike") && show) {
            setTimeout(function()
            {alert("Final Challenge Unlocked!");},40);
            $("#final, #final a").css({"color": "red", "pointer-events": "auto", "text-decoration": "underline", "text-decoration-thickness":"1.5px"});
            $("#final").addClass("unlock")
            show = false;
        } else {}
    });

});