// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCGo2WWViPpB4RG6EYQtBE5VfuRc95p9lk",
    authDomain: "kwitter-3-e62b8.firebaseapp.com",
    projectId: "kwitter-3-e62b8",
    storageBucket: "kwitter-3-e62b8.appspot.com",
    messagingSenderId: "990576197850",
    appId: "1:990576197850:web:fd5d58c752397a603b65e3"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
}



