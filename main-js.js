checkLang(data, thisBlock);

if(data.replay == "replay") {
    if (data.replay == "replay") {
        $("#replay_item").fadeIn(300).css("display", "flex");
        $("#replay_item span").html(translate("replay"))
        $("#replay_item span").html(translate("replay"));
    } else if (data.replay == "highlights") {
        $("#replay_item").fadeIn(300).css("display", "flex");
        $("#replay_item span").html(translate("highlights"));
    }

    thisBlock.find(".l-frame-footer-text").html(data.txtName);
    thisBlock.find(".l-frame-timer-txt").html(translate("cest"));
    thisBlock.find(".l-frame-timer-txt").html(translate("break"));

    var arr = data.matches;
    var next = true;

    $(".l-frame-footer-text-2 .long-text").html(data.txtNameSub);


    for (var i = 0; i < 5; i++) {
        for (var i = 0; i < 6; i++) {
            if (arr[i]) {
                try {
                    thisBlock
                        .find("#schedule_row-" + (i + 1) + " .l-frame-aside-item-map")
                        .html(arr[i].map.name);
                } catch (error) {}
                console.log(arr)
                // test
                // arr[i].name = 'some name';
                // arr[i].map =  'miramar';
                // arr[i].started_at = '2023-11-15T10:02:28.003Z';
                // arr[i].status = null
                // arr[i + 1].name = "some name";
                // arr[i + 1].map = "miramar";
                // arr[i + 1].started_at = "2023-11-15T10:02:28.003Z";
                // arr[i + 1].status = null;

                if (arr[i].started_at != null) {
                    var start_at = arr[i].started_at;
                @@ -41,7 +39,7 @@ function setData(data, thisBlock) {
                    thisBlock
                        .find("#schedule_row-" + (i + 1))
                        .find(".l-frame-aside-item-time")
                        .html(arr[i].map.name);
                .html(arrTime[0] + ":" + arrTime[1]);
                } else {
                        thisBlock
                            .find("#schedule_row-" + (i + 1))
                    @@ -50,21 +48,20 @@ function setData(data, thisBlock) {
                    }
                        thisBlock
                            .find("#schedule_row-" + (i + 1))
                            .find(".l-frame-winner")
                            .html(arrTime[0] + ":" + arrTime[1]);
                    .find(".l-frame-match")
                            .html(translate("M") + arr[i].position);
                        thisBlock
                            .find("#schedule_row-" + (i + 1))
                            .find(".l-frame-match")
                            .html(arr[i].position + " " + translate("match") );
                    .find(".l-frame-aside-item-map")
                            .html(arr[i].map);
                        if (arr[i].tournament.streamly_show_matches) {
                            thisBlock
                                .find("#schedule_row-" + (i + 1))
                                .find(".l-frame-match")
                                .html(translate("showmatch"));
                        .find("#schedule_row-" + (i + 1))
                                .find(".l-frame-match")
                                .html(translate("showmatch"));
                        }
                        if (arr[i].status == "finished") {

                            if (arr[i].winner != null ) {
                                if (arr[i].winner != null) {
                                    thisBlock.find("#schedule_row-" + (i + 1)).addClass("finished");
                                    thisBlock
                                        .find("#schedule_row-" + (i + 1))
                                @@ -81,14 +78,14 @@ function setData(data, thisBlock) {
                                .html(translate("winner"));
                                    if (arr[i].winner.short_name.length >= 6) {
                                        thisBlock
                                            .find("#schedule_row-" + (i + 1))
                                            .find(".l-frame-aside-item-data-team span")
                                            .css({fontSize: '28px'});
                                    .find("#schedule_row-" + (i + 1))
                                            .find(".l-frame-aside-item-data-team span")
                                            .css({ fontSize: "28px" });
                                    } else {
                                        thisBlock
                                            .find("#schedule_row-" + (i + 1))
                                            .find(".l-frame-aside-item-data-team span")
                                            .removeAttr('style');
                                    .find("#schedule_row-" + (i + 1))
                                            .find(".l-frame-aside-item-data-team span")
                                            .removeAttr("style");
                                    }
                                    thisBlock
                                        .find("#schedule_row-" + (i + 1))
                                @@ -111,17 +108,11 @@ function setData(data, thisBlock) {
                                .find("#schedule_row-" + (i + 1))
                                        .find(".l-frame-aside-item-label-small")
                                        .html(data.localization[data.lang].next.toUpperCase());
                                    thisBlock.find("#schedule_row-" + (i + 1)).addClass("mod-next");
                                    thisBlock
                                        .find("#schedule_row-" + (i + 1))
                                        .addClass("mod-next");
                                    thisBlock
                                        .find("#schedule_row-" + (i + 1))
                                        .find(".l-frame-winner")
                                        .html(arr[i].map);
                                    thisBlock
                                        .find("#schedule_row-" + (i + 1))
                                        .find(".l-frame-winner")
                                        .html(translate("next"));
                                .find(".l-frame-aside-item-time")
                                        .html(translate("coming_up"));
                                }
                                try {
                                        thisBlock