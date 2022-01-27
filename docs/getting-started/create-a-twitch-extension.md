---
id: create-a-twitch-extension
title: Create a Twitch Extension
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Register your extension

Go on your [Twitch Developers](https://dev.twitch.tv/console/extensions) and register an extension:

1. Choose your name and click on "Continue",

2. Select these Extension Types: "Panel", "Video Fullscreen" and "Mobile",

3. After fill the inputs and create the extension version, click on the button "Extension Settings",

4. Note the **Client ID** of your (new) extension,

5. On Twitch API Client Secret, generate a new **Client Secret**,

6. On Extension Client Configuration, get an **Extension Secret**,

7. Save your **Client ID / Secret** and **Extension Secret** for the EBS environment variables

**⚠️ Before registering, you must enable two-factor authentication (2FA) on your account. ⚠️**

## Configure your front-end files

### Use Developer Rig

Log in on your [Developer Rig](https://dev.twitch.tv/docs/extensions/rig) and follow these steps:

-   Click on "Create your first project",
-   Select the newly created extension, then click on "Next",
-   Select the local folder which will contain your front-end code / the EBS, and don't select a template,
-   On "Next", your extension project was successfully created!

### [Clone the front repository](https://github.com/jmcartlamy/interactive-sync-front)

In a terminal, clone [interactive-sync-front](https://github.com/jmcartlamy/interactive-sync-front) on your local folder and install dependencies with `yarn install`.

On the **Project Details**, enter the path to the front-end files. It probably looks like `LOCAL_FOLDER\interactive-sync-front\dist`.

### Running your front-end files

It is recommended to use the terminal to run the front-end files.

Run `yarn start` to start the webpack server and go on **Extension Views** tab to create your views or refresh them after a change.

## Configure your EBS

### [Clone the EBS repository](https://github.com/jmcartlamy/interactive-sync-ebs)

In another terminal, clone [interactive-sync-ebs](https://github.com/jmcartlamy/interactive-sync-ebs) on your local folder, and install dependencies with `yarn install`.

Create a `.env` file with this template:

```env
EXT_CLIENT_ID=YOUR_CLIENT_ID
EXT_CLIENT_SECRET=YOUR_CLIENT_SECRET
EXT_SHARED_SECRET=YOUR_SHARED_SECRET
EXT_HOST=YOUR_HOST
EXT_BLACKLIST_URI=YOUR_BLACKLIST_URI
```

`EXT_HOST` must follow this structure - `//YOUR_HOST/` - and is to be defined when you deploy the server on the web.

### Running the EBS

EBS (Extensions Backend Service) must be run and hosted separately.

As you set environment variables, run `yarn start` to start the node server.
