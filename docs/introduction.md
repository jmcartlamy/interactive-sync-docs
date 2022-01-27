---
id: introduction
title: What is Interactive Sync?
slug: /
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Toggle from '../src/components/Toggle';

## Ready-to-use Twitch extension

Interactive Sync is a boilerplate to create and configure a [Twitch extension](https://www.twitch.tv/p/extensions/) for [twitch.tv](https://www.twitch.tv/) with environment variables.

Containing the [front-end extension](https://github.com/jmcartlamy/interactive-sync-front/) and an [Extension Backend Service (EBS)](https://github.com/jmcartlamy/interactive-sync-ebs/), Interactive Sync is a ready-to-use Twitch extension that allows the Twitch community to perform the actions chosen by your application with interactive overlays or panels.

## Promotes interactions

Interactive Sync promotes interactions between Twitch community and any application in a whole new level, by allowing to communicate in many ways in any application.

Tell the extension what you want at any time, see twitch community receives your components displayed, and get events at every interaction.

## Creates interactive applications

Create a new generation of application promoting interactions whose usage or gameplay could depends entirely on the actions of the viewers.

Ask viewers to click on the overlay to get their coordinates, place button components with cooldown time to create an event, send questions with several possible answers and receive the answers from each viewer, or simply display text or images wherever you want.

<a className="button button--lg button--outline button--block button--primary" href="/docs/getting-started/registering-your-application">Get Started</a>

## Components

Want to know what Interactive Sync offers? See below for details of the functionalities.

### Views

On each extension type, viewers can create actions by clicking on / touching the buttons.

<Tabs
defaultValue="video-overlay"
values={[
{label: '💻 Video Overlay', value: 'video-overlay'},
{label: '📱 Mobile', value: 'mobile'},
{label: '🗃️ Panel', value: 'panel'},
]}>
<TabItem value="video-overlay">

An Overlay Extension displays on top of the whole video as a transparent overlay.

<ThemedImage
alt="Video Overlay view"
sources={{
  light: useBaseUrl('img/video_overlay_view_light_theme.jpg'),
  dark: useBaseUrl('img/video_overlay_view_dark_theme.jpg'),
}}
/>

</TabItem>

<TabItem value="mobile">

A Mobile Extension on landscape mode available only for mobiles and can be used with Video Overlay or Panel.

<ThemedImage
alt="Mobile view"
sources={{
  light: useBaseUrl('img/mobile_view_light_theme_landscape.jpg'),
  dark: useBaseUrl('img/mobile_view_dark_theme_landscape.jpg'),
}}
/>
</TabItem>
<TabItem value="panel">

A Panel Extension sits with the rest of the user profile content at the bottom of a Twitch channel.

<ThemedImage
alt="Panel view"
sources={{
  light: useBaseUrl('img/panel_view_light_theme.png'),
  dark: useBaseUrl('img/panel_view_dark_theme.png'),
}}
/>
</TabItem>
</Tabs>

### UI

Several pre-built components add interactions or content.

<Tabs
className="unique-tabs"
values={[
{label: 'Button', value: 'button'},
{label: 'Header', value: 'header'},
{label: 'Image', value: 'image'},
{label: 'Input', value: 'input'},
{label: 'Select', value: 'select'},
{label: 'Text', value: 'text'},
{label: 'Title', value: 'title'},
]}>
<TabItem value="button"></TabItem>
<TabItem value="header"></TabItem>
<TabItem value="image"></TabItem>
<TabItem value="input"></TabItem>
<TabItem value="select"></TabItem>
<TabItem value="text"></TabItem>
<TabItem value="title"></TabItem>
</Tabs>

### Event

Others allow to add events to extend the possibilities.

<Tabs
className="unique-tabs"
values={[
{label: 'Mouse', value: 'mouse'},
{label: 'Modal', value: 'modal'},
]}>
<TabItem value="mouse"></TabItem>
<TabItem value="modal"></TabItem>
</Tabs>

## Themes

Twitch allows users to switch between the default light theme and a dark theme. Interactive Sync listen this context to use palettes to support them.

Have you noticed that the views above change when you switch themes in the documentation? The same happens with the extension. Try it! <Toggle className="custom-toggle" />

### Context

<Tabs
defaultValue="dark"
values={[
{label: '🌞 Light', value: 'light'},
{label: '🌜 Dark', value: 'dark'},
]}>
<TabItem value="light">

The same components on Mobile Extension in portrait mode (cropped) with light theme.

<img
className="resize-img-120"
src={useBaseUrl('img/mobile_view_light_theme_portrait_crop.jpg')}
alt=""
/>
</TabItem>

<TabItem value="dark">

A Mobile Extension in portrait mode (cropped) with dark theme.

<img
className="resize-img-120"
src={useBaseUrl('img/mobile_view_dark_theme_portrait_crop.jpg')}
alt=""
/>
</TabItem>

</Tabs>

### Custom

Custom styles can be defined for each pre-built component.

A wide range of css properties are usable to make a component more colorful, larger or attractive! You can even use custom images to display amazing renderings.

<Tabs
defaultValue="border-image"
values={[
{label: '🎨 Color', value: 'color'},
{label: '🖼️ Border Image', value: 'border-image'},
]}>
<TabItem value="color">

The same Overlay Extension with custom styles. Cooldown time and more are customizable.

<img
src={useBaseUrl('img/video_overlay_view_color_theme.jpg')}
alt=""
/>
</TabItem>

<TabItem value="border-image">

An Overlay Extension with custom border-image and styles on each component.

<img
src={useBaseUrl('img/video_overlay_view_image_theme.jpg')}
alt=""
/>
</TabItem>

</Tabs>

<a className="button button--lg button--outline button--block button--primary" href="/docs/getting-started/registering-your-application">Get Started</a>

## Tools

As it is not practical to send "[User Interface](/docs/getting-started/create-ui)" without pre-validation or preview, we added tools to facilitate their creation:

### [UI Validator](/tools/ui/validator)

UI Validator use the same validation schemas as the EBS to verify if a JSON sent is valid or invalid.

-   If a JSON is invalid, a response sent you with the errors if any.
-   If a JSON is valid, a normalized response sent you and will be used as a user interface.

### 🚧 UI Sandbox 🚧

UI Sandbox allow to try out and preview what is rendered with a JSON. It uses the same components as the front extension.

_This tool is to do_.
