---
id: create-ui
title: Create User Interface
---

All messages sent to our EBS are "[User Interface](/docs/user-interface/root)", a JSON describing all the components you wish to display to the viewers.

Verified through validation schemas, the message is parsed and rendered with all available components or events on the front side.

## Structure

When you are ready to send a message, note that our EBS is able to handle only [USVString](https://developer.mozilla.org/en-US/docs/Web/API/USVString).

To do so, **JSON must be stringify** and **following this structure**:

-   **`context`**, with the value `user_interface`, that identifies the context of the message.
-   **`data`**, that represents your **user interface**


```json
{
    "context": "user_interface",
    "data": {
        "id": "1"
    }
}
```

## Simple layout

### View Components

The structure of an User Interface includes a few important properties at its root:

-   an **[`id`](/docs/user-interface/root#id)**, that identifies the message. **It must be unique and different between two messages sent**,

-   a **[`config`](/docs/user-interface/config)**, optional, allowing to configure the components,

-   one or more views, including **[`mobile`](/docs/user-interface/mobile)**, **[`panel`](/docs/user-interface/panel)** or **[`video_overlay`](/docs/user-interface/video-overlay)**.

As each view is completely different visually, the structure differs within each one:

-   On the **mobile and panel part**, a [`components`](/docs/user-interface/mobile#components) property is available. It's an array of components ruled by specific validation schemes for each type of components.

-   On the **video_overlay part**, it is necessary to specify where the components are to be placed through certain properties: `left`, `bottom`, `right`, `top`. It's only within each on of them that a [`components`](/docs/user-interface/video-overlay#components) property is available

### UI Components

This `components` property contains an array of objects, which each object is a component. 

**Only [`type`](/docs/user-interface/component#type) property is required** within with one of following string: `title`, `button`, `image`, `text`. 

Note that a few properties can became required. Eg: if you select "button" for "type", [`name`](/docs/user-interface/component#name) property also becomes required.

--

For example, we want a button with a label and a title to get people to click on. Below are examples of User Interface.

```json
{
    "id": "1",
    "video_overlay": {
        "bottom": {
            "components": [
                {
                    "type": "title",
                    "label": "Spawn characters with the buttons"
                }
            ]
        },
        "left": {
            "components": [
                {
                    "type": "button",
                    "name": "action-zombie",
                    "label": "Spawn zombie"
                }
            ]
        }
    }
}
```

```json
{
    "id": "2",
    "panel": {
        "components": [
            {
                "type": "title",
                "label": "Spawn characters with the buttons"
            },
            {
                "type": "button",
                "name": "action-zombie",
                "label": "Spawn zombie"
            }
        ]
    }
}
```

When a viewer clicks on the button, a **POST request is made** to our EBS. After processing and validation, we send you a message through the WebSocket with the **name of the button** and others informations.

:::important

When a streamer select the extension's type _(video overlay or panel)_ in the configuration field, the type chosen is displayed on his channel and the others types are ignored.

**Mobile type can be combined** with one of the two other types of extensions.

:::

**Find out more on the [User Interface documentation](/docs/user-interface/root).**

## Advanced layout

### Event Components

Event components are advanced components offering a high level of interaction, and don't fit into the category of UI components.

At present, there are two types of event components: **[`mouse`](/docs/user-interface/mouse)**, and **[`extension`](/docs/user-interface/extension)** (also called modal).

#### Mouse

Mouse event is only available on the **video_overlay part**. You have to add a **`type` property** within with one of following string: `mousedown`, `mouseup`.

When a viewer click on the stream, a **POST request is made** with mouse coordinates to our EBS. After processing and validation, we send you **these coordinates** through the WebSocket.

Below an example of mouse event:

```json
{
    "id": "3",
    "video_overlay": {
        "mouse": [
            {
                "type": "mousedown"
            }
        ]
    }
}
```

ℹ️ Note: you can customize the cursor before and after a trigger.

#### Modal

Modal event is a **particular UI component** which is **positioned over everything else** in the extension. It contains a submit button and a closing cross, and allowing to **add several new UI components** like `input`, `radio` or `checkbox`.

-   For the **mobile and panel part**, it removes scroll from the parent so that modal content scrolls instead,
-   For the **video_overlay part**, it is displayed from the bottom and has a maximum width of 80% of the screen and a maximum height of 300px (with a padding-bottom to prevent conflicts with others overlays).

If you have added a **`extension` property** within a button component, when a viewer will click on the button, a modal will be displayed instead of sending a POST request.
The viewer can fill the modal's components (if any) and submit with the dedicated button.

Below an example of modal event with a custom `cooldown` :

```json
{
    "id": "4",
    "video_overlay": {
        "bottom": {
            "components": [
                {
                    "type": "title",
                    "label": "Spawn ninja"
                }
            ]
        },
        "left": {
            "components": [
                {
                    "type": "button",
                    "name": "action-ninja",
                    "label": "Spawn ninja",
                    "cooldown": {
                        "duration": 20000
                    },
                    "extension": {
                        "title": {
                            "label": "Spawn a ninja"
                        },
                        "components": [
                            {
                                "type": "input",
                                "name": "ext-teaser-quote",
                                "label": "Your quote",
                                "placeholder": "Write here"
                            }
                        ]
                    }
                }
            ]
        }
    }
}
```

### Customizing

All components are customisable using the **[`style`](/docs/user-interface/style) property** in the right position.

:::caution

If you desire to customize components, you have to **[follow all guidelines offered by Twitch](https://dev.twitch.tv/docs/extensions/designing)**.

:::

Below the same User Interface than previously with customization:

```json
{
    "id": "5",
    "video_overlay": {
        "bottom": {
            "components": [
                {
                    "type": "title",
                    "label": "Spawn ninja",
                    "style": {
                        "backgroundColor": "#453298",
                        "color": "#fff"
                    }
                }
            ]
        },
        "left": {
            "components": [
                {
                    "type": "button",
                    "name": "action-ninja",
                    "label": "Spawn ninja",
                    "style": {
                        "backgroundColor": "#453298",
                        "color": "#fff"
                    },
                    "cooldown": {
                        "duration": 20000,
                        "style": {
                            "backgroundColor": "rgba(25,74,22, 0.7)",
                            "color": "#fff",
                            "fontSize": 26
                        }
                    },
                    "extension": {
                        "title": {
                            "label": "Spawn a ninja",
                            "style": {
                                "backgroundColor": "#453298",
                                "color": "#fff"
                            }
                        },
                        "style": {
                            "backgroundColor": "#8474c9",
                            "color": "#fff"
                        },
                        "submit": {
                            "label": "Spawn",
                            "style": {
                                "backgroundColor": "#453298",
                                "color": "#fff"
                            }
                        },
                        "components": [
                            {
                                "type": "input",
                                "name": "ext-teaser-quote",
                                "label": "Your quote",
                                "style": {
                                    "backgroundColor": "#453298"
                                },
                                "placeholder": "Write here"
                            }
                        ]
                    }
                }
            ]
        }
    }
}
```

**Find out more on the [User Interface documentation](/docs/user-interface/root).**
