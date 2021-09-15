$('.tab a').on('click', function (e) {
    
    e.preventDefault();
    $('.tab a').removeClass('active');
    $(this).addClass('active');
   target = $(this).attr('href');
   $('.tab-content > div').not(target).hide();
    $(target).fadeIn(600);
    });
  


  