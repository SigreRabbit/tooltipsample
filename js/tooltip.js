$(function () {
    $(".card")
        //マウスが画像の上を移動すると画像が消えない不具合があり、
        //原因は分かっているので修正予定です
    
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
                var tip = $(this).next(".tip")

                var tipLeft = e.pageX;
                var tipTop = e.pageY;

                var mouseX = e.clientX;
                var mouseY = e.clientY;
                var tipWidth = tip.width();
                var tipHeight = tip.height();
                var tipVisX = $(window).width() - (mouseX + tipWidth);
                var tipVisY = $(window).height() - (mouseY + tipHeight);
                if (tipVisX < 0) { //画面幅を超えた場合はX座標を調節
                    tipLeft = tipLeft - tipWidth;
                }
                if (tipVisY < 0) { //画面高さを超えた場合はY座標を調節
                    tipTop = tipTop - tipHeight;
                }

                tip.css({ left: tipLeft, top: tipTop });
            }
        );
});
