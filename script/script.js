
//Gnb Menu slide 구현
$("ul#mainMenu>li").mouseover(function () {
    $("#subMenuBg").stop().slideDown(1000);
    $("#subMenuBg").mouseover(function () {
        $("#subMenuBg").stop().slideDown(1000);
    });
});

$("ul#mainMenu>li").mouseout(function () {
    $("#subMenuBg").stop().slideUp(1000);
    $("#subMenuBg").mouseout(function () {
        $("#subMenuBg").stop().slideUp(1000);
    });
});

// slide show(fade -in, fade - out)

setInterval(fnSlide, 3000);
function fnSlide() {

    $("#slideFrame").animate({ "margin-left": "-1200px" }, 4000,
        function () {
            $(this).css({ "margin-left": "0" });
            // 첫 번째 항목 뒤로 이동
            $("#slideFrame>a:first").insertAfter("#slideFrame>a:last");
        });
}

//popup

function fnPopup() {
    document.getElementById("layerPopupBg").style.display = "block";
}

function fnClose() {
    document.getElementById("layerPopupBg").style.display = "none";
}