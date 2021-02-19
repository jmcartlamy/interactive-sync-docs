---
id: mobile
title: mobile
---

Add an extension in the top right corner on the current stream, can be displayed instead of the chat. <br/>Operates at the same time as `video_overlay` or `panel`.

## Properties

### `title`

Displays a title in the shape of a header. Contains a `label` and `style` properties.

Type: `object`<br/>

-   #### `label`

    Type: `string`<br/>
    Min: `2`<br/>
    Max: `96`

-   #### [`style`](./style)
    Type: object<br/>
    Max: 8

### [`components`](./component)

An array of objects, which each object is a UI component, rendered on the front side.

Type: `array`<br/>
Item type: `object`<br/>
Min: `1`<br/>
Max: `4`

### [`style`](./style)

Customize the mobile extension with several authorized css properties.

Type: `object`<br/>
Max: `8`
