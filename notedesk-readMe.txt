NoteDesk:-

Description:-
It is not just another note-taking app that stores notes on local storage. It is a full-fledged note-taking and storing app on the cloud.
You can come anytime on this app, log in and see the notes you have created, update the previously created notes, and make some new notes
with a tag that describes the category of the note.

Set-up on your System:-
1.) All the necessary files and folders are available in the repo, and all the dependencies are mentioned in the package.json file.
2.) Create a folder notedesk to set up this Application.
3.) copy all the files and folders.
4.) Run the "npm install" command in your notedesk & notedesk/backend folders.
5.) Now all the packages and dependencies are installed.
6.) Run the command "npm run start" in notedesk and "nodemon .\index.js" in the notedesk/backend folder.
7.) use the App.

note:- you also have to set up MongoDB, I have used Mongoose to control the Database. Do the needful changes in the connection string i.e "URI"
in the backend/db.js file for connecting to MongoDB.

Packages/Libraries/Technologies used:

1.) ReactJs: To build the front end of the App.

2.) ExpressJs: To build the backend API's.

3.) BootStrap: To increase responsiveness and style the Application.

4.) Context API: To manage all the states of the Application, avoid prop drilling, make the codebase more readable, and decrease the complexity.

5.) MongoDB: To store and manage the Applications Data in the form of Users and notes.

6.) Mongoose: To efficiently work with MongoDB.

7.) BCRYPT: used the "hash" function of "BCRYPT" for hashing the password to make it more secure and the App protected.

8.) JSONwebtoken: Used to authenticate and verify the correct users.

9.) Express-Validators: To do validations on email ID & password on the server side.

10.) CORS: To allow the browser to make API calls.

