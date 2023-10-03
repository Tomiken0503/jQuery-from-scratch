$(() => {
    $('.carousel').slick({
        autoplay: true,
        dots: true,
        fade: true,
        speed: 1500,
        pauseOnHover: false,
        arrows: false
    });
    
    // リンクにマウスをホバー時透明度を上げる
    $('a').on('mouseover',(e) => {
        $(e.target).animate({
            opacity: 0.5
        },100);
    });

    // マウスが離れたら透明度を元に戻す
    $('a').on('mouseout',(e) => {
        $(e.target).animate({
            opacity: 1
        },100);
    });

    // スクロールイベント処理
    $(window).on('scroll',(e) => {
        const windowHeight = $(window).height();
        const scroll = $(window).scrollTop();

        // Topに戻るボタン表示
        if(scroll > 100){
            $('#page_top').fadeIn();
        }
        else{
            $('#page_top').fadeOut();
        }
        
        // セクションをフェードインさせる
        $('section').each((index,element) => {
            const targetPosition = $(element).offset().top;
            if (scroll > targetPosition - windowHeight + 100) {
              $(element).addClass("sectionFade");
            }
          });
    });

    // ページ内リンクのスクロールをなめらかにする
    $('a[href^="#"]').click((e) => {
        var adjust = 0;
        var speed = 500;
        var href= $(e.target).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + adjust;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
      });

      $(".works img").on('click',(e) => {
        const imgSrc = $(e.target).attr('src');
        $('.big-img').attr('src', imgSrc);
        $('#modal').fadeIn();
        return false
      });

      // 閉じるボタンをクリックしたときにモーダルを閉じる
      $('.close-btn').on('click',(e) =>{
        $('#modal').fadeOut();
        return false
      });

});