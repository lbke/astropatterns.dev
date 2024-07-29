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

⚠️ ️Use `set:html` with care: you should never pass untrusted user content there! 

You could allow a script injection attack, also known as [XSS](https://owasp.org/www-community/attacks/xss/) or more precisely [DOM based XSS](https://owasp.org/www-community/attacks/DOM_Based_XSS)).

```astro
/// file: XssInjection.astro
---
const userContent = await getUserContentFromDb()
---
{/** 
BAD!
if "userContent" is "<script src="./hack-your-website.js">",
you could create a severe security breach!
*/}
<p set:html={userContent} />
```

You should try avoiding sending user inputs,
or inputs obtained from a database here.

If you really need to, 
[sanitize](https://en.wikipedia.org/wiki/HTML_sanitization) the input so that valid HTML code is escaped.

> In React, the equivalent to `set:html` is [dangerouslySetInnerHTML](https://legacy.reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml). 
> The name is more frightening, but we use this pattern less often.

The `set:html` directive is all you need if your text is represented as a string value. But in some even more elaborate scenarios, you may want to render elements, and not just strings.