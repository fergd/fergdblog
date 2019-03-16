---
layout: default
title: Automated Image Optimization
subtitle: How to optimize your images with Grunt, Imagemagick, and the command line on OSX.
permalink: /articles/bulk-image-optimization-with-grunt/
date: 2016/01/16
category: Web & App Development
author: Christan Fergus
published: true
---
<div class="container article">
    {% include article-headings.html %}
    <div class="item-a4">
        <h2>Identifying the Need</h2>
    </div>
    <div class="item-a5">
        <p>We find ourselves heading further down the road of our web pages and apps being served up on varying and often sketchy devices and networks. The importance of serving up lean applications has become not a luxury, but necessity. In this arena, images are one of the biggest and easiest areas a web designer can hack off kilobytes and boost page load times. Furthermore, with responsive applications, we are often serving up the same image in varying sizes to leverage screen sizes, data connections, etc.</p>
        <p>Handling all this image resizing manually is no way to go, and only for those who enjoy a little self-inflicted pain. While there are dedicated tools that can do this, especially server side, often it makes sense to deal with the optimization locally. This is where task runners come in super handy. In our case, Grunt.</p>
    </div>
    <div class="item-a6">
        <h2>Only Use It When You Need It</h2>
    </div>
    <div class="item-a7">
        <p>Recently, the need for such image optimization arose. It’s worth noting at this point that, philosophically, I don’t ever add a tool until I need it&mdash;helps keep the cruft down. However, staring at over 500 images requiring at least two different size variations quickly launched me head-first into optimization world.</p>
        <p>The following is my optimization workflow on Mac. I also assume creating a project from complete scratch. This is what works for me, but it may not be what you want. I included my sources below (I didn’t come up with any of this) so you can figure a workflow out for yourself that suits your needs.</p>
        <h3>Ingredients You'll Need</h3>
        <ol>
            <li>OSX</li>
            <li>Node</li>
            <li>Grunt</li>
            <li>Homebrew</li>
            <li>Imagemagick</li>
            <li>Patience</li>
        </ol>
        <h3>Install Grunt</h3>
        <ol>
            <li>Ensure you have installed Node, and are inside the directory in which you wish to optimize images.</li>
            <li>Install Grunt.
                <pre><code><span class="prompt">$</span> <span>npm install -g grunt-cli</span></code></pre>
            </li>
            <li>Install the Grunt initializer tool to create Gruntfile.js and packages.json (very handy but optional).
                <pre><code><span class="prompt">$</span> <span>npm install -g grunt-init</span></code></pre>
            </li>
            <li>Now initialize the files.
                <pre><code><span class="prompt">$</span> <span>grunt-init-gruntfile</span></code></pre>
            </li>
        </ol>
        <p>You now have Grunt prepped and ready, but you'll need to modify the Gruntfile.js before it works. You may want to strip out everything the initializer did at first to just get your image optimization task working correctly. Further down is an example.</p>
        <h3>Install Image Sizing Tasks</h3>
        <p>The primary techniques followed here are shamelessly from <a href="https://www.smashingmagazine.com/2015/06/efficient-image-resizing-with-imagemagick">this Smashing Magazine article</a>. You will want to learn a bit more about what's actually happening when you start optimizing your images. You will also want to know how to configure the out-of-the-box installation. Do that <a href="https://github.com/nwtn/grunt-respimg">her</a>.</p>
        <ol>
            <li>Install Grunt image sizing
                <pre><code><span class="prompt">$</span> <span>npm install grunt-respimg --save-dev</span></code></pre>
            </li>
            <li>Install ImageMagick (with homebrew)
                <pre><code><span class="prompt">$</span> <span>brew install imagemagick</span></code></pre>
            </li>
            <li>Edit your Gruntfile.js. In this case we are not using the additional image sizing tools. <a href="https://github.com/nwtn/grunt-respimg">Reference this</a> for more information.</li>
            <li>Run your task
                <pre><code><span class="prompt">$</span> <span>grunt</span></code></pre>
            </li>
        </ol>
        <h3>Example Grunfile.js</h3>
        <pre><code>
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
</code></pre>
    </div>
    <div class="item-a8">
        <h2>References</h2>
    </div>
    <div class="item-a9">
        <ul>
            <li><a href="http://www.imagemagick.org/script/index.php">Imagemagick</a></li>
            <li><a href="https://www.smashingmagazine.com/2015/06/efficient-image-resizing-with-imagemagick">Smashing Mag article</a></li>
            <li><a href="https://github.com/nwtn/grunt-respimg">Grunt task featured in the above article</a></li>
            <li><a href="https://github.com/fergd/ImageResize">My Github page for experimenting with this</a></li>
        </ul>
    </div>
</div>