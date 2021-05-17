---
layout: default
title: Vercel
parent: Guidelines
---

# Vercel

[Vercel](https://vercel.com/) is our agreed on default platform to automatically deploy branches when Pull Requests are created. These branches can be viewed by anyone that needs to review changes. We will use this whenever possible.

Vercel may not be used in certain cases:

* Rails projects
* Projects owned by clients
* Older projects configured differently

**Vercel should not be used as a staging environment** as the cost of the service is assumed by Vizzuality. It is only used as a development tool.

After the project is released, we strongly recommend delete the project on Vercel.

In case the client wants to use Vercel as production or staging server, the project should be allocated on the Vercel's client account.
