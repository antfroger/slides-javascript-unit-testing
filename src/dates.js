var dateFormatter = {
    format: function (from, now) {
        var date = new Date(from);
        var now_date = now ? new Date(now) : new Date();
        var diff = (now_date.getTime() - date.getTime()) / 1000;
        var day_diff = Math.floor(diff / 86400);

        if (isNaN(day_diff) || day_diff < 0) {
            return;
        }

        if (day_diff >= 31) {
            return "A long time ago";
        }

        return day_diff === 0 && (
                diff < 60 && "just now" ||
                diff < 120 && "1 minute ago" ||
                diff < 3600 && Math.floor( diff / 60 ) + " minutes ago" ||
                diff < 7200 && "1 hour ago" ||
                diff < 86400 && Math.floor( diff / 3600 ) + " hours ago") ||
            day_diff === 1 && "Yesterday" ||
            day_diff < 7 && day_diff + " days ago" ||
            day_diff < 31 && Math.ceil( day_diff / 7 ) + " weeks ago";
    }
};
