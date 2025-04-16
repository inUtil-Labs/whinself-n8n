# Whinself Node for n8n

Custom n8n node for Whinself integration.

## Installation in n8n

To use this node in n8n, you need to add these three files to your `.n8n/custom/Whinself/` directory:

1. `Whinself.node.js` - The main node implementation
2. `index.js` - Node registration file
3. `whinself.svg` - Node icon

You can either:

A. Use the pre-built files from the `dist/` directory:
   - Copy `dist/nodes/Whinself/Whinself.node.js`
   - Copy `dist/nodes/Whinself/index.js`
   - Copy `nodes/Whinself/whinself.svg`

B. Or build them yourself:
```bash
git clone https://github.com/inUtil-Labs/whinself-n8n.git
cd whinself-n8n
npm install
npm run build
```

After copying the files, restart n8n for the changes to take effect.

## Troubleshooting

If the node doesn't appear in n8n after installation:
1. Verify all three files are present in `.n8n/custom/Whinself/`
2. Check file permissions (should be readable by n8n)
3. Make sure you've restarted n8n after adding the files

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