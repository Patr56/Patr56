(function() {
    var currentMonth = new Date().getMonth();
    var placeForSeasonEl = document.getElementById("place");

    var season;
    switch (currentMonth) {
        // winter
        case 11:
        case 0:
        case 1:
            season = "winter";
            break;

        // spring
        case 2:
        case 3:
        case 4:
            season = "spring";
            break;

        // summer
        case 5:
        case 6:
        case 7:
            season = "summer";
            break;

        // autumn
        case 8:
        case 9:
        case 10:
            season = "autumn";
            break;
        default:
            season = null;
            break;
    }

    if (season) {
        placeForSeasonEl.className += " business-card__place_" + season;
    }

})();
