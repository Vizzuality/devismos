# Vizzuality dev documentation

This project is a centralised place to house important Functional Area documents.

## Installation instructions

This project was created using Jekyll. So it will require:

* Ruby 2.7+

To install gems and dependencies, run:

```
gem install bundler
bundle install
```

To start development server at [localhost:4000](http://localhost:4000), run:

```
bundle exec jekyll serve
```

## How to create new content

We are using the theme [Just the docs](https://github.com/pmarsceill/just-the-docs).

You have to create markdown files inside the `_docs` folder, with following the structure:

```
---
layout: default
title: A title
parent: Name of the parent
grand_parent: Name of the grand parent if needed
has_child: (bool)  
has_toc: (bool) 
---

Excepteur consequat reprehenderit velit mollit occaecat velit esse laborum eiusmod irure eu. Ex fugiat officia elit qui veniam nostrud nisi est. Est reprehenderit nisi sunt non nulla irure aute sunt do.
```

Where: 

- `has_child` links to child content in the folder structure
- `has_toc` shows table of child content at the bottom of the page 

## Making a PR

Some tips & best practices (mainly for non-devs) when working on this repo:

- Create a new branch, off of `master`
- Add your new content, testing locally as outlined above
- Create a Pull Request to merge with `master`, add a reviewer (including at least one Dev)
- Whilst actively working on the PR, use the label `WIP` (_Work in progress_)
- Once finished, remove the `WIP` label and add `ready to review`
- Once approved, merge to `master` and deleve the old branch
