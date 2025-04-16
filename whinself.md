# Whinself API Specification

This document provides a comprehensive specification of the available endpoints for the Whinself API, including message sending, channel/newsletter management, group management, and poll creation.

## Table of Contents

1. [Message Endpoints](#message-endpoints)
2. [Channel/Newsletter Endpoints](#channelnewsletter-endpoints)
3. [Group Management Endpoints](#group-management-endpoints)
4. [Poll Endpoints](#poll-endpoints)
5. [Contact Management Endpoints](#contact-management-endpoints)
6. [System Endpoints](#system-endpoints)

## Message Endpoints

### Send Message (`/wspout`)

Sends various types of messages to a WhatsApp contact or group.

**Method:** POST

**Request Body:**
```json
{
  "text": "Hello, world!",
  "link": {
    "title": "Link Title",
    "text": "Link Description",
    "url": "https://example.com",
    "thumbnail": "https://example.com/thumbnail.jpg",
    "description": "Link description"
  },
  "image": {
    "url": "https://example.com/image.jpg",
    "b64": "base64_encoded_image_data"
  },
  "video": {
    "url": "https://example.com/video.mp4",
    "b64": "base64_encoded_video_data"
  },
  "document": {
    "url": "https://example.com/document.pdf",
    "b64": "base64_encoded_document_data",
    "filename": "document.pdf"
  },
  "audio": {
    "url": "https://example.com/audio.mp3",
    "b64": "base64_encoded_audio_data",
    "seconds": 30,
    "isPTT": false
  },
  "contact": {
    "displayName": "John Doe",
    "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Doe;John;;;\nFN:John Doe\nTEL;TYPE=CELL:+1234567890\nEND:VCARD"
  },
  "location": {
    "latitude": 37.4224764,
    "longitude": -122.0842499,
    "name": "Googleplex",
    "address": "1600 Amphitheatre Parkway, Mountain View, CA 94043"
  },
  "caption": "Optional caption for media messages",
  "jid": "1234567890@s.whatsapp.net"
}
```

**Notes:**
- Only one message type should be provided (text, link, image, video, document, audio, contact, or location)
- For media messages, either `url` or `b64` should be provided, not both
- For audio messages, `isPTT` can be set to true for push-to-talk voice messages
- The `jid` field is required and specifies the recipient

**Response:**
- Success: HTTP 200 OK with message "Text Message sent successfully" or similar
- Error: HTTP 400 Bad Request or HTTP 500 Internal Server Error with error details

## Channel/Newsletter Endpoints

### Create Channel (`/newchannel`)

Creates a new WhatsApp channel/newsletter.

**Method:** POST

**Request Body:**
```json
{
  "name": "Channel Name",
  "description": "Channel description",
  "picture": {
    "b64": "base64_encoded_image_data",
    "picurl": "https://example.com/channel_picture.jpg"
  }
}
```

**Notes:**
- Either `b64` or `picurl` should be provided for the picture, not both
- The `description` field is optional

**Response:**
- Success: HTTP 200 OK with channel metadata in JSON format
- Error: HTTP 400 Bad Request or HTTP 500 Internal Server Error with error details

### Get Channel Info (`/getchannelinfo`)

Retrieves information about a WhatsApp channel.

**Method:** GET

**Query Parameters:**
- `channel` or `jid`: The channel ID (e.g., "1234567890@newsletter")

**Response:**
- Success: HTTP 200 OK with channel information in JSON format
- Error: HTTP 400 Bad Request or HTTP 500 Internal Server Error with error details

### Publish to Channel (`/channelpublish`)

Publishes content to a WhatsApp channel.

**Method:** POST

**Request Body:**
```json
{
  "text": "Channel message text",
  "link": {
    "title": "Link Title",
    "text": "Link Description",
    "url": "https://example.com",
    "thumbnail": "https://example.com/thumbnail.jpg",
    "description": "Link description"
  },
  "image": {
    "url": "https://example.com/image.jpg",
    "b64": "base64_encoded_image_data"
  },
  "video": {
    "url": "https://example.com/video.mp4",
    "b64": "base64_encoded_video_data"
  },
  "document": {
    "url": "https://example.com/document.pdf",
    "b64": "base64_encoded_document_data",
    "filename": "document.pdf"
  },
  "audio": {
    "url": "https://example.com/audio.mp3",
    "b64": "base64_encoded_audio_data",
    "seconds": 30,
    "isPTT": false
  },
  "contact": {
    "displayName": "John Doe",
    "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Doe;John;;;\nFN:John Doe\nTEL;TYPE=CELL:+1234567890\nEND:VCARD"
  },
  "location": {
    "latitude": 37.4224764,
    "longitude": -122.0842499,
    "name": "Googleplex",
    "address": "1600 Amphitheatre Parkway, Mountain View, CA 94043"
  },
  "caption": "Optional caption for media messages",
  "jid": "1234567890@newsletter"
}
```

**Notes:**
- Similar to the `/wspout` endpoint but specifically for channels
- The `jid` field must be a channel ID (ending with @newsletter)

**Response:**
- Success: HTTP 200 OK with message "Text message published successfully" or similar
- Error: HTTP 400 Bad Request or HTTP 500 Internal Server Error with error details

### Follow Channel (`/follow`)

Subscribes to a WhatsApp channel.

**Method:** GET

**Query Parameters:**
- `channel`: The channel ID (e.g., "1234567890")

**Response:**
- Success: HTTP 200 OK with message "Subscription enabled."
- Error: HTTP 503 Service Unavailable with error details

### Unfollow Channel (`/unfollow`)

Unsubscribes from a WhatsApp channel.

**Method:** GET

**Query Parameters:**
- `channel`: The channel ID (e.g., "1234567890")

**Response:**
- Success: HTTP 200 OK with message "Subscription terminated."
- Error: HTTP 503 Service Unavailable with error details

### Get Following Channels (`/following`)

Retrieves a list of channels the user is subscribed to.

**Method:** GET

**Response:**
- Success: HTTP 200 OK with list of subscribed channels in JSON format
- Error: HTTP 503 Service Unavailable with error details

### Get Channel Messages (`/getnewslettermessages`)

Retrieves messages from a WhatsApp channel.

**Method:** GET

**Query Parameters:**
- `channelJID`: The channel ID (e.g., "1234567890@newsletter")
- `count` (optional): Number of messages to retrieve (default: 50)
- `before` (optional): Message server ID to retrieve messages before

**Response:**
- Success: HTTP 200 OK with channel messages in JSON format
- Error: HTTP 400 Bad Request or HTTP 500 Internal Server Error with error details

### Get Channel Message Updates (`/getnewslettermessageupdates`)

Retrieves updates to messages from a WhatsApp channel.

**Method:** GET

**Query Parameters:**
- `channelJID`: The channel ID (e.g., "1234567890@newsletter")
- `count` (optional): Number of updates to retrieve
- `since` (optional): ISO 8601 timestamp to retrieve updates since
- `after` (optional): Message server ID to retrieve updates after

**Response:**
- Success: HTTP 200 OK with channel message updates in JSON format
- Error: HTTP 400 Bad Request or HTTP 500 Internal Server Error with error details

### Update Channel Logo (`/updatechannellogo`)

Updates the logo/picture of a WhatsApp channel.

**Method:** POST

**Form Data:**
- `channelJID`: The channel ID (e.g., "1234567890@newsletter")
- `picture`: The image file to use as the channel logo

**Response:**
- Success: HTTP 200 OK with success message
- Error: HTTP 400 Bad Request or HTTP 500 Internal Server Error with error details

## Group Management Endpoints

### Create Group (`/creategroup`)

Creates a new WhatsApp group.

**Method:** POST

**Request Body:**
```json
{
  "name": "Group Name",
  "participants": ["1234567890@s.whatsapp.net", "0987654321@s.whatsapp.net"],
  "create_key": "optional_create_key",
  "is_parent": false,
  "linked_parent_jid": "parent_group_id@g.us"
}
```

**Notes:**
- `participants` is an array of JIDs for the initial group members
- `create_key`, `is_parent`, and `linked_parent_jid` are optional

**Response:**
- Success: HTTP 200 OK with group information in JSON format
- Error: HTTP 400 Bad Request or HTTP 500 Internal Server Error with error details

### Set Group Photo (`/setgroupphoto`)

Sets or updates the profile picture of a WhatsApp group.

**Method:** POST

**Request Body:**
```json
{
  "jid": "1234567890@g.us",
  "avatar": "base64_encoded_image_data"
}
```

**Response:**
- Success: HTTP 200 OK with the new picture ID
- Error: HTTP 400 Bad Request or HTTP 500 Internal Server Error with error details

### Set Group Name (`/setgroupname`)

Updates the name of a WhatsApp group.

**Method:** POST

**Request Body:**
```json
{
  "jid": "1234567890@g.us",
  "name": "New Group Name"
}
```

**Response:**
- Success: HTTP 200 OK
- Error: HTTP 400 Bad Request or HTTP 500 Internal Server Error with error details

### Set Group Topic (`/setgrouptopic`)

Updates the topic/description of a WhatsApp group.

**Method:** POST

**Request Body:**
```json
{
  "jid": "1234567890@g.us",
  "previous_id": "previous_topic_id",
  "new_id": "new_topic_id",
  "topic": "New Group Topic"
}
```

**Response:**
- Success: HTTP 200 OK
- Error: HTTP 400 Bad Request or HTTP 500 Internal Server Error with error details

### Get Group Invite Link (`/getgroupinvitelink`)

Retrieves or generates an invite link for a WhatsApp group.

**Method:** POST

**Request Body:**
```json
{
  "jid": "1234567890@g.us",
  "reset": false
}
```

**Notes:**
- Set `reset` to true to generate a new invite link, invalidating the previous one

**Response:**
- Success: HTTP 200 OK with the invite link
- Error: HTTP 400 Bad Request or HTTP 500 Internal Server Error with error details

### Get Joined Groups (`/getjoinedgroups`)

Retrieves a list of groups the user is a member of.

**Method:** GET

**Response:**
- Success: HTTP 200 OK with list of joined groups in JSON format
- Error: HTTP 500 Internal Server Error with error details

### Get Group Info (`/getgroupinfo`)

Retrieves detailed information about a WhatsApp group.

**Method:** POST

**Request Body:**
```json
{
  "jid": "1234567890@g.us"
}
```

**Response:**
- Success: HTTP 200 OK with group information in JSON format
- Error: HTTP 400 Bad Request or HTTP 500 Internal Server Error with error details

### Update Group Participants (`/upgradegroupparticipants`)

Adds, removes, promotes, or demotes participants in a WhatsApp group.

**Method:** POST

**Request Body:**
```json
{
  "jid": "1234567890@g.us",
  "participant_jids": ["1234567890@s.whatsapp.net", "0987654321@s.whatsapp.net"],
  "action": "add"
}
```

**Notes:**
- `action` can be one of: "add", "remove", "promote", or "demote"

**Response:**
- Success: HTTP 200 OK with updated participant information in JSON format
- Error: HTTP 400 Bad Request or HTTP 500 Internal Server Error with error details

### Leave Group (`/leavegroup`)

Leaves a WhatsApp group.

**Method:** POST

**Request Body:**
```json
{
  "jid": "1234567890@g.us"
}
```

**Response:**
- Success: HTTP 200 OK
- Error: HTTP 400 Bad Request or HTTP 500 Internal Server Error with error details

## Poll Endpoints

### Create Poll (`/createpoll`)

Creates and sends a poll to a WhatsApp chat.

**Method:** POST

**Request Body:**
```json
{
  "chat": "1234567890@s.whatsapp.net",
  "name": "Poll Question",
  "optionNames": ["Option 1", "Option 2", "Option 3"],
  "selectableOptionCount": 1
}
```

**Notes:**
- `selectableOptionCount` specifies how many options a user can select

**Response:**
- Success: HTTP 200 OK with poll creation details in JSON format
- Error: HTTP 400 Bad Request or HTTP 500 Internal Server Error with error details

## Contact Management Endpoints

### Create Contact (`/createcontact`)

Creates or updates a contact in the WhatsApp client.

**Method:** POST

**Request Body:**
```json
{
  "jid": "1234567890@s.whatsapp.net",
  "name": "Contact Name"
}
```

**Response:**
- Success: HTTP 200 OK
- Error: HTTP 400 Bad Request or HTTP 500 Internal Server Error with error details

### Delete Contact (`/deletecontact`)

Deletes a contact from the WhatsApp client.

**Method:** POST

**Request Body:**
```json
{
  "jid": "1234567890@s.whatsapp.net"
}
```

**Response:**
- Success: HTTP 200 OK
- Error: HTTP 400 Bad Request or HTTP 500 Internal Server Error with error details

### Get Contact (`/getcontact`)

Retrieves information about a specific contact.

**Method:** GET

**Query Parameters:**
- `phone`: The phone number or JID of the contact

**Response:**
- Success: HTTP 200 OK with contact information in JSON format
- Error: HTTP 400 Bad Request or HTTP 500 Internal Server Error with error details

### Get Contacts (`/getcontacts`)

Retrieves a list of all contacts in the WhatsApp client.

**Method:** GET

**Response:**
- Success: HTTP 200 OK with list of contacts in JSON format
- Error: HTTP 500 Internal Server Error with error details