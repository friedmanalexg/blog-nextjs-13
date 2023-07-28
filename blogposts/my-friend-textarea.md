---
title: 'My Friend, the <textarea> Tag'
date: '2022-10-5'
---

*This blog was assigned as a part of my Flatiron Full Stack Development boot camp program. I have decided to use it as a record of my attempt to rapidly shift careers from an English Professor to a Full Stack Developer. My plan is to share some of what I learn while documenting the challenges I experience for the next batch of displaced English Professors who need to jump ship.*

*As I write this, I am preparing my final project during the last week of boot camp.*

This blog was supposed to be about implementing a Rich Text Editor plug-in for my final project. You’re going to have to check back in with me for that one, though — I just couldn’t get CKEditor working with my current code base. So, I guess I’ll have to come back to it! Over the past four weeks of projects, I’ve learned some lessons about trying to implement features. After a few humbling failures, I’ve come away with a few thoughts and a new appreciation for built-in feature functionality.

Coding the sorts of full stack applications that Flatiron currently trains you for is complex, difficult, and time-consuming, at least for me at my present skill level. Requirements for both projects included: user authentication, a ReactJS frontend with login implemented, authorized routing, a Ruby-on-Rails backend with validations for models, an SQL database, and full CRUD functionality on at least one model. Coding this platform currently takes me about a week of composition and a week of debugging. I assume I’ll get better and learn how to scaffold some of this to save time, regardless, this represents a high platform to climb to before coding any features.
![jenga tower falls over](/images/jenga.gif)
Unfortunately for me, it is very possible (even likely at my present skill level) to get to this point and then be stymied in the process of implementing features. Whether there’s a bug lurking under the surface of your code base, or incompatibility between plugins, or maybe you’ve built on top of an only semi-popular library like React-Redux — the initial plan you may have for implementing the features you want may fall through. When that happens, and deadlines are looming, where do you turn?
![rotating html 5 logo](/images/html5.gif)
I wanted a rich text editor plugin for my app, and when I rebuild it with a better understanding of scaffolding and plugins, I will implement one. But for my demo build, what I needed was a decent looking text input field that I could style. And there, right when I needed it, was the textarea element.
![a text area box, so majestic](/images/textarea.png)
Unstyled, they are a plain but scrappy little element. Note the simple frame, the kitschy little grabby resizer in the corner. When focused, they yield a simple cursor to edit the text field. But you wouldn’t send a champion to the field without their lance and banner! So what can textarea become with some styling and attributes?

Textarea becomes somewhat versatile with the right encouragement. As far as functionality, you can enable spellcheck, autocorrect, autofill, and minimum and maximum input lengths. Aesthetically, you can specify the textarea’s size down to specific rows of text, you can style the frame and text, add color schemes, and disable the goofy little resizer in the corner. It’s as easy to wire up as any form input field.
![a text area box being styled](/images/textarea2.png)
Does it support rich text? No. But it also doesn’t require you to figure out undocumented Typescript dependencies, it doesn’t break just because you’re using a key generator for dynamic elements, and it doesn’t throw a tantrum when you try to map content to it. And when time is short, sometimes that reliability is more important than an in-field **bold**.

ⓢⓔⓔ ⓨⓞⓤ ⓝⓔⓧⓣ ⓣⓘⓜⓔ…