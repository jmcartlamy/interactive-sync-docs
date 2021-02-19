---
id: root
title: root
---

User Interface is a JSON structure **ruled by validation schemas**, with a maximum length of **2048 bytes**.

-   If the input is valid, a valid response sent you.
-   If the input is invalid, the JSON is ignored and an error response sent you.

## Properties

### `id`

Unique identifier of the JSON. **(required)**

Type: `string`<br/>
Schema: `alphanum`<br/>
Max: `64`

### [`config`](./config)

Allowing to configure the components.

Type: `object`<br/>
Default: `{ "transparent": false, "ripple": true }`

### [`video_overlay`](./video-overlay)

Displays on top of the whole video as a transparent overlay.

Type: `object`

### [`mobile`](./mobile)

Add an extension in the top right corner on the current stream, can be displayed instead of the chat. <br/>Operates at the same time as `video_overlay` or `panel`.

Type: `object`

### [`panel`](./panel)

Sits with the rest of the user profile content at the bottom of a Twitch channel.

Type: `object`
