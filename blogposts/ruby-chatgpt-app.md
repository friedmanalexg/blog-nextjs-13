---
title: "Co-Coding a Poetry App in Ruby with ChatGPT"
date: "2023-06-17"
---

*This blog was assigned as a part of my Flatiron Full Stack Development boot camp program, but it is my project now. I have decided to use it as a record of my attempt to rapidly shift careers from an English Professor to a Full Stack Developer. My plan is to share some of what I learn while documenting the challenges I experience for the next batch of displaced English Professors who need to jump ship.* 
_As I write this, I am months post-graduation, and looking for work._

One way I like to break the ice with a new language or technology is to rewrite an application I have written before. Often I will rewrite my first app, which was a Dungeons & Dragons dice roller. If I am feeling fancy, though, I try to rewrite an app for one of my favorite Surrealist poetic forms, [The Exquisite Corpse](https://en.wikipedia.org/wiki/Exquisite_corpse).
![The Conspirators by Colin Middleton (1942), another example of Surrealist art](/images/The_Conspirators.jpg)

The concept is fairly simple. A group of poets collaboratively write a poem by passing the paper around the room. On their turn, each poet adds a line using the previous line as context, and then conceals the line previous to theirs before passing it on. Thus each poet is only ever aware of the line immediately preceding their own. This form can lead to really great output even in distracting social situations, like a party or a bar. The shape of the output document is also consistent and predictable, making it great for testing.

### Pseudo-code for the LLM

After opening my session on OpenAI’s ChatGPT, I started with few training inputs to get the Large Language Model into a properly abstracted and conversational state. This drastically cuts down on interruptions and useless responses due to the bot’s default pedantry. After priming the bot to generate text from the role of a Ruby development tutor, I continued with the following pseudocode:
_“My dude, I would like to learn how to code a simple ruby app for writing poetry. It should say “welcome to the exquisite corpse app” when it opens. It should then ask the user for a working title. It then asks the user how many writers will be featured, and how many times round you will pass the app. Only accept numbers for the inputs. With these inputs, the app repeats the following pattern the number of times equal to the product of those two user input numbers: Allow a user to input up to 180 characters. Display that user’s input. Allow a user to input up to 180 characters. Break 40 lines in the display. Display the new user input. After the pattern is over, write each line to a text file in order of user input, with a break between each input. Use the working title for a filename with the appropriate .txt appended.”_

![AI generated — Prompt: artificial intelligence, surrealism (courtesy of JuliusH on pixabay)](/images/ai-generated.jpg)

From this pseudo-code, the LLM was able to generate a simple, mostly functional Ruby application. You can access my [git repo](https://github.com/friedmanalexg/surfing-corpse-poems) for this project here, and you can see the bot's unaltered code if you are interested.
The generated app fulfills most of the deliverables described in my pseudo-code, with a few caveats. It successfully allows users to input a poem, one 180-character line at a time, and then saves the poem with proper line breaks to a text file with the proper naming convention. The code is even structured somewhat like my pseudo-code. I saw this as a very successful result. That said, there is a big, obvious bug.
![Chat GPT's app doesn't hide previous lines. So close, Chat GPT.](/images/botrubycode.png)

The application fails to conceal the previous lines from the current user. Upon closer inspection, it seems that the LLM conflated “break 40 lines in the display” with breaking a line after 40 characters. It’s clearly a mistake; whether it is a mistake a human coder is likely to make with the same pseudo-code is debatable. That said, if I were writing this application and just needed a quick and dirty first draft, this output is very serviceable. I revised this app to my specifications fairly easily from this initial output.

You can check out my revisions and the bot’s explanation of its own code on my github repo. Give my repository a star and follow me on there if you like projects like this one. Have you used ChatGPT to code Ruby applications? How has it performed for you? Let me know in the comments, or fork my repository and show me!

(っ ◔◡◔)っ ♥ see you next time ♥
