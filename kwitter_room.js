
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

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function  logout() {

   localStorage.removeItem("room_name");
   localStorage.removeItem("user_name");
   window.location.replace("index.html");
}
