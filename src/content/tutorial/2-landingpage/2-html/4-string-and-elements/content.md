---
type: lesson
title: strings and elements
---
## Handling strings and elements at the same time

### Flexibility for low-level UI components

In a bigger companies, developers can dedicate a lot of time to crafting reusable low-level UI components, for example buttons, menu items, lists etc.

They are useful to guarantee brand consistency across a product and make other developers life easier.

These UI components need to be very flexible, because they can be used in different context. 

For text content, we may want to allow developer to pass either strings, or elements, depending on their needs. For instance a `BigText` component could be used in different manners as show below:

```astro
/// file: BigTextDemo.astro
{/** Basic scenario : just passing a string */}
<BigText content="Hello Big world!" />
{/** Mild scenario : the string has some HTML */}
<BigText content="Hello <strong>Big</string> world!" />
{/** Complex scenario : passing elements via a slot */}
<BigText>
    <p slot="content">A more complicated
    <strong>big world</strong></p>
</BigText>
```

### Astro.slots.render to turn elements into strings

The easiest way to support both strings and elements (`"<span>my text</span>"` or `<span>my text</span>`), is to turn elements into strings before you render them.

To achieve that, you can use the [`Astro.slots.render`](https://docs.astro.build/en/reference/api-reference/#astroslots) utility. It does exactly what it's name implies : it turns a slot element into a simple string.

The point is to remove the need to use a `<slot>` element and manipulate the slot content more freely.

It definitely sounds complicated, but let's see an exemple: 

```astro
/// file: BigText.astro
---
let { content } = Astro.props
if (!content) {
  content =  await Astro.slots.render("content")
}
---
<p set:html={content}></p>
```

THe `BigText` component can now work with either a content prop, or a content slot!

```astro
/// file: BigTextDemo.astro
{/* Will work! */}
<BigText content="hello friends!"/>
{/* Will work! */}
<BigText content="hello <strong>best friends!</strong>" />
{/* Will work! */}
<BigText>hello <strong>best friends!</strong></BigText>
{/* Will work! */}
<BigText>
  hello <AnotherAstroComponent>best friends!</AnotherAstroComponent>
</BigText>
```