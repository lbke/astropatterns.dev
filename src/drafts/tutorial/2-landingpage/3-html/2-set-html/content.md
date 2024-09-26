---
type: lesson
title: set:html
---

## Rendering HTML strings with the `set:html` directive


So we want to create a component that is able to display strings containing some HTML.

In Astro, we use the [`set:html` directive](https://docs.astro.build/en/reference/directives-reference/#sethtml) to achieve that.

```astro
/// file: TranslatedText.astro
---
// Hello "<strong>best friends!</strong>"
const { content } = Astro.props
---
<span 
 class="translated-text" 
 set:html={content} 
/>
```

> We often apply `set:html` to a [Fragment](https://docs.astro.build/en/basics/astro-syntax/#fragments),
> so that the parent component keeps full control on the rendered HTML.
