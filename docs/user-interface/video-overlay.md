---
id: video-overlay
title: video_overlay
---

Displays on top of the whole video as a transparent overlay.

## Properties

### [`mouse`](./mouse)

Event component sending mouse coordinates with mouse events to our EBS.

Type: `array`<br/>
Item type: `object`<br/>
Min: `1`<br/>
Max: `2`

### `left` 

Left position of components on the overlay. Contains a `components` property

Type: `object`

- ### [`components`](./component)
Type: `array`<br/>
Item type: `object`<br/>
Min: `1`<br/>
Max: `4`

### `bottom`

Bottom position of components. [Same as above ↑](#left)

### `right` 

Right position of components. [Same as above ↑](#left)

### `top` 

Top position of components. [Same as above ↑](#left)









