$(function(){
	var img_list=['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.jpg','01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.jpg'];
	var li='';
	for (var i = 0; i < img_list.length; i++) {
		li += '<li>';
		li += '<img src="img/'+img_list[i]+'">';
		li += '</li>';
	}
	$(".imgBox").html(li);
	var li = $('.warp').find('li');
	var warp = {
		random: function(low, up){
			return Math.floor((Math.random()*(low-up))+up);
		},
		css: function(){
			var rotate = this.random(-20, 20),
				zindex = this.random(0, li.length),
				degrees = 'rotate('+rotate+'deg)';
			return {'degrees': degrees, 'zindex': zindex }
		},
		degrees: function(element){
			var random = this.css();
			$(element).css({
				'-webkit-transform': random.degrees,
				'-moz-transform': random.degrees,
				'-o-transform': random.degrees,
				'z-index': random.zindex
			});
		},
		animate: function(element, x, y){
			$(element).animate({
				top: y,
				left: x
			}, 500);
		}
	}
	li.each(function(){
		warp.degrees($(this));
		var t = $(this), x = warp.random(-300,300), y = warp.random(-150,150);
			warp.animate(t, x, y);
			warp.degrees(t);
	});		
});