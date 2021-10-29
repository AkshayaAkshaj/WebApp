
const firebaseConfig = {
  apiKey: "AIzaSyCOV_G7nGoWYZkJ64Dc-aOwH1OwCtQcqfM",
  authDomain: "kwitter-e5529.firebaseapp.com",
  databaseURL: "https://kwitter-e5529-default-rtdb.firebaseio.com",
  projectId: "kwitter-e5529",
  storageBucket: "kwitter-e5529.appspot.com",
  messagingSenderId: "780267206450",
  appId: "1:780267206450:web:878799c8dd8a129774492b"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

username=localStorage.getItem("username");
document.getElementById("username").innerHTML="Welcome "+username +"!";




 