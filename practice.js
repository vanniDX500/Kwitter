var firebaseConfig = {
     apiKey: "AIzaSyADEhogNJ1uUNtAcoCjLsYV8LFKshX2qf8",
      authDomain: "kwitter-3656c.firebaseapp.com",
       databaseURL: "https://kwitter-3656c-default-rtdb.firebaseio.com",
        projectId: "kwitter-3656c",
         storageBucket: "kwitter-3656c.appspot.com",
          messagingSenderId: "549986553298",
           appId: "1:549986553298:web:44780b8ccde6a051350c0b"};
            // Initialize Firebase 
            firebase.initializeApp(firebaseConfig);

/*const firebaseConfig = {
    apiKey: "AIzaSyADEhogNJ1uUNtAcoCjLsYV8LFKshX2qf8",
    authDomain: "kwitter-3656c.firebaseapp.com",
    databaseURL: "https://kwitter-3656c-default-rtdb.firebaseio.com",
    projectId: "kwitter-3656c",
    storageBucket: "kwitter-3656c.appspot.com",
    messagingSenderId: "549986553298",
    appId: "1:549986553298:web:44780b8ccde6a051350c0b"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);*/
//ADD YOUR FIREBASE LINKS
function adduser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        porpose:"adding user", 
        day:"thursday"
    });
}