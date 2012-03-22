Sencha Touch 2 Application with BDD tests using Jasmine
=======================================================

Overview
--------
This is a experimental project on adding Jasmine to a Sencha Touch 2 project. Unfortunelly Sencha Touch 2 does not seems to have any testing framework integrated out of the box yet, so I tried to add it without any changes on any framework (Sensa Touch2 and Jasmine) to allow future updates on them easily.  

This project was built upon a brand new "Gettting Started" project created using sencha app generator and then manually added the required files for Jasmine (a BDD Javascript framework). The process should be the same for any other javascript testing framework like QUnit, Pavlov, Screw.Unit and so on.  

Most testing frameworks, jasmine included, uses a TestRunner.html file to runs the suites and output the results in the page itself. This approach however would require us to either modify how the application is loaded by the microloader used by Sencha Touch 2 or change the app.js. In order to keep it simple, we opted to use a ConsoleReporter and execute it on the index.htlm page itself.

The specs used here very simple and are used only as an exemple on how to write jasmine specs for ST2.

Questions & Suggestions
-----------------------
If you have any questions, ideas or suggestions for improvments, please contact me via github messages.

I really like to hear how ST2 developers are testing your applications, which best practices you suggest and what tools are you guys using. Also, since the goal of this project is to provide a refernce for newbies (like me) on how to TDD/BDD your ST2 code, contributions are very welcome.

Acknowledges and Thanks
-----------------------

I'd like to thank everyone that contributed to this project, but in particular a big thank-you for:

* @abierbaum for showing me how to load Jasmine in ST2.
* @larrymyers from whom I borrowed jasmine-ConsoleReporter (larrymyers/jasmine-reporters).

You may also want to check the following projects:

* Jasmine: http://pivotal.github.com/jasmine/
* Jasmine Species: http://rudylattae.github.com/jasmine-species/
* Sinon.JS: http://sinonjs.org/