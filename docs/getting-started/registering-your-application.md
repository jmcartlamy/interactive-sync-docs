---
id: registering-your-application
title: Registering your application
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

Before get starting, you have to register your application with Twitch according to [our philosophy](/docs/usingtwitch#register-your-application).

### Log in on Twitch

1. Go to the website [Twitch Developers](https://dev.twitch.tv/console/apps).

2. Log in with your account or create it one. Then, authorize **Twitch Developer** to access your account.

3. On the console, verify you are on the "application" tab.

**⚠️ Before registering, you must enable two-factor authentication (2FA) on your account. ⚠️**

### Register

4. When everything is ready, register your application with the **call-to-action button**.

5. To register your application, **fill the form** with:

    1. Name of your app
    2. Redirect URL with OAuth _(callback when a streamer authorize [or not] your application))_
    3. Category of your app

6. **Submit!** If everything is good, you will be redirected on "application" tab or on the dashboard.

### Find your client ID

After registering, click on the manage button. You can see your new **Client ID!**

<ThemedImage
alt="Mobile view"
sources={{
  light: useBaseUrl('img/prerequisites_register_app_light.png'),
  dark: useBaseUrl('img/prerequisites_register_app_dark.png'),
}}
/>

You have now your Client ID, which can be used for your application!
