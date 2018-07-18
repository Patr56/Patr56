(function(idElement, classPrefix) {
    var season;
    var currentMonth = new Date().getMonth();
    var placeForSeasonEl = document.getElementById(idElement);

    function checkSeason(months) {
        return months.indexOf(currentMonth) >= 0;
    }

    if (checkSeason([0, 1, 11])) {
        season = "winter";
    } else if (checkSeason([2, 3, 4])) {
        season = "spring";
    } else if (checkSeason([5, 6, 7])) {
        season = "summer";
    } else if (checkSeason([8, 9, 10])) {
        season = "autumn";
    } else {
        season = null;
    }

    if (season) {
        placeForSeasonEl.className += " " + classPrefix + season;
    }

})("place", "business-card__place_");
