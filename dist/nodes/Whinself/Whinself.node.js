"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Whinself = void 0;
class Whinself {
    constructor() {
        this.description = {
            displayName: 'Whinself',
            name: 'whinself',
            icon: 'file:icons/whinself.ico',
            group: ['communication'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Interact with Whinself WhatsApp API',
            defaults: {
                name: 'Whinself',
            },
            inputs: ['main'],
            outputs: ['main'],
            properties: [
                {
                    displayName: 'API URL',
                    name: 'apiUrl',
                    type: 'string',
                    default: 'http://localhost',
                    required: true,
                    description: 'URL of your Whinself API instance (without port)',
                },
                {
                    displayName: 'API Port',
                    name: 'apiPort',
                    type: 'number',
                    default: 3000,
                    required: true,
                    description: 'Port of your Whinself API instance',
                },
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        {
                            name: 'Message',
                            value: 'message',
                        },
                        {
                            name: 'Group',
                            value: 'group',
                        },
                        {
                            name: 'Newsletter',
                            value: 'newsletter',
                        },
                        {
                            name: 'Contact',
                            value: 'contact',
                        },
                        {
                            name: 'Poll',
                            value: 'poll',
                        },
                    ],
                    default: 'message',
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: [
                                'message',
                            ],
                        },
                    },
                    options: [
                        {
                            name: 'Send',
                            value: 'send',
                            description: 'Send a message to a WhatsApp contact or group',
                            action: 'Send a message to a WhatsApp contact or group',
                        },
                    ],
                    default: 'send',
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: [
                                'group',
                            ],
                        },
                    },
                    options: [
                        {
                            name: 'Create',
                            value: 'create',
                            description: 'Create a new WhatsApp group',
                            action: 'Create a new WhatsApp group',
                        },
                        {
                            name: 'Get Info',
                            value: 'getInfo',
                            description: 'Get information about a WhatsApp group',
                            action: 'Get information about a WhatsApp group',
                        },
                        {
                            name: 'Get Joined Groups',
                            value: 'getJoinedGroups',
                            description: 'Get a list of groups the user is a member of',
                            action: 'Get a list of groups the user is a member of',
                        },
                        {
                            name: 'Update Participants',
                            value: 'updateParticipants',
                            description: 'Add, remove, promote, or demote participants in a WhatsApp group',
                            action: 'Update participants in a WhatsApp group',
                        },
                        {
                            name: 'Set Group Name',
                            value: 'setGroupName',
                            description: 'Update the name of a WhatsApp group',
                            action: 'Update the name of a WhatsApp group',
                        },
                        {
                            name: 'Set Group Photo',
                            value: 'setGroupPhoto',
                            description: 'Set or update the profile picture of a WhatsApp group',
                            action: 'Set or update the profile picture of a WhatsApp group',
                        },
                        {
                            name: 'Get Invite Link',
                            value: 'getInviteLink',
                            description: 'Get or generate an invite link for a WhatsApp group',
                            action: 'Get or generate an invite link for a WhatsApp group',
                        },
                        {
                            name: 'Leave Group',
                            value: 'leaveGroup',
                            description: 'Leave a WhatsApp group',
                            action: 'Leave a WhatsApp group',
                        },
                    ],
                    default: 'getJoinedGroups',
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: [
                                'newsletter',
                            ],
                        },
                    },
                    options: [
                        {
                            name: 'Create',
                            value: 'create',
                            description: 'Create a new WhatsApp channel/newsletter',
                            action: 'Create a new WhatsApp channel/newsletter',
                        },
                        {
                            name: 'Get Info',
                            value: 'getInfo',
                            description: 'Get information about a WhatsApp channel',
                            action: 'Get information about a WhatsApp channel',
                        },
                        {
                            name: 'Publish',
                            value: 'publish',
                            description: 'Publish content to a WhatsApp channel',
                            action: 'Publish content to a WhatsApp channel',
                        },
                        {
                            name: 'Follow',
                            value: 'follow',
                            description: 'Subscribe to a WhatsApp channel',
                            action: 'Subscribe to a WhatsApp channel',
                        },
                        {
                            name: 'Unfollow',
                            value: 'unfollow',
                            description: 'Unsubscribe from a WhatsApp channel',
                            action: 'Unsubscribe from a WhatsApp channel',
                        },
                        {
                            name: 'Get Following',
                            value: 'getFollowing',
                            description: 'Get a list of channels the user is subscribed to',
                            action: 'Get a list of channels the user is subscribed to',
                        },
                        {
                            name: 'Get Messages',
                            value: 'getMessages',
                            description: 'Get messages from a WhatsApp channel',
                            action: 'Get messages from a WhatsApp channel',
                        },
                        {
                            name: 'Update Logo',
                            value: 'updateLogo',
                            description: 'Update the logo/picture of a WhatsApp channel',
                            action: 'Update the logo/picture of a WhatsApp channel',
                        },
                    ],
                    default: 'getInfo',
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: [
                                'contact',
                            ],
                        },
                    },
                    options: [
                        {
                            name: 'Create',
                            value: 'create',
                            description: 'Create or update a contact in the WhatsApp client',
                            action: 'Create or update a contact in the WhatsApp client',
                        },
                        {
                            name: 'Delete',
                            value: 'delete',
                            description: 'Delete a contact from the WhatsApp client',
                            action: 'Delete a contact from the WhatsApp client',
                        },
                        {
                            name: 'Get',
                            value: 'get',
                            description: 'Get information about a specific contact',
                            action: 'Get information about a specific contact',
                        },
                        {
                            name: 'Get All',
                            value: 'getAll',
                            description: 'Get a list of all contacts in the WhatsApp client',
                            action: 'Get a list of all contacts in the WhatsApp client',
                        },
                    ],
                    default: 'get',
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: [
                                'poll',
                            ],
                        },
                    },
                    options: [
                        {
                            name: 'Create',
                            value: 'create',
                            description: 'Create and send a poll to a WhatsApp chat',
                            action: 'Create and send a poll to a WhatsApp chat',
                        },
                    ],
                    default: 'create',
                },
                {
                    displayName: 'Message Type',
                    name: 'messageType',
                    type: 'options',
                    displayOptions: {
                        show: {
                            resource: [
                                'message',
                            ],
                            operation: [
                                'send',
                            ],
                        },
                    },
                    options: [
                        {
                            name: 'Text',
                            value: 'text',
                        },
                        {
                            name: 'Link',
                            value: 'link',
                        },
                        {
                            name: 'Image',
                            value: 'image',
                        },
                        {
                            name: 'Video',
                            value: 'video',
                        },
                        {
                            name: 'Document',
                            value: 'document',
                        },
                        {
                            name: 'Audio',
                            value: 'audio',
                        },
                        {
                            name: 'Contact',
                            value: 'contact',
                        },
                        {
                            name: 'Location',
                            value: 'location',
                        },
                    ],
                    default: 'text',
                },
                {
                    displayName: 'Recipient JID',
                    name: 'jid',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: [
                                'message',
                            ],
                            operation: [
                                'send',
                            ],
                        },
                    },
                    description: 'The JID of the recipient (e.g., 1234567890@s.whatsapp.net)',
                },
                {
                    displayName: 'Text',
                    name: 'text',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: [
                                'message',
                            ],
                            operation: [
                                'send',
                            ],
                            messageType: [
                                'text',
                            ],
                        },
                    },
                    description: 'The text message to send',
                },
                {
                    displayName: 'Link Title',
                    name: 'linkTitle',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: [
                                'message',
                            ],
                            operation: [
                                'send',
                            ],
                            messageType: [
                                'link',
                            ],
                        },
                    },
                },
                {
                    displayName: 'Link Text',
                    name: 'linkText',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: [
                                'message',
                            ],
                            operation: [
                                'send',
                            ],
                            messageType: [
                                'link',
                            ],
                        },
                    },
                },
                {
                    displayName: 'Link URL',
                    name: 'linkUrl',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: [
                                'message',
                            ],
                            operation: [
                                'send',
                            ],
                            messageType: [
                                'link',
                            ],
                        },
                    },
                },
                {
                    displayName: 'Link Thumbnail',
                    name: 'linkThumbnail',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: [
                                'message',
                            ],
                            operation: [
                                'send',
                            ],
                            messageType: [
                                'link',
                            ],
                        },
                    },
                },
                {
                    displayName: 'Link Description',
                    name: 'linkDescription',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: [
                                'message',
                            ],
                            operation: [
                                'send',
                            ],
                            messageType: [
                                'link',
                            ],
                        },
                    },
                },
                {
                    displayName: 'Media URL',
                    name: 'mediaUrl',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: [
                                'message',
                            ],
                            operation: [
                                'send',
                            ],
                            messageType: [
                                'image',
                                'video',
                                'document',
                                'audio',
                            ],
                        },
                    },
                },
                {
                    displayName: 'Media Base64',
                    name: 'mediaBase64',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: [
                                'message',
                            ],
                            operation: [
                                'send',
                            ],
                            messageType: [
                                'image',
                                'video',
                                'document',
                                'audio',
                            ],
                        },
                    },
                },
                {
                    displayName: 'Caption',
                    name: 'caption',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: [
                                'message',
                            ],
                            operation: [
                                'send',
                            ],
                            messageType: [
                                'image',
                                'video',
                                'document',
                            ],
                        },
                    },
                },
                {
                    displayName: 'Filename',
                    name: 'filename',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: [
                                'message',
                            ],
                            operation: [
                                'send',
                            ],
                            messageType: [
                                'document',
                            ],
                        },
                    },
                },
                {
                    displayName: 'Audio Duration (seconds)',
                    name: 'audioSeconds',
                    type: 'number',
                    default: 0,
                    displayOptions: {
                        show: {
                            resource: [
                                'message',
                            ],
                            operation: [
                                'send',
                            ],
                            messageType: [
                                'audio',
                            ],
                        },
                    },
                },
                {
                    displayName: 'Is Push-to-Talk',
                    name: 'isPTT',
                    type: 'boolean',
                    default: false,
                    displayOptions: {
                        show: {
                            resource: [
                                'message',
                            ],
                            operation: [
                                'send',
                            ],
                            messageType: [
                                'audio',
                            ],
                        },
                    },
                },
                {
                    displayName: 'Contact Display Name',
                    name: 'contactDisplayName',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: [
                                'message',
                            ],
                            operation: [
                                'send',
                            ],
                            messageType: [
                                'contact',
                            ],
                        },
                    },
                },
                {
                    displayName: 'Contact vCard',
                    name: 'contactVCard',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: [
                                'message',
                            ],
                            operation: [
                                'send',
                            ],
                            messageType: [
                                'contact',
                            ],
                        },
                    },
                },
                {
                    displayName: 'Latitude',
                    name: 'latitude',
                    type: 'number',
                    default: 0,
                    displayOptions: {
                        show: {
                            resource: [
                                'message',
                            ],
                            operation: [
                                'send',
                            ],
                            messageType: [
                                'location',
                            ],
                        },
                    },
                },
                {
                    displayName: 'Longitude',
                    name: 'longitude',
                    type: 'number',
                    default: 0,
                    displayOptions: {
                        show: {
                            resource: [
                                'message',
                            ],
                            operation: [
                                'send',
                            ],
                            messageType: [
                                'location',
                            ],
                        },
                    },
                },
                {
                    displayName: 'Location Name',
                    name: 'locationName',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: [
                                'message',
                            ],
                            operation: [
                                'send',
                            ],
                            messageType: [
                                'location',
                            ],
                        },
                    },
                },
                {
                    displayName: 'Location Address',
                    name: 'locationAddress',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: [
                                'message',
                            ],
                            operation: [
                                'send',
                            ],
                            messageType: [
                                'location',
                            ],
                        },
                    },
                },
                {
                    displayName: 'Group JID',
                    name: 'groupJid',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: [
                                'group',
                            ],
                            operation: [
                                'getInfo',
                                'updateParticipants',
                                'setGroupName',
                                'setGroupPhoto',
                                'getInviteLink',
                                'leaveGroup',
                            ],
                        },
                    },
                    description: 'The JID of the group (e.g., 1234567890@g.us)',
                },
                {
                    displayName: 'Group Name',
                    name: 'groupName',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: [
                                'group',
                            ],
                            operation: [
                                'create',
                                'setGroupName',
                            ],
                        },
                    },
                },
                {
                    displayName: 'Participants',
                    name: 'participants',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: [
                                'group',
                            ],
                            operation: [
                                'create',
                            ],
                        },
                    },
                    description: 'Comma-separated list of participant JIDs',
                },
                {
                    displayName: 'Participant JIDs',
                    name: 'participantJids',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: [
                                'group',
                            ],
                            operation: [
                                'updateParticipants',
                            ],
                        },
                    },
                    description: 'Comma-separated list of participant JIDs',
                },
                {
                    displayName: 'Action',
                    name: 'participantAction',
                    type: 'options',
                    options: [
                        {
                            name: 'Add',
                            value: 'add',
                        },
                        {
                            name: 'Remove',
                            value: 'remove',
                        },
                        {
                            name: 'Promote',
                            value: 'promote',
                        },
                        {
                            name: 'Demote',
                            value: 'demote',
                        },
                    ],
                    default: 'add',
                    displayOptions: {
                        show: {
                            resource: [
                                'group',
                            ],
                            operation: [
                                'updateParticipants',
                            ],
                        },
                    },
                },
                {
                    displayName: 'Group Photo',
                    name: 'groupPhoto',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: [
                                'group',
                            ],
                            operation: [
                                'setGroupPhoto',
                            ],
                        },
                    },
                    description: 'Base64-encoded image data',
                },
                {
                    displayName: 'Reset Invite Link',
                    name: 'resetInviteLink',
                    type: 'boolean',
                    default: false,
                    displayOptions: {
                        show: {
                            resource: [
                                'group',
                            ],
                            operation: [
                                'getInviteLink',
                            ],
                        },
                    },
                    description: 'Whether to generate a new invite link, invalidating the previous one',
                },
                {
                    displayName: 'Channel JID',
                    name: 'channelJid',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: [
                                'newsletter',
                            ],
                            operation: [
                                'getInfo',
                                'publish',
                                'follow',
                                'unfollow',
                                'getMessages',
                                'updateLogo',
                            ],
                        },
                    },
                    description: 'The JID of the channel (e.g., 1234567890@newsletter)',
                },
                {
                    displayName: 'Channel Name',
                    name: 'channelName',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: [
                                'newsletter',
                            ],
                            operation: [
                                'create',
                            ],
                        },
                    },
                },
                {
                    displayName: 'Channel Description',
                    name: 'channelDescription',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: [
                                'newsletter',
                            ],
                            operation: [
                                'create',
                            ],
                        },
                    },
                },
                {
                    displayName: 'Channel Picture',
                    name: 'channelPicture',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: [
                                'newsletter',
                            ],
                            operation: [
                                'create',
                                'updateLogo',
                            ],
                        },
                    },
                    description: 'Base64-encoded image data or URL',
                },
                {
                    displayName: 'Contact JID',
                    name: 'contactJid',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: [
                                'contact',
                            ],
                            operation: [
                                'create',
                                'delete',
                                'get',
                            ],
                        },
                    },
                    description: 'The JID of the contact (e.g., 1234567890@s.whatsapp.net)',
                },
                {
                    displayName: 'Contact Name',
                    name: 'contactName',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: [
                                'contact',
                            ],
                            operation: [
                                'create',
                            ],
                        },
                    },
                },
                {
                    displayName: 'Chat JID',
                    name: 'chatJid',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: [
                                'poll',
                            ],
                            operation: [
                                'create',
                            ],
                        },
                    },
                    description: 'The JID of the chat (e.g., 1234567890@s.whatsapp.net)',
                },
                {
                    displayName: 'Poll Question',
                    name: 'pollQuestion',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: [
                                'poll',
                            ],
                            operation: [
                                'create',
                            ],
                        },
                    },
                },
                {
                    displayName: 'Poll Options',
                    name: 'pollOptions',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: [
                                'poll',
                            ],
                            operation: [
                                'create',
                            ],
                        },
                    },
                    description: 'Comma-separated list of poll options',
                },
                {
                    displayName: 'Selectable Option Count',
                    name: 'selectableOptionCount',
                    type: 'number',
                    default: 1,
                    displayOptions: {
                        show: {
                            resource: [
                                'poll',
                            ],
                            operation: [
                                'create',
                            ],
                        },
                    },
                    description: 'Number of options a user can select',
                },
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        try {
            const resource = this.getNodeParameter('resource', 0);
            const operation = this.getNodeParameter('operation', 0);
            const apiUrl = this.getNodeParameter('apiUrl', 0);
            const apiPort = this.getNodeParameter('apiPort', 0);
            const baseUrl = `${apiUrl}:${apiPort}`;
            for (let i = 0; i < items.length; i++) {
                try {
                    let responseData;
                    const item = items[i];
                    if (resource === 'message') {
                        if (operation === 'send') {
                            const incomingData = item.json;
                            if (incomingData && Object.keys(incomingData).length > 0) {
                                if (!incomingData.jid) {
                                    throw new Error('The incoming payload must include a "jid" field with the recipient JID');
                                }
                                responseData = await this.helpers.request({
                                    method: 'POST',
                                    url: `${baseUrl}/wspout`,
                                    body: incomingData,
                                    json: true,
                                });
                            }
                            else {
                                const jid = this.getNodeParameter('jid', i);
                                const messageType = this.getNodeParameter('messageType', i);
                                let messageData = {};
                                if (messageType === 'text') {
                                    messageData = {
                                        text: this.getNodeParameter('text', i),
                                        jid,
                                    };
                                }
                                else if (messageType === 'link') {
                                    messageData = {
                                        link: {
                                            title: this.getNodeParameter('linkTitle', i),
                                            text: this.getNodeParameter('linkText', i),
                                            url: this.getNodeParameter('linkUrl', i),
                                            thumbnail: this.getNodeParameter('linkThumbnail', i),
                                            description: this.getNodeParameter('linkDescription', i),
                                        },
                                        jid,
                                    };
                                }
                                else if (messageType === 'image') {
                                    messageData = {
                                        image: {
                                            url: this.getNodeParameter('mediaUrl', i),
                                            b64: this.getNodeParameter('mediaBase64', i),
                                        },
                                        caption: this.getNodeParameter('caption', i),
                                        jid,
                                    };
                                }
                                else if (messageType === 'video') {
                                    messageData = {
                                        video: {
                                            url: this.getNodeParameter('mediaUrl', i),
                                            b64: this.getNodeParameter('mediaBase64', i),
                                        },
                                        caption: this.getNodeParameter('caption', i),
                                        jid,
                                    };
                                }
                                else if (messageType === 'document') {
                                    messageData = {
                                        document: {
                                            url: this.getNodeParameter('mediaUrl', i),
                                            b64: this.getNodeParameter('mediaBase64', i),
                                            filename: this.getNodeParameter('filename', i),
                                        },
                                        caption: this.getNodeParameter('caption', i),
                                        jid,
                                    };
                                }
                                else if (messageType === 'audio') {
                                    messageData = {
                                        audio: {
                                            url: this.getNodeParameter('mediaUrl', i),
                                            b64: this.getNodeParameter('mediaBase64', i),
                                            seconds: this.getNodeParameter('audioSeconds', i),
                                            isPTT: this.getNodeParameter('isPTT', i),
                                        },
                                        jid,
                                    };
                                }
                                else if (messageType === 'contact') {
                                    messageData = {
                                        contact: {
                                            displayName: this.getNodeParameter('contactDisplayName', i),
                                            vcard: this.getNodeParameter('contactVCard', i),
                                        },
                                        jid,
                                    };
                                }
                                else if (messageType === 'location') {
                                    messageData = {
                                        location: {
                                            latitude: this.getNodeParameter('latitude', i),
                                            longitude: this.getNodeParameter('longitude', i),
                                            name: this.getNodeParameter('locationName', i),
                                            address: this.getNodeParameter('locationAddress', i),
                                        },
                                        jid,
                                    };
                                }
                                responseData = await this.helpers.request({
                                    method: 'POST',
                                    url: `${baseUrl}/wspout`,
                                    body: messageData,
                                    json: true,
                                });
                            }
                        }
                    }
                    else if (resource === 'group') {
                        if (operation === 'create') {
                            const groupName = this.getNodeParameter('groupName', i);
                            const participants = this.getNodeParameter('participants', i).split(',').map(p => p.trim());
                            responseData = await this.helpers.request({
                                method: 'POST',
                                url: `${baseUrl}/creategroup`,
                                body: {
                                    name: groupName,
                                    participants,
                                },
                                json: true,
                            });
                        }
                        else if (operation === 'getInfo') {
                            const groupJid = this.getNodeParameter('groupJid', i);
                            responseData = await this.helpers.request({
                                method: 'POST',
                                url: `${baseUrl}/getgroupinfo`,
                                body: {
                                    jid: groupJid,
                                },
                                json: true,
                            });
                        }
                        else if (operation === 'getJoinedGroups') {
                            responseData = await this.helpers.request({
                                method: 'GET',
                                url: `${baseUrl}/getjoinedgroups`,
                                json: true,
                            });
                        }
                        else if (operation === 'updateParticipants') {
                            const groupJid = this.getNodeParameter('groupJid', i);
                            const participantJids = this.getNodeParameter('participantJids', i).split(',').map(p => p.trim());
                            const participantAction = this.getNodeParameter('participantAction', i);
                            responseData = await this.helpers.request({
                                method: 'POST',
                                url: `${baseUrl}/upgradegroupparticipants`,
                                body: {
                                    jid: groupJid,
                                    participant_jids: participantJids,
                                    action: participantAction,
                                },
                                json: true,
                            });
                        }
                        else if (operation === 'setGroupName') {
                            const groupJid = this.getNodeParameter('groupJid', i);
                            const groupName = this.getNodeParameter('groupName', i);
                            responseData = await this.helpers.request({
                                method: 'POST',
                                url: `${baseUrl}/setgroupname`,
                                body: {
                                    jid: groupJid,
                                    name: groupName,
                                },
                                json: true,
                            });
                        }
                        else if (operation === 'setGroupPhoto') {
                            const groupJid = this.getNodeParameter('groupJid', i);
                            const groupPhoto = this.getNodeParameter('groupPhoto', i);
                            responseData = await this.helpers.request({
                                method: 'POST',
                                url: `${baseUrl}/setgroupphoto`,
                                body: {
                                    jid: groupJid,
                                    avatar: groupPhoto,
                                },
                                json: true,
                            });
                        }
                        else if (operation === 'getInviteLink') {
                            const groupJid = this.getNodeParameter('groupJid', i);
                            const resetInviteLink = this.getNodeParameter('resetInviteLink', i);
                            responseData = await this.helpers.request({
                                method: 'POST',
                                url: `${baseUrl}/getgroupinvitelink`,
                                body: {
                                    jid: groupJid,
                                    reset: resetInviteLink,
                                },
                                json: true,
                            });
                        }
                        else if (operation === 'leaveGroup') {
                            const groupJid = this.getNodeParameter('groupJid', i);
                            responseData = await this.helpers.request({
                                method: 'POST',
                                url: `${baseUrl}/leavegroup`,
                                body: {
                                    jid: groupJid,
                                },
                                json: true,
                            });
                        }
                    }
                    else if (resource === 'newsletter') {
                        if (operation === 'create') {
                            const channelName = this.getNodeParameter('channelName', i);
                            const channelDescription = this.getNodeParameter('channelDescription', i);
                            const channelPicture = this.getNodeParameter('channelPicture', i);
                            const pictureData = {};
                            if (channelPicture.startsWith('data:') || channelPicture.startsWith('http')) {
                                pictureData.picurl = channelPicture;
                            }
                            else {
                                pictureData.b64 = channelPicture;
                            }
                            responseData = await this.helpers.request({
                                method: 'POST',
                                url: `${baseUrl}/newchannel`,
                                body: {
                                    name: channelName,
                                    description: channelDescription,
                                    picture: pictureData,
                                },
                                json: true,
                            });
                        }
                        else if (operation === 'getInfo') {
                            const channelJid = this.getNodeParameter('channelJid', i);
                            responseData = await this.helpers.request({
                                method: 'GET',
                                url: `${baseUrl}/getchannelinfo`,
                                qs: {
                                    channel: channelJid,
                                },
                                json: true,
                            });
                        }
                        else if (operation === 'publish') {
                            const channelJid = this.getNodeParameter('channelJid', i);
                            responseData = await this.helpers.request({
                                method: 'POST',
                                url: `${baseUrl}/channelpublish`,
                                body: {
                                    text: 'Channel message',
                                    jid: channelJid,
                                },
                                json: true,
                            });
                        }
                        else if (operation === 'follow') {
                            const channelJid = this.getNodeParameter('channelJid', i);
                            responseData = await this.helpers.request({
                                method: 'GET',
                                url: `${baseUrl}/follow`,
                                qs: {
                                    channel: channelJid,
                                },
                                json: true,
                            });
                        }
                        else if (operation === 'unfollow') {
                            const channelJid = this.getNodeParameter('channelJid', i);
                            responseData = await this.helpers.request({
                                method: 'GET',
                                url: `${baseUrl}/unfollow`,
                                qs: {
                                    channel: channelJid,
                                },
                                json: true,
                            });
                        }
                        else if (operation === 'getFollowing') {
                            responseData = await this.helpers.request({
                                method: 'GET',
                                url: `${baseUrl}/following`,
                                json: true,
                            });
                        }
                        else if (operation === 'getMessages') {
                            const channelJid = this.getNodeParameter('channelJid', i);
                            responseData = await this.helpers.request({
                                method: 'GET',
                                url: `${baseUrl}/getnewslettermessages`,
                                qs: {
                                    channelJID: channelJid,
                                },
                                json: true,
                            });
                        }
                        else if (operation === 'updateLogo') {
                            const channelJid = this.getNodeParameter('channelJid', i);
                            const channelPicture = this.getNodeParameter('channelPicture', i);
                            responseData = await this.helpers.request({
                                method: 'POST',
                                url: `${baseUrl}/updatechannellogo`,
                                formData: {
                                    channelJID: channelJid,
                                    picture: channelPicture,
                                },
                                json: true,
                            });
                        }
                    }
                    else if (resource === 'contact') {
                        if (operation === 'create') {
                            const contactJid = this.getNodeParameter('contactJid', i);
                            const contactName = this.getNodeParameter('contactName', i);
                            responseData = await this.helpers.request({
                                method: 'POST',
                                url: `${baseUrl}/createcontact`,
                                body: {
                                    jid: contactJid,
                                    name: contactName,
                                },
                                json: true,
                            });
                        }
                        else if (operation === 'delete') {
                            const contactJid = this.getNodeParameter('contactJid', i);
                            responseData = await this.helpers.request({
                                method: 'POST',
                                url: `${baseUrl}/deletecontact`,
                                body: {
                                    jid: contactJid,
                                },
                                json: true,
                            });
                        }
                        else if (operation === 'get') {
                            const contactJid = this.getNodeParameter('contactJid', i);
                            responseData = await this.helpers.request({
                                method: 'GET',
                                url: `${baseUrl}/getcontact`,
                                qs: {
                                    phone: contactJid,
                                },
                                json: true,
                            });
                        }
                        else if (operation === 'getAll') {
                            responseData = await this.helpers.request({
                                method: 'GET',
                                url: `${baseUrl}/getcontacts`,
                                json: true,
                            });
                        }
                    }
                    else if (resource === 'poll') {
                        if (operation === 'create') {
                            const chatJid = this.getNodeParameter('chatJid', i);
                            const pollQuestion = this.getNodeParameter('pollQuestion', i);
                            const pollOptions = this.getNodeParameter('pollOptions', i).split(',').map(o => o.trim());
                            const selectableOptionCount = this.getNodeParameter('selectableOptionCount', i);
                            responseData = await this.helpers.request({
                                method: 'POST',
                                url: `${baseUrl}/createpoll`,
                                body: {
                                    chat: chatJid,
                                    name: pollQuestion,
                                    optionNames: pollOptions,
                                    selectableOptionCount,
                                },
                                json: true,
                            });
                        }
                    }
                    returnData.push({
                        json: responseData,
                    });
                }
                catch (error) {
                    if (this.continueOnFail()) {
                        returnData.push({
                            json: {
                                error: error instanceof Error ? error.message : 'An unknown error occurred',
                            },
                        });
                        continue;
                    }
                    throw error;
                }
            }
            return [returnData];
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(`Whinself Error: ${error.message}`);
            }
            throw new Error('An unknown error occurred');
        }
    }
}
exports.Whinself = Whinself;
//# sourceMappingURL=Whinself.node.js.map