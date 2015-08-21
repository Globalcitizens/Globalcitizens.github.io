//Asia!!


$(document).ready(function(){
    var URL = "1Q0D9NHj_g4154D1QQjCmGgDicKBLz06k43FdsTOt6mg";
    Tabletop.init( { key: URL, callback: convertToGeoJSON4, simpleSheet: true } );
    
    $("#articleWindow4").children("h3").text("News for Asia");
});

articles = [];

function convertToGeoJSON4(data) {
    console.log(data);
    var dataLength = data.length;
    var useThis = dataLength - 1;
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
    for(n=useThis; n > useThis - 7; n--){
        var bullet = "<span>" + data[n]["name"] + "</span>";
        var nameNDate = "<h4>" + data[n]["author"] + " // <i></i>" + data[n]["date"] + "</h4>";
        var artLink = data[n]["link"];
        var articleThing = "<li>" + bullet + "<br>" + nameNDate + "<br><a>" + artLink + "</a></li>";
        $("#articleWindow4").children("ul").append(articleThing);
        var stringy = "ul li:nth-child(" + (dataLength - n) + ")";
        $("#articleWindow4").find(stringy).children("a").text("CATS");
    }
}
