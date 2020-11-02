# 2020-11-30 The Lab, QA meeting, Mapbox 3D beta, typescript, testing

## Attendees

Miguel Barrenechea, David Inga, Clemment, Ed Brett, Dani, Andres, Alvaro, Javi Abia.


## Frontismos repo

- The Lab has been created. Use it to store there experiments and share them with your peers :)
- We need to create notes from the meetings. Let's agree on a note taker for every meeting to allow not present people to be aware of what is discussed.

## [Front end skill blog post](https://vizzuality.blogin.co/posts/learning-about-our-skills-frontend-skills-project-112183)

- Congratulate people behind front end skills survey blog post (Alvaro, Maria) 🎉

## Quality working group first meeting

Clemment will represent front-enders.

Clemment is unsure what's gonna happen since is the first meeting. Sergio asked what we are doing right now regarding quality assurance and improvement:

- testing meeting with presentation
- typescript adoption
- we started the conversation about how we manage big projects

⚡**ACTIONS from the group** 👇

__Let Clemment know if you have any proposal for him to bring to the QA conversation__:

- Barre says that we would need to start the conversation about Design/visual quality (designs that could come and we need to do them really well). In order to have better results we would need to be involved on the design process, work on enhance our collaboration with the design team.

## Mapbox 3d beta participation

Alvaro has been doing a side project on Mongabay. Have been talking with Willie (Mongabay) and Oscar (science team) and they contacted with Mapbox and they proposed us to sign to the beta. There are documentation docs and a survey to fill in case we want to join. (ask Alvaro or check the `#frontismos` channel).

- They would need us to test things and report back
- We are unsure if it brings anything new (beyond other tools we already used Cesium, ArcGIS).
- Is this an opportunity?

  Inga states that it could be an opportunity to get close to Mapbox and could be useful for strategy to position ourselves on the 3d mapping space. In case we decide to go ahead with that we would need the involvement of other functional areas (communication, data) to think about the outcome of this. Is someone interested? Ed Bret, but does not has the time. We might want, as a group, to facilitate this happening. Ed has slow connection but will move this forward.

_Clemment_: I'm confused it says you can access the lib on github but then they say is not Open Source (on the Mapbox beta v2 )
Edd says, the code is freely accessible but you'll need to create API keys, attributions so maybe that is what they mean, the code is available but the license is not open source.

Clemment interested on the improved performance stated, not on the 3d part of it. He is working on a project that need to run on slow connections.

⚡**ACTIONS from the group** 👇

**Ed Brett** to follow the conversation.

## Typescript

Inga wants to talk about typescript. He has been reading and took some courses. Seems that is very compatible with our actual code and you can evaluate your whole project written in JS and check the type errors you have. It kinda simulates the compiler and lets you know mismatches. We would need to change our mindset, be more aware of classes input and output. It will avoid some lazy code. For big projects it would help a lot.

_REFERENCES_
- [VS code type-checking-javascript](https://code.visualstudio.com/docs/nodejs/working-with-javascript#_type-checking-javascript)
- [ts-migrate from airbnb](https://medium.com/airbnb-engineering/ts-migrate-a-tool-for-migrating-to-typescript-at-scale-cd23bfeb5cc)
- [migration guide](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html)
- [types validations](https://medium.com/@djoepramono/how-to-validate-javascript-object-better-with-typescript-e43314d97f9c)



## Testing stories

_Barre_: tried some e2e testing but was unable to make them work. Imports failing.

_Ed Bret_: Cypress is nice because it has lots of extra stuff (dashboards, notifications...). It has lots of documentation. Lots of new features came out each week, it has money baking it.
is it compatible with Moka? Is an amalgamation of Moka, Pupetteer... you can config it to your needs. It has opinionated defaults that are ready to do the job.
Free for open souce projects.

_Dani_: did a project with next and redux toolkit and put a lot of tests inside with Jest and Cypress. Will clean it up and share it on frontismos.
