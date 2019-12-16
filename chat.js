$(document).ready(function(){
    alert("hey");
});


$("#ClickToSend").on("click",function(){
    var texte=document.getElementById("comment").value;
    document.getElementById("comment");
    var socket=  new WebSocket("ws://localhost:8080/chat?pseudo=toto","http");
    alert(texte);
    socket.send(texte);
})


