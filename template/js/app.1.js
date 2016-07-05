//文章搜索
function search() {
		if (document.getElementById('search_value').value) {
        location.href = 'http://' + location.host + '?s=' + document.getElementById('search_value').value;
		}
		return false;
}
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
});
$(document).on('pjax:complete', function () { //pjax链接加载完成后隐藏加载动画；
    $(".pjax_loading").animate({ width: "100%" }, function () {
        $(".pjax_loading").css({ width: "0" });
    });

});

//菜单显示位置移动
function Menumove(i){
	var w,l;
	var $menuCrt = $("<div id='menu-crt'></div>");
	var $li = $('.m-nav >ul >li');
	$(".g-hd .m-nav").append($menuCrt);
	
	$li.each(function(n){
		
		w = $li.eq(i).outerWidth()-2;
		l = $li.eq(i).position().left;
		
		if(n == i){
			menuSlide(w,l,0);
		}
		
		$(this).mouseover(function(){
			w2 = $(this).outerWidth()-2;
			l2 = $(this).position().left;
			
			
			menuSlide(w2,l2,300);
			
		}).parent().mouseleave(function(){
			menuSlide(w,l,200);
			
		});
	});
	
	function menuSlide(w,l,s){
		$menuCrt.stop().animate({ 
			width:w,
			left:l
		},s);
	}
}
Menumove(0);