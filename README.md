# AX-CPT test presentation

This program will be used for experiment based on "Dual mechanizm of cognitive controll theory" (Braver, 2009). Due to pandemic, I decided to create the web adaptation of the test. What is more, this approach force me to development as a newbie deveoper, due to the fact that my graduation is strongly realated with this program!

Aim of this repo is to show the process of development. Each 'level' has branch with old code.

## Versions

### 0.4

Its working! Im aware that code is trash + its simply, however it's working.

Currently it allows to check how each pair works (clue - probe) + perform simple test.

In next version -> object, async js, get rid of known bugs

### level-1 - 19.05

Moved to react. Decided to prepare for online research.

Currently created: Basic concept, hardcoded tutorial, tutoiral ax-cpt with json file to store important data.

Planning features: Measure the reaction time, implement proactive and reactive strategy, localstorage of "nickname", link the data with database/airtable.

### level-2 - 26.07

Refactored the majority of code. Learning tests. Abstracted lots of data into json file. Changed the structure of project. Added sounds effect.

Next features:

- Implement airtable connection to store data.
- Make a autorization process.
- Add tests.
- Make sure text files are correct (in terms of experiment).

### level-3 - 22.08

Due to the limitation of airtable, I have decied to create MERN project. What is more, the data from Mongo is sent to the google sheet which enables some automatization and provided data to future validation in SPSS (sadly, Polish universities does not use sweet python and libs).

What is more, app intentionally does not store the email + password (specially in terms of login), it's experiment, I need the metric data + the test data.

This is MVP of this app.

Next features:

- Tests (decided to move this topic to next phase, due to unknown amount of time required to create MERN)
- Bug fix + text fix
- Make code more readable (specially useDisplayLogic - one of the oldest part of the app, which grown over the time and need a lot more readablility!)
- Cypress test in the future

## Resources

This research is based on [work of this lab](https://sites.wustl.edu/dualmechanisms/tasks/)
In addition, there is a lot of research that use bahavioral task in lab. My goal is to move it to internet, check the area that noone test before.
