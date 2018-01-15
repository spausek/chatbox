 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDLcfWfEO5P_2YY7mDDgnbiRQfsxTc13Mk",
    authDomain: "chat-test-d1a99.firebaseapp.com",
    databaseURL: "https://chat-test-d1a99.firebaseio.com",
    projectId: "chat-test-d1a99",
    storageBucket: "chat-test-d1a99.appspot.com",
    messagingSenderId: "1089075639379"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  // Send message on button click

  $('#post').on('click', function (event) {
  	event.preventDefault();
  	var msgUser = $('#username').val().trim();
  	var msgText = $('#text').val().trim();
  	console.log(msgUser);
  	console.log(msgText);

  	if (msgText ==='' || msgUser === ''){
  		alert('You Suck');
  		return false;

  	}

  	//Object to be stored in firebase

  	var messagesData = {
  		user: msgUser,
  		text: msgText
  	};

  	//push object to firebase
  	database.ref().push(messagesData);
  	console.log(messagesData);

   // Clears Message input box

	$('#text').val('');

  });

  database.ref().on('child_added', function(childSnapshot, prevChildKey){
  	console.log(childSnapshot.val());

  	var msgUser = childSnapshot.val().user;
  	var msgText = childSnapshot.val().text;

  	$('#message-display').append('<p>' + msgUser + ': ' + msgText +'</p>');



  });