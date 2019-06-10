var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 40,
    backSpeed: 40,
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.bgimg');
    var instances = M.Parallax.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.bgimg').parallax();
  });
        