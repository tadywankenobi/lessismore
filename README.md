Less Is More
==========

The simple responsive framework
----------

Less is more is currently a work in progress. It looks to:

 - consolidate [Rich Clark's reset.css](http://html5doctor.com/html-5-reset-stylesheet/) (itself an extension of [Eric Meyer's reset.css](http://meyerweb.com/eric/tools/css/reset/)) with [Nicolas Gallagher's normalize.css](https://github.com/necolas/normalize.css/) into one, excellent file (and SASS it up a little!)
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

The grid is responsive on the basis of a couple of criteria:

 - What can be comfortably included
 - Making left/right margins between columns universal
 - Ensuring the reflow of elements is aesthetic

I'm undecided whether opting for a 1200px to end is a good decision. Time will tell, I may take it out later. For the
most part, this would be a very minor update, so if you don't need it yourself, you'll see in grid.scss the ONE line you'll
need to remove.

I've commented where I feel necessary, though I have removed all the comments from the css (I personally dislike large
comment blocks taking up space and bytes in my css). Both Rich's and Nicolas' css is well commented (Nicolas' in such a 
way it should become a paradigm for all programmers to follow!) so if you've any questions, try going back to source first:

 + Reset.css 		: http://html5doctor.com/html-5-reset-stylesheet/
 + Normalize.css 	: http://necolas.github.io/normalize.css/

Feel free to build on this and make it your own. It's very simple, but one of those tasks I've been putting off for years.
I'm really glad it's done and once I've used it in a project or two, I'll make refinements where necessary.

###TODO

- Update CSS to avail of *=, ^= & $= selectors
- Add favicons
- Add Apple icons
- Add vertical rhythm supports
- Flesh out index.html to actually do something as a page
- Insert content to see how things look
- Add rows
