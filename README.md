## Purpose of this Chrome's extension

Scenario : you begin to browse the web with Chrome for a while ; soon you need to go back to *that* tab but there are too many tabs to find quickly exactly the one you need. Sounds familiar ? We know, we have been there.

Don't worry, to solve this *too many tabs* problem, there are a lot of complicated extensions that promise you that you will be able to work with hundreds of tabs : *Too Many Tabs, Tabs Outliner, Bookmark My Tabs, One Tab, TabMan Tabs Manger, Tab Manager, Project Tab Manger, 10+Tabs MASTER →Fast Speed Scroll w/LATER Tab, Resolver Tabs, Tab out, TabJump, TabCaroussel, IE Tab Multi*
 
 Or you can use this chrome extension, but I'm a bit ashamed to say that it is *really simple* campared to all those sophisticated extensions.

The only thing it does is that when you enter in Chrome's Omnibox **"tab<tab>"** followed by **one or many search term**, it will display a list of all open tabs that contains those search terms.

Upon pressing enter, the extension will select the first match and switch to
that tab, so one need not type press down if the first match is desired.

## Installation

Install it in one click from Google Chrome's WebStore

https://chrome.google.com/webstore/detail/search-tab-in-chromes-omn/jcadgemecbojhfgpnbgakadhbmibflnd


## History

[‘Switch to tab’](https://chrome.google.com/webstore/detail/switch-to-tab/gbfhhcljihbgcobpfnceegfmooomhhli) was the result of (aboodman](https://github.com/aboodman/switch-to-tab
)  playing around with Chromium's experimental
omnibox API. Simple but useful idea : type "sw<tab>" in Chrome's Omnibox and you could find the tab you needed. I liked the idea a lot.

But after a few months I realized that I rarely used that extension, while it could have been often useful. What was wrong ?

Something that looks stupid : I never remembered the "sw" keyword. As an experiment I changed the keyword to "tab" (not much longer than "sw", no?) and I began to use much more.
- a small step for programmer
- a big step for usability, especially for the non-native english speaker
among us

Sadly enough, after discussing with aboodman, I understood that it was not possible to merge my change in his extension. It's an old project for him, and what's more, changing the keyword would disturb existing users (which I agree is not a good idea).

Hence this fork.

## Things to know

- "author": "aboodman, jmfayard", 
  -  aboodman original author of "Switch to Tab"
  - jmfayard wanted to use the "tab" keyword, had to fork it for various reasons, then to port it to manifest_version : 2
- Releaser under a Free as in Freedom License (see LICENCE)
- Get the source luke
  `git clone https://github.com/internaciulo/search-tab-in-chrome-s-omnibox`
- Wanna contribute ? Awesome.
  - If you want contribute source code and already know Chrome programming just go ahead
  - If you don't know Chrome programming, no problem, I didn't either. it's not hard and it's fun. 
   - Take a look at `manifest-with-comments.json` first
   - Don't modify the `manifest.json` file itself, use a tool like https://github.com/fkei/JSON.minify/issues/6 
  - You can translate and i18n too. Look in `TRANSLATORS` then `_locales/en/messages.json`
  - You can help to make it pretty too. I can't help with that, sorry :)


