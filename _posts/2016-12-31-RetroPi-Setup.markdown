---
layout: post
title: RetroPi Setup
subtitle: Setting up a RetroPi system because I couldn't get an NES Classic
permalink: RetroPi-Setup
date: 2016/06/29 
category: Misc
author: Christan Fergus
published: true
tags: retropi, development, gaming
---
## NES Classic Vs. RetroPi
<img src="https://res.cloudinary.com/fergd/image/upload/v1483218569/retro-vs.jpg" style="max-width: 100%;" alt="Logos of NES and retropi" >

Like many of my fellow humans, I was excited when I heard Nintendo were putting out a purpose-built NES pre-packed with 30 games. The price was right, too. However, Nintendo only released a small amount to market, making the chances of getting one slim-to-none. Even worse, the scalpers were turning around and selling the things for insane amounts of money. I don’t have time or patience for that shit, so I decided to take matters into my own hands. 

I have wanted to mess around with a Raspberry Pi for some time. This project seemed like the perfect excuse to get my hands on one. With the development of the robust RetroPie platform, it was now extremely easy to set up a retro gaming system. The more I thought about it, the better this option sounded than the original NES Classic. So, here’s what I did. 

Note: I am using a Mac to format and grab ROMS. The process may vary for Windows and Linux users. If you’re on Linux, I’m pretty sure you know what’s up anyway. 

## Pros & Cons

### RetroPi Pros

- Cheaper than NES classic (if you already have a supported controller)
- You get to geek out 
- There is an enormous amount of platforms and games at your disposal
- You can use a wide variety of controllers
- The system is highly configurable
- Large support community

### RetroPi Cons

- You have to work to set it up, whereas the NES Classic is plug-n-play
- It’s possible you can encounter an issue that is not covered in documentation
- You have to seek out ROMS and manually install them which is tedious
- It doesn’t lend itself to intuitive use for the family room. On/off is plugging and unplugging the unit, and the OS makes it easy for my five-year-old to poke around and break stuff. 

## Kit

### Bare-minimum Required 

- Raspberry Pi 3
- Power supply
- Monitor
- USB keyboard
- SD card

### My Kit
- Raspberry Pi 3
- 1 Controller
- Power supply
- Case
- Heat syncs 
- SD card
- USB Keyboard
- Monitor
- HDMI cable
- USB flash drive

### What I Purchased

<img src="http://res.cloudinary.com/fergd/image/upload/v1483219754/kit.jpg" class="post-image" alt="All the boxes of the pieces of raspberry pi in prep for retropie">

#### Raspberry Pi Kit - $49.99

