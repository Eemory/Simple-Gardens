# Simple-Gardens
https://bonsaicode-simple-gardens.netlify.app

Simple Gardens is a full-stack web-application that I built using React and Firebase. It is intended to be used as a garden diary that allows a user to create a page for each of their plants. Allowing the user to store an image and information on their plant, as well as make notes about their plant as they need to. The home page includes an index of the plants they have created, along with a to-do list feature to keep track of tasks they might need to do in their garden. 


the 'create-plant' feature is made using react-bootstrap JSX elements. This uploads the data to be stored in firestore.
![create-page-image](https://github.com/Eemory/Simple-Gardens/blob/main/simple-gardens-readme-images/sg-createpage.png?raw=true)
the Dashboard or Home page shows the user their index of plants to the left hand side, as well as shows a todo list feature. It also includes a calendar feature using 'react-big-calendar' that utilizes local storage to save evetns the user may add. The todo-list uses local storage and gives the option to cross off completed tasks and delete them. **note: I am currently aware of an error being triggered in the console by the 'react-big-calendar' package and am working on a fix.
![dashboard-image](https://github.com/Eemory/Simple-Gardens/blob/main/simple-gardens-readme-images/Dashboard.png?raw=true)
the login page is made using bootstrap elements and firebase-authentication
![login-image](https://github.com/Eemory/Simple-Gardens/blob/main/simple-gardens-readme-images/sg-login.png?raw=true)
the password reset feature is made using bootstrap elements and firebase-authentication
![password-reset-image](https://github.com/Eemory/Simple-Gardens/blob/main/simple-gardens-readme-images/sg-passwordreset.png?raw=true)
The plant-page is where the plant's data is rendered to the screen. It includes a notes feature that uses local storage for the user to create notes for their plant, includes the date that the note was made
![plant-page-image](https://github.com/Eemory/Simple-Gardens/blob/main/simple-gardens-readme-images/sg-plantpage.png?raw=true)
the profile page shows the user's email information
![profile-image](https://github.com/Eemory/Simple-Gardens/blob/main/simple-gardens-readme-images/sg-profile.png?raw=true)
the signup page is made using bootstrap elements and firebase-authentication
![signup-image](https://github.com/Eemory/Simple-Gardens/blob/main/simple-gardens-readme-images/sg-signup.png?raw=true)
