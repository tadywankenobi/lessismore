Less Is More
==========

Less is more is currently a work in progress. It looks to:

 - consolidate Rich Clark's reset.css (itself an extension of Eric Meyer's reset.css) with Nicolas Gallagher's normalize.css
 - add a short, useful grid system (scaled to 1200px wide)
 - remove the need for frameworks with lots of stuff when very little stuff is required

Output is viewable on http://www.tadywalsh.com/lessismore.

Basically, I have found over the past few months, that working with frameworks like Bootstrap and the HTML5 Boilerplate,
tend to actually give me *too much* structure. Sometimes, the bits I want are very simple. I want a three/four col layout
that acts responsively, has some full screen width components and that's about it. I also found myself conflicted as to 
whether to use reset.css or normalise.css, so I amalgamated them into one and keep the best of both!

The css is built on SASS (using SCSS). There's no JS, though guidelines as to how to properly use jQuery plugins (bane of
my misery!) are provided. It's IE8 up, though there are guidelines in the code as to how to support IE 6 & 7 (if you
really, really, really, really, really, really, really, really, really, really, really have to).

I've commented where I feel necessary, though I have removed all the comments from the css (I personally dislike large
comment blocks taking up space and bytes in my css). Both Rich's and Nicolas' css is well commented (Nicolas' in such a 
way it should become a paradigm for all programmers to follow!) so if you've any questions, try going back to source first:

Reset.css 		: http://html5doctor.com/html-5-reset-stylesheet/
Normalize.css 	: http://necolas.github.io/normalize.css/

Feel free to build on this and make it your own. It's very simple, but one of those tasks I've been putting off for years.