//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyB-KqVgVniZjgfiWyMjFfwBlgDTmPXFaT4",
      authDomain: "project-94-9230a.firebaseapp.com",
      databaseURL: "https://project-94-9230a-default-rtdb.firebaseio.com",
      projectId: "project-94-9230a",
      storageBucket: "project-94-9230a.appspot.com",
      messagingSenderId: "904499144538",
      appId: "1:904499144538:web:64bd2da93c3114af9bb563",
     
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
 

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send()
{ 
    msg = document.getElementById("msg").value;

   firebase.database().ref(room_name).push({

      Name:user_name,
      message:msg,
      like:0
   });

   document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
