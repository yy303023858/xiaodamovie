$(function () {
    var imgNum = $('.new_movie_item').length;
    var imgWidth = $(window).width() / imgNum;
    var clickNum = 0;
    var flag = null;
    $('.new_movie_item').each(function (index) {
        $(this).css('left', imgWidth * index + 'px')
    })
    $('.new_movie_item').width(imgWidth);
    $('.new_movie_container').height($('.new_movie_item').height());
    $('.icon-arrowrightcircle').on('click', function () {
        clickNum++;
        flag = false;
        var str = $('.new_movie_item').eq(0).clone(true);
        str.css({
            position: 'absolute',
            left: (imgWidth * Math.abs(clickNum - 1) + $(window).width()) + 'px'
        })
        $('.new_movie_container').append(str);
        $('.new_movie_container').css({
            transform: 'translateX(' + (-clickNum * imgWidth) + 'px)'
        })
    });
    $('.icon-arrowleftcircle').on('click', function () {
        clickNum--;
        flag = true;
        // $('.new_movie_container').width(($('.new_movie_item').length + 1) * imgWidth);
        var str = $('.new_movie_item').eq($('.new_movie_item').length - 1).clone(true);

        str.css({
            left: -imgWidth * Math.abs(clickNum) + 'px'
        })
        $('.new_movie_container').prepend(str);
        $('.new_movie_container').css({
            transform: 'translateX(' + (-clickNum * imgWidth) + 'px)'
        })
    });
    $('.new_movie_container').on('transitionend', function () {
        if (flag) {
            // 点击左按钮
            $('.new_movie_item').eq($('.new_movie_item').length - 1).remove();
        } else {
            $('.new_movie_item').eq(0).remove();
        }

    })
})