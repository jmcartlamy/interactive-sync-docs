---
id: mouse
title: mouse
---

Event component sending mouse coordinates with mouse events to our EBS.

## Properties

### `type`

Mouse event type, must be unique. **(required)**

Type: `string`<br/>
Valid: `mousedown`, `mouseup`

### `style`

To customize the cursor before a trigger. Contains a `cursor` property.

Type: `object`

- #### `cursor`
Type: `string`<br/>
Unicode: `utf8`<br/>
Max: `128`

### `cooldown`

Cooldown time between two mouse event. Contains a `duration`, `limit`, `style` properties.

Type: `object`<br/>
Default: `{ "duration": 3000, "limit": 2 }`

- #### `duration`
Type: `number`<br/>
Default: `3000`<br/>
Min: `1000`<br/>
Max: `60000`

- #### `limit`
Type: `number`<br/>
Default: `2`<br/>
Min: `1`<br/>
Max: `10`

- #### [`style`](#style)
To customize the cursor after a trigger.<br/> Same as above ↑ 