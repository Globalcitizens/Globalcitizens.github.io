//South America!!


$(document).ready(function(){
    var URL = "1P31JVVrzeak0qhriGnO0XgZhwJy4ugb-vECWFXotTq4";
    Tabletop.init( { key: URL, callback: convertToGeoJSON2, simpleSheet: true } );
    
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
    
    $("#articleWindow2").children("h3").text("News for South America");
    
});

articles = [];

function convertToGeoJSON2(data) {
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
    for(n=0; n<10; n++){
        var bullet = "<span>" + data[n]["name"] + "</span>";
        var nameNDate = "<h4>" + data[n]["author"] + " // <i></i>" + data[n]["date"] + "</h4>";
        var artLink = data[n]["link"];
        var articleThing = "<li>" + bullet + "<br>" + nameNDate + "<br><a>" + artLink + "</a></li>";
        $("#articleWindow2").children("ul").append(articleThing);
        var stringy = "ul li:nth-child(" + (n+1) + ")";
        $("#articleWindow2").find(stringy).children("a").attr("href", artLink);
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
