---
title: "Writing rescues for CRUD function errors in Ruby on Rails/ ActiveRecord"
date: "2022-09-14"
---

_This blog was assigned as a part of my Flatiron Full Stack Development boot camp program. I have decided to use it as a record of my attempt to rapidly shift careers from an English Professor to a Full Stack Developer. My plan is to share some of what I learn while documenting the challenges I experience for the next batch of displaced English Professors who need to jump ship._

_As I write this, I near the end of week twelve in the program._

It’s good practice to protect your databases from bad data. One of the best ways to achieve that is by throwing errors when a post or patch request is made with invalid data. Let’s take a look at an example that tripped me up.

Initially when we were taught how to throw errors, we used ‘if’ statements to check whether an object was or wasn’t present. It looked a bit like this:
![a show method in a class controller, written with an if statement to throw an error](/images/rescues1.png)
This works well enough, and even sends the correct status code. However it has two problems:

    1. The error is hard-coded.
    2. The error will not play nicely with exceptions.

As a convention, Ruby uses bang operators (!) to indicate when a method will modify the object that they are being called upon. Ruby on Rails and ActiveRecord both use many conventions to simplify the coding process. This particular convention can also serve as a tripping point for new coders, though. Most attempts to throw specific errors using the earlier ‘if’ statement method will fail. Usually, they will still throw errors… but they will not be the errors that are useful to our user, they will be internal errors.

The rescue method is a way around this problem. Rescues allow us to capture errors from exceptions thrown by bang operator methods. The idea here is to provide ourselves and our user with useful data from validation errors. Without a rescue method, you might be able to hack your way through a lab’s test suite, but you probably won’t be providing any useful error information…
![returning a hard coded array with the string “validation errors” might work on a lab, but for some reason my Flatiron instructors don’t like it](/images/rescues2.png)
So what might a rescue look like if we’re trying to return, for example, actual error messages?

Say we have an database for our alligator ranch. We’re trying to make sure we throw proper errors if we input our gator data incorrectly when we add one to our database. Here’s the method:
![a create method for gators](/images/rescues3.png)
Note the bang operator at the end of create! The following rescue method, added to a controller file, will help us capture errors.
![a simple record invalid rescue method](/images/rescues4.png)
And then in a private method on the gators_controller file, add your error response.
![a private method that displays the error in full](/images/rescues5.png)

This method will rescue the invalid error and then render the error message with the unprocessable_entity status. This is a more acceptable, more useful response.

(Hopefully you did not become emotionally attached to generating an array with the string “validation errors” inside of it as I did.)

sign_off = %w(see you next time)
