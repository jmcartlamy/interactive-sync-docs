---
id: architecture
title: Architecture
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

## How it works?

Interactive Sync is composed with two entities:

-   🖌️ **Front**, hosted on Twitch CDN and downloadable by all streamers in their dashboard
-   ⚙️ **Extension Backend Service**, hosted on Azure web app services, where your application connects with.

### Secure websocket connection

With an [implicit code flow](https://tools.ietf.org/html/rfc6749#section-4.2) (a special OAuth 2.0 procedure) and [your twitch client ID](/docs/getting-started/prerequisites), an user of your application connects with Twitch and retrieves an **user token**. The combination of the two pieces of information makes it possible to establish a secure websocket connection with our Extension Backend Service (EBS).

:::note
Please note that we use your twitch client ID **only to establish the connection and retrieve user information** (like display name) who has given his authorization.
:::

For the lifecycle of the extension, we use our **own ID client** and **token** (retrieved with a [client credentials flow](https://tools.ietf.org/html/rfc6749#section-4.4)). But we know where the messages sent come from, in order to **prevent abuse and non-compliance with twitch rules**.

### Send messages in JSON

When you are well connected, you can send [User Interface](/docs/getting-started/create-ui) in JavaScript Object Notation (JSON), and use all available components or events in the extension. 

The EBS part uses validation schemas to **verify the JSON** and send the message to API Twitch via PubSub, a twitch system allowing back-end services to broadcast realtime messages to clients.

The front part receives the message, parse the JSON and **render what you want**.

### Strengheted REST APIs

The extension has a double protection for viewers who interact with what you have render to **prevent bot abuse, spam or cheat**. 

On one side, we have worked a lot on the **user experience (UX)** to display when an action or event can be used or not. On the other side, EBS verifies all requests and checks whether or not they are legitimate before processing them. 

An user sending requests with invalid JWT / body / parameters or bypassing the cooldown time get **4xx errors** :
- 400 bad request error, 
- 429 too many requests error,
- 406 not acceptable error.

## About

### OAuth implicit code flow & WebSocket connection

<ThemedImage
alt="OAuth implicit code flow schema"
sources={{
  light: useBaseUrl('img/oauth_implicit_code_flow_light.svg'),
  dark: useBaseUrl('img/oauth_implicit_code_flow_dark.svg'),
}}
/>

### Lifecycle

<ThemedImage
alt="Lifecycle extension twitch schema"
sources={{
  light: useBaseUrl('img/lifecycle_extension_twitch_light.svg'),
  dark: useBaseUrl('img/lifecycle_extension_twitch_dark.svg'),
}}
/>
