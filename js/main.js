/*
 * Basic jQuery Slider plug-in v.1.3
 *
 * http://www.basic-slider.com
 *
 * Authored by John Cobb
 * http://www.johncobb.name
 * @john0514
 *
 * Copyright 2011, John Cobb
 * License: GNU General Public License, version 3 (GPL-3.0)
 * http://www.opensource.org/licenses/gpl-3.0.html
 *
 */(function(e){"use strict";e.fn.bjqs=function(t){var n={width:700,height:300,animtype:"fade",animduration:450,animspeed:4e3,automatic:!0,showcontrols:!0,centercontrols:!0,nexttext:"Next",prevtext:"Prev",showmarkers:!0,centermarkers:!0,keyboardnav:!0,hoverpause:!0,usecaptions:!0,randomstart:!1,responsive:!1},r=e.extend({},n,t),i=this,s=i.find("ul.bjqs"),o=s.children("li"),u=null,a=null,f=null,l=null,c=null,h=null,p=null,d=null,v={slidecount:o.length,animating:!1,paused:!1,currentslide:1,nextslide:0,currentindex:0,nextindex:0,interval:null},m={width:null,height:null,ratio:null},g={fwd:"forward",prev:"previous"},y=function(){o.addClass("bjqs-slide");r.responsive?b():E();if(v.slidecount>1){r.randomstart&&L();r.showcontrols&&x();r.showmarkers&&T();r.keyboardnav&&N();r.hoverpause&&r.automatic&&C();r.animtype==="slide"&&S()}r.usecaptions&&k();if(r.animtype==="slide"&&!r.randomstart){v.currentindex=1;v.currentslide=2}s.show();o.eq(v.currentindex).show();r.automatic&&(v.interval=setInterval(function(){O(g.fwd,!1)},r.animspeed))},b=function(){m.width=i.outerWidth();m.ratio=m.width/r.width,m.height=r.height*m.ratio;if(r.animtype==="fade"){o.css({height:r.height,width:"100%"});o.children("img").css({height:r.height,width:"100%"});s.css({height:r.height,width:"100%"});i.css({height:r.height,"max-width":r.width,position:"relative"});if(m.width<r.width){o.css({height:m.height});o.children("img").css({height:m.height});s.css({height:m.height});i.css({height:m.height})}e(window).resize(function(){m.width=i.outerWidth();m.ratio=m.width/r.width,m.height=r.height*m.ratio;o.css({height:m.height});o.children("img").css({height:m.height});s.css({height:m.height});i.css({height:m.height})})}if(r.animtype==="slide"){o.css({height:r.height,width:r.width});o.children("img").css({height:r.height,width:r.width});s.css({height:r.height,width:r.width*r.slidecount});i.css({height:r.height,"max-width":r.width,position:"relative"});if(m.width<r.width){o.css({height:m.height});o.children("img").css({height:m.height});s.css({height:m.height});i.css({height:m.height})}e(window).resize(function(){m.width=i.outerWidth(),m.ratio=m.width/r.width,m.height=r.height*m.ratio;o.css({height:m.height,width:m.width});o.children("img").css({height:m.height,width:m.width});s.css({height:m.height,width:m.width*r.slidecount});i.css({height:m.height});h.css({height:m.height,width:m.width});w(function(){O(!1,v.currentslide)},200,"some unique string")})}},w=function(){var e={};return function(t,n,r){r||(r="Don't call this twice without a uniqueId");e[r]&&clearTimeout(e[r]);e[r]=setTimeout(t,n)}}(),E=function(){o.css({height:r.height,width:r.width});s.css({height:r.height,width:r.width});i.css({height:r.height,width:r.width,position:"relative"})},S=function(){p=o.eq(0).clone();d=o.eq(v.slidecount-1).clone();p.attr({"data-clone":"last","data-slide":0}).appendTo(s).show();d.attr({"data-clone":"first","data-slide":0}).prependTo(s).show();o=s.children("li");v.slidecount=o.length;h=e('<div class="bjqs-wrapper"></div>');if(r.responsive&&m.width<r.width){h.css({width:m.width,height:m.height,overflow:"hidden",position:"relative"});s.css({width:m.width*(v.slidecount+2),left:-m.width*v.currentslide})}else{h.css({width:r.width,height:r.height,overflow:"hidden",position:"relative"});s.css({width:r.width*(v.slidecount+2),left:-r.width*v.currentslide})}o.css({"float":"left",position:"relative",display:"list-item"});h.prependTo(i);s.appendTo(h)},x=function(){u=e('<ul class="bjqs-controls"></ul>');a=e('<li class="bjqs-next"><a href="#" data-direction="'+g.fwd+'">'+r.nexttext+"</a></li>");f=e('<li class="bjqs-prev"><a href="#" data-direction="'+g.prev+'">'+r.prevtext+"</a></li>");u.on("click","a",function(t){t.preventDefault();var n=e(this).attr("data-direction");if(!v.animating){n===g.fwd&&O(g.fwd,!1);n===g.prev&&O(g.prev,!1)}});f.appendTo(u);a.appendTo(u);u.appendTo(i);if(r.centercontrols){u.addClass("v-centered");var t=(i.height()-a.children("a").outerHeight())/2,n=t/r.height*100,s=n+"%";a.find("a").css("top",s);f.find("a").css("top",s)}},T=function(){l=e('<ol class="bjqs-markers"></ol>');e.each(o,function(t,n){var i=t+1,s=t+1;r.animtype==="slide"&&(s=t+2);var o=e('<li><a href="#">'+i+"</a></li>");i===v.currentslide&&o.addClass("active-marker");o.on("click","a",function(e){e.preventDefault();!v.animating&&v.currentslide!==s&&O(!1,s)});o.appendTo(l)});l.appendTo(i);c=l.find("li");if(r.centermarkers){l.addClass("h-centered");var t=(r.width-l.width())/2;l.css("left",t)}},N=function(){e(document).keyup(function(e){if(!v.paused){clearInterval(v.interval);v.paused=!0}if(!v.animating)if(e.keyCode===39){e.preventDefault();O(g.fwd,!1)}else if(e.keyCode===37){e.preventDefault();O(g.prev,!1)}if(v.paused&&r.automatic){v.interval=setInterval(function(){O(g.fwd)},r.animspeed);v.paused=!1}})},C=function(){i.hover(function(){if(!v.paused){clearInterval(v.interval);v.paused=!0}},function(){if(v.paused){v.interval=setInterval(function(){O(g.fwd,!1)},r.animspeed);v.paused=!1}})},k=function(){e.each(o,function(t,n){var r=e(n).children("img:first-child").attr("title");r||(r=e(n).children("a").find("img:first-child").attr("title"));if(r){r=e('<p class="bjqs-caption">'+r+"</p>");r.appendTo(e(n))}})},L=function(){var e=Math.floor(Math.random()*v.slidecount)+1;v.currentslide=e;v.currentindex=e-1},A=function(e){if(e===g.fwd)if(o.eq(v.currentindex).next().length){v.nextindex=v.currentindex+1;v.nextslide=v.currentslide+1}else{v.nextindex=0;v.nextslide=1}else if(o.eq(v.currentindex).prev().length){v.nextindex=v.currentindex-1;v.nextslide=v.currentslide-1}else{v.nextindex=v.slidecount-1;v.nextslide=v.slidecount}},O=function(e,t){if(!v.animating){v.animating=!0;if(t){v.nextslide=t;v.nextindex=t-1}else A(e);if(r.animtype==="fade"){if(r.showmarkers){c.removeClass("active-marker");c.eq(v.nextindex).addClass("active-marker")}o.eq(v.currentindex).fadeOut(r.animduration);o.eq(v.nextindex).fadeIn(r.animduration,function(){v.animating=!1;v.currentslide=v.nextslide;v.currentindex=v.nextindex})}if(r.animtype==="slide"){if(r.showmarkers){var n=v.nextindex-1;n===v.slidecount-2?n=0:n===-1&&(n=v.slidecount-3);c.removeClass("active-marker");c.eq(n).addClass("active-marker")}r.responsive&&m.width<r.width?v.slidewidth=m.width:v.slidewidth=r.width;s.animate({left:-v.nextindex*v.slidewidth},r.animduration,function(){v.currentslide=v.nextslide;v.currentindex=v.nextindex;if(o.eq(v.currentindex).attr("data-clone")==="last"){s.css({left:-v.slidewidth});v.currentslide=2;v.currentindex=1}else if(o.eq(v.currentindex).attr("data-clone")==="first"){s.css({left:-v.slidewidth*(v.slidecount-2)});v.currentslide=v.slidecount-1;v.currentindex=v.slidecount-2}v.animating=!1})}}};y()}})(jQuery);

 // Sticky Plugin v1.0.0 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 2/14/2011
