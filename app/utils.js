// testing if variable has a value
function checkVariable(variable) {
    if (variable != null && variable != "") {
        hasValue = true
    } else {
        hasValue = false
    }

    return hasValue
};

// determines which service to post in chat via
function chatPost(message) {
    if ( chatService === "twitch" ) {
        ComfyJS.Say ( message );
    } else if ( chatService === "streamelements" ) {
        console.log('trying to send message: ' + message)
        $.get("https://api.jebaited.net/botMsg/" + chatSettings.token + "/" + message, function(data) {
            console.log('sent message via jebaited.net')
        })
    }
}