$(function () {
    // swiper
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 5,
        spaceBetween: 20,
        loop: true,
        nextButton: '.arrow_btn_right',
        prevButton: '.arrow_btn_left'
    })

    // 把电影信息添加到div中
    var str1 = $('.movie_hidInfo').text();
    $('.movie_info').html(str1);

    // header延迟跳转
    $('.tab').find('a').on('click', function () {
        var _this = this
        setTimeout(function () {
            window.location.href = _this.href;
        }, 350);
    });

    // 留言求片
    $('.comment').on('click', function (event) {
        event.preventDefault();
        if ($('.comment_name').val() && $('.comment_content').val()) {
            $('.comment_form').submit();
        } else {
            alert('请填写完整的信息')
        }
    });

});