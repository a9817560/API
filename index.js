const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://movie-database-imdb-alternative.p.rapidapi.com/?i=tt4154796&r=json",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "undefined",
		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});