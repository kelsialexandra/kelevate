$(function() {

  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    }
  });

    $('button').on('click', function(event) {
    event.preventDefault();
    $('.form').toggle("fast");
    });

    $('.form-exit').on('click', function(event) {
    event.preventDefault();
    $('.form').toggle("fast");
    });

    $('.form').on('click', 'button', function() {
    alert('We look forward to working with you! Our team will be in touch soon.');
    });

    $('.ford-logo').on('click', function(event){
        event.preventDefault();
        $('.ford-case-study').show();
        $(this).hide();

    })

    $('.starbucks-logo').on('click', function(event){
        event.preventDefault();
        $('.starbucks-case-study').show();
        $(this).hide();
    })

    $('.toy-logo').on('click', function(event){
        event.preventDefault();
        $('.toy-case-study').show();
        $(this).hide();
    })

    $('.vega-logo').on('click', function(event){
        event.preventDefault();
        $('.vega-case-study').show();
        $(this).hide();
    })


    $('.exit-case-study').on('click', function(event) {
        event.preventDefault();
        $('.ford-case-study').hide();
        $('.ford-logo').show();
    });

    $('.exit-case-study').on('click', function(event) {
        event.preventDefault();
        $('.starbucks-case-study').hide();
        $('.starbucks-logo').show();
    });

    $('.exit-case-study').on('click', function(event) {
        event.preventDefault();
        $('.toy-case-study').hide();
        $('.toy-logo').show();
    });

    $('.exit-case-study').on('click', function(event) {
        event.preventDefault();
        $('.vega-case-study').hide();
        $('.vega-logo').show();
    });

});