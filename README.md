# MyTraditionTeller!
Most of the times, children do not have safe workspaces or environments to explore the basic functionalities from computers. This happens either because parents do not trust or allow their kids to user their own devices, due to fear they might break them.

This where MyTraditionTeller comes in! We have to main objectives:
* Develop mechanic abilities for basic computer interaction, such as drag n’ drop, or general usage of keyboard and mouse.
* Learn about our traditions by playing with activities related to a specific tradition from our country or region, in family or alone.


### Why MyTraditionTeller?
We are an open source library where you can create activities, add styles related to a specific topic and teach/learn traditions. We provide the basic tools for an empty frame and examples of how you can develop activities for your traditions.


### Who can use MyTraditionTeller?
Ok, so there are two ways you can use MyTraditionTeller:
* Learner: download and start learning about your/others’ traditions!
* Developers: help us and develop more activities and more fun for the community! 


### How can I use MyTraditionTeller? (Learner)
You can download and install everything you need to start learning about your/others traditions. At the “activities” folder you will find subfolders with the names of several countries (or at least Mexico haha) with activities within, ready to run. The recommended ages for the activities are kids between 5 and 7 y/o. The idea is that the activities take no longer than 15 minutes to perform.


### How can I contribute to MyTraditionTeller? (Developer)
It’s easy :)
You can add a folder for your country/region inside the traditions folder, in case it does not exist yet, and a subfolder with the name of your tradition (with underscores). Inside it, you can create all your setup and theme for your tradition (checkout our Dia de Muertos example). When you are done, create your pull request and we will gladly add it to the activities library.

IMPORTANT (BEFORE YOU START)
The idea is that the activities take no longer than 15 minutes to perform, and they are targeted for kids between 5-7 y/o. Please validate them before the pull request.


```
traditions 
│ 
└─── mexico 
    └───dia_de_muertos
 	    │ menu.js
 	    │ activity1.js
 	    │ activity2.js
 	    │ ... 
```


Documentation
============
Executive Summary
Brief description of project
A way for kids to learn how to perform basic actions on a computer. It will be a web application that saves the progress of the kid, and encourages them to keep growing, playing and learning about customs.


Project Objectives
What the expectations are
We have two main objectives: reinforcing the basic mechanics of computers to kids(things like drag and drop, copy and paste commands, etc.); and teaching them about traditions.

Project Scope
The reach for the semester
By the end of the semester we plan on having the architecture of the stories up on Github, so that anyone that wants to create their own stories about their traditions they are able to do so. Also, we’ll have a one activity, plus a way to sign up/in so that the progress of the child is saved.

Installation  
============
Download the repository and check the following sections to run both frontend and backend.

Installing and running Frontend  
============
Requirements for the Frontend to run:
* Have Node.js

Open the folder core/frontend and run the following:
```
npm install	
npm run serve
```

Installing the Backend and using the API
============
Requirements for the API to run:
* Have Mongo installed and running
* Have Node.js
After you have that, go inside the folder: core/backend/database
```
npm install	
node .
```
Now that you have the server running you can access it from the client side, on the route: core/frontend/client/app/src/clients there are three files that can be used to access the API (do not move anything from those files).
Here’s how you use them, inside the file you want to use them you first import it. For example:
	import RoutesElements from '../clients/RoutesElements';
 Then in the component you initialize it 
	routesElements: RoutesElements = new RoutesElements();
And now with a simple promise you can access any of the endpoints.
Each one of the files has have endpoints:
* One GET for all of the elements/levels/stories.
* One GET for one element/level/story.
* One DELETE.
* One POST.
* One PUT.

For more information on each file, you can go and check out the file to see exactly what you need.

Other cool resources
============
During our process of research, we made a cool mood board in Pinterest, in case you are wondering how did we imagine the UI:
* [MyTraditionTeller UI](https://www.pinterest.com.mx/gvelascomacias/once-upon-a-sandbox/)


License
============
This project is licensed under the [MIT license](https://github.com/FranciscoRobles/MyTraditionTeller/blob/master/LICENSE).
