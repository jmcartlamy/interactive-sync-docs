---
id: usingtwitch
title: Using Twitch
---

## Guidelines and policies

### Disclaimer

When you decide to create a new extension with **"Interactive Sync"**, keep in mind you must abide to **[Twitch Guidelines and policies](https://dev.twitch.tv/docs/extensions/guidelines-and-policies)**, including:

-   [Developer Services Agreement](https://www.twitch.tv/p/fr-fr/legal/developer-agreement/),
-   [Terms of Service](https://www.twitch.tv/p/fr-fr/legal/terms-of-service/),
-   [Community Guidelines](https://www.twitch.tv/p/fr-fr/legal/community-guidelines/).

### Register your application

In addition, you must **[register your application](https://dev.twitch.tv/console/apps)** on Twitch to separate the Twitch extension and your application.

EBS use the "client ID" of your application to establish a secure websocket connection, including a request on a Twitch API to get several informations of the current streamer. This means that **if Twitch has revoked your application** due to non-compliance with their rules, your Twitch extension will still be operational.

If you manage several applications with a single extension, EBS keep and associate the "client ID" with each connection. A "client ID" can be added on a blacklist to prevent the secure websocket connection.

## Architectural Reference

Interactive Sync is built following the terms described in [Twitch's official documentation](https://dev.twitch.tv/docs/extensions#architectural-reference). This includes several important points listed below.

### Identity

Initially, a front extension does not have access to the identity of the viewer that is using it. By default, an opaque identifier is retrieved by EBS when the viewer is logged out of Twitch or is logged in without having given its permission. If the viewer is logged into Twitch and have given its permission, a proper identifier is received by EBS. ([source](https://dev.twitch.tv/docs/extensions#identity))

**Messages between the EBS and your application DOES NOT INCLUDED that proper or opaque identifier**. Instead, you receive the current `display_name` of the user or a string named _"Anonymous"_.

### Extension Types

Interactive Sync provides several types of extensions for developers to use: Overlay Extension, Panel Extension and Mobile Extension.

-   Overlay Extension displays on top of the whole video as a transparent overlay.
-   Panel Extension sits with the rest of the user profile content at the bottom of a Twitch channel.
-   Mobile Extension can operates at the same time as one of the two previous ones.

You can use each type through the [User Interface](/docs/getting-started/create-ui#view-components).

:::important

When a streamer select the extension's type _(video overlay or panel)_ in the configuration field, the type chosen is displayed on his channel and the others types are ignored.

:::

### Restrictions on content

Custom styles can be used to customize components. Many CSS properties are allowed including `background` or `border-image` and many values can be set as a source image.

To see the current Content Security Policy, check the [Twitch reference](https://dev.twitch.tv/docs/extensions#restrictions-on-content) about it.

### Designing Extensions

**Interactive Sync followed the general guidelines of Twitch** when creating layout components and design of the light and dark themes.

If you desire to customize components, use the recommendations and **[follow all guidelines offered by Twitch](https://dev.twitch.tv/docs/extensions/designing)**.

## Channel points in Extensions

Use of Channel points on Twitch is governed by the [Channel Points Acceptable Use Policy](https://www.twitch.tv/p/fr-fr/legal/channel-points-acceptable-use-policy/).

### 🚧 Channel points integration 🚧

_This functionnality is to do_

## Bits in Extensions

Use of Bits on Twitch is governed by the [Bits Acceptable Use Policy](https://www.twitch.tv/p/fr-fr/legal/bits-acceptable-use/) and the [Extension Policies](https://dev.twitch.tv/docs/extensions/guidelines-and-policies/#6-bits-in-extensions).

### 🚧 Bits integration 🚧

_This functionnality is to do_

:::note

Keep in mind is that **not all broadcasters will have Bits usage enabled on their channel**. Bits can only be enabled on Partner or Affiliate channels that have opted in to use them.

:::
