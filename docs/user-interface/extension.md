---
id: extension
title: extension
---

A [modal event](../getting-started/create-ui#modal) which is positioned over everything else depending of the view.

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

### `submit`

A submit button displayed by default.

Type: `object`<br/>
Default: `{ "label": "Submit" }`

-   #### `label`

    Type: `string`<br/>
    Default: `Submit`<br/>
    Allow: `""`<br/>
    Max: `64`

-   #### [`style`](./style)
    Type: object<br/>
    Max: 8

### [`style`](./style)

Customize the modal with several authorized css properties.

Type: `object`<br/>
Max: `8`

### `components`

See the [properties below ↓](#components-properties)

Type: `array`<br/>
Item type: `object`<br/>
Min: `1`<br/>
Max: `3`

## Components properties

An array of objects, which each object is a UI component, rendered **in the modal** on the front side.

### `type`

Defines what component you want to display. **(required)**

Type: `string`<br/>
Valid: `title`, `image`, `text`, `input`, `radio`, `checkbox`

### `name`\*

Identifier of the component, useful for your application. Must be unique.<br/> \*_Required when "type" is an input, a radio or a checkbox._

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

### `placeholder`

Placeholder of the component for "input" type.

Type: `string`<br/>
Allow: `""`<br/>
Max: `32`

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

### `template`\*

Specific template for the radio / checkbox component. Completely change the component design.<br/>\*_Required when "type" is a radio or a checkbox_

Type: `string`<br/>
Default: `classic`<br/>
Valid: `classic`, `button`

### `values`\*

Defines the key-value pair for the radio / checkbox component.<br/> The selected key(s) are sent to your application.

\*_Required when "type" is a radio or a checkbox_

Type: `object`<br/>
Min: `1`<br/>
Max: `4`

-   #### key

    Type: `string`<br/>
    Schema: `alphanum`<br/>
    Max: `64`

-   #### value

    Type: `string`<br/>
    Unicode: `utf8`<br/>
    Allow: `""`<br/>
    Max: `128`

### [`style`](./style)

Customize the component with several authorized css properties.

Type: `object`<br/>
Max: `8`

### [`styleValues`](./style)

Customize the values if "type" is a radio or a checkbox. Several css properties are authorized.

Type: `object`<br/>
Max: `8`
