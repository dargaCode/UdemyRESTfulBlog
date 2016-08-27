# RESTful Blog
<strong>Language: HTML/CSS+SemanticUI/JS+Node+Express/MongoDB</strong>

Create, Read, Update, and Delete blog posts (using all 7 RESTful routes).

Used [method-override](https://www.npmjs.com/package/method-override) to enable Put and Delete requests (which aren’t natively supported by HTML forms). 

Also used [express-sanitizer](https://www.npmjs.com/package/express-sanitizer) to allow HTML blog posts, but strip out &lt;script&gt; tags. 

Finally, used [Semantic UI](http://semantic-ui.com/) CSS framework for the majority of styling. I like it MUCH better than Bootstrap. As you can tell from the name, it tries to actually be semantic, and uses class names that are much more intuitive.

This project still doesn't require a user to be logged in, so anybody can write or delete posts. I'll study Authentication next. 

<a href="http://darga-restful-blog.herokuapp.com/"><b>Live Webpage</b></a>

<img src ="http://66.media.tumblr.com/24290ec60a5647e3d0dc73fa0ababe9a/tumblr_inline_o7nq51v60C1tvc5hi_1280.png" width="600">
