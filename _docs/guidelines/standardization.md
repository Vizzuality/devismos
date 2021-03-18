---
layout: default
title: Standardization
parent: Guidelines
---

# Base framework: Next.js

# Agile workflow

Premise: provide a URL where everyone can test the feature online.

Depending on the infraestructure we have the next options:

1. Vercel
  * Admin access to the client organization
2. Jenkins and branches
3. Staging environment

# Dotfiles

## NVM

`.nvmrc` file should include latest version LTS stable. Don't use `lts/whatever`. Use a fixed version, for instance: `14.7`.