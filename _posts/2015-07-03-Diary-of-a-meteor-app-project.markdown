---
layout: post
title: Diary Of A Meteor App Project
subtitle: A case study chronicling my first experience with Meteor
permalink: /articles/diary-of-a-meteor-app-project/
date: 2015/07/03 
category: Web & App Development
author: Christan Fergus
published: true
comments: true
---
## For Starters... ##

This post is more of a case-study and chronicle of my experience with Meteor, and less of a how-to. The nice thing about Meteor is that the community is quite large and there are tens if not hundreds of tutorials out there. I thought it might be good to describe my experience more than the technical side in hope that it can help paint a broader picture of the Meteor experience. 

![Overviews of using the app]({{ site.cdn_image }}quick-car-gif.gif){: .post-image}


## Why Make An App? ##

I am actually very anti-materialism. I like to live my life as simply as possible. The accumulation of stuff is something that disgusts me. I'm a complete hypocrite, however. I collect worthless, pointless, Hot Wheels cars. I love them because I love cars, I like toys, and I know it's most likely as close as I'll ever get to owning an [Aston Martin Vantage]({{ site.cdn_image }}diecast/IMG_20150630_CFH15.JPG), or better yet, a [four cylinder Radio Flyer wagon]({{ site.cdn_image }}diecast/DSC00760.jpg).

Whenever I’m out and about, I always check a store’s toy section and poke around to see if there is a car that piques my interest. I have hundreds of cars, which means that’s a lot to remember. I have purchased a lot of duplicate cars because I often forget which cars I already have. It became clear I needed a way to keep track of all this nonsense.

## What Technology Do I Use? ##

Let’s put aside for a moment the probability that something like this already exists. Whether it’s specific to a Hot Wheels collector, or just a simple form of db recording and retrieval, I’m sure it’s out there. The point here, though, is that I wanted to make an app all by m’self, so why not apply it to a direct need I have? To be honest, I’ve still not looked to see if anything like this exists. Not really much of a point now. 

I poked around to see what sort of technology or language I wanted to work in. In all honesty, it was always going to be something javascriptish. Angular? Nah. All Node? Maybe. Try out React? Not yet. I shot the question out on the Twitters and immediately got people hailing the wonders of Meteor. So, after much Googling, I thought it was worth going with. 

Here’s a breakdown of the resources that got me started, but not nearly a complete list of all the sites I hit looking for answers. Like every good developer, at any given time I had about fifteen tabs open split across Meteor docs and Stack Overflow. 

