---
layout: default
title: How we work
parent: Backenders
has_children: false
has_toc: false
---

The sections below are an initial attempt at summarising in an hopefully
understandable and meaningful way what should be overall common traits of the
backend group’s way of working, so that we can aim to be more intentional about
how to represent our group’s work to potential candidates, whether in job
descriptions or during job interviews and any follow-up questions.

The tone is intentionally sober (mostly) as the aim, which is part of what we
identified as needs during the April 2020 turnover retrospective, is to try to
be clear with candidates (and between ourselves) about what we do and how we
work: we would like to “sell” what is good about working as part of the
functional area and at Vizzuality, and we should do so in as a honest and clear
way as possible to avoid misalignment of expectations.

## Team collaboration

In most projects of small to medium complexity and lasting from a few weeks to a
few months, backend development is typically done by a single engineer.

In more complex or longer projects, a second backend engineer may be part of the
team throughout the project or for part of it. Occasionally we may also add
freelancers depending on load and schedules.

We have been exploring how to consistently allocate a "sidekick" backend
engineer on most projects so that peaks in workload can be smoothed, knowledge
can be shared more broadly and there isn't a single "point of failure", but we
still need to make this work.

Whether as sole backend engineers or with one or more team members, we work in
very close contact with user researchers, designers, frontend engineers,
scientist, data engineers and project managers, both through scheduled stand up
meetings and spring planning and retrospectives and by proactively reaching out
to plan ahead, discuss functional design, unblock other project members' work.

We may occasionally pair up remotely to work together on specific functional
design tasks, to develop features, triage and fix bugs and to seek feedback and
advice, although we don't use pair programming as a daily way of working.

We take code reviews both as an opportunity to improve our projects and to learn
and mentor.

We share interesting bits of our daily work at our weekly team meeting. We do
also share frustrations, celebrate achievements and in general to sustain the
team's growth, while keeping a light-hearted spirit.

We try to make sure colleagues don't feel stuck or concerned about daily work or
longer term career development, by reaching out, listening, sharing opinions and
experiences, or connecting with other team members who may be best suited to
help.

We acknowledge that each colleague will have more experience with specific
frameworks and technologies and less with others: we don't do ego trips and we
understand that seeking help or advice is a normal part of daily work and of
organic team growth. Helping others helps one improve their own knowledge by
forcing us to make knowledge understandable and meaningful.

Even before recent lockdown times, most of the backend team was fully remote: we
expect team members to be able to work independently while keeping project
colleagues up to date on progress and blockers and in general to work
efficiently and independently wherever they may be working from.

## Our daily work

Depending on project types, we may work on systems ranging from customized CMSes
to APIs (mostly REST, less frequently GraphQL).

Our APIs typically support SPA frontend apps based on React and NextJS, and a
range of data visualization and mapping libraries.

We use both monolithic and microservices architectures - again, depending on
projects.

Our core frameworks are Ruby on Rails, Express, NestJS. Most of us specialize in
one framework but we try to develop a basic familiarity with the rest so that we
can jump in to help when needed.

Most of us are also conversant with Python: the Science team uses it as one of
the core languages, and we help maintain microservices that typically use the
Flask framework.

Especially as some of our projects are expected to evolve through the years, we
strive to make our code understandable to our future selves or to colleagues who
may work on them in the future. This includes applying architectural patterns,
writing essential and accurate documentation in English, and aiming for clean
code in general.

Testing discipline varies across projects, but we aim to have coverage at least
for core features and code paths.

We typically design, set up and maintain backend and data infrastructure of our
projects, ranging from single VPSes to Kubernetes clusters, across staging and
production environments.

We test and deploy most of our code via CI/CD pipelines. We may run key tests
via git hooks.

We use Docker and Docker Compose for development environments.

We run most of our projects on a range of cloud services typically either on the
AWS or GCP platforms.

We typically take care of database design, operations and performance. We work
with relational databases (mostly PostgreSQL), NoSQL (mostly MongoDB and
ElasticSearch), and other data systems such as Redis.

Most of our projects are relatively data-intensive, so we expect all team
members to have or develop a strong command of advanced data management
techniques.

In some projects our work may intersect with that of scientists and data
engineering. We design and operate ETL pipelines and occasionally help with ML
workflows. We expect this to become an increasingly central part of our work in
larger projects.

We expect team members to take ownership of projects beyond the backend area, by
proactively working with project teams and clients to make sure that the data,
API and infrastructure parts of projects effectively support each project's
business requirements.

By virtue of our ownership of the foundational layers of most projects, we
expect team members to provide clear, thoughtful and accurate advice to the
other functional areas about alternatives for the implementation of major
features, with special attention to performance, developer ergonomics,
operational costs, ongoing maintenance and possible future evolution.

Occasionally we collaborate with the Business Development team on project
proposals. We may write the backend-specific parts of proposals, estimate scope,
validate budgets.

## Our values

We value thorough and broad expertise beyond our core work domains, intellectual
curiosity, eagerness to learn, ability to mentor others.

We value the willingness to take measured risks, to seek advice on risk, and to
help others manage risk effectively and healthily.

We value the ability to communicate clearly and fluently in English both with
team members and with clients and non-technical people.

We value honesty, emotional intelligence, passion for craftmanship and eagerness
to improve the quality and impact of our work.
