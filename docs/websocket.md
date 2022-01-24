---
id: websocket
title: WebSocket
---

## connection

### sent

To know how to implement a Secure WebSocket connection, please read the [General Implementation](./getting-started/general).

-   scheme: `wss`,
-   host: `interactive-sync-ebs.azurewebsites.net`,
-   queries:
    -   `client_id`
    -   `access_token`

```bash
wss://interactive-sync-ebs.azurewebsites.net/?client_id=<your client ID>&access_token=<an access token>
```

### received

#### ok

```json
{
    "status": "ok",
    "context": "connection",
    "message": "You are well connected with the channel",
    "data": { "displayName": "XXXXXX", "channelId": "XXXXXXX" }
}
```

#### error

```json
{
    "status": "error",
    "context": "connection",
    "message": "XXXXXXXXXXXXXXXXXXX",
    "data": null
}
```

##### query parameters

-   `"Query parameters are missing ; connection will be terminated."`
-   `"ClientID or accessToken is missing ; connection will be terminated."`

##### access token

-   `"An error occurred on token validation: XXXXXX"`
-   `"We cant find user_id with your token. It must be an user access token retrieved with implitit code flow or authorization code flow."`

##### client id

-   `"An error occurred on ClientID verification: XXXXXX"`

##### configuration extension

-   `"An error occurred to set extension configuration: XXXXXX"`

##### user

-   `"An error occurred to retrieve user details: XXXXXX"`

## messages

### sent

To know how to send User Interface, please read: [Create User Interface](./getting-started/create-ui).

```json
{
    "context": "user_interface",
    "data": {
        "id": "1"
    }
}
```

### received

#### STATUS "OK"

##### context message

```json
{
    "status": "ok",
    "context": "message",
    "message": "Message was well received and transfered to Twitch API.",
    "data": null
}
```

##### context emit

```json
{
    "status": "ok",
    "context": "emit",
    "message": null,
    "data": {
        "type": "XXXXX",
        "payload": {
            "id": "XXXXXXXX",
            "view": "XXXXXXXXX",
            "username": "XXXXXXXX",
            "values": { ... }
        }
    }
}
```

-   **data.type:** `input` | `mouse`<br/>
    **data.payload.view:** `video_overlay` | `panel` | `mobile`<br/>
    **data.payload.username:** _`display_name`_ | `Anonymous`<br/>
    **data.payload.values:** object providing the values of your components within the modal

#### STATUS "WARNING"

##### context message

```json
{
    "status": "warning",
    "context": "message",
    "message": "XXXXXXXXXXXXXXXXXXX",
    "data": "XXXXXXXXXXXXXX"
}
```

##### time

-   `"The time between your previous message and message received is too high ; message is ignored."`

##### json

-   "`Size of the JSON received is too big ; message is ignored.`"
-   "`A parsing error occured with the JSON received ; message is ignored.`"
-   "`Context or data is missing ; message is ignored.`"

##### user interface

-   **message:** `"JSON received is invalid ; message is ignored"`<br/>
    **data:** object providing more information

-   **message:** `"JSON received has an identical ID than the previous ; message is ignored."`<br/>
    **data:** `{ "previousID": XXXX, "newID": XXXX }`

#### STATUS "ERROR"

##### context message

```json
{
    "status": "error",
    "context": "message",
    "message": "XXXXXXXXXXXXXXXXXXX",
    "data": "XXXXXXXXXXXXXXXXXXX"
}
```

##### channel

-   `"For unknown reasons, channelID is undefined ; connection will be terminated."`

##### twitch

-   `"Error during transfer to Twitch API: XXXXXX"`

##### protection

-   **message:** `"We have detected spam ; connection will be terminated."`

-   **message:** `"You have exceeded the warning limit ; connection will be terminated"`<br/>
    **data:** `{ limit: "X" }`

## close

### sent

To close a connection, call the `close` function on your websocket instance.

### received

#### STATUS "OK"

##### context connection

```json
{
    "status": "ok",
    "context": "connection",
    "message": "Connection is terminated.",
    "data": { "displayName": "XXXXXX", "channelId": "XXXXXXX" }
}
```
