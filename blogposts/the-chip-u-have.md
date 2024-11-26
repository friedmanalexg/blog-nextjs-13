---
title: "Ode to the Chip U Have"
date: "2024-11-26"
---

## Why a Ryzen 3700U

I've been in the process of giving my life a mean shake the past couple of years. That's meant significantly less discretionary income, and in my case, that means I didn't replace my very cheap 2019 Asus VivoBook laptop until just now, because it was still a good typewriter. Recently, this VivoBook has seen significantly more use, since it is a better form factor in tight quarters than my desktop machine and it uses maybe 10% the electricity verses that rig. 

I decided to reevaluate the gaming potential of the machine after I had solved a few minor complaints with my Arch Linux install. Switching 'Steam Input' packages around and installing FSR support for all Wine applications resulted in a gaming environment that far surpassed my expectations. 

I paid roughly $650 for this machine in 2019. It shipped with 8gb of RAM, half of which was soldered to the board. (Soldering RAM is in most cases a sin against decency and the Machine God; I do not recommend it.) I have since upgraded it to around 20gb, the maximum it supports, an arrangement of memory that reminds me most of a stumbling baby giraffe. 4 by 16, why not, maybe Casandalee forgives. The 3700U sports a Vega 10 iGPU, clocks around 2.3 ~ 4 GHz, and TDP is 15 W. As a X7XXU chip, it has the top offered integrated graphics of its generation, according to AMD's stupid naming conventions. The iGPU runs 10 cores that clock at 1400 MHz. For 2019, the CPU performance was stupidly fast for the price point: the iGPU was more of a value-add. But about a year after the chip was deployed in builds, a couple things happened that changed its service trajectory.

First, the pandemic hit, and suddenly everyone was playing Nintendo Switch. The Switch was already popular, but the synergy of everyone staying antisocial and game devs focusing on an underpowered handheld from 2016 served to stabilize and lower the average system requirements of popular games. Some games even recieved performance oriented rebuilds to take advantage of the system's popularity, including *Binding of Isaac* and *Vampire Survivors*. The Nintendo Switch's GPU tops out around 910 MHz to serve a maximum of 1080p gaming, but 1080p gaming is rarer on Switch. 

Secondly, Steam Deck's APU was developed on the same RDNA 2 platform as the 3700U's Vega 10 graphics. Not only did this improve developer focus on the platform, it also meant that the Vega 10 benefitted from performance tricks that benefit the Steam Deck. This is where FSR came in. Every laptop with a 3700U deployed in it was shipped with *at least* a 1080p display. That meant that the APU frequently had a target display a resolution-step beyond what it could comfortably render in DirectX/ Vulkan. While FSR could bring the Steam Deck up to playable performance on games by upscaling 540p to 800p or so, it was great for upscaling 720p to 1080p on the 3700U.

This is how we arrived at the peak performance era of the 3700U a full four years after it shipped. This is an absolutely killer chip, and if you are lucky enough to have one lying around, here are some suggestions for what to do with it.

## What's Fun to Run?

Here are some suggestions on what this chip plays well:

- *Mortal Kombat 9* (720p medium settings, FSR Quality to 1080p)
- *Hollow Knight*
- *Tactics Ogre: Let Us Cling Together*
- *Pillars of Eternity* (720p medium settings, FSR Quality to 1080p)
- *Fallout: New Vegas* (720p low settings, FSR Quality to 1080p)
- *Persona 4*
- *DUSK*
- *Borderlands 2* (720p low settings, FSR Quality to 1080p)
- *Dave the Diver*

## What Else?

Since the 3700U is getting long in the tooth, you might be able to salvage a system you aren't using otherwise by turning it into an HTPC. The 3700U (paired with 16GB RAM) will function wonderfully as a media PC for another five years. 
I find these PCs are also great Linux systems. I switched my Vivobook to Pop!OS and Manjaro with no real difficulty. If you are on the edge of switching your daily driver to Linux, a 3700U laptop is a great place to try out distros. 