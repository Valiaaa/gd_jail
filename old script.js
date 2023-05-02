$(document).ready(function(){

    var menuht = $('.content').height();
    $('.menu').height(menuht);

var hint


//check box
$('.menu input[type="checkbox"]').bind('click', function() {
    $('.menu input[type="checkbox"]').not(this).prop('checked', false);
});

$('.p1 input[type="checkbox"]').bind('click', function() {
    $('.p1 input[type="checkbox"]').not(this).prop('checked', false);
    hint=("I'm watching you. And I'll always be watching you...");
});

$('.p2 input[type="checkbox"]').bind('click', function() {
    $('.p2 input[type="checkbox"]').not(this).prop('checked', false);
    hint=("I'm watching you. And I'll always be watching you...");
});

$('.p3 input[type="checkbox"]').bind('click', function() {
    $('.p3 input[type="checkbox"]').not(this).prop('checked', false);
    hint=("I'm watching you. And I'll always be watching you...");
});


//navigation check
$('#stretch').click(function() {
    $(":root").css({"--bg": "#5E1313", "--txt": "#C6EAFF"});
    $('.p0, .p2, .p3, .p4, .p5, .p6, .p7, .p8, .p9, .p10, .pf, .pfm').css("opacity","0").hide();
    $('.p1').css("opacity","1").show();
    $('#stretched1').prop('checked', true);
    $(".p1t").css({"transform": "scaleX(0.25)"});
    $('.p2 input[type="checkbox"], .p3 input[type="checkbox"], .p4 input[type="checkbox"], .p5 input[type="checkbox"], .p6 input[type="checkbox"], .p7 input[type="checkbox"], .p8 input[type="checkbox"], .p9 input[type="checkbox"], .p10 input[type="checkbox"]').prop('checked', false);
});

$('#skew').click(function() {
    $(":root").css({"--bg": "#15203f", "--txt": "#ff9292"});
    $('.p0, .p1, .p3, .p4, .p5, .p6, .p7, .p8, .p9, .p10, .pf, .pfm').css("opacity","0").hide();
    $('.p2').css("opacity","1").show();
    $('#skew1').prop('checked', true);
    $(".p2t").css({"font-style": "normal", "transform": "skew(-15deg)"});
    $('.p1 input[type="checkbox"], .p3 input[type="checkbox"], .p4 input[type="checkbox"], .p5 input[type="checkbox"], .p6 input[type="checkbox"], .p7 input[type="checkbox"], .p8 input[type="checkbox"], .p9 input[type="checkbox"], .p10 input[type="checkbox"]').prop('checked', false);
});

$('#hang').click(function() {
    $(":root").css({"--bg": "#D8FFDD", "--txt": "#6D4C3D"});
    $('.p0, .p1, .p2, .p4, .p5, .p6, .p7, .p8, .p9, .p10, .pf, .pfm').css("opacity","0").hide();
    $('.p3').css("opacity","1").show();
    $('#hang1').prop('checked', true);
    $(".p3t").css({"hanging-punctuation": "none"});
    $('.p1 input[type="checkbox"], .p2 input[type="checkbox"], .p4 input[type="checkbox"], .p5 input[type="checkbox"], .p6 input[type="checkbox"], .p7 input[type="checkbox"], .p8 input[type="checkbox"], .p9 input[type="checkbox"], .p10 input[type="checkbox"]').prop('checked', false);
});

$('#hyphen').click(function() {
    $(":root").css({"--bg": "#B7C0EE", "--txt": "#210203"});
    $('.p0, .p1, .p2, .p3, .p5, .p6, .p7, .p8, .p9, .p10, .pf, .pfm').css("opacity","0").hide();
    $('.p4').css("opacity","1").show();
    $('#hyphen1').prop('checked', true);
    $(".p4t").css({"hanging-punctuation": "none"});
    $('.p1 input[type="checkbox"], .p2 input[type="checkbox"], .p3 input[type="checkbox"], .p5 input[type="checkbox"], .p6 input[type="checkbox"], .p7 input[type="checkbox"], .p8 input[type="checkbox"], .p9 input[type="checkbox"], .p10 input[type="checkbox"]').prop('checked', false);
});

// $('#width').click(function() {
//     $(":root").css({"--bg": "#FBFFC9", "--txt": "#43738D"});
//     $('.p0, .p1, .p2, .p4, .p5, .p6, .p7, .p8, .p9, .p10, .pf, .pfm').css("opacity","0").hide();
//     $('.p3').css("opacity","1").show();
//     $('#width1').prop('checked', true);
//     $(".p3t2").css({"width": "420px"});
//     $('.p1 input[type="checkbox"], .p2 input[type="checkbox"]').prop('checked', false);
// });

$('#final').click(function() {
    $(":root").css({"--bg": "#FBFFC9", "--txt": "#43738D"});
    $('.p0, .p1, .p2, .p3, .p4, .p5, .p6, .p7, .p8, .p9, .p10,').css("opacity","0").hide();
    $('.pf, .pfm').css("opacity","1").show();
    $(":root").css({"--bg": "white", "--txt": "black"});
    $('#red, #green, #blue').prop('value', '255');
    $('.p1 input[type="checkbox"], .p2 input[type="checkbox"], .p3 input[type="checkbox"]').prop('checked', false);
    hint=("Okay, I guess now it's the time for your better task. No pressure because, after all, all you need to do is make something that works for you. And that's everything design is about.");
});

$('#crosswr').click(function() {
    $("#alarm").hide();
});


//page1
$('#stretched1').click(function() {
    $(".p1t").css({"transform": "scaleX(0.25)"});
});

$('#stretched2').click(function() {
    $(".p1t").css({"transform": "scaleX(0.5)"});
});

$('#stretched3').click(function() {
    $(".p1t").css({"transform": "scaleX(1)"});
});

$('#stretched4').click(function() {
    $(".p1t").css({"transform": "scaleX(1.4)"});
});

setInterval(() => {
    if ($('#stretched1').is(":checked"))
    {
        hint=("If you think it's sexy and normal then I get why you are here. Stretched type is at least 6 months of jail I'm telling you.");
        $('.p1t').html("Stretched<br>Font");
        $('.p1 input[type="checkbox"]').css({"color": "var(--txt)"});
    }
    else if ($('#stretched2').is(":checked"))
    {
        hint=("Are you still trying to stketch that poor type!? Omg 2 more months of jail for this insane creature.");
        $('.p1t').html("Stretched<br>Font");
        $('.p1 input[type="checkbox"]').css({"color": "var(--txt)"});
    }
    else if ($('#stretched3').is(":checked"))
    {
        hint=("Finally... The typeface should remain how it designed to be. If you stretch it, the proportion of its glyph will be distorted.<br><br>When you want a condensed / expanded text in your design, just search for a matching variable type. I'll consider reduce 3 months of jail for you.");
        $('.p1t').html("<span style='text-decoration: line-through; text-decoration-thickness: 5px;'>Stretched</span><br>Font");
        $('.strike1').css({"display": "block"});
    }
    else if ($('#stretched4').is(":checked"))
    {
        hint=("What are you doing... Fine, no comments. Enjoy your jail life.");
        $('.p1t').html("Stretched<br>Font");
        $('.p1 input[type="checkbox"]').css({"color": "var(--txt)"});
    }
}, 1);


//page2
$('#skew1').click(function() {
    $(".p2t").css({"font-style": "normal", "transform": "skew(-15deg)"});
});

$('#skew2').click(function() {
    $(".p2t").css({"font-style": "normal", "transform": "skew(15deg)"});
});

$('#skew3').click(function() {
    $(".p2t").css({"font-style": "normal", "transform": "skew(0)"});
});

$('#skew4').click(function() {
    $(".p2t").css({"font-style": "italic", "transform": "skew(0)"});
});

setInterval(() => {
    if ($('#skew1').is(":checked"))
    {
        hint=("You might think it looks fine but it's not, like what if it's you that's being skewed... Just find a better way.");
        $('.p2t').html("Skewed Font");
        $('.p2 input[type="checkbox"]').css({"color": "var(--txt)"});
    }
    else if ($('#skew2').is(":checked"))
    {
        hint=("Omg what are you doing!? This is just horrifying you monster. 6 more months of jail is way lighter than what you've done.");
        $('.p2t').html("Skewed Font");
        $('.p2 input[type="checkbox"]').css({"color": "var(--txt)"});
    }
    else if ($('#skew3').is(":checked"))
    {
        hint=("Okay, you finally act like a normal human being... But we don't want a normal text here. Just give another shot.");
        $('.p2t').html("Skewed Font");
        $('.p2 input[type="checkbox"]').css({"color": "var(--txt)"});
    }
    else if ($('#skew4').is(":checked"))
    {
        hint=("Thank you it's way better. As I have mentioned, the typeface should remain how it designed to be. Any distortion would damage the beauty of the typeface.<br><br>Anyway, why is it even hard to click on the italic option...? If there's no such option, blame it on the type designer and find a better one.");
        $('.p2t').html("<span style='text-decoration: line-through; text-decoration-thickness: 5px;'>Skewed</span> Font");
        $('.strike2').css({"display": "block"});
    }
}, 1);


//page3
$('#hang1').click(function() {
    // $(".p3t").css({"font-style": "normal", "transform": "skew(-15deg)"});
});

$('#hang2').click(function() {
    $(".p3t").css({"font-style": "normal", "transform": "skew(15deg)"});
});

$('#hang3').click(function() {
    $(".p3t").css({"font-style": "normal", "transform": "skew(0)"});
});

$('#hang4').click(function() {
    $(".p3t").css({"font-style": "italic", "transform": "skew(0)"});
});

setInterval(() => {
    if ($('#hang1').is(":checked"))
    {
        hint=("You might think it looks fine but it's not, like what if it's you that's being skewed... Just find a better way.");
        $('.p3t').html('"This is supposed to be an unhanged <span style="text-decoration: line-through; text-decoration-thickness: 5px;">smart</span> quote."');
        $('.p3 input[type="checkbox"]').css({"color": "var(--txt)"});
    }
    else if ($('#hang2').is(":checked"))
    {
        hint=("Omg what are you doing!? This is just horrifying you monster. 6 more months of jail is way lighter than what you've done.");
        $('.p3t').html("Skewed Font");
        $('.p3 input[type="checkbox"]').css({"color": "var(--txt)"});
    }
    else if ($('#hang3').is(":checked"))
    {
        hint=("Okay, you finally act like a normal human being... But we don't want a normal text here. Just give another shot.");
        $('.p3t').html("“This is supposed to be an unhanged smart quote.”");
        $('.p3 input[type="checkbox"]').css({"color": "var(--txt)"});
    }
    else if ($('#hang4').is(":checked"))
    {
        hint=("Thank you it's way better. As I have mentioned, the typeface should remain how it designed to be. Any distortion would damage the beauty of the typeface.<br><br>Anyway, why is it even hard to click on the italic option...? If there's no such option, blame it on the type designer and find a better one.");
        $('.p3t').html("<span style='text-decoration: line-through; text-decoration-thickness: 5px;'>Skewed</span> Font");
        $('.strike3').css({"display": "block"});
    }
}, 1);


// //page3
// $('#width1').click(function() {
//     $(".p3t2").css({"width": "420px"});
// });

// $('#width2').click(function() {
//     $(".p3t2").css({"width": "650px"});
// });

// $('#width3').click(function() {
//     $(".p3t2").css({"width": "920px"});
// });

// $('#width4').click(function() {
//     $(".p3t2").css({"width": "1200px"});
// });

// setInterval(() => {
//     if ($('#width1').is(":checked"))
//     {
//         hint=("Yea, it may look fine in some occasions but only when you have multiple columns. Try harder.");
//         $('.p3t1').html("Hard-to-read Text Block");
//         $('.p3 input[type="checkbox"]').css({"color": "var(--txt)"});
//     }
//     else if ($('#width2').is(":checked"))
//     {
//         hint=("Don't you feel that everything reads better in this width? If not, you just belong here.");
//         $('.p3t1').html("<span style='text-decoration: line-through; text-decoration-thickness: 2px; margin: 0px;'>Hard-to-read</span> Text Block");
//         $('.strike3').css({"display": "block"});
//     }
//     else if ($('#width3').is(":checked"))
//     {
//         hint=("Am I the only one that can't read this...? Let me grab my ADHD pills.");
//         $('.p3t1').html("Hard-to-read Text Block");
//         $('.p3 input[type="checkbox"]').css({"color": "var(--txt)"});
//     }
//     else if ($('#width4').is(":checked"))
//     {
//         hint=("If you are set with this one you are definitely crazy... or a marathon runner. Guess who will have 4 more months of jail for this?");
//         $('.p3t1').html("Hard-to-read Text Block");
//         $('.p3 input[type="checkbox"]').css({"color": "var(--txt)"});
//     }
// }, 1);



// Page Final
$(".slider").on('change',function updateSliderValue() {
    var therangeoutput = $(this).siblings("output").first();
    $(therangeoutput).val($(this).val());
    var redValue = $("#redrangevalue").val().toString();
    var greenValue = $("#greenrangevalue").val().toString();
    var blueValue = $("#bluerangevalue").val().toString();
    var theColour = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
    $(":root").css("--bg", theColour);
});


  //Navigation Check
$('.gd, .jail').click(function() {
    $('.menu input[type="checkbox"], .p1 input[type="checkbox"], .p2 input[type="checkbox"], .p3 input[type="checkbox"], .p4 input[type="checkbox"], .p5 input[type="checkbox"], .p6 input[type="checkbox"], .p7 input[type="checkbox"], .p8 input[type="checkbox"], .p9 input[type="checkbox"], .p10 input[type="checkbox"]').prop('checked', false);
    $("#question").css({"cursor": "pointer", "color": "var(--txt)"});
});

checkfinal = setInterval(() => {
    if ($(".strike1, .strike2, .strike3, .strike4, .strike5, .strike6, .strike7, .strike8, .strike9, .strike10").is(':hidden')) {

    } else
    {
        $('#finalwr').hide();
        $('#final').css({"cursor": "pointer", "border": "1px solid var(--txt)", "pointer-events": "auto"});
        $('#alarm').show();
        checkfinal = clearInterval(checkfinal);
    }
  }, 1);

  setInterval(() => {
    if ($('.menu input[type="checkbox"]').is(":checked"))
    {
        $("#question:active").css({"pointer-events": "inherit"});
    }
    else
    {
        $('.p0').css("opacity","1").show();
        $('.p1, .p2, .p3, .p4, .p5, .p6, .p7, .p8, .p9, .p10, .pf, .pfm').css("opacity","0").hide();
        $(":root").css({"--bg": "white", "--txt": "black"});
        hint=("Sup, I'm Valente, your prison guard. I don't know why you end up here in Graphic Design Jail and I don't care. Just read those files on the right and show me why are you here.");
        $("#question:active").css({"pointer-events": "none"});
        $('.p1 input[type="checkbox"], .p2 input[type="checkbox"], .p3 input[type="checkbox"], .p4 input[type="checkbox"], .p5 input[type="checkbox"], .p6 input[type="checkbox"], .p7 input[type="checkbox"], .p8 input[type="checkbox"], .p9 input[type="checkbox"], .p10 input[type="checkbox"]').prop('checked', false);
    }
  }, 1);

  setInterval(() => {
    $('#question').html(hint);
  }, 1);


});