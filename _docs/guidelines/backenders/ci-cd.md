---
layout: default
title: CI/CD tools
parent: Backenders guidelines
grand_parent: Guidelines
---

# CI/CD tools

This document aims at briefly describing the different CI/CD providers we've used in different projects, and their main pros/cons

## Jenkins

Jenkins can be used to deploy code (e.g. from github) to a server, and optionally run tests before deployment. It optionally uses a Jenkinsfile script, allowing for a custom deployment pipeline.

### Pros

- OSS tool that can be installed and maintained without directly relying on a 3rd party
- Matured and maintained
- Lots of plugins
- Integration with docker, github, slack, etc
- Flexible
- There are solutions with it preinstalled (AWS AMI, GCP equivalents, etc)

### Cons

- Needs its own server
- Needs occasional updates
- Some documentation (especially plugins) is lacking

### Used in

- RW API
- Wildlife Insights


## Travis

Travis integrates with Github pull requests and allows executing a project's test suite, and flagging the result back to Github, to inform a merge/no merge decision

### Pros

- Widely used, reliable and mature service
- Free (up to a point) for OSS projects
- Support for node/js/ruby/python
- Support for mongodb/postgres/mysql/other stacks

### Cons

- Free tier only goes up to a certain limit, past which it stops building

### Used in

- RW API

## Capistrano

A ruby gem used to deploy Ruby on Rails applications.

### Pros

- mature
- conceptually simple, pulls code from git and runs commands remotely over SSH
- supports multiple server deployments, including multiple roles (e.g. web vs db)
- supports multiple environments (staging, production)
- easy to add specific tasks to run on deploy
- plugins available to deal with typical things, e.g. rvm, bundler, passenger out of the box

### Cons

- requires permanent server addresses
- requires that the person who deploys has SSH access to server configured

### Things to check

- can you somehow set the server addresses dynamically
- https://github.com/marketplace/actions/capistrano-deploy

### Used in

- [Trase](https://github.com/Vizzuality/trase)
- [ReFED API](https://github.com/ReFED-Vizzuality/ReFED-api)
- [ReFED Backoffice](https://github.com/ReFED-Vizzuality/ReFED-backoffice)


## GitLab CI/CD

The GitLab CI/CD workflow. On gitlab.com (also available for free accounts, with limits to runner minutes and on some features) or on self-hosted GitLab instances.

### Pros

- has been around for a few years and seems quite mature
- it's been a core part of GitLab's value proposition since the beginning so they are taking good care of it
- it's easy to get started with
- flexible
- nice web UX if one cares
- supports multiple server deployments, including multiple roles (e.g. web vs db)
- supports multiple environments (staging, production)
- easy to add specific tasks to run on deploy

### Cons

- yet another CI DSL to master
- tied to GitLab (but can be used via on-prem/private GitLab instances)
- quite complex (but perfectly usable for simpler workflows)

### Used in

- [MGIS](https://github.com/Vizzuality/mgis) (this runs on a private GitLab instance on Mars' own infrastructure)