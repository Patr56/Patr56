(function(idElement, classPrefix) {
    var season;
    var currentMonth = new Date().getMonth() + 1;
    var placeForSeasonEl = document.getElementById(idElement);

    function checkSeason(months) {
        return months.indexOf(currentMonth) >= 0;
    }

    if (checkSeason([12, 1, 2])) {
        season = "winter";
    } else if (checkSeason([3, 4, 5])) {
        season = "spring";
    } else if (checkSeason([6, 7, 8])) {
        season = "summer";
    } else if (checkSeason([9, 10, 11])) {
        season = "autumn";
    } else {
        season = null;
    }

    if (season) {
        placeForSeasonEl.className += " " + classPrefix + season;
    }

})("place", "business-card__place_");
