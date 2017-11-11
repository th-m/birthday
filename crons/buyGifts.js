// import firebase from 'firebase'
var firebase = require('firebase');
const config = {
   apiKey: "AIzaSyAjSKA0Ti0_X4A5XQhcaVh68lu08waEniM",
   authDomain: "birthday-buyer.firebaseapp.com",
   databaseURL: "https://birthday-buyer.firebaseio.com",
   projectId: "birthday-buyer",
   storageBucket: "birthday-buyer.appspot.com",
   messagingSenderId: "917872359554"
 };

firebase.initializeApp(config)
const firebaseAuth = firebase.auth;
firebaseAuth().signInWithEmailAndPassword("buyer@bot.com", "buystuff").then(function(){
  const database = firebase.database();
  const formsInfo = database.ref('forms');
  formsInfo.on("value", gotData, errData);
  
  function gotData(data){
    console.log(data.val());
    let forms = data.val();
    let keys = Object.keys(forms);
    console.log(keys);
  }
  
  function errData(error) {
    console.log("Something went wrong.");
    console.log(error);
  }
  let urlEncodedDataPairs = [];
  urlEncodedDataPairs.push(encodeURIComponent("test"]) + '=' + encodeURIComponent('value'));
  
  // for (var entry of formData.entries()){
  //    urlEncodedDataPairs.push(encodeURIComponent(entry[0]) + '=' + encodeURIComponent(entry[1]));
  // }
  urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
  myHeaders.append('Accept', 'text/html'); 

  let myInit = {
                method: "POST",
                 headers: myHeaders,
                 body: urlEncodedData,
                 mode: 'cors',
                 cache: 'default' 
               };
           
  fetch('https://birthdaybuyer.herokuapp.com/', myInit).then(function(response) {
    return response.blob();
  }).then(function(data) {
    if(data.error){
      console.log(data.error);
    }else{
      console.log(data);
    }
  });
  
  
  
});
// export const ref = firebase.database().ref()

// setTimeout(function(){ alert("Hello"); }, 3000);
// const formsInfo = database.child('forms');
// const forms = formsInfo.val();
// formsInfo.orderFunction().queryFunction();
// const forms = formsInfo.orderByKey().limitToFirst(10);
// forms.on('value', snap =>{
//   console.log(snap);
// });
// console.log(forms);

// export const firebaseAuth = firebase.auth

