---
layout: post
title: Establishing a Style Guide 
subtitle: Establishing a Style Guide
permalink: establishing-a-style-guide
date: 2017/05/04 
categories: [Web & App Development]
author: Christan Fergus
published: true
tags: style guide, web development, web design, user interface design, Jekyll
comments: true
styleguide-url: http://styleguide.pinpointtech.com.s3-website-us-west-2.amazonaws.com/
---

There is little I love more than designing, developing, and documenting. A style guide is the confluence of all three. I love them. This post highlights the style guide I created for a company I worked for at the time. It is an abbreviated post about the process, hitting just the high points. In another post, I will focus on the technical and discuss the way in which I built and utilized Jekyll to create the style guide. 

## Opportunity
The need for a company style guide, or pattern library, was a big one. The company was undergoing a shift in the way it delivered software, namely transitioning to a SaaS model. The company’s many products were being folded into one platform. This gave rise to many challenges, as one could imagine, and one large challenge was the extreme diversity in experiences and design. There was a need for a unification. 

As part of our role in the company, the UX team fielded many questions from developers about UI and UX patterns. Each of us had various areas of tribal knowledge (dangerous), and we were well aware we had no centralized repository of information to which we could point a developer. It was clear to us, and the big-bosses, a style guide was a necessity. But just because we all wanted one, didn’t make the process easy. 

The ideal way I wanted to implement this style guide was actually for it to be a pattern library—a library of code and design snippets, directly connected to the company codebase, from which a developer could pull live methods, controllers, etc. to be used in their own code. This was not to be for the first round, however, since the user experience team did not have a back end developer, nor did they have access to one in the company. 

Given that challenge, we shifted tactics and went full user-interface-user-experience-guide instead. This guide was to focus on UX patterns, UI design principles, and even content tone-of-voice and formatting. It was still destined to be a valuable tool, helping get all the teams on the same design-page. 

## Building Blocks
As stated above, the UX team had no back-end developers. We also had no access to developer time and talent because resources were stretched thin. Because of these constraints, I determined:

- The style guide should live outside the company’s codebase so it does not depend on anyone or any stack for deployment
- The style guide should be fairly language agnostic, so it can be picked up at any time and augmented or folded into another codebase
- It must be (somewhat) easy for a designer with basic coding skills to contribute 
- It must have clear documentation so the information is not siloed

Given this criteria, I built the style guide upon the Jekyll framework. Jekyll is a static website generator, which was a perfect tool for the job. A static website can be hosted anywhere, is generally light-weight, has no dependencies for deployment, and has virtually zero security issues since there are no databases or user information to compromise. While there were plenty of other options, I preferred Jekyll since I’ve spent my last few years working with it extensively. Once could argue that if you’re a hammer, everything’s a nail, but in this case, a hammer was the right tool. 

## Guide Format
I broke the guide into three primary sections.

### Design styles
The meat of the style guide, here were all the styles. The style components were broken into three sections:
<dl>
	<dt>Foundation</dt>
	<dd>These were guides regarding the basics of the site. Color, typography, formatting, etc.</dd>
	<dt>Components</dt>
	<dd>These guides focused on UI components: form controls, breadcrumbs, etc.</dd>
	<dt>Behaviors</dt>
	<dd>Primarily UX patterns that involved setting guidelines around how a user interacted with the website components.</dd>
</dl>
<figure>
	<img src="http://res.cloudinary.com/fergd/image/upload/v1493956154/jk-color-compressor.png" alt="">
	<figcaption>The Style Guide shown displaying color information</figcaption>
</figure>

### UX FAQs
While I’m generally not a fan of FAQ pages (because most FAQ questions are fake), the UX team legitimately receives frequently asked questions, so it really did seem appropriate

### Documentation
This documentation was for the style guide itself, and outlined everything from installation of the Jekyll framework, to how to make a component style and markdown, to deploying the site to production. 

<em>Side note: it’s my favorite part of the website. I LOVE writing documentation for some reason. </em>

## Guide Components
Within the format, there were some important site components that aided the user’s experience. 

### Search
The goal was to make the guide easy to use, and also attractive so developers would return. Search was implemented for this reason. I have viewed a fair amount of style and pattern guides in my time, and I’m surprised at how few have a search. 

### Cross-Referencing
This was one of the more manual aspects for me to set up, but the team felt it was important to provide cross-linking between related styles to help give context, but also to aide that user who may be hunting through the guide and hasn’t realized they can search!

### Feedback
We built the style guide for developers, and we wanted and needed their input. My philosophy from the start was that this was the collective’s guide, so everyone who wanted to have a say could have a say. We provided a feedback link that was hosted by Survey Monkey, in which we provided a simple comment box for their feedback and/or suggestions. 

## Results &amp; Beyond
We released the guide to a warm reception from the company and developers. Many devs had been asking for something like what we produced, and were happy to have it. The first iteration of the guide was in no means exhaustive, however. For the sake of time, and the need to ship, we released with a handful of well-crafted guides, but with a mountain still waiting in the backlog. 

As of this writing, I am actively developing for the next release. The plan will be to release updates, both content and code, every quarter. This was a reasonable timeframe, given the time it takes to vet and create a component on top of our regular job responsibilities. 

I am expecting two specific results as the style guide matures: 
1. The guide becomes a regular, habitual aspect of a developer’s toolkit
2. It evolves into a living style and pattern library, with code and UI living in harmony. 

<em>The future is bright.</em>

<a href="{{ page.styleguide-url }}" target="_blank">View the Style Guide</a>