//YOUR FIREBASE LINKS

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
    firbase.initializeApp(firebaseConfig);

   
    room_name = localStorage.getItem("room_name");
    user_name = localStorage.getItem("user_name");

    console.log("room name "+room_name);
    console.log("user name "+user_name);

    function logout() {
      localStorage.removeItem("roomname");
      localStorage.removeItem("username");
      window.location.replace("index.html");
      }

      function send() {
            msg=document.getElementById("msg").value;
            console.log("Message "+msg);
            firebase.database().ref("room_name").push({
                  like: 0,
                  message: msg,
                  username: user_name,
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
