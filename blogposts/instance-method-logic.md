---
title: 'Thoughts on Instance Method Logic (Ruby, ActiveRecord, SQL)'
date: '2022-10-24'
---

*This blog was assigned as a part of my Flatiron Full Stack Development boot camp program. I have decided to use it as a record of my attempt to rapidly shift careers from an English Professor to a Full Stack Developer. My plan is to share some of what I learn while documenting the challenges I experience for the next batch of displaced English Professors who need to jump ship.*

*As I write this, I near the end of week nine in the program.*

So, at this point in the program, the “Full Stack” has come together and we are working on database apps that use Ruby, SQL, and ActiveRecord to interact with our back end. We still haven’t been trained on the more common workplace practices–I think Ruby on Rails is supposed to make all this easier–but we have enough to work with our data in some fairly complex ways. One of the ways we can work with the data is by writing instance methods in our Ruby class models.

Instance methods differ from class methods in that they provide functionality to an instance of a given class, while class methods provide the class itself with functionality. They are both written within the model of a given class. While they share a lot of logic in common, instance methods require you to compose from the perspective of a given instance, which can be difficult. Composing these methods has certainly put my associative logic and syntax-Googling to the test.
![two kinds of methods](/images/instance1.png)
Note that the instance method does not begin with ‘self.’ If one were to use ‘self’ in an instance method, ‘self’ would refer to the instance where the method is being called as opposed to the entire class. This is important to keep in mind while composing, as it should inform the perspective from which an instance method selects and operates.
![self in a method](/images/instance2.png)
In this example, the method selects the coder whom the instance is associated with (belongs_to), then interpolates the coder’s name value into the string of text to print.

Instance (self) => coder (belongs_to) => name (coder.name)

This kind of associative logic is the key to writing these methods. Unfortunately, as with generic associative logic in the real world, associations can range from simple and direct to scatological. This depends on the data’s complexity and on how one frames the associations in their mind. As a composer with a very associative mind, I often found myself in a mess of what I’ve been calling “Dark Helmet Logic”.
[Dark Helmet Logic](https://www.youtube.com/watch?v=riqXhieWU3M)

“I am your father’s brother’s nephew’s cousin’s former roommate.”

When writing methods that require more complex associations, one should seek the most direct associations possible.

![demonstrating direct associations](/images/instance3.png)
The ‘sell_hot_dog’ function creates and directly associates a hot dog with the id of a given sports fan. An instance of hot dog created this way will inherit methods from its class, including a ‘self.sports_fan’ method. This allows the hot dog to report directly who it belongs to. This is very useful functionality if one were to need to compose a method that operates on that instance.

Here’s an example of some “Dark Helmet” logic.
![a badly written method](/images/instance4.png)
Will it work? Eventually! Is it good programming? Compare that the following.
![a better example method](/images/instance5.png)
With more direct associative logic, the method looks like this. What differences do you see? Which one will pull an instance? Which one will pull a string value?

Anyway, this is what I have been drilling this past week. Understanding the logic and then knowing where to find the right syntax to perform it can be extremely challenging. I recommend practicing as much as possible in rake consoles. My instructors seem pretty loathe to hand out much direct information on how to write them, which is fine, but it is incredibly hard to see through this helmet.
![dark helmet swinging wildly](/images/darkhelmet.gif)