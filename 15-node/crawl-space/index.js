// https://github.com/bda-research/node-crawler
const Crawler = require('crawler');

const c = new Crawler({
  rateLimit: 1000,
  callback: (err, res, done) => {
    const title = res.$('title').text(); // <title> ... </title>
    console.log(title);
    console.log(res.request.uri.href); // the URL for the page we are crawling

    const $links = res.$('a[href^="http"]'); // This is broken
    $links.each(function () {
      const href = res.$(this).attr('href');
      c.queue(href);
    });

    done(); // we must call this every time the callback runs
  }
});

c.queue('https://lobste.rs/');
