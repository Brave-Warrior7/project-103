var firebaseConfig = {
    apiKey: "AIzaSyB7TvS4KZAwa8nkAHzJGPzChyUfZO3XMt4",
    authDomain: "classtest-7257f.firebaseapp.com",
    databaseURL: "https://classtest-7257f-default-rtdb.firebaseio.com",
    projectId: "classtest-7257f",
    storageBucket: "classtest-7257f.appspot.com",
    messagingSenderId: "200656192107",
    appId: "1:200656192107:web:011878ebdc63aabf46e72e"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name"); 


  function send(){
   msg=document.getElementById("msg").value;

   firebase.database().ref(room_name).push({
   name:user_name,
   message:msg,
   like:0
   });
   document.getElementById("msg").value="";

  }
