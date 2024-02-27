var username = "";
function send_message(message){
    var prevMessage = $("#container").html();
    //console.log(prevMessage.length)
    if (prevMessage.length > 3){
        prevMessage = prevMessage + "<br>";
    }
    $("#container").html( prevMessage + "<span class='current_message'>" + "<span class='chatBot'>ChatBot:</span> " + message + "</span>");
    $(".current_message").hide();
    $(".current_message").delay(50).fadeIn();
    $(".current_message").removeClass("current_message");//removeClass just need the class name in parameters
}

function get_username(){
send_message("Hello, what is you name?");
}

function ai(message){
if(username.length<3){
    username = message;
    send_message("Nice to meet you " + username + "! How are you doing ?");
}

if (message.indexOf("How are you")>=0){
     send_message("I also good Thanks");
}
}

$(function(){
get_username();
$("#textarea").keypress(function(event){
    if(event.which == 13){
        if($("#enter").prop("checked"))
        {
            //console.log("Enter press");
            //$("#textarea").val("");
            $("#send").click();
           event.preventDefault();
        }
    }
    
});
$("#send").click(function(){  
    var username = "<span class='username'> You: </span>"
    var newMessage = $("textarea").val();
    $("#textarea").val("");
    var prevMessage = $("#container").html();
    if (prevMessage.length > 3){
        prevMessage = prevMessage + "<br>";
    }
    $("#container").html( prevMessage + username + newMessage);
    $("#container").scrollTop($("#container").prop("scrollHeight"));
    ai(newMessage);
});
})
