//文章搜索
function search() {
		if (document.getElementById('search_value').value) {
        location.href = 'http://' + location.host + '?s=' + document.getElementById('search_value').value;
		}
		return false;
}
//yunlogo
YugenLogo.initialize({
    framerate: 60,
    width: 380,
    height: 220,
    colorSpeedFactor: 0.4,
    morphSpeedFactor: 0.4,
    introSpeedFactor: 2,
    outroSpeedFactor: 2,

    morphStrengthFactor: 0.8,

    morphBaseSpeedFactor: 0.2,
    normalOffsetFactor: 1.5,

    maxShapeRotation: 0.2,

    wordOffsetX: 0,
    wordOffsetY: 0,

    wordScale: 1,

    foregroundScaleX: 0.42,
    foregroundScaleY: 0.21,
    backgroundScaleX: 0.36,
    backgroundScaleY: 0.21,

    shadowAlpha: 0.1,

    shapeQuality: 9,

    containerID: "logo-bg",
    logoCanvasID: "yugen-logo-canvas",

    colors: [
        [new YugenLogo.util.Color(240, 240, 240), new YugenLogo.util.Color(0, 0, 0)],
        [new YugenLogo.util.Color(0, 0, 0), new YugenLogo.util.Color(240, 240, 240)]
    ],

    inputs: [
        YugenLogo.input.move,
        YugenLogo.input.press
    ],

    fallbackImages: []
});
//返回顶部
var toTop = $("#toTop");
$(window).scroll(function () {
    if ($(window).scrollTop() < 500) {
        toTop.fadeOut("fast");
    } else {
        toTop.fadeIn("fast");
    }
});
toTop.click(function () {
    $("html,body").animate({
        scrollTop: 0
    }, 500);
    return false
});
                
//pjax
$(document).pjax('a[target!=_blank]', '#contentleft', { fragment: '#contentleft', timeout: 8000 });
$(document).on('pjax:send', function () { //pjax链接点击后显示加载动画；
    $(".pjax_loading").animate({ width: "200px" }, 500);
    $('.pace-activity').show();
});
$(document).on('pjax:complete', function () { //pjax链接加载完成后隐藏加载动画；
    $(".pjax_loading").animate({ width: "100%" }, function () {
        $(".pjax_loading").css({ width: "0" });
        $('.pace-activity').hide();
    });

});