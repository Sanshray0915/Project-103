
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
	<script src="https://www.gstatic.com/firebasejs/7.6.2/firebase-app.js"></script>
	<script src="https://www.gstatic.com/firebasejs/7.6.2/firebase-firestore.js"></script>
	<script src="https://www.gstatic.com/firebasejs/live/3.1/firebase.js"></script>

function send()
{
 msg = document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
   name:user_name,
   message:msg,
   like:0
  });
 