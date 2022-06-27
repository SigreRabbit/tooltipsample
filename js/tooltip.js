$(function () {
    $(".card")
        //ホバーイベント
        .hover(
            function () {
                var tip = $(this).children(".tip")
                tip.show(); //マウスオーバーで表示
            }, function () {
                var tip = $(this).children(".tip")
                tip.hide(); //マウスオーバーで表示
            }
        )
        //マウスムーブイベント
        .mousemove(
            function (e) {
                var tip = $(this).children(".tip")

                var mousex = e.pageX + 20; //マウスの位置（X座標）を取得
                var mousey = e.pageY + 20; //マウスの位置（Y座標）を取得
                var tipWidth = tip.width(); //ツールチップの幅を取得
                var tipHeight = tip.height(); //ツールチップの高さを取得

                var tipVisX = $(window).width() - (mousex + tipWidth);
                var tipVisY = $(window).height() - (mousey + tipHeight);

                if (tipVisX < 20) { //画面幅を超えた場合はX座標を調節
                    mousex = e.pageX - tipWidth - 20;
                } if (tipVisY < 20) { //画面高さを超えた場合はY座標を調節
                    mousey = e.pageY - tipHeight - 20;
                }
                tip.css({ top: mousey, left: mousex });
            }
        );
});