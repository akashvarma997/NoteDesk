<p><b>NoteDesk:-</b>

<b>Description:-</b><br>
It is not just another note-taking app that stores notes on local storage. It is a full-fledged note-taking and storing app on the cloud.
You can come anytime on this app, log in and see the notes you have created, update the previously created notes, and make some new notes
with a tag that describes the category of the note.


<b>Set-up on your System:-</b><br>
1.) All the necessary files and folders are available in the repo, and all the dependencies are mentioned in the package.json file.<br>
2.) Create a folder notedesk to set up this Application.<br>
3.) copy all the files and folders.<br>
4.) Run the "npm install" command in your notedesk & notedesk/backend folders.<br>
5.) Now all the packages and dependencies are installed.<br>
6.) Run the command "npm run start" in notedesk and "nodemon .\index.js" in the notedesk/backend folder.<br>
7.) use the App.<br>

<b>note</b>:- you also have to set up MongoDB, I have used Mongoose to control the Database. Do the needful changes in the connection string i.e "URI"
in the backend/db.js file for connecting to MongoDB.

<b>Packages/Libraries/Technologies used:</b>

1.) <b>ReactJs</b>: To build the front end of the App.

2.) <b>ExpressJs</b>: To build the backend API's.

3.) <b>BootStrap</b>: To increase responsiveness and style the Application.

4.) <b>Context API</b>: To manage all the states of the Application, avoid prop drilling, make the codebase more readable, and decrease the complexity.

5.) <b>MongoDB</b>: To store and manage the Applications Data in the form of Users and notes.

6.) <b>Mongoose</b>: To efficiently work with MongoDB.

7.) <b>BCRYPT</b>: used the "hash" function of "BCRYPT" for hashing the password to make it more secure and the App protected.

8.) <b>JSONwebtoken</b>: Used to authenticate and verify the correct users.

9.) <b>Express-Validators</b>: To do validations on email ID & password on the server side.

10.) <b>CORS</b>: To allow the browser to make API calls.


Demo Video:



https://user-images.githubusercontent.com/92669726/216768657-44c06f71-ba3b-4774-8375-7fdf1da319ee.mp4


