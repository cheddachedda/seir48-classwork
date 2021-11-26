$(document).ready(() => {
  $('#add-color').on('click', () => {
    const color = $('#color').val();
    const $swatch = $('<div />').addClass('swatch').css('background-color', color);
    $swatch.appendTo('.palette');
  });

  // Event delegation:
  // $(parent).on(event, child, fn);
  // $(thing).on(event, fn);
  $('.palette').on('click', '.swatch', function () {
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
  });

  // Event delegation: listen for events on the parent FOR EFFICIENCY
  $('.canvas').on('mouseover', '.pixel', function (event) {
    if (event.shiftKey === false) return;
    const color = $('.swatch.selected').css('background-color');
    $(this).css('background-color', color);
  })
});
