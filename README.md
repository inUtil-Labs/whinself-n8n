# Whinself Node for n8n

Custom n8n node for Whinself integration.

## Installation

### Option 1: Using pre-built files

1. Copy the following files to your n8n custom nodes directory:
   - `dist/nodes/Whinself/Whinself.node.js` → `/home/node/.n8n/custom/Whinself/`
   - `dist/nodes/Whinself/index.js` → `/home/node/.n8n/custom/Whinself/`
   - `nodes/Whinself/icons/whinself.ico` → `/home/node/.n8n/custom/Whinself/icons/`

2. Restart n8n to load the new nodes

### Option 2: Building from source

1. Clone this repository
2. Install dependencies: `npm install`
3. Build the nodes: `npm run build`
4. Copy the built files to your n8n custom nodes directory:
   - `dist/nodes/Whinself/Whinself.node.js` → `/home/node/.n8n/custom/Whinself/`
   - `dist/nodes/Whinself/index.js` → `/home/node/.n8n/custom/Whinself/`
   - `nodes/Whinself/icons/whinself.ico` → `/home/node/.n8n/custom/Whinself/icons/`
5. Restart n8n to load the new nodes

## Troubleshooting

If the node doesn't appear in n8n after installation:
1. Verify all three files are present in `.n8n/custom/Whinself/`
2. Check file permissions (should be readable by n8n)
3. Make sure you've restarted n8n after adding the files
4. If the icon doesn't appear, verify that `whinself.ico` is in the correct location

## Development

For those who want to modify the node:

```bash
# Install dependencies
npm install

# Build the nodes
npm run build
```

The compiled files will be in the `dist/` directory.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request 