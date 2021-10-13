// Create an array of every link on the page using document.querySelectorAll(cssSelector)

// Iterate through the array. In each iteration of the loop:

// Find the current href using element.getAttribute(name), and store into a variable
// Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
// Create an IMG element using document.createElement(tagName)
// Set the "src" of the IMG element using element.setAttribute(name, value)
// Append the IMG to the link using element.appendChild(element)

// DOM
const links = document.querySelectorAll('a');
for (let i = 0; i < links.length; i++) {
  const link = links[i]
  const href = link.getAttribute('href');
  const thumbnailURL = youtube.generateThumbnailUrl(href);
  const image = document.createElement('img');
  image.setAttribute('src', thumbnailURL);
  link.appendChild(image);
}

// jQuery
const $links = $('a');
for (let i = 0; i < $links.length; i++) {
  const $link = $links.eq(i);
  const href = $link.attr('href');
  const thumbnailURL = youtube.generateThumbnailUrl(href);
  const $image = $('<img>')
  $image.attr('src', thumbnailURL);
  $link.prepend($image);
}

// Goals: Aim for This

$('a').each(function () {
  const href = $(this).attr('href');
  const thumbnailURL = youtube.generateThumbnailUrl(href);
  $('<img>').attr('src', thumbnailURL).prependTo(this); // chaining
})

// Probably too clever
$('a').each(function() {
  $(this).prepend(
    $('<img>').attr('src', youtube.generateThumbnailUrl($(this).attr('href')))
  );
});
