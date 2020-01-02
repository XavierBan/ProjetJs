//cmassart@timgroup.fr
$(document).ready(function() {
    var pseudo=prompt("Quel est votre pseudo?");
    var socket = new WebSocket(`ws://localhost:8080/chat?pseudo=${pseudo}`, "http");
    document.getElementById("entete").innerHTML=document.getElementById("entete").innerHTML+"<b>" + pseudo + "</b>";
    $("#ClickToSend").on("click", function () {
        var texte = document.getElementById("comment").value;
        document.getElementById("comment");
        socket.send(texte);
    });

    socket.addEventListener("message", function (event) {
        const texte = JSON.parse(event.data);
        var div=document.getElementById("conversation");
        if(pseudo == texte.emetteur) {
            div.innerHTML = div.innerHTML + `<div class="row message-body">
                            <div class="col-sm-12 message-main-receiver">
                                <div class="sender">
                                    <div class="message-text">
                                        ${pseudo} : ${texte.texte}
                                    </div>
                                </div>
                            </div>
                          </div>`;
        }else{
            div.innerHTML=div.innerHTML+`<div class="row message-body">
                                            <div class="col-sm-12 message-main-receiver">
                                                <div class="receiver">
                                                     <div class="message-text">
                                                        ${texte.emetteur} : ${texte.texte}
                                                     </div>
                                                 </div>
                                            </div>
                                           </div>`;
        }
    });
});