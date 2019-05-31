var username = "";

function send_message(message) {
    $("#container").html("<span class='bot'>Chatbot:</span>" + message);
}

function get_username(){
    send_message("Hello, what's your name?");
}

function ai(message){
    if (username.length < 3){
        username = message;
        send_message("Nice to meet you " + username + ", ");
    }
}

$(function(){

    get_username();

    $("#send").click(function(){
        var txt = $("#textbox").val();
        var username = "<span class='username'>You:</span>";
        var messages = $("#container").html();
        if (messages != ""){
            messages = messages + '<br>';
        }
        $("#container").html(messages + username + txt);
        $("#textbox").val("");
        $("#container").scrollTop($("#container").prop("scrollHeight"));
        ai(txt);
    });
});

$(function(){
    $("#textbox").keypress(function(event){
        if (event.which == 13){
            if ( $("#check").prop("checked")){
                $("#send").click();
                event.preventDefault();
            };
        };
    });
});

$(function(){
    $("#clear").click(function(){
        var emptyMessage = "";
        $("#container").html(emptyMessage);
    });
});

