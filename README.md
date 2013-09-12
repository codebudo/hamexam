Ham Radio Practice Exams
========================

This application generates exams for the Amature Radio Technician and General calss licenses from the FCC provided question pool. 

Use
---
Select an exam type from the upper right. When you click on each answer, the score is recorded immediately. If the answer turns green, you got the question right and you can move on. If it turns red, you got the answer wrong. You can click on several answers to discover the correct one, but only your first answer is recorded. Click wisely!

Features
--------
- Stop any time, bookmark the url and continue where you left off.
- Copy/Paste the URL and send to a friend so they can see your score!
- Refresh your browser at any time. It will not effect your score.
- Technican and General exams are currently supported. 
- Amature Extra and some international exams are coming soon!

Technical Details
-----------------
All aspects of this site are static. There is no database, server side processing, or record of test scores outside the browser. The score is recorded in the URL bar (cheat if you like, but you won't learn anything). 

XHR is used to get a static .json file containing the exam questions. Math.random has been replaced by a seedable pseudo random number generator from [David Bau](http://davidbau.com/). The current time is used as the initial seed, then stored as part the exam 'state'. This seed is used along with the PRNG to select a number of questions. Since the seed is stored as part of the state, the same questions will always be chosen from a given seed. State is stored in the URL using the [HTML5 history API](http://www.whatwg.org/specs/web-apps/current-work/multipage/history.html). The selected questions are rendered to the document using the [jQote 2](http://aefxx.com/jquery-plugins/jqote2/) client-side templating library.

Contributing
------------
Pull requests welcome. Please check the 'Issues' section to avoid duplication of work. If you see somthing, say something!

License
-------
Apache 2.0 licensed by Sebastian Mikkel Wilson. Refer to <http://www.apache.org/licenses/LICENSE-2.0.html> for complete license text.

