// defined defaults and declaring global vars

var sendingEnabled = false;
var chatService;
var sceneList = obsSettings.sceneList;

// loading settings

obsAddress = obsSettings.url + ':' + obsSettings.port

// check to see if we've set twitch chat credentials
if (checkVariable(chatSettings.token) == true) {
    console.log ('we can send messages yo')
    sendingEnabled = true;
    chatService = chatSettings.service
}

console.log(sendingEnabled)

// preparing our commands

ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
if( (flags.broadcaster || flags.mod) && command === "scene" ) {
    console.log( "!scene was typed in chat" );
    console.log("param is: " + message)

    if (message === "list" && sendingEnabled == true) {
        ComfyJS.Say ( "Here is the list of scenes that you can change to: " + obsSettings.sceneList );
    }

    if (message === "test" && sendingEnabled == true) {
        chatPost('hello world')
    }

    if (message === "help" && sendingEnabled == true || message === "" && sendingEnabled == true) {
        ComfyJS.Say ( "Use '!scene <scene name>' to change to that scene. Use '!scene list' to see what scenes can be changed to in OBS" );
    }

    if (sceneList.includes(message) == true) {
        console.log('sc' + sceneList.includes(message))
        
        obs.send('SetCurrentScene', {
            'scene-name': message
        });
    }


}

if( (!flags.broadcaster && !flags.mod) && command === "scene" && sendingEnabled == true ) {
    console.log( "!scene was typed in chat" );
    console.log("it wasn't a mod")
    
    ComfyJS.Say ( "Hey @" + user +", only mods and the streamer can use this command, sorry!" );
}

}

// connecting to OBS when index.html is active in a scene

const obs = new OBSWebSocket();
obs.connect({ address: obsAddress, password: obsSettings.password });

obs.on('error', err => {
    console.error('socket error:', err);
});

// starting up comfyJS depending on status of sendingEnabled

if (sendingEnabled == true && chatService === "twitch") {
    ComfyJS.Init( twitchSettings.channel, chatSettings.token );
} else {
    ComfyJS.Init( twitchSettings.channel );
}