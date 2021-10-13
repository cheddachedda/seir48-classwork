// $('a').each(function () {
//   const href = $(this).attr('href');
//   const thumbnailURL = youtube.generateThumbnailUrl(href);
//   $('<img>').attr('src', thumbnailURL).prependTo(this); // chaining
// })

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

const $links = $('a');
for (let i = 0; i < $links.length; i++) {
  thumbnailify( $links.eq(i) );
}