// Date: 2/12/2012
// Website: http://labs.anthonygarand.com/sticky
// Description: Makes an element on the page stick on the screen as you scroll
//       It will only set the 'top' and 'position' of your element, you
//       might need to adjust the width in some cases.

(function($) {
  var defaults = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: 'is-sticky',
      wrapperClassName: 'sticky-wrapper',
      center: false,
      getWidthFrom: ''
    },
    $window = $(window),
    $document = $(document),
    sticked = [],
    windowHeight = $window.height(),
    scroller = function() {
      var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

      for (var i = 0; i < sticked.length; i++) {
        var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;

        if (scrollTop <= etse) {
          if (s.currentTop !== null) {
            s.stickyElement
              .css('position', '')
              .css('top', '');
            s.stickyElement.parent().removeClass(s.className);
            s.currentTop = null;
          }
        }
        else {
          var newTop = documentHeight - s.stickyElement.outerHeight()
            - s.topSpacing - s.bottomSpacing - scrollTop - extra;
          if (newTop < 0) {
            newTop = newTop + s.topSpacing;
          } else {
            newTop = s.topSpacing;
          }
          if (s.currentTop != newTop) {
            s.stickyElement
              .css('position', 'fixed')
              .css('top', newTop);

            if (typeof s.getWidthFrom !== 'undefined') {
              s.stickyElement.css('width', $(s.getWidthFrom).width());
            }

            s.stickyElement.parent().addClass(s.className);
            s.currentTop = newTop;
          }
        }
      }
    },
    resizer = function() {
      windowHeight = $window.height();
    },
    methods = {
      init: function(options) {
        var o = $.extend(defaults, options);
        return this.each(function() {
          var stickyElement = $(this);

          var stickyId = stickyElement.attr('id');
          var wrapper = $('<div></div>')
            .attr('id', stickyId + '-sticky-wrapper')
            .addClass(o.wrapperClassName);
          stickyElement.wrapAll(wrapper);

          if (o.center) {
            stickyElement.parent().css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
          }

          if (stickyElement.css("float") == "right") {
            stickyElement.css({"float":"none"}).parent().css({"float":"right"});
          }

          var stickyWrapper = stickyElement.parent();
          stickyWrapper.css('height', stickyElement.outerHeight());
          sticked.push({
            topSpacing: o.topSpacing,
            bottomSpacing: o.bottomSpacing,
            stickyElement: stickyElement,
            currentTop: null,
            stickyWrapper: stickyWrapper,
            className: o.className,
            getWidthFrom: o.getWidthFrom
          });
        });
      },
      update: scroller
    };

  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }

  $.fn.sticky = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };
  $(function() {
    setTimeout(scroller, 0);
  });
})(jQuery);

