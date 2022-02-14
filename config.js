import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyBrixysl5z6BiNW33XvkZSUOQMhhk4Nsno",
  authDomain: "archit-sapp.firebaseapp.com",
  databaseURL: "https://archit-sapp-default-rtdb.firebaseio.com",
  projectId: "archit-sapp",
  storageBucket: "archit-sapp.appspot.com",
  messagingSenderId: "923407403038",
  appId: "1:923407403038:web:7571352e9d882deaf6060f"
};


if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()