[Amazon](https://www.amazon.com/gp/product/B01C6EQNNK/ref=oh_aui_detailpage_o01_s00?ie=UTF8&psc=1) 

You could just get the board, but honestly, for just a few bucks more you can get a case, heat syncs, and a power supply. I was too lazy to go and see if I had the correct power supply laying about, and I knew that if this thing was going to be in the family space, it would need some sort of protection. 

#### SD Card - 16gb - $6.99

[Amazon](https://www.amazon.com/gp/product/B010Q57SEE/ref=oh_aui_detailpage_o01_s00?ie=UTF8&psc=1)

Your SD card needs to be dedicated to the RetroPi, so I didn’t use any I already had. I’m also not planning on loading up every game known to man, so 16gb seemed appropriate. I’d say at least get a 4gb. 

#### Grand Total - $57.57

The NES classic is $59.99 

That’s it, that’s all I purchased. Of course, you can go as bare-bones or as far as you like. But, seeing that I have monitors, controllers, etc., that’s all that is necessary. 

## Installation, Setup Process

### Time Elapsed: 35 minutes

It would have even been shorter, but I had to help my 2 year old go to the potty and hunt down an HDMI cable to hook up to a monitor. 

### Download the Software Image File

Easy to do, get it from the RetroPi site. I’m using the platform for Raspberry Pi 2/3. Link provided below in resources. 

### Use an Extraction/Setup App

I use a Mac, so I used RPI-sd Card Builder. It felt a tad shady, but everything seems to be okay. Nothing exploded. I have included the link in the resources section. 

Make sure your SD card is plugged in. Launch the app and follow the steps. Choose the card as your destination, then be patient. There’s no UI to tell you progress. Trust that something is happening. You’ll get a prompt when it’s done. 

### Plug it in
- Stick the SD card in the Pi
- Hook up a keyboard and controller (I did PS3 controller) to USB
- Plug in the power 

Once the power is plugged in, the Pi will begin its initial boot-up process. It does not take very long, and since you have loaded up the SD card with RetroPi, it will automatically start.  

DONE. It was that fast. So easy. However, you don’t have games yet. 

<img src="https://res.cloudinary.com/fergd/image/upload/v1483219189/setup.jpg" alt="An example of the setup: pi, controllers, monitor" style="max-height: 100%;" class="post-image">

### Games

The RetroPi isn’t much fun without games, so you have to get some. Take a look at the video links I provide below, and follow their detailed instructions. 

In short, you need to format a USB stick to FAT-32, create a folder called "retropie" in the root, then plug the stick into your Raspberry Pi. It will set up everything it needs inside the retropie directory, prepping it for you to load up ROMS. 

When you have your ROMS, load them into the appropriate folders in your prepped USB stick, then place it back in your Pi.  Allow the games to transfer to the SD card, reboot, and you are ready to go. 

Again, watch the videos for important tips and processes for doing this. 

## Tips

### Warning!

When prepping the RetroPi image, make sure you first extract your img.gz file with the Mac file system so that you are left with an *.img* file. It will not work if you still have the .gz extension still there. I did not do that the first time around, and it bricked the SD card. I had to erase it and start over. 

### How to exit a game

Press Start and Select at the same time. My goodness this took me forever to figure out. 

### Your RetroPi installation will probably not look like the videos online

After installation, the only screen available to me was the setup utility. When I looked at the videos, people had games and platforms automatically available to try. I really thought I had a bug. Everything was fine, however. 

It turns out RetroPi is now being shipped completely stripped of platforms/games to make the initial file-size for download smaller. Just get some games loaded up and you’ll be off to the races. 

## Resources

### Guides, Configurations, & Documentation
- Official site & download links: [RetroPi](https://retropie.org.uk/download/) 
- Github site: [Github](https://github.com/RetroPie) 
- Lifehacker how-to: [Lifehacker](http://lifehacker.com/how-to-turn-your-raspberry-pi-into-a-retro-game-console-498561192) 
- SD card setup app for Macs: [SD Setup](https://alltheware.wordpress.com/2012/12/11/easiest-way-sd-card-setup/) 
- Setup guide for a PS3 controller user: [YouTube](https://www.youtube.com/watch?v=jLtlNMjtLt8) 
- Another detailed vid guide: [YouTube](https://www.youtube.com/watch?v=xvYX_7iRRI0) 
- Controller configs: [Configs](https://github.com/RetroPie/RetroPie-Setup/wiki/RetroArch-Configuration) 

### Products I Purchased
- [Raspberry Pi board](https://www.amazon.com/gp/product/B01C6EQNNK/ref=oh_aui_detailpage_o01_s00?ie=UTF8&psc=1) 
- [SD card](https://www.amazon.com/gp/product/B010Q57SEE/ref=oh_aui_detailpage_o01_s00?ie=UTF8&psc=1) 

### ROMS

I am not at all up on how to get ROMS and all the in’s and out’s. It took me a while to figure out what’s up. I also don’t torrent, which is apparently how most people do it. I found a few sites, but this one seems to have the best quality. I say best quality, because it’s a bit trial and error getting a good emulation, and I did download some pretty weird, buggy shit.
[EMU Paradise](http://www.emuparadise.me/) 

## Continuing the experience

So that was my overall process. There’s nothing in this article that hasn’t been outlined elsewhere, but hey, it’s a chronicle of my experience. The most frustrating part of the entire process was getting the SD card out of its packaging. Well, that and trying to figure out why I didn’t have any initial games to play. Okay, and being completely confounded on how to exit a game. That said, if you’re willing to put in a bit of effort, I think the RetroPi route is a far better one than NES Classic. 

My next steps are to get more detailed in my configs. I plan on getting my wireless controller set up, to implement screen filters so the graphics look more like they "should" (scan lines, etc.), and ultimately set up the ability to get ROMS wirelessly directly to the Pi. All in good time, though, because I have some Star Fox to play. 