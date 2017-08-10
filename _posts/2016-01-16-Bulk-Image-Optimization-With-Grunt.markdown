---
layout: post
title: Automated Image Optimization
subtitle: How to optimize your images with Grunt, Imagemagick, and the command line on OSX
permalink: /articles/bulk-image-optimization-with-grunt/
date: 2016/01/16 
category: Web &amp; App Development
author: Christan Fergus
published: true
tags: grunt, image optimization, images, imagemagick
---

## Identifying the Need ##
We find ourselves heading further down the road of our web pages and apps being served up on varying and often sketchy devices and networks. The importance of serving up lean applications has become not a luxury, but necessity. In this arena, images are one of the biggest and easiest areas a web designer can hack off kilobytes and boost page load times. Furthermore, with responsive applications, we are often serving up the same image in varying sizes to leverage screen sizes, data connections, etc. 

Handling all this image resizing manually is no way to go, and only for those who enjoy a little self-inflicted pain. While there are dedicated tools that can do this, especially server side, often it makes sense to deal with the optimization locally. This is where task runners come in super handy. In our case, Grunt. 

## Only Use It When You Need It ##
Recently, the need for such image optimization arose. It’s worth noting at this point that, philosophically, I don’t ever add a tool until I need it&mdash;helps keep the cruft down. However, staring at over 500 images requiring at least two different size variations quickly launched me head-first into optimization world. 

The following is my optimization workflow on Mac. I also assume creating a project from complete scratch. This is what works for me, but it may not be what you want. I included my sources below (I didn’t come up with any of this) so you can figure a workflow out for yourself that suits your needs. 

### Ingredients You'll Need ###
1. OSX
2. Node
3. Grunt
4. Homebrew
5. Imagemagick
6. Patience

### Install Grunt ###
1. Ensure you have installed Node, and are inside the directory in which you wish to optimize images.
2. Install Grunt.
    <pre><code><span class="prompt">$</span> <span>npm install -g grunt-cli</span></code></pre>
3. Install the Grunt initializer tool to create Gruntfile.js and packages.json (very handy but optional).
    <pre><code><span class="prompt">$</span> <span>npm install -g grunt-init</span></code></pre>
4. Now initialize the files.
    <pre><code><span class="prompt">$</span> <span>grunt-init-gruntfile</span></code></pre>

You now have Grunt prepped and ready, but you'll need to modify the Gruntfile.js before it works. You may want to strip out everything the initializer did at first to just get your image optimization task working correctly. Further down is an example. 

### Install Image Sizing Tasks ###
The primary techniques followed here are shamelessly from [this Smashing Magazine article](https://www.smashingmagazine.com/2015/06/efficient-image-resizing-with-imagemagick). You will want to learn a bit more about what's actually happening when you start optimizing your images. You will also want to know how to configure the out-of-the-box installation. Do that [here](https://github.com/nwtn/grunt-respimg).

1. Install Grunt image sizing 
    <pre><code><span class="prompt">$</span> <span>npm install grunt-respimg --save-dev</span></code></pre>
2. Install ImageMagick (with homebrew)
    <pre><code><span class="prompt">$</span> <span>brew install imagemagick</span></code></pre>
3. Edit your Gruntfile.js. In this case we are not using the additional image sizing tools. [Reference](https://github.com/nwtn/grunt-respimg) for more information.
4. Run your task
    <pre><code><span class="prompt">$</span> <span>grunt</span></code></pre>

### Example Grunfile.js ####
   
	/*global module:false*/
	module.exports = function(grunt) {

	  // Project configuration.
	  grunt.initConfig({
	    // Task configuration.
	    respimg: {
	      nooptim: {
	        options: {
	          optimize: false,
	          widths: [960, 420]
	        },
	        files: [{
	          expand: true,
	          // Be sure to get your own paths correct
	          cwd: 'images/source/',
	          src: ['**.{gif,jpg,png,svg}'],
	          // Be sure to get your own paths correct
	          dest: 'images/output/'
	        }]
	      }
	    }
	  });

	  grunt.loadNpmTasks('grunt-respimg'); 

	  // Default task.
	  grunt.registerTask('default', ['respimg']);
	};

## References ##

* [Imagemagick](http://www.imagemagick.org/script/index.php)
* [Smashing Mag article](https://www.smashingmagazine.com/2015/06/efficient-image-resizing-with-imagemagick)
* [Grunt task featured in the above article](https://github.com/nwtn/grunt-respimg)
* [My Github page for experimenting with this](https://github.com/fergd/ImageResize)




