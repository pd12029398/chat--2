//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAP3Fthub5018ccrKC6Okf7X0ZkFA6REWM",
    authDomain: "chat-fbbf6.firebaseapp.com",
    projectId: "chat-fbbf6",
    storageBucket: "chat-fbbf6.appspot.com",
    messagingSenderId: "171467571231",
    appId: "1:171467571231:web:a7c3b643886557657a152a",
    measurementId: "G-VJB51LHRBY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

   
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

