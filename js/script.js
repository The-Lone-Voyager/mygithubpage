$(function(){
  if ($(window).width() >= 980)
  {
    $("#sidebar").html("<img id='profile' src='img/profile.jpg' alt='Picture of Dakota' />" +
    "<div id='my-name'>Dakota Barron</div>" +
    "<a href='http://www.github.com/dakotabarron'>" +
      "<img id='github' src='img/github.svg' alt='Link to my Github' />" +
    "</a>" +
    "<div id='my-email'>" +
      "<a href='mailto:dakotabarron52@gmail.com'>dakotabarron52@gmail.com</a>" +
    "</div>" +
    "<div id='address'>" +
      "717 Frederica Street<br />" +
      "Owensboro KY, 42301" +
    "</div>");
  } else {
    $("#sidebar").html("<img id='profile' src='img/profile.jpg' alt='Picture of Dakota' />" +
    "<a href='http://www.github.com/dakotabarron'>" +
      "<img id='github' src='img/github.svg' alt='Link to my Github' />" +
    "</a>" +
    "<a href='mailto:dakotabarron52@gmail.com'>" +
      "<img id='email' src='img/mail.svg' alt='Click to email me' />" +
    "</a>");
  }
  var apiString = "https://newsapi.org/v1/articles?source=the-wall-street-journal&sortBy=top&apiKey=97a972befb5c4501a92175f3e455ea88";

  var row;
  var column = document.createElement("div");
  $(column).attr("id", "news-column-flex");
  $("#news-area").append(column);

  $.get(apiString, function(r){
    for (var i = 0; i < 10; ++i){

      if ($(window).width() >= 980) {
        if ((i % 2) == 0) {
          row = document.createElement("div");
          $(row).addClass("news-row-flex");
        }
      }
      var news = document.createElement("div");
      $(news).addClass("news");
      var img = document.createElement("img");
      var title = document.createElement("div");
      $(title).addClass("story-title");
      var body = document.createElement("div");
      $(body).addClass("story-body");
      var author = document.createElement("div");
      $(author).addClass("author");
      var date = document.createElement("div");
      $(date).addClass("date");

      var link = document.createElement("a");
      $(link).append(img, title, author, date, body);

      $(img).attr("src", r.articles[i].urlToImage);
      $(title).text(r.articles[i].title);
      $(body).text(r.articles[i].description);
      $(link).attr("href", r.articles[i].url);
      $(author).text((r.articles[i].author));
      $(date).text(((new Date(r.articles[i].publishedAt)).toLocaleString()));

      $(news).append(link);

      if ($(window).width() >= 980) {
        $(row).append(news);

        if ((i % 2) == 1){
          $(column).append(row);
        }
      } else {
        $(column).append(news);
      }
    }
  }).done(function(){
    });
});
