$("#find-movie").on("click", function (event) {
  // event.preventDefault() can be used to prevent an event's default behavior.
  // Here, it prevents the submit button from trying to submit a form when clicked
  event.preventDefault();
  $("#movie-view").empty();
  $("#tv-info").empty()
  // Here we grab the text from the input box
  var movie = $("#movie-input").val();
  

  // Here we construct our URL
  var queryURL = "https://api.jikan.moe/v3/search/anime";
  var queryURL2 = "https://api.themoviedb.org/3/search/tv?api_key=db7158e18be46721680790e98a0633f3&language=en-US&query=" +
    movie + "&page=1";
  // https://api.themoviedb.org/3/search/tv?api_key=db7158e18be46721680790e98a0633f3&language=en-US&query=naruto&page=1

  var movieTitle = $("<div id='title-movie'>");
  movieTitle.append(`<h4>Movies</h4>`);
  $("#movie-view").append(movieTitle);
  $.ajax({
    url: queryURL,
    method: "GET",
    data: {
      q: movie,
      limit: 16
    }
  }).then(function (response) {
    for (var i = 0; i < response.results.length; i++) {
      var results = response.results[i];
      console.log(results);
      // console.log(results.image_url);
      // console.log(response.Poster);

      $("#movie-view").append(
        `<a href="${results.url}" target=_blank><img src="${results.image_url}" alt="${results.title} Poster"></a>`
      );
    }
  });
  // create a new variable  and div for the new tv tittle info and append all the tv info on the page
  var tvTitle = $("<div id='title-tv'>");
  tvTitle.append(`<h4>Television Shows</h4>`);
  $("#tv-info").append(tvTitle);

  // AJAX call for second api
  $.ajax({
    url: queryURL2,
    method: "GET"
  }).then(function (response) {
    //$("#tv-info").text(JSON.stringify(response));
    console.log("Tele Result:" + response.results);
    // for loop to get all the result and console log to test if information is being displayed.
    for (var i = 0; i < response.results.length; i++) {
      var anime = response.results[i];
      var imgSrc = anime.poster_path;
      console.log("second value" + anime);
      // informaton that will be retrieved name, origin country, original name, popularity, overwiew.
      if (imgSrc === null) {
      } else {
        $("#tv-info").append(
          `<a href="#" target=_blank><img src="http://image.tmdb.org/t/p/w185/${anime.poster_path}" alt="${anime.original_name} Poster"></a>`
        );
      }
    }
  });
});


