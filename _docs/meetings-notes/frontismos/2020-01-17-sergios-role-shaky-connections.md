---
layout: default
title: 2020-01-17
parent: Frontismos notes
grand_parent: Meeting notes
---

# 2020-01-17 Sergio's role and Clément´s upload on a shaky connection

#### Categories:
[[Quality]], [[Performance]], [[Integration]]

*****

* Sergio gave a talk about his role and plans for 2020 [Slack message link](https://vizzuality.slack.com/archives/C062HTHA5/p1579266067017600)
  * Key responsabilities include: Quality and processes, Branding and communication outside and new products, new initiatives, and new clients.
  * New initiative on QA, asking for help to discover key aspects per functional area.

* Clément gave a great talk about making uploads on a shaky connection. Some of the highlights.
  * Three possible status: SUCCESS, FAIL, UNKNOWN
  * Handling depends a bit on the browser being used. Firefox is better classifying.
  * There is a hard limit on the number of simultaneous uploads.
  * We cannot rely on **online** **offline** browser events.
  * It is better to inform the user about the loss of connection and to pause the upload.
  
  ![Talk Summary Poster](assets/shaky-connections.jpg)
  