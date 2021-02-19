---
id: component
title: components
---

An array of objects, which each object is a UI component, rendered on the front side.

## Properties

### `type`

Defines what component you want to display. **(required)**

Type: `string`<br/>
Valid: `title`, `button`, `image`, `text`

### `name`\*

Identifier of the component, useful for your application. Must be unique.<br/> \*_Required when "type" is a button._

Type: `object`<br/>
Schema: `^[A-Za-z]+[\w\-\:\.]*`<br/>
Min: `3`<br/>
Max: `64`

### `label`

Label of the component for "title" and "button" type.

Type: `string`<br/>
Default: `A label`<br/>
Allow: `""`<br/>
Max: `96`

### `src`\*

Source of the image component.<br/> \*_Required when "type" is an image._

Type: `string`<br/>
Unicode: `utf8`<br/>
Max: `128`

### `text`\*

Text to display for the text component.<br/> \*_Required when "type" is a text_

Type: `string`<br/>
Unicode: `utf8`<br/>
Max: `256`

### [`style`](./style)

Customize the component with several authorized css properties.

Type: `object`<br/>
Max: `8`

### `cooldown`

Cooldown time before an action can be re-triggered.<br/>
When "broadcast" is true, every viewers receive a cooldown time.

Contains a `duration`, `broadcast`, `style` properties.

Type: `object`<br/>
Default: `{ "duration": 10000, "broadcast": true }`

-   #### `duration`

    Type: `number`<br/>
    Default: `10000`<br/>
    Min: `3000`<br/>
    Max: `60000`

-   #### `broadcast`

    Type: `boolean`<br/>
    Default: `true`<br/>
    Truthy: `1`<br/>
    Falsy: `0`

-   #### [`style`](./style)
    Type: object<br/>
    Max: 8

### [`extension`](./extension)

A [modal](../getting-started/create-ui#modal) which is positioned over everything else depending of the view.

Type: `object`<br/>