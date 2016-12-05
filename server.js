var RSS = require('rss');
var uuid = require('uuid');
var express = require('express');
var app = express();




 



app.use('/rss', function (req, res) {
    /* lets create an rss feed */
var feed = new RSS({
    title: 'Is Bank Echo Flash Brief',
    description: 'Weekly news feed from Is Bank for Amazon Echo',
    feed_url: 'http://example.com/rss.xml',
    site_url: 'http://example.com',
    image_url: 'http://example.com/icon.png',
    docs: 'http://example.com/rss/docs.html',
    managingEditor: 'Eren Hukumdar',
    webMaster: 'Eren Hukumdar',
    copyright: 'Isbank',
    language: 'en',
    categories: ['Banking','Innovation','Technology'],
    pubDate: '2016-12-05T00:00:00.0Z',
    ttl: '100'
});
 
 var options = {
    title:  'Test Feed',
    description: 'it is a test feed for testing',
    url: 'http://example.com/article4?this&that', // link to the item 
    guid:'123', // optional - defaults to url 
    categories: ['Banking','Innovation','Technology'], // optional - array of item categories 
    author: 'Eren Hukumdar', // optional - defaults to feed author property 
    date: '2016-12-05T00:00:00.0Z', // any format that js Date can parse. 
}
options.guid= uuid.v1();  
/* loop over data and add to feed */
feed.item(options);



// cache the xml to send to clients 
var xml = feed.xml();
  res.header("Content-Type", "application/rss+xml");
  res.send(xml);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})