$(function () {
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
    $('.index').on('click', function() {
        setTimeout(function() {
            window.location.href = '/index';
        }, 350);
    });
    $('.action').on('click', function() {
        setTimeout(function() {
            window.location.href = '/action';
        }, 350);
    });
    $('.comedy').on('click', function() {
        setTimeout(function() {
            window.location.href = '/comedy';
        }, 350);
    });
    $('.affectional').on('click', function() {
        setTimeout(function() {
            window.location.href = '/affectional';
        }, 350);
    });
    $('.science_fiction').on('click', function() {
        setTimeout(function() {
            window.location.href = '/science_fiction';
        }, 350);
    });
    $('.dracula').on('click', function() {
        setTimeout(function() {
            window.location.href = '/dracula';
        }, 350);
    });
    $('.comments').on('click', function() {
        setTimeout(function() {
            window.location.href = '/comments';
        }, 350);
    });

    // 留言求片
    $('.comment').on('click', function(event) {
        event.preventDefault();
        if ($('.comment_name').val() && $('.comment_content').val()) {
            console.log('可以发送');
            $('.comment_form').submit();
        }else{
            alert('请填写完整的信息')
        }
    });
});