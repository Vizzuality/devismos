# Vizzuality dev documentation

This project is the combination of BE + FE documents.

## Installation instructions

This project was created using Jekyll. So it will require:

* Ruby 2.7+

Install gems and dependencies

```
gem install bundler
bundle install
```

Start development server at [localhost:4000](http://localhost:4000)

```
bundle exec jekyll serve
```

## How to create new content

We are using the theme [Just the docs](https://github.com/pmarsceill/just-the-docs).

Yo have to create a markdown file and follow the next structure:

```
---
layout: default
title: A title
parent: Name of the parent
grand_parent: Name of the grand parent if needed
has_child: true
---

Excepteur consequat reprehenderit velit mollit occaecat velit esse laborum eiusmod irure eu. Ex fugiat officia elit qui veniam nostrud nisi est. Est reprehenderit nisi sunt non nulla irure aute sunt do.
```