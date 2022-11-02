
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDWGhsgMtfipl08_FuwltUDNl71s9lYfXw",
      authDomain: "letschat-web-app-1-1b3ce.firebaseapp.com",
      databaseURL: "https://letschat-web-app-1-1b3ce-default-rtdb.firebaseio.com",
      projectId: "letschat-web-app-1-1b3ce",
      storageBucket: "letschat-web-app-1-1b3ce.appspot.com",
      messagingSenderId: "19761695836",
      appId: "1:19761695836:web:44cffcfdae0e8018c32a99"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("username");
    document.getElementById("user_name").innerHTML= "Welcome "+user_name+"!"; 

    function add_room() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
        purpose:"Adding Room Name"
      });
  
      localStorage.setItem("roomname",room_name);

        window.location = "kwitter_page.html";
       
       
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name - "+room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToroomname(name){
  console.log(name);
  localStorage.setItem("roomname",name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("roomname");
  localStorage.removeItem("username");
  window.location.replace("index.html");
  }
  