---
title: 'Breaking Down a Use of Filter and the Mental Phrasebook'
date: '2022-08-1'
---

*This blog was assigned as a part of my Flatiron Full Stack Development boot camp program. I have decided to use it as a record of my attempt to rapidly shift careers from an English Professor to a Full Stack Developer. My plan is to share some of what I learn while documenting the challenges I experience for the next batch of displaced English Professors who need to jump ship.*

*As I write this, I am beginning my sixth week in the program.*

### Downtime is fleeting at best

in the thick of a boot camp program on this rapid timeline. In order to make the most of the unstructured lab time we’re given, I’ve found it important to use study methods that return results with minimal setup and complication (as in, complications that arise outside the scope of the study materials.) For instance, it might seem like a good idea to create a template React App directory that you can clone locally for drills. It seemed like a good idea to me, too, until I tried it. The React App directories don’t like to be copied outside of WSL, github will complicate the matter further, and you may find yourself out two hours of lab time with nothing to show for it. The same effect could have been achieved with a simple stash command on a single cloned directory!

### The Mental Phrasebook

is one of my favorite language learning strategies. A phrasebook is a curated list of usefully arranged ideas one might repeatedly need to convey in a given language. For example, if I were planning a trip to Argentina, my phrasebook might include a greeting and a way to ask where a restroom is located. I might transcribe those ideas into language that intentionally sounds less touristy, so as to come across as more natural. For example, “Ayúdame a encontrar el baño, por favor,” as opposed to, “¿Dónde está el baño?” If you imagine encountering these questions in your native tongue, you might see why the former would be preferable. You might also notice that this phrase can be reworked to politely ask many questions, which indicates useful syntax.

### Adding Good Array Syntax to my Phrasebook

was a crucial step in my approach to learning React. Unlike a written phrasebook, mental phrasebooks are committed to memory through study. That makes each phrase sort of expensive and time consuming, so you want to make sure what you memorize is useful under many contexts. In preparing for my React Front-end coding challenge, I noticed that there were many situations where I would need to compare data from an array to a string stored in state, and then return data that met certain criteria. With that in mind, I studied the following phrase:
>     const filteredPokemons = pokemon.filter(pokemon => pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()))
Breaking this down into its vocabulary, anyone struggling to gather a working understanding of React should be able to see why this is such a powerful bit of code to commit to memory. It comes from the solution to a lab that teaches rendering cards with props. The “pokemon” here are an array of pokemon and their data we have fetched. The declared constant (a new array containing filtered pokemon data) will be passed as props to the component that renders cards on our page. The filter function is evoked to compare pokemon whose name, converted to lowercase, includes the search query string set by state (also converted to lowercase). Those ideas are all certainly useful for pokemon cards, but what else does it reinforce by implication?
![poke search app image](/images/poke-search.png)

### Implications Can Provide an Anchor

when you are trying to code from scratch, or someone else’s template code. In the above example, the “searchQuery” variable implies its setter function, which can also imply a callback function to that setter. These also imply that state will be needed. The dual invocations of “toLowerCase()” imply that what we’re expecting is a string, which should also lead us to use an empty string in the declaration of useState for the search query and its setter. By choosing to memorize these two lines, I also gain working examples of both ‘.filter()’ and ‘.includes()’, which are rarer invocations but are absolutely necessary to getting the search functionality working.

### Phrases are only broadly useful if

you understand them within the context of the broader language. Otherwise, you have simply learned a more long-winded way to ask for a bathroom. “Ayúdame a encontrar…” can be broadly useful if you remember which bit refers to yourself, which part is a verb for finding, which part is a verb for helping. In the same way, our “filteredPokemons” is much more useful if you remember how arrow functions work, so that you can open this one and root around it with console logs. It might also give you the syntax you need to remember how .map() or similar tricky functions work. Not every slice of code is going to be this useful to commit to memory and comprehension. But if I see another one, I’ll shout it!

/s e e y o u n e x t t i m e