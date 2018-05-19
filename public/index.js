
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById('user_div').style.display = "block";
    //document.getElementById('login-div').style.display = "none";   changed
//    document.getElementById('Form').style.display = "none"; // changed

    var user = firebase.auth().currentUser;
    if(user!=null){
      var email = user.email;
     var email_verified = user.emailVerified;
      document.getElementById("user_para").innerHTML = "Welcome user : " + email +
                                                        "<br>verified : " + email_verified;
    //  document.getElementById("user_para").innerHTML = "Welcome user : " + email;
    }

  } else {
    // No user is signed in.
    document.getElementById('user_div').style.display = "none";
    //document.getElementById('login-div').style.display = "block";  changed
  //  document.getElementById('Form').style.display = "block";  //changed
  }
});
function login(){
  var userEmail = document.getElementById('username').value;
  var userPassword = document.getElementById('password').value;

 firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
       .then(function() {     //yeh success ke liye ki agar login ho gya shi se
            if(!firebase.auth().currentUser.emailVerified){
              alert("Verify your account first");
              firebase.auth().signOut();
              location.href = 'https://cafeteriaadmin.firebaseapp.com/';
            }
            else{
            console.log('User creation success');
            location.href = 'https://cafeteriaadmin.firebaseapp.com/cafeteria.html';
         }
       }, function(error) {
           // do things if failure
           var errorCode = error.code;
           var errorMessage = error.message;
              console.log(errorCode);
              console.log(errorMessage);
       });



  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
    // Handle Errors here.  var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("error:" + errorMessage);
    // ...
  });
}

function create_account(){
  var userEmail = document.getElementById('username').value;
  var userPassword = document.getElementById('password').value;
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error){
    var errorCode = error.code;
    var errorMessage = error.message;
  //  window.alert("Error : " + errorMessage);

  });
}


function logout(){
  firebase.auth().signOut();
  location.href = 'https://cafeteriaadmin.firebaseapp.com/';
}
function send_verification(){
  var user = firebase.auth().currentUser;
  user.sendEmailVerification().then(function(){
    window.alert("Verification sent");
  }).catch(function(error){
    window.alert("Error: " + error.message);
  });
}
