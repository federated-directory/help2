---
title: Model Context Protocol (MCP) - AI Integration
description: Enable AI models to interact with your directory using Model Context Protocol. JSON-RPC 2.0 API for LLMs like Claude and ChatGPT.
head:
  - - link
    - rel: canonical
      href: https://docs.federated.directory/developer/mcp
  - - meta
    - property: og:title
      content: Model Context Protocol (MCP) API
  - - meta
    - property: og:description
      content: Enable AI models to interact with your directory using Model Context Protocol. JSON-RPC 2.0 API for LLMs like Claude and ChatGPT.
  - - meta
    - property: og:url
      content: https://docs.federated.directory/developer/mcp
  - - meta
    - name: twitter:title
      content: Model Context Protocol (MCP) API
  - - meta
    - name: twitter:description
      content: Enable AI models to interact with your directory using Model Context Protocol. JSON-RPC 2.0 API for LLMs like Claude and ChatGPT.
---

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'

const router = useRouter()

onMounted(() => {
  window.location.href = '/developer/api-reference#tag/mcp';
})
</script>

# Model Context Protocol (MCP)

The Model Context Protocol (MCP) allows AI models to interact with your Federated Directory data in a safe and structured way. This API implements the [MCP standard](https://modelcontextprotocol.io), enabling LLMs (like Claude, ChatGPT, or custom agents) to:

- **List Tools**: Discover available operations (Search Users, Get Group, etc.).
- **Call Tools**: Execute specific actions on behalf of the user.
- **Read Resources**: Access directory information as context.

## Integration

To connect an MCP-compliant client to Federated Directory, use the endpoints documented below. The implementation supports the standard JSON-RPC 2.0 message format for tool execution and resource retrieval.
