const thumbnailify = function ($link) {
  // Create thumbnail
  const href = $link.attr('href');
  const thumbnailURL = youtube.generateThumbnailUrl(href);
  const $image = $('<img>')
  $image.attr('src', thumbnailURL);

  // Prepend thumbnail to <a>
  $link.prepend($image);

  // Add click listener
  $link.on('click', function (event) {
    event.preventDefault(); // Don't let the browser "follow" the link
    const embedURL = youtube.generateEmbedUrl(href);
    $('#player').hide().attr('src', embedURL).fadeIn(2000);
  });
}

$(document).ready(function () {
  $('a').each(i => console.log( $(this) ));

  $('h1').funText(33, ['#ff7400', '#cd0074', '#0c0']);
  $('a').funText(10, 'candy');
});

// $('a').each(function () {
//   const href = $(this).attr('href');
//   const thumbnailURL = youtube.generateThumbnailUrl(href);
//   $('<img>').attr('src', thumbnailURL).prependTo(this); // chaining
// })
