---
layout: post
title:  "Converting christanfergus.com To Jekyll"
permalink: converting-to-jekyll/
date: 2015-04-06
categories: Web
author: Christan Fergus
published: false
---

## Converting christanfergus.com To Jekyll
I had been needing to add a blog component to my site for quite a while, but did not want to go the Wordpress route. Jekyll was the logical choice. 

I like Jekyll because the approach you use is how I like to think about how I make my sites. Beyond that, it's relatively straight-forward and keeps you in control of just about every aspect of your website.

I really took a cavalier, dive in and get an mvp approach. I didn't use any frameworks at first, I just wanted to figure out Jekyll itself, then worry about the rest later. And that's what I did. In dedicated time, it probably took me a couple days to convert my old site design over, polish it up a bit, hammer through quirks and learning experiences, and push that mvp jekyll site.

After I did this, however, there was a lot I still needed to do. My config file was lacklustre. I didn't have a task runner going. I was initially pushing ALL my code, not just the _site file to gh-pages. Nothing was gzipped, compressed, optimized, etc. MVP indeed. 

Here are some tools I used and things I did to get the site more respectable. 

### Tools

### prose.io
This is a very handy markdown editor that plugs directly in to your site. From prose you can write, edit, format and even push your work, all from anywhere. It is a solid step forward in making the blog aspect of my site feel more CMS-ish since I have in-browser tools.
* [prose.io](http://prose.io)

### Custom URL
[This guy's blog](http://davidensinger.com/2013/03/setting-the-dns-for-github-pages-on-namecheap/) to help me configure the DNS correctly
 
* jekyll bootstrap (reference only)
* 
* github pages (of course)
* Used Google Drive as CDN (modded all host records in domain for shorter urls), custom variable site.cdn_image

Initially I just got something up and pushed live, but it didn't take care of important things such as giving me control over building and output. Therfore I got Gulp up and running.
*[install gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) 
*[install bower](http://bower.io/)
*[install poole](https://github.com/iamcarrico/generator-poole)

### Gulp
This guy helped https://github.com/shakyShane/jekyll-gulp-sass-browser-sync
