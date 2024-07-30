---
type: lesson
title: Goal for this pattern
focus: "./src/pages/WelcomeSection.astro"
---

https://github.com/lbke/astropatterns_svelte/tree/main/content/tutorial/05-astro/01-starters/01-render-html/app-a

For our landing page, we want to craft Astro components 
that can render text content in mutliple scenarios.

For example, let's write a `WelcomeSection` that accepts a string `content` props and renders it.

But what if `welcomeText` contains HTML? 
It could be `"Hello <strong>best friends!</strong>"` if we want to emphasize on the "best friends" part.

We see the `"<strong>"` part, literally! 
This is not the expected result, 
what we wanted is to see the "best friends!" part in bold.

It is common to meet HTML strings in real life. 
In the [State of JavaScript](https://stateofjs.com/) survey,
we have a complex translation management system. 
We call that "internationalization" or "i18n".  
Our translations are stored in a database and can be written in plain text or in HTML. 

We want to be able to render these strings containing HTML, for example:

```astro
/// file: TranslatedSection.astro
---
//  "Bonjour <strong>les meilleurs amis !</strong>"
const welcomeText = await getTextFromDb()
---
<TranslatedText 
  content={welcomeText}
/>
```

Text content can be even more complicated, sometimes we want to render element instead of just strings, we will also cover this advanced use case later on.

Let's start with HTML strings.