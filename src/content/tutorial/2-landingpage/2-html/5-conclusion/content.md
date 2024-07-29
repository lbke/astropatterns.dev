---
type: lesson
title: Recap
---
### Picking the right pattern

Then, how to choose between using a prop or an element?
It depends on how the text content is generated in the first place.

- if your text is just a string without HTML, you will use a prop
- if you are getting HTML text as a string from a datasource, you will use a prop
- if you are coding a page directly in HTML or Astro code, you will use a slot

## Exercise

### First steps 

1) Implement a `DisplayString` component that can display a string passed as the "content" prop.
2) Implement a `DisplayHtmlString` element that can display a string containing HTML passed as the "content" prop. Use the `set:html` directive
3) Implement a `DisplayElement` component
that can display a slot named "content"

### Advanced

4) Implement a `DisplayHtmlStringOrSlot` component, that can display a string containing HTML passed as the "content" prop, or the "content" slot if this prop is empty. Use [`Astro.slots.render`](https://docs.astro.build/en/reference/api-reference/#astroslotsrender)
5) Implement a `DisplaySlotOrHtmlString` component, that can display the "content" slot, and use the "content" prop as fallback. It's the reverse of the previous component! You can use slots "fallbacks" to implement it.