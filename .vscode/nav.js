// JavaScript Document

$("#gnb > li").hover(
	function(){
		$(this).children("ul").slideDown(300);
	},
	function(){
		$(this).children("ul").slideUp(300);
	}
);