*	[Your First Meteor Application](http://meteortips.com/first-meteor-tutorial/)
*	[The Meteor website](https://www.meteor.com/)
*	[This talk](https://www.youtube.com/watch?v=SYqyWff6iMQ)
*	[How to deploy](https://www.youtube.com/watch?v=6xdHYMddtIw)

## The Process ## 

### Determining the Minimum Viable Product (MVP) ###

There were and still are many things I'd like this app to be, but I decided the best idea is to crank out an MVP and iterate on that.  I felt pretty comfortable with the basic tenants of Meteor, but if I didn’t define boundaries it would have been very easy for me to follow exciting or interesting rabbit trails of functionality, bells, and especially whistles. I always do this, by the way. 

#### In scope for MVP ####

- I must be able to easily use the application on even the most basic handheld device
- It must do one thing really well: quickly search a database of cars and tell me if I have it
- It has to look good (I’m a designer first)
- It must be web-based. Nothing proprietary here.
- Simple text-only data input to record new cars
- A page that displays a dump of all the cars in my collection
- Basic accounts (keep my data safe)

#### In scope for future ####

- Offline storage ability to access database in areas of low reception (big box stores have terrible cell reception)
- Display single-car records enabling me to see specific car data including a photo
- Enable device camera access to photograph cars when recording the data
- Edit existing records
- Sort and filter fields
- Open app up to other users (wrap as Android app?)

### UI Design ###

I had the design kicking around in illustrator for a while. It was important that I explore interesting concepts. This was the first time in quite a while that I’d had the opportunity to  design for myself and I wanted to really break out of what everyone else was doing. Ever notice how everything looks the same?  

Knowing the end result was going to be used primarily on a phone, I stuck to a restricted palette that skinned large, tappable content regions. The content and features themselves were purposefully kept to a minimum. 

While the design does of course scale up to desktop, I took the time to ensure the UI was useable across the spectrum. The design needs were accounted for up through contextual breakpoints. The breakpoints were determined by how each component reacted to the window size. This resulted in emphasized or deemphasized elements depending on anticipated scenarios. 

For instance, if I use the app on my desktop computer, I’m more interested in entering data and browsing cars. If I hit the app on my mobile device, I most likely need to quickly/easily look up a car to make sure I’m not buying a duplicate.  

### Data Design ###

Understanding that the core of this project is the car information, it was important I got that piece pretty nailed at the beginning. I created a spreadsheet in Google Docs and played around with the type of data I wanted to record. The end result were these fields: 

- Toy number
- Image URL
- Car model name
- Storage bin location
- Series title
- Main color
- Year
- Series number
- Collector number
- Favourite (boolean)
- Notes
- Treasure hunt (boolean)
- Date added to db
- Created by (user ID supplied by Meteor)
- Record object ID (by MongoDB)

#### Collecting the Data ####

To make sure I was satisfied with the type of data I wanted to collect, I recorded a handful of cars in Sheets first. I made a few tweaks to what would be the final fields, but for the most part, the final list you see above is what I started with. 

Out of this little spreadsheet came a massive project that even included me recruiting my wife for help in recording and organizing everything. I recorded all my cars on this spreadsheet with the intent of exporting the data to my app as a JSON file. This, however, ultimately proved problematic. While (through the use of an addon) I was able to export the sheet to a JSON file, MongoDB, my Meteor project, or a combination of the two never played well with it and I was never able to get the data import to work correctly. I solved this by exporting the data as a CSV. This worked swimmingly, however by doing so, MongoDB created objectIDs as opposed to _id for each document. This would later be an issue when trying to retrieve single documents from the collection. That’s another story. Hey, ultimately, it worked though and saved me from having to input 300+ cars twice. 

## Challenges & Observations ##

It worked out that what I wanted to accomplish was fairly similar to some of the tutorials out there, so I found it very easy to translate what they were doing into my project. Initially, I just followed the tutorials, not worrying about my stuff, which I do recommend doing. Once I finally got to my project,  I was able to make better decisions that ultimately saved me time had I not had the initial experience. This was all good. 

There are a couple cautions, however. I have a foundational understanding and knowledge of JavaScript and, as advertised, found the barrier of entry very low. This was encouraging and exciting, but I feel also a little dangerous. Because you can crank something out so quickly and “easily”, one may not really know and understand what’s actually going on. It’s always dangerous when you don’t know the “why’s” behind what you’re doing since that usually leads to poor code quality, makes it hell to debug issues,  and even opens you up to performance and security issues. The latter reason is why even at the time of writing this, I’m hesitant to open my project up to other users until I have even more depth of understanding into how Meteor is handling things. 

So, if you find yourself starting out with Meteor, read up on how it handles publish and subscribe. I recommend you get your head around how this is handled. It’s easy to overlook that the reason Meteor is so easy to work with in the beginning is that it ships insecure. If you want to do anything other than mess around, you’ll need to take steps to get Meteor to a secure state. See this on [security.](http://joshowens.me/meteor-security-101)

## Packages & Features ## 

My project only uses a handful of packages, but that’s not to say there is a myriad of freaking sweet packages out there. You can see a full list at my [Github](https://github.com/fergd/diecasttracker/blob/master/.meteor/packages). Here’s a highlight: 

- [matteodem:easy-search](https://github.com/matteodem/meteor-easy-search)
- [iron:router](https://github.com/iron-meteor/iron-router)
- [accounts](https://atmospherejs.com/meteor/accounts-base)
- [fourseven:scss](https://github.com/fourseven/meteor-scss)

## No Platform is an Island ##

In addition to creating the app, a couple other pieces became important: GitHub (vital for any project), Heroku, Mongolab. 

### Heroku ###

While Meteor kindly offers a free dev deployment, I quickly realized I needed more than that. Ultimately, I want to host the app myself on Digital Ocean, but until then, spinning up a service on Heroku was the best choice. By doing so, I incorporated a git hook that enabled me to push to Heroku whenever I had something stable enough make public. 

#### More Info ####

It’s not an extremely easy process to get up and running on Heroku, and I had to push on it a little. Ultimately, I did [this](http://www.growthux.com/ux-html-css-js-growth-hack/installing-meteor-on-heroku) install but used [this buildpack](https://github.com/jordansissel/heroku-buildpack-meteor) (very important). Note: depending on when you read this, the buildpack may have changed. If you have problems building, this is one of the first things to check. 

### Mongolab ### 

I had never worked with an external database before this project and have to say I really like what Mongolab offers. Their free service is all I needed to get this project kicked off, and they supply all the important commands right there in the dashboard! So, when it came time to upload my CSV, I just copy/pasted their template, modded it, and voila! 

## Final Thoughts ##

At the time of writing this, I have successfully achieved MVP status. Whoot! That means my car collection is accessible to me wherever I happen across Hot Wheels cars and I’ve been very pleased with the performance of the app. The lovely nature of the easy search plug in allows me to begin typing the car code and instantly I can see if there are any matches. In other words, the app is doing exactly what I want it to do. 

![Overviews of using the app]({{ site.cdn_image }}quick-merc-find-gif.gif){: .post-image}

But this is only the first step. I’ve really gotten a taste for the project, and really enjoy working in the Meteor ecosystem. While searching, data entry and document retrieval are all working, I will be integrating the app with camera phones and bolstering my accounts and security to create an app that I ultimately want to share. 

There’s a lot more learning and coding to do, but I’m game and I’ll continue working in the fantastic Meteor platform. 

# Links #
 
## The Project ##

- [Github](https://github.com/fergd/diecasttracker)
- [Live project](http://diecasttracker.herokuapp.com)

## General Architecture, Meteor Use, & Tutorials ## 

- [Heroku](https://heroku.com)
- [Mongolab](https://mongolab.com/)
- [Your First Meteor Application](http://meteortips.com/first-meteor-tutorial)
- [The Meteor website](https://www.meteor.com) (These docs are fantastic, well done Meteor!)
- [This talk](https://www.youtube.com/watch?v=SYqyWff6iMQ)

## Publish and subscribe information ##

- [Pub &amp; Sub](https://www.meteor.com/tutorials/blaze/publish-and-subscribe)
- [Allow](http://docs.meteor.com/#/full/allow) 
- [Allow users to insert to a database](https://www.discovermeteor.com/blog/meteor-methods-client-side-operations/ )

## Security ## 

- [Security 101](http://joshowens.me/meteor-security-101)

## Deployment ## 

- [How to deploy ](https://www.youtube.com/watch?v=6xdHYMddtIw)
- [Heroku installation of Meteor ](http://www.growthux.com/ux-html-css-js-growth-hack/installing-meteor-on-heroku)
- [Heroku buildpack (check for updates) ](https://github.com/jordansissel/heroku-buildpack-meteor buildpack) 