//CREDIT: Author Jason Weaver http://jasonweaver.name/lab/offcanvas/
var showSidebar = function() {
	$('body').removeClass("active-nav").toggleClass("active-sidebar");
	$('.menu-button').removeClass("active-button");					
	$('.sidebar-button').toggleClass("active-button");
}

var showMenu = function() {
	$('body').removeClass("active-sidebar").toggleClass("active-nav");
	$('.sidebar-button').removeClass("active-button");				
	$('.menu-button').toggleClass("active-button");	
}

// add/remove classes everytime the window resize event fires
jQuery(window).resize(function(){
	var off_canvas_nav_display = $('.off-canvas-navigation').css('display');
	var menu_button_display = $('.menu-button').css('display');
	if (off_canvas_nav_display === 'block') {			
		$("body").removeClass("three-column").addClass("small-screen");				
	} 
	if (off_canvas_nav_display === 'none') {
		$("body").removeClass("active-sidebar active-nav small-screen")
			.addClass("three-column");			
	}	
	
});	

//Toggle Function
jQuery(document).ready(function($) {
		// Toggle for nav menu
		$('.menu-button').click(function(e) {
			e.preventDefault();
			showMenu();							
		});	
		// Toggle for sidebar
		$('.sidebar-button').click(function(e) {
			e.preventDefault();
			showSidebar();									
		});							
});

