(function(idElement, classPrefix) {
    var season;
    var currentMonth = new Date().getMonth();
    var placeForSeasonEl = document.getElementById(idElement);

    if ([0, 1, 11].indexOf(currentMonth)) {
        season = "winter";
    } else if ([2, 3, 4].indexOf(currentMonth)) {
        season = "spring";
    } else if ([5, 6, 7].indexOf(currentMonth)) {
        season = "summer";
    } else if ([8, 9, 10].indexOf(currentMonth)) {
        season = "autumn";
    } else {
        season = null;
    }

    if (season) {
        placeForSeasonEl.className += " " + classPrefix + season;
    }

})("place", "business-card__place_");
