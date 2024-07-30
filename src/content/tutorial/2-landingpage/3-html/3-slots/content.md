---
type: lesson
title: slots
---
## Rendering elements with slots

### What is an element?

You can think of a string as a variable with quotes, like `"Hello <strong>best friends!</strong>". An element is the same thing, but without the quotes!

When you write some Astro code, you are creating elements.

```astro
/// file: WelcomeSection.astro
---
// This is a string
const welcomeText = "Hello <strong>best friends!</strong>"
---
<div>
  {/* This is an element */}
  <p>Happy to see you !</p>
</div>
---
```

Sometimes you want to pass elements to other components. 
This is particularly useful for creating reusable UI (user interface) components, 
for instance a "BigText" component that display a text with a very big font size.

In React, you can pass elements as props like shown below:


```jsx
/// file: ReactSection.jsx
/** 
 * This is React code, 
 * but it doesn't work in .astro files :(
 * We need to use "slots" instead 
 */
<ReactBigText content={<p>Some content</p>} />
```

However in Astro this doesn't work and things are a bit more complicated, we need "slots".

### Slots to pass elements to components

Astro has a "slot" mechanism that allows
passing rendered elements to another component.

```astro
/// file: BigText.astro
<slot class="big" name="content"></slot>
```

```astro
/// file: Jumbotron.astro
<BigText>
  <p slot="content">Make me <strong>BIG!</strong></p>
</BigText>
```

If you don't know slots yet,
I invite you to read [the official documentation](https://docs.astro.build/en/basics/astro-components/#slots).

Then, come back here to discover an advanced pattern : accepting both strings and elements in a component ! 