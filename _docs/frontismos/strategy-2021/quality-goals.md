---
layout: default
title: Quality goals
parent: Strategy 2021
grand_parent: Frontismos
---

# Front end quality focus for 2021

[Original document](https://docs.google.com/document/d/1oQ8_hkMGTxDVoAs7K32ioO9Z1Ku9aPj5WDxT6nuVeq8/edit#heading=h.miwu3ocjarqz)

## Objective 1: Reduce the number of preventable bugs with Typescript

We believe there’s no such thing as building bug-free code. Nevertheless, we believe a certain number of bugs are easily preventable through the use of static analysis tools. Such tools analyse the code and detect possible bugs through heuristic. They have very little to no cost in terms of time (configuration, use, etc.), so we believe they are a win-win solution for some of the bugs created during development.

One of such tools is Typescript. Typescript is a programming language that can be described as Javascript with types. Types avoid very common mistakes where a variable that is supposed to be of a specific type, or that is supposed to have a specific form gets assigned something different or unexpected. If this were to happen, a typed language such as Typescript would detect the error and notify the developer in their text editor.

Typescript is very popular both in front-end and back-end environments. As a matter of fact, the back-end team is already using it in a few places. In the front-end, we have only used it sparsely until now, principally because of the lack of training and guidance. Yet, the front-end team agreed at the end of 2020 that we would want all the new projects to eventually be written in this language, given the benefits the few projects we tested it in got.

Our objective then is the following: we would like all new projects to be written in Typescript. To measure the success of this objective, we think it will be as easy as looking back at the new projects we got, and checking whether they were written in Typescript or not.

To help with the transition, we believe the pair-programming and mob-programming sessions the internal community initiative (lead by Daniel F. and Alvaro) is providing are a good place to start. At the end of last year, we also held a Typescript workshop to get people more familiar with it.


## Objective 2: Get familiar with testing and expand the number of projects with tests

Another decision the front-end FA took at the end of last year was that we would like to incorporate more tests in our daily work. We believe that in order to create a “testing culture”, we need to start all writing tests at some point.

Different types of tests can be done. We believe the easiest ones to start with are unit tests. They refer to tests being written for small pieces of code (usually functions) that have one single purpose. Another type of test is end-to-end testing, where the navigation flow and interaction of the user is simulated to detect user interface and more global bugs.

Between these two types, we would encourage the first one: unit tests. End-to-end testing is very relevant in the context of quality through the eyes of the user, but does require consequent time and effort. In addition, unit testing encourages the developer to gain a different mindset, one that is writing single purpose and reusable pieces of code. Indeed, only such pieces of code can be properly tested.

Some of the team members already have experience with unit testing, and we hope this objective, as with the change to Typescript, can be an opportunity for knowledge sharing.

Our objective in simple words is the following: we would like developers to write some unit tests whenever the opportunity arises, and especially when regressions are detected. To measure its success, we would look back at how many active projects have tests and survey the team members to know when’s the last time they wrote some.