//Equal height columns
function equalHeight(group) {
	tallest = 0;
	group.each(function() {
		thisHeight = $(this).height();
		if(thisHeight > tallest) {
			tallest = thisHeight;
		}
	});
	group.height(tallest);
}
$(document).ready(function() {
	equalHeight($(".column"));
});

// retina.js, a high-resolution image swapper (http://retinajs.com), v0.0.2
(function(){function t(e){this.path=e;var t=this.path.split("."),n=t.slice(0,t.length-1).join("."),r=t[t.length-1];this.at_2x_path=n+"@2x."+r}function n(e){this.el=e,this.path=new t(this.el.getAttribute("src"));var n=this;this.path.check_2x_variant(function(e){e&&n.swap()})}var e=typeof exports=="undefined"?window:exports;e.RetinaImagePath=t,t.confirmed_paths=[],t.prototype.is_external=function(){return!!this.path.match(/^https?\:/i)&&!this.path.match("//"+document.domain)},t.prototype.check_2x_variant=function(e){var n,r=this;if(this.is_external())return e(!1);if(this.at_2x_path in t.confirmed_paths)return e(!0);n=new XMLHttpRequest,n.open("HEAD",this.at_2x_path),n.onreadystatechange=function(){return n.readyState!=4?e(!1):n.status>=200&&n.status<=399?(t.confirmed_paths.push(r.at_2x_path),e(!0)):e(!1)},n.send()},e.RetinaImage=n,n.prototype.swap=function(e){function n(){t.el.complete?(t.el.setAttribute("width",t.el.offsetWidth),t.el.setAttribute("height",t.el.offsetHeight),t.el.setAttribute("src",e)):setTimeout(n,5)}typeof e=="undefined"&&(e=this.path.at_2x_path);var t=this;n()},e.devicePixelRatio>1&&(window.onload=function(){var e=document.getElementsByTagName("img"),t=[],r,i;for(r=0;r<e.length;r++)i=e[r],t.push(new n(i))})})();

//swap class on menu
$(function(){
  $('.menu-button').click(function(){
      var tmp=$(this).attr('class');
      $(this).attr('class', $(this).attr('offclass'));
      $(this).attr('offclass', tmp);
  });
});

//Current navigation set .active link
// $(document).ready(function() {
//     if(location.pathname != "/") {
//     $('nav ul li a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
//     } else $('nav ul li a:eq(0)').addClass('active');
// });

//DTDO slideshow
$(document).ready(function(){
    $('.slider').bjqs({
        'width':      960,
        'height':     600,
        'responsive': true,
        animtype: 'fade',
        automatic : false,
        showmarkers: false,
        usecaptions: true

    });
});

// Sticky stats 
// $(document).ready(function(){
// 	$(".pulled-blockquote").sticky({topSpacing:0});
// });
