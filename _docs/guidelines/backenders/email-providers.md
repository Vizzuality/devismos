---
layout: default
title: Email providers
parent: Backenders guidelines
grand_parent: Guidelines
---

# Email providers

This document aims at briefly describing the different email providers we've used in different projects, and their main pros/cons

## Sparkpost

### Pros

- nodejs + rails integration lib
- Has a builtin template mechanism, where you can build a template using HTML + placeholders, and email sending only needs to define those placeholders (so a lot less HTML manipulation)
- Has support for multiple recipient lists - mailling lists

### Cons

- Free tier says it's for testing, so maybe there's isn't a fully free option for prod-level usage

### Used in

- RW API - nodejs (Control tower, GFW-mail MS, ...)