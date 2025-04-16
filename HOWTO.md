# Whinself Node for n8n

This document provides detailed instructions on how to deploy the Whinself nodes and add them to n8n workflows.

## Table of Contents

1. [Installation](#installation)
2. [Adding the Node to n8n](#adding-the-node-to-n8n)
3. [Using the Whinself Node in Workflows](#using-the-whinself-node-in-workflows)
4. [Available Resources and Operations](#available-resources-and-operations)
5. [Examples](#examples)
6. [Troubleshooting](#troubleshooting)

## Installation

### Prerequisites

- n8n installed and running
- Node.js and npm installed
- Git installed

### Installation Steps

### Option 1: Using pre-built files

1. Copy the following files to your n8n custom nodes directory:
   - `dist/nodes/Whinself/Whinself.node.js` → `/home/node/.n8n/custom/Whinself/`
   - `dist/nodes/Whinself/index.js` → `/home/node/.n8n/custom/Whinself/`
   - `nodes/Whinself/icons/whinself.ico` → `/home/node/.n8n/custom/Whinself/icons/`

2. Restart n8n to load the new nodes

### Option 2: Building from source

1. Clone this repository:
   ```bash
   git clone https://github.com/inUtil-Labs/whinself-n8n.git
   cd whinself-n8n
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the nodes:
   ```bash
   npm run build
   ```

4. Copy the built files to your n8n custom nodes directory:
   - `dist/nodes/Whinself/Whinself.node.js` → `/home/node/.n8n/custom/Whinself/`
   - `dist/nodes/Whinself/index.js` → `/home/node/.n8n/custom/Whinself/`
   - `nodes/Whinself/icons/whinself.ico` → `/home/node/.n8n/custom/Whinself/icons/`

5. Restart n8n to load the new nodes

## Adding the Node to n8n

1. Open your n8n instance in a web browser
2. Navigate to the "Workflows" page
3. Click on "Create New Workflow"
4. In the node selection panel, search for "Whinself"
5. You should see the Whinself node appear in the results
6. Drag and drop the Whinself node onto your workflow canvas

## Using the Whinself Node in Workflows

The Whinself node provides several resources and operations for interacting with the Whinself WhatsApp API. Here's how to use them:

1. **Select a Resource**: Choose from Message, Group, Newsletter, Contact, or Poll
2. **Select an Operation**: Based on the selected resource, choose the appropriate operation
3. **Configure Parameters**: Fill in the required parameters for the selected operation
4. **Connect to Other Nodes**: Connect the Whinself node to other nodes in your workflow

### Example: Sending a WhatsApp Message

1. Add a "Whinself" node to your workflow
2. Select "Message" as the resource
3. Select "Send" as the operation
4. Configure the message parameters:
   - Message Type: Text
   - Recipient JID: 1234567890@s.whatsapp.net
   - Text: Hello from n8n!
5. Connect the node to other nodes in your workflow
6. Execute the workflow to send the message

## Available Resources and Operations

### Message Resource
- **Send**: Send a message to a WhatsApp contact or group
  - Supports text, link, image, video, document, audio, contact, and location message types

### Group Resource
- **Create**: Create a new WhatsApp group
- **Get Info**: Get information about a WhatsApp group
- **Get Joined Groups**: Get a list of groups the user is a member of
- **Update Participants**: Add, remove, promote, or demote participants in a WhatsApp group
- **Set Group Name**: Update the name of a WhatsApp group
- **Set Group Photo**: Set or update the profile picture of a WhatsApp group
- **Get Invite Link**: Get or generate an invite link for a WhatsApp group
- **Leave Group**: Leave a WhatsApp group

### Newsletter Resource
- **Create**: Create a new WhatsApp channel/newsletter
- **Get Info**: Get information about a WhatsApp channel
- **Publish**: Publish content to a WhatsApp channel
- **Follow**: Subscribe to a WhatsApp channel
- **Unfollow**: Unsubscribe from a WhatsApp channel
- **Get Following**: Get a list of channels the user is subscribed to
- **Get Messages**: Get messages from a WhatsApp channel
- **Update Logo**: Update the logo/picture of a WhatsApp channel

### Contact Resource
- **Create**: Create or update a contact in the WhatsApp client
- **Delete**: Delete a contact from the WhatsApp client
- **Get**: Get information about a specific contact
- **Get All**: Get a list of all contacts in the WhatsApp client

### Poll Resource
- **Create**: Create and send a poll to a WhatsApp chat

## Examples

### Example 1: Sending a Text Message

1. Add a "Whinself" node
2. Configure:
   - Resource: Message
   - Operation: Send
   - Message Type: Text
   - Recipient JID: 1234567890@s.whatsapp.net
   - Text: Hello from n8n!

### Example 2: Creating a WhatsApp Group

1. Add a "Whinself" node
2. Configure:
   - Resource: Group
   - Operation: Create
   - Group Name: My New Group
   - Participants: 1234567890@s.whatsapp.net, 0987654321@s.whatsapp.net

### Example 3: Creating a Newsletter

1. Add a "Whinself" node
2. Configure:
   - Resource: Newsletter
   - Operation: Create
   - Channel Name: My Newsletter
   - Channel Description: Updates and announcements
   - Channel Picture: [Base64 image data or URL]

### Example 4: Creating a Poll

1. Add a "Whinself" node
2. Configure:
   - Resource: Poll
   - Operation: Create
   - Chat JID: 1234567890@s.whatsapp.net
   - Poll Question: What's your favorite color?
   - Poll Options: Red, Blue, Green, Yellow
   - Selectable Option Count: 1

## Troubleshooting

### Node Not Appearing in n8n

If the Whinself node doesn't appear in n8n after installation:

1. Check that the node files were copied correctly to the custom nodes directory
2. Verify that n8n was restarted after installation
3. Check the n8n logs for any errors related to loading custom nodes

### API Connection Issues

If you encounter issues connecting to the Whinself API:

1. Verify that your Whinself instance is running and accessible
2. Check that the base URL is correct (default: https://api.whinself.com)
3. Ensure that your Whinself instance is properly configured for API access

### Error Messages

Common error messages and their solutions:

- **"Resource not found"**: Check that the resource name is spelled correctly
- **"Operation not supported"**: Verify that the operation is available for the selected resource
- **"Missing required parameter"**: Fill in all required parameters for the operation
- **"Invalid JID format"**: Ensure the JID is in the correct format (e.g., 1234567890@s.whatsapp.net)

For additional help, please refer to the Whinself documentation or contact support. 