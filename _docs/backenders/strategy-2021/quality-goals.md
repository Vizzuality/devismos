---
layout: default
title: Quality goals
parent: Strategy 2021
grand_parent: Backenders
---

# Backend quality focus for 2021

[Original document](https://docs.google.com/document/d/1SKEB4e-GD98R_KYZPfFqmGd2QGeS_MLvXjGnjY0G3KE/edit)

## Objective 1: Improve project onboarding

Onboarding Vizz projects can sometimes be a painful experience. Many times, when an engineer joins a project, they don’t have all the information available at hand, and they need to interrupt another engineer to gather all the information they need to complete their work. As we all know, interruptions are a source of stress and usually cause unexpected delays in engineers’ work. This OKR aims at standardizing project onboarding practices, with the aim of reducing the number of interruptions in BE daily work.

We have identified a series of practices that should be done for every Vizz project, no matter the size, in order to ensure a smooth onboarding process for anyone joining the project. All of the following items should be documented somewhere easily accessible in the project repository (README, wiki, or other convenient structures):
* Documentation for the flow of deployment of the project;
* Project credentials and access keys stored in Vizz’s LastPass shared folder.
* Project README with local development environment setup instructions up-to-date.
* CI (optional) and CD (mandatory) processes must be set up.

### How to measure
Assessing if a project complies to the guidelines defined above is a simple true/false check whether all of the items above have been completed or not. We will set up a system to track the evolution across time of the results for each project. (TODO spreadsheet?)

## Objective 2: Reduce production incidents

Another clearly identified source of interruptions and stress are production incidents. Production incidents sometimes require engineers to drop everything they're doing at whatever point in time, to fix such issues. These incidents also impact our reputation with clients, partners or users, leaving them with a sense of lack of quality in our work.

Though we know it won’t be possible to completely eliminate such incidents, we can try our best to reduce them, resulting in not only happier clients/partners, but also less stressed engineers and improved overall user experience.

### How to measure
We have thought about different ways of measuring this. One option could be to drink from the information already available in the PM tools we use across projects (PT, Jira, Asana, etc). We could count the number of incidents per month for each project, and measure the evolution of such incidents. This is not ideal, because:
* some projects are not prepared for this or don’t have this information
* the number of incidents might be a misleading metric (1 severe incident is worse than 2 minor incidents)
* Bugs might not necessarily match to production incidents (though we might want to track both, depending on the project and client).

An alternative way of measuring this would be to look at time trackers for maintenance tasks across projects. This has the advantage of using information we already have to account for, and it provides a more accurate way of measuring the outcomes of this OKR.

Any of the alternatives above would probably require PMs assistance in the categorization of the severity of the incidents. Also, we need to take into account that sometimes clients have direct access to the PM tools we use, and might create bugs or production incidents that later we might conclude are not in fact bugs or production incidents. This is another task where the assistance of PMs could be really useful.

### Pain points:
Hard to measure

## Objective 3: Improve test coverage

It’s a pretty well known fact that tested code is a proven path to higher quality. Vizz projects sometimes lack testing coverage, and the BE team would like to make an effort to change this.

Testing requirements need to adapt to the size of the project - smaller projects sometimes imply don’t have enough resources to do proper testing, and larger projects benefit the most from the long term impacts of proper testing. So we propose to use BD’s project categorization as a way to categorize the testing requirements for the projects we work on:
* Small projects: 0% test coverage - we can assume most of the testing will be done manually.
* Medium projects: 50% test coverage - includes manual testing + aim at covering the critical paths of the project (data processing pipelines, etc - might vary according to the project).
* Big projects: 80% test coverage - includes manual testing + critical path testing + non-critical path tests and tests for any bugs that come up, to ensure they don’t happen again.


### How to measure
To be measured on a project-by-project basis - older projects might take some time to fit into these guidelines, so for now we will focus especially in applying these practices in the new big projects that we have coming up.

### Pain points:
Legacy projects with low-value contracts and no existing test structures.