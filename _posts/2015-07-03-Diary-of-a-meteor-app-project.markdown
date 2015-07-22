---
layout: post
title: Diary Of A Meteor App Project
permalink: diary-of-a-meteor-app-projects
date: 2015/07/03 
categories: Web Development
author: Christan Fergus
published: true
---
<small>Or, A really good excuse to try out Meteor and keep track of my ridiculous habit of buying Hot Wheels cars.</small>

>See the project on [Github](https://github.com/fergd/diecasttracker).
{: .pulled-blockquote}

## Entry 1: Coming to terms ##

I am actually very anti-materialism. I like to live my life as simply as possible. The accumulation of "things" is something that quite frankly is disgusting to me. I'm a complete hypocrite, though, because I collect worthless, pointless Hot Wheels cars. I love them because I love cars, and I know it's most likely as close as I'll ever get to owning an Aston Martin V12 Vantage, or better yet, a V8-powered toilet. 

I have a lot of cars. I must figure out a way to not buy duplicate cars. I may have a problem, but having multiples is over the line, even for me. I need a solution. Clearly, it must be a digital solution. I must be able to easily use it with my non-descript handheld device. I'm sure a simple database app, or even a Hot Wheels app exists for this purpose. I should&mdash;shut your filthy face, Fergus. You're a developer, it doesn't matter if there are a hundred apps doing exactly what you want, you make your own damn app because that's what developers do! 

## Entry 2: How the Hell Do I Make An App? ##

There a many ways I could go with this. A framework? Nah. All Node? Maybe. Try out react? Not yet. I'll ask around on Twitter. A few people have mentioned Meteor. Okay, I'll give it a try. * Google Google Google Google Google Google * So here are some resources I've found useful, right off the bat. Perhaps if someone finds this diary entry, they will to.

- [This Meteor book](http://meteortips.com/first-meteor-tutorial/)
- [The Meteor website (of course)](https://www.meteor.com/)
- [This talk helped me understand just what the hell is going on](https://www.youtube.com/watch?v=SYqyWff6iMQ)
- [Deployment](https://www.youtube.com/watch?v=6xdHYMddtIw)
{: .post-unordered-list}

## Entry 3: What Am I Actually Building? ##

### What's my end goal? ###
1. I must be able to quickly and easily search for a car (with or without a data connection) 
2. I want to record a car if I don't have it and I buy it
3. I'd like to see all the cars I own
4. Perhaps I'll allow other people to use this, so a log in system is necessary
{: .post-list}

### What's my process? ###

1. I will design out a couple ideas first in Illustrator. I'll be as creative as I want. 
2. I'll put the designs away and focus on the data next. How do I want to structure it? A Google Sheets spreadsheet is the perfect place to test this out.
3. There are many things I'd like this app to be, but I think the best idea is to crank out a minimum viable product and iterate on that. Bare minimum: search capability, search results display, data entry (just entry for now, I'll worry about editing existing collections and adding images later)
4. Hop in Sublime text, grab a few tutorials, and have at the code. Get the code aspect to MVP stage.
5. Now, make semantic markup and add CSS. Here's where I can take a really modular approach so I can lift and replace components without messing with the rest of the design. 
6. Deploy (most likely to Heroku)
{: .post-list}

## Getting the Data ##

I have already undergone the arduous process of not only recording all the cars I have in a Google Sheets file, but I've photographed the cars as well. I'm not about to re-record everything, even though I do have a fairly nice interface. What I really need is a JSON dump. Here's how I got all that Sheets data into something MongoDB can deal with. Also, this worked the first time. That NEVER happens. [Exporting a Google Spreadsheet as JSON](http://blog.pamelafox.org/2013/06/exporting-google-spreadsheet-as-json.html) 

After a few tests the copy/paste of JSON data in the console has it's limitations. I'm not going to worry about getting all the data in to the app quite yet, I have bigger fish to fry, like actually making this thing work. 

## Entry 4: Adding Some Valuable Style ##

### MVP ###

Minimum Viable Product, you rube. I tend to spin out of control with projects like this and because there is so much to learn, I dip my toes in twenty things and don't actually learn anything. I have so many browser tabs open at the moment it's the digital version of hoarding. I have to focus, so here's where I'm going to land: get the absolute bare minimum working. This will means I will incorporate single-page templating, a solid way of recording data, a solid way of displaying that data, and a solid way of searching through that data. 

So I got that far and I couldn't handle the plain markup display any longer. It was time to actually style the thing. Again, focusing on the MVP, I took a view at a time and skinned it up. Below are the results. 

![Diecast Tracker Home Page]({{ site.cdn_image }}/dc_landing.jpg){: .post-image .pull-left}
![Diecast Tracker Home Page]({{ site.cdn_image }}/dc_find.jpg){: .post-image .pull-left}
![Diecast Tracker Home Page]({{ site.cdn_image }}/dc_list.jpg){: .post-image .pull-left}
![Diecast Tracker Home Page]({{ site.cdn_image }}/dc_record.jpg){: .post-image .pull-left}

## Entry 5: Security ##

Remove autopublish (this made it easier to mess around with, but is insecure for the real world)
Also remove insecure(?)

allowing users to insert into database https://www.discovermeteor.com/blog/meteor-methods-client-side-operations/

To view database results, you MUST publish the db on the server and subscript to that collection on the client! This took me TEN YEARS to figure out!! https://www.meteor.com/tutorials/blaze/publish-and-subscribe

You then must, in the server.js file, allow the users to update the fields http://docs.meteor.com/#/full/allow

## Entry 6: The Build ##

This was hard. First off, you can deploy your project to <yourappnamehere>.meteor.com by running 
{% highlight bash %}
$ meteor deploy <yourappnamehere>
{% endhighlight %}
That's pretty nice, but at some point, you want it a little more, well, somewhere else. Deploying 

Before I stepped out on my own with Cloudfront, I bridged the gap to independence by deploying to Heroku. 

I did this http://www.growthux.com/ux-html-css-js-growth-hack/installing-meteor-on-heroku install but used this https://github.com/jordansissel/heroku-buildpack-meteor buildpack (very important). Note: depending on when you read this, the buildpack may have changed. If you have problems building, this is one of the first things to check. 

Requirements: an external MongoDb account, Heroku account, github account. 

After doing all the steps, I connected my heroku app to my git repo so that any time I push to origin master, there was a hook that fired a build on Heroku. This is a nice thing to have. There are options when you connect accounts. I opted for the automatic deploy, since no one really was going to look at this, but you may not want to do that.


## Stay Tuned... ##

I'm updating this as I go along. 