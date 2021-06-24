var firebaseConfig = {
      apiKey: "AIzaSyD26zssC0rb7lJOcGYFM_sPl5kjcjg5_OE",
      authDomain: "kwitter-app-de2f1.firebaseapp.com",
      databaseURL: "https://kwitter-app-de2f1-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-de2f1",
      storageBucket: "kwitter-app-de2f1.appspot.com",
      messagingSenderId: "360521244464",
      appId: "1:360521244464:web:3fb30cc45089edd73b72f5",
      measurementId: "G-Y9SQVF6973"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
 window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name- " + Room_names);
       row = "<div class='room_name' id= "+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}