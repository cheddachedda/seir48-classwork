// https://github.com/bda-research/node-crawler
const Crawler = require('crawler');

const isCrawlable = (url) => {
  const terribleSites = ['archive.md', 'facebook.com', 'github.com', 'twitter.com']; // TODO: add more exceptions

  // heavy magic
  return ! terribleSites.some( (awfulSite) => url.includes(awfulSite) );
};

const c = new Crawler({
  rateLimit: 1000,
  callback: (err, res, done) => {
    if (typeof res.$ === 'function') { // Only use Cheerio (jQuery) when it's available (not PDFs for example)
      const title = res.$('title').text(); // <title> ... </title>
      console.log(title);
      console.log(res.request.uri.href); // the URL for the page we are crawling
      console.log();

      const $links = res.$('a[href^="http"]');
      $links.each(function () {
        const href = res.$(this).attr('href');
        if (isCrawlable(href)) {
          c.queue(href); // indirect recursion
        }
      });
    }
    done(); // we must call this every time the callback runs
  }
});

c.queue(process.argv[2] || 'https://lobste.rs/');
