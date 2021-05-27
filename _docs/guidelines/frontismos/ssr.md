---
layout: default
title: Server side rendering
parent: Frontismos guidelines
grand_parent: Guidelines
---

# Server side rendering

When makes sense:

* Authentication and authorization
* Permissions
* Redirects
* Translations, if you a have a i18n lib. Not for Transifex.
* Landing pages and static pages
* Only REAL content you need on your first rendering

When I have to do a client side rendering:

* Most of cases always as you have to show a loading

Take on account those disadvantages:

* Fetch will ocur in the server, more stress and more costs
* Any error is very hard to debug
* An error will be considered as a server error (500)
* Delaying the user experience, first rendering is very low.
* Could increase the complexity on the testing

About the framework:

* Next 10 version doesn't allow server side props in _app.js anymore
