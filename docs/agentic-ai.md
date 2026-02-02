---
title: Agentic AI and Model Context Protocol (MCP)
description: Connect AI agents to your corporate directory with Model Context Protocol. Enable Claude, ChatGPT, and custom agents to search your contact data.
head:
  - - meta
    - property: og:title
      content: Agentic AI and Model Context Protocol (MCP)
  - - meta
    - property: og:description
      content: Connect AI agents to your corporate directory with Model Context Protocol. Enable Claude, ChatGPT, and custom agents to search your contact data.
  - - meta
    - property: og:url
      content: https://help.federated.directory/agentic-ai
  - - meta
    - name: twitter:title
      content: Agentic AI and Model Context Protocol (MCP)
  - - meta
    - name: twitter:description
      content: Connect AI agents to your corporate directory with Model Context Protocol. Enable Claude, ChatGPT, and custom agents to search your contact data.
---

# Agentic AI

Federated Directory acts as a bridge between your AI agents and your organization's contact data. By integrating Federated Directory, you enable your AI agents to securely search, retrieve, and understand the organizational structure of your company or federation.

## Model Context Protocol (MCP)

This integration is built on the [Model Context Protocol (MCP)](https://modelcontextprotocol.io), an open standard that enables AI models to interact with external data and tools safely.

Because Federated Directory implements MCP, it allows for seamless, "plug-and-play" connections with any MCP-compliant client (such as the Claude Desktop app, compatible IDEs, or custom internal agents) without requiring custom API wrappers.

### Connection Details

Administrators can connect their AI agents using the following endpoint:

*   **MCP Endpoint URL**: `https://api.federated.directory/v2/mcp`

This single endpoint handles the discovery of available tools (like contact search) and the execution of those tools by the agent.

## Capabilities

Once connected, your AI agent will automatically discover the following capabilities:

*   **Contact Search**: Find colleagues by name, email, department, or job title.
*   **Profile Retrieval**: Get detailed contact information including phone numbers and location.
*   **Organizational Context**: Understand team structures, managers, and direct reports.
*   **Federated Search**: Search across all connected directories in your federation (Google, Microsoft, Okta, etc.) through one interface.

## Setup Guide

To enable Agentic AI integration, you need to issue an API Key that authorizes the agent to access your directory data.

### 1. Create a Restricted Group
It is best practice to follow the Principle of Least Privilege.
1.  Go to **Administrator > Groups**.
2.  Create a new Group (e.g., "AI Agents").
3.  (Optional) If you want to restrict which contacts the AI can see, you can manage the visibility of this group, though typically this group is used to *assign* permissions.

### 2. Generate an API Key
1.  Go to **Administrator > Directories**.
2.  Select the **Federated Directory** (the core API-based directory).
3.  Navigate to the **Keys** tab.
4.  Click **Create Key**.
5.  Assign the key to the **"AI Agents"** group you created in Step 1.
6.  **Important**: Copy the `Access Token` immediately. You will not be able to see it again.

### 3. Configure Your Agent
Configure your MCP client with the following settings:

*   **Server URL**: `https://api.federated.directory/v2/mcp`
*   **Transport**: SSE (Server-Sent Events) or HTTP (depending on your client's support, FD supports standard HTTP POST for JSON-RPC).
*   **Headers**:
    ```text
    Authorization: Bearer <YOUR_ACCESS_TOKEN>
    ```

## Technical Reference

For developers building custom MCP clients or needing detailed schema definitions for the tools, please refer to the technical documentation.

[View MCP API Reference](/developer/api-reference#tag/mcp)
