---
title: Users API - SCIM 2.0 Endpoints
description: Create, search, update, and delete users with our SCIM 2.0 compliant API. Bulk operations and enterprise extensions supported.
---

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'

const router = useRouter()

onMounted(() => {
  // Redirect to the consolidated API reference
  window.location.href = '/developer/api-reference#tag/users';
})
</script>

# Users API

Our fully [SCIM 2.0](http://www.simplecloud.info) compliant API to create, search, retrieve, update and remove user information.

::: info
All API calls require a valid token. See how to [obtain a token](/developer/api-reference#tag/oauth2).
:::

## User Data Model

The User resource in Federated Directory is composed of three schemas:
1. **Core User**: `urn:ietf:params:scim:schemas:core:2.0:User`
2. **Enterprise Extension**: `urn:ietf:params:scim:schemas:extension:enterprise:2.0:User`
3. **FD Extension**: `urn:ietf:params:scim:schemas:extension:fd:2.0:User`

Technical details for all attributes (types, constraints, and descriptions) are available in the interactive sections below.
