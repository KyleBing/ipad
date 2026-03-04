# Chrome DevTools MCP

The **chrome-devtools** MCP server is configured in your global Cursor MCP settings but requires:

- **Node.js 20.19.0 LTS or newer** (your current version may be 20.18.x, which is too old).

## Upgrade Node on Windows

1. Download the **LTS** installer from [nodejs.org](https://nodejs.org/) (e.g. Node 22 LTS).
2. Run the installer and restart Cursor (and any terminals).
3. In a new terminal run: `node -v` — you should see v20.19.x or v22.x.

After upgrading, restart Cursor so the Chrome DevTools MCP can start. Then you can ask the AI to "check the console" and it will use the MCP to read browser errors.
