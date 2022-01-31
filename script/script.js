$(function(){
    $('#top_carousel').carousel({
        interval   :5000
    });

    $('.parallax_01').parallax({imageSrc: '../img/parallax_01.jpg'});
    $('.parallax_02').parallax({imageSrc: '../img/parallax_02.jpg'});
    $('.parallax_03').parallax({imageSrc: '../img/parallax_03.jpg'});

    $(".waypoint_01").waypoint(function(direction){
		if(direction==="down"){
			$(".waypoint_01").addClass("animated fadeInDown")
		}
	},{
		offset:"50%"
    });
    
    $(".waypoint_01").waypoint(function(direction){
		if(direction==="up"){
			$(".waypoint_01").removeClass("animated fadeInDown")
		}
	},{
		offset:"50%"
    });
    
    $(".waypoint_02").waypoint(function(direction){
		if(direction==="down"){
			$(".waypoint_02").addClass("animated fadeIn slower")
		}
	},{
		offset:"50%"
    });
    
    $(".waypoint_02").waypoint(function(direction){
		if(direction==="up"){
			$(".waypoint_02").removeClass("animated fadeIn slower")
		}
	},{
		offset:"50%"
    });
    

    $(".waypoint_03").waypoint(function(direction){
		if(direction==="down"){
			$(".waypoint_03").addClass("animated fadeInLeft")
		}
	},{
		offset:"50%"
    });
    
    $(".waypoint_03").waypoint(function(direction){
		if(direction==="up"){
			$(".waypoint_03").removeClass("animated fadeInLeft")
		}
	},{
		offset:"50%"
	});

	$(".waypoint_04").waypoint(function(direction){
		if(direction==="down"){
			$(".waypoint_04").addClass("animated fadeInRight")
		}
	},{
		offset:"50%"
    });
    
    $(".waypoint_04").waypoint(function(direction){
		if(direction==="up"){
			$(".waypoint_04").removeClass("animated fadeInRight")
		}
	},{
		offset:"50%"
	});


	$('a[data-rel^=lightcase]').lightcase({
		showTitle:false,
		showCaption:false,
		showSequenceInfo:false,
		slideshowAutoStart:false
	});
});
