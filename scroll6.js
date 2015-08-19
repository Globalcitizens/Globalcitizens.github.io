//Africa!!


$(document).ready(function(){
    var URL = "1bhXCuIKgDcIjuiZKiibB5xxT3TRWVBPgk9m01u-3bF4";
    Tabletop.init( { key: URL, callback: convertToGeoJSON6, simpleSheet: true } );
    
    //africa
    $(".c1").click(function(){
        document.getElementById("articleWindow6").style.display = "inline-block";
    }),
    //asia
    $(".c2").click(function(){
        document.getElementById("articleWindow4").style.display = "inline-block";
    }),
    //australia
    $(".c3").click(function(){
        document.getElementById("articleWindow3").style.display = "inline-block";
    }),
    //europe
    $(".c4").click(function(){
        document.getElementById("articleWindow5").style.display = "inline-block";
    }),
    //north america
    $(".c5").click(function(){
        document.getElementById("articleWindow").style.display = "inline-block";
    }),
    //south america
    $(".c6").click(function(){
        document.getElementById("articleWindow2").style.display = "inline-block";
    })
    
});

articles = [];

function convertToGeoJSON6(data) {
    console.log(data);
    for(i = 0; i < data.length; i++) {
        article = { date: data[i]["date"],
                    name: data[i]["name"],
                    author: data[i]["author"],
                    description: data[i]["description"],
                    locus: data[i]["locus"],
                    picture: data[i]["picture"],
                    link: data[i]["link"]
                }
        articles.push(article);
    }
    for(n=0;n<7; n++){
        var bullet = "<span>" + data[n]["name"] + "</span>";
        var artLink = data[n]["link"];
        var articleThing = "<li>" + bullet + "<br><a>" + artLink + "</a></li>";
        $("#articleWindow6").children("ul").append(articleThing);
        var stringy = "ul li:nth-child(" + (n+1) + ")";
        $("#articleWindow6").find(stringy).children("a").attr("href", artLink);
        $("#articleWindow6").children("h3").text("Africa & Middle East");
    }
}
   

//this is where we apply opacity to the arrow
$(window).scroll( function(){

  //get scroll position
  var topWindow = $(window).scrollTop();
  //multipl by 1.5 so the arrow will become transparent half-way up the page
  var topWindow = topWindow * 1.5;
  
  //get height of window
  var windowHeight = $(window).height();
      
  //set position as percentage of how far the user has scrolled 
  var position = topWindow / windowHeight;
  //invert the percentage
  position = 1 - position;

  //define arrow opacity as based on how far up the page the user has scrolled
  //no scrolling = 1, half-way up the page = 0
  $('.arrow-wrap').css('opacity', position);

});


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

