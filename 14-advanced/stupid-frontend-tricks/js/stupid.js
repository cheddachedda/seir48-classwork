$(document).ready(function () {
  // Parallax //////////////////////////////////////////////////////////////////
  // Cacheing
  const $kitty = $('.kitty-js');
  const $body = $('body');

  $(window).on('scroll', () => {
    const scrollTop = $(window).scrollTop();
    $kitty.css('background-position-y', -scrollTop / 2);
    $body.css('background-position-y', -scrollTop / 2.5);
  });

  // Bubbles ///////////////////////////////////////////////////////////////////
  $(window).on('mousemove', (event) => {
    const { pageX: x, pageY: y } = event; // Destructuring with renaming.

    const size = Math.random() * 5;

    const $bubble = $('<div class="bubble" />').css({
      left: x,
      top: y,
      width: size + 'em',
      height: size + 'em'
    });

    $bubble.appendTo('body');

    $bubble.animate({ top: '-10em' }, 3000, () => {
      $bubble.remove();
    });
  });
});
