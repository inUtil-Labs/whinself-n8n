import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

export class Whinself implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Whinself',
		name: 'whinself',
		icon: 'file:whinself.ico',
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
			// Message Operations
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
				displayName: 'Use Incoming Data',
				name: 'useIncomingData',
				type: 'boolean',
				default: true,
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
				description: 'Whether to use the incoming data from the previous node',
			},
			// Group Operations
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
			// Newsletter Operations
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
			// Contact Operations
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
			// Poll Operations
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
			// Message Parameters
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
						useIncomingData: [
							false,
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
						useIncomingData: [
							false,
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
						useIncomingData: [
							false,
						],
					},
				},
				description: 'The text message to send',
			},
			// Link Parameters
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
			// Media Parameters
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
			// Contact Parameters
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
			// Location Parameters
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
			// Group Parameters
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
			// Newsletter Parameters
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
			// Contact Management Parameters
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
			// Poll Parameters
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

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		
		try {
			const resource = this.getNodeParameter('resource', 0) as string;
			const operation = this.getNodeParameter('operation', 0) as string;
			const useIncomingData = this.getNodeParameter('useIncomingData', 0) as boolean;

			// Construct base URL from URL and port
			const apiUrl = this.getNodeParameter('apiUrl', 0) as string;
			const apiPort = this.getNodeParameter('apiPort', 0) as number;
			const baseUrl = `${apiUrl}:${apiPort}`;

			for (let i = 0; i < items.length; i++) {
				try {
					let responseData;
					const item = items[i];

					// Handle different resources and operations
					if (resource === 'message') {
						if (operation === 'send') {
							// Get the incoming payload
							const incomingData = item.json;
							
							// If we have an incoming payload and useIncomingData is true, use it directly
							if (useIncomingData && incomingData && Object.keys(incomingData).length > 0) {
								// Make sure the payload has a jid field
								if (!incomingData.jid) {
									throw new Error('The incoming payload must include a "jid" field with the recipient JID');
								}
								
								responseData = await this.helpers.request({
									method: 'POST',
									url: `${baseUrl}/wspout`,
									body: incomingData,
									json: true,
								});
							} else {
								// Use node parameters
								const jid = this.getNodeParameter('jid', i) as string;
								const messageType = this.getNodeParameter('messageType', i) as string;
								
								let messageData: any = {};
								
								// Prepare message data based on message type
								if (messageType === 'text') {
									messageData = {
										text: this.getNodeParameter('text', i) as string,
										jid,
									};
								} else if (messageType === 'link') {
									messageData = {
										link: {
											title: this.getNodeParameter('linkTitle', i) as string,
											text: this.getNodeParameter('linkText', i) as string,
											url: this.getNodeParameter('linkUrl', i) as string,
											thumbnail: this.getNodeParameter('linkThumbnail', i) as string,
											description: this.getNodeParameter('linkDescription', i) as string,
										},
										jid,
									};
								} else if (messageType === 'image') {
									messageData = {
										image: {
											url: this.getNodeParameter('mediaUrl', i) as string,
											b64: this.getNodeParameter('mediaBase64', i) as string,
										},
										caption: this.getNodeParameter('caption', i) as string,
										jid,
									};
								} else if (messageType === 'video') {
									messageData = {
										video: {
											url: this.getNodeParameter('mediaUrl', i) as string,
											b64: this.getNodeParameter('mediaBase64', i) as string,
										},
										caption: this.getNodeParameter('caption', i) as string,
										jid,
									};
								} else if (messageType === 'document') {
									messageData = {
										document: {
											url: this.getNodeParameter('mediaUrl', i) as string,
											b64: this.getNodeParameter('mediaBase64', i) as string,
											filename: this.getNodeParameter('filename', i) as string,
										},
										caption: this.getNodeParameter('caption', i) as string,
										jid,
									};
								} else if (messageType === 'audio') {
									messageData = {
										audio: {
											url: this.getNodeParameter('mediaUrl', i) as string,
											b64: this.getNodeParameter('mediaBase64', i) as string,
											seconds: this.getNodeParameter('audioSeconds', i) as number,
											isPTT: this.getNodeParameter('isPTT', i) as boolean,
										},
										jid,
									};
								} else if (messageType === 'contact') {
									messageData = {
										contact: {
											displayName: this.getNodeParameter('contactDisplayName', i) as string,
											vcard: this.getNodeParameter('contactVCard', i) as string,
										},
										jid,
									};
								} else if (messageType === 'location') {
									messageData = {
										location: {
											latitude: this.getNodeParameter('latitude', i) as number,
											longitude: this.getNodeParameter('longitude', i) as number,
											name: this.getNodeParameter('locationName', i) as string,
											address: this.getNodeParameter('locationAddress', i) as string,
										},
										jid,
									};
								}

								// Send message
								responseData = await this.helpers.request({
									method: 'POST',
									url: `${baseUrl}/wspout`,
									body: messageData,
									json: true,
								});
							}
						}
					} else if (resource === 'group') {
						if (operation === 'create') {
							const groupName = this.getNodeParameter('groupName', i) as string;
							const participants = (this.getNodeParameter('participants', i) as string).split(',').map(p => p.trim());
							
							responseData = await this.helpers.request({
								method: 'POST',
								url: `${baseUrl}/creategroup`,
								body: {
									name: groupName,
									participants,
								},
								json: true,
							});
						} else if (operation === 'getInfo') {
							const groupJid = this.getNodeParameter('groupJid', i) as string;
							
							responseData = await this.helpers.request({
								method: 'POST',
								url: `${baseUrl}/getgroupinfo`,
								body: {
									jid: groupJid,
								},
								json: true,
							});
						} else if (operation === 'getJoinedGroups') {
							responseData = await this.helpers.request({
								method: 'GET',
								url: `${baseUrl}/getjoinedgroups`,
								json: true,
							});
						} else if (operation === 'updateParticipants') {
							const groupJid = this.getNodeParameter('groupJid', i) as string;
							const participantJids = (this.getNodeParameter('participantJids', i) as string).split(',').map(p => p.trim());
							const participantAction = this.getNodeParameter('participantAction', i) as string;
							
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
						} else if (operation === 'setGroupName') {
							const groupJid = this.getNodeParameter('groupJid', i) as string;
							const groupName = this.getNodeParameter('groupName', i) as string;
							
							responseData = await this.helpers.request({
								method: 'POST',
								url: `${baseUrl}/setgroupname`,
								body: {
									jid: groupJid,
									name: groupName,
								},
								json: true,
							});
						} else if (operation === 'setGroupPhoto') {
							const groupJid = this.getNodeParameter('groupJid', i) as string;
							const groupPhoto = this.getNodeParameter('groupPhoto', i) as string;
							
							responseData = await this.helpers.request({
								method: 'POST',
								url: `${baseUrl}/setgroupphoto`,
								body: {
									jid: groupJid,
									avatar: groupPhoto,
								},
								json: true,
							});
						} else if (operation === 'getInviteLink') {
							const groupJid = this.getNodeParameter('groupJid', i) as string;
							const resetInviteLink = this.getNodeParameter('resetInviteLink', i) as boolean;
							
							responseData = await this.helpers.request({
								method: 'POST',
								url: `${baseUrl}/getgroupinvitelink`,
								body: {
									jid: groupJid,
									reset: resetInviteLink,
								},
								json: true,
							});
						} else if (operation === 'leaveGroup') {
							const groupJid = this.getNodeParameter('groupJid', i) as string;
							
							responseData = await this.helpers.request({
								method: 'POST',
								url: `${baseUrl}/leavegroup`,
								body: {
									jid: groupJid,
								},
								json: true,
							});
						}
					} else if (resource === 'newsletter') {
						if (operation === 'create') {
							const channelName = this.getNodeParameter('channelName', i) as string;
							const channelDescription = this.getNodeParameter('channelDescription', i) as string;
							const channelPicture = this.getNodeParameter('channelPicture', i) as string;
							
							const pictureData: any = {};
							if (channelPicture.startsWith('data:') || channelPicture.startsWith('http')) {
								pictureData.picurl = channelPicture;
							} else {
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
						} else if (operation === 'getInfo') {
							const channelJid = this.getNodeParameter('channelJid', i) as string;
							
							responseData = await this.helpers.request({
								method: 'GET',
								url: `${baseUrl}/getchannelinfo`,
								qs: {
									channel: channelJid,
								},
								json: true,
							});
						} else if (operation === 'publish') {
							// Similar to message sending but to a channel
							const channelJid = this.getNodeParameter('channelJid', i) as string;
							
							// For simplicity, we'll just support text messages for now
							// In a real implementation, you would add support for other message types
							responseData = await this.helpers.request({
								method: 'POST',
								url: `${baseUrl}/channelpublish`,
								body: {
									text: 'Channel message',
									jid: channelJid,
								},
								json: true,
							});
						} else if (operation === 'follow') {
							const channelJid = this.getNodeParameter('channelJid', i) as string;
							
							responseData = await this.helpers.request({
								method: 'GET',
								url: `${baseUrl}/follow`,
								qs: {
									channel: channelJid,
								},
								json: true,
							});
						} else if (operation === 'unfollow') {
							const channelJid = this.getNodeParameter('channelJid', i) as string;
							
							responseData = await this.helpers.request({
								method: 'GET',
								url: `${baseUrl}/unfollow`,
								qs: {
									channel: channelJid,
								},
								json: true,
							});
						} else if (operation === 'getFollowing') {
							responseData = await this.helpers.request({
								method: 'GET',
								url: `${baseUrl}/following`,
								json: true,
							});
						} else if (operation === 'getMessages') {
							const channelJid = this.getNodeParameter('channelJid', i) as string;
							
							responseData = await this.helpers.request({
								method: 'GET',
								url: `${baseUrl}/getnewslettermessages`,
								qs: {
									channelJID: channelJid,
								},
								json: true,
							});
						} else if (operation === 'updateLogo') {
							const channelJid = this.getNodeParameter('channelJid', i) as string;
							const channelPicture = this.getNodeParameter('channelPicture', i) as string;
							
							// This would typically be a multipart form request
							// Simplified for this example
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
					} else if (resource === 'contact') {
						if (operation === 'create') {
							const contactJid = this.getNodeParameter('contactJid', i) as string;
							const contactName = this.getNodeParameter('contactName', i) as string;
							
							responseData = await this.helpers.request({
								method: 'POST',
								url: `${baseUrl}/createcontact`,
								body: {
									jid: contactJid,
									name: contactName,
								},
								json: true,
							});
						} else if (operation === 'delete') {
							const contactJid = this.getNodeParameter('contactJid', i) as string;
							
							responseData = await this.helpers.request({
								method: 'POST',
								url: `${baseUrl}/deletecontact`,
								body: {
									jid: contactJid,
								},
								json: true,
							});
						} else if (operation === 'get') {
							const contactJid = this.getNodeParameter('contactJid', i) as string;
							
							responseData = await this.helpers.request({
								method: 'GET',
								url: `${baseUrl}/getcontact`,
								qs: {
									phone: contactJid,
								},
								json: true,
							});
						} else if (operation === 'getAll') {
							responseData = await this.helpers.request({
								method: 'GET',
								url: `${baseUrl}/getcontacts`,
								json: true,
							});
						}
					} else if (resource === 'poll') {
						if (operation === 'create') {
							const chatJid = this.getNodeParameter('chatJid', i) as string;
							const pollQuestion = this.getNodeParameter('pollQuestion', i) as string;
							const pollOptions = (this.getNodeParameter('pollOptions', i) as string).split(',').map(o => o.trim());
							const selectableOptionCount = this.getNodeParameter('selectableOptionCount', i) as number;
							
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
				} catch (error: unknown) {
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
		} catch (error: unknown) {
			if (error instanceof Error) {
				throw new Error(`Whinself Error: ${error.message}`);
			}
			throw new Error('An unknown error occurred');
		}
	}
} 