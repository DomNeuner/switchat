// defined defaults and declaring global vars

var sendingEnabled = false;
var chatService;
var allowedScenes = obsSettings.sceneAllowedList;
var blockedScenes = obsSettings.sceneBlockList;

// loading settings

obsAddress = obsSettings.url + ':' + obsSettings.port

// check to see if we've set twitch chat credentials
if (checkVariable(chatSettings.token) == true) {
    console.log ('we can send messages yo')
    sendingEnabled = true;
    chatService = chatSettings.service
}

console.log(sendingEnabled)

console.log(chatService)

// preparing our commands

ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
    if( (flags.broadcaster || flags.mod) && command === "scene" ) {
        console.log( "!scene was typed in chat" );
        console.log("param is: " + message)

        if (message === "list" && sendingEnabled == true) {
            chatPost("Here is the list of scenes that you can change to: " + allowedScenes)
        }

        if (message === "test" && sendingEnabled == true) {
            chatPost('hello world')
        }

        if (message === "help" && sendingEnabled == true || message === "" && sendingEnabled == true) {
            chatPost( "**MODS ONLY** Use '!scene <scene name>' to change to that scene. Use '!scene list' to see what scenes can be changed to in OBS. Scene name is case-sensitive" )
        }

        if (allowedScenes.includes(message) == true && blockedScenes.includes(message) == false) {
            console.log('allowed:' + allowedScenes.includes(message))
            console.log('blocked:' + blockedScenes.includes(message))
            
            obs.send('SetCurrentScene', {
                'scene-name': message
            });
        }

        if (blockedScenes.includes(message) == true) {
            console.log('allowed:' + allowedScenes.includes(message))
            console.log('blocked:' + blockedScenes.includes(message))

            if (sendingEnabled == true) {
                chatPost("Changing to this scene has been explicitly blocked by the broadcaster.")
            }
        }

        if (allowedScenes.includes(message) == false && blockedScenes.includes(message) == false && message !== "list") {
            console.log('invalid scene selected')

            if (sendingEnabled == true) {
                chatPost("This scene is not enabled for switching or it is a typo (remember scene names are cAsE-sensitive). Please change this in the settings if it needs to be enabled.")
            }
        }
    }

    if( (!flags.broadcaster && !flags.mod) && command === "scene") {
        console.log( "!scene was typed in chat" );
        console.log("it wasn't a mod")   

        if (sendingEnabled == true) {     
            chatPost("Hey @" + user +", only mods and the streamer can use this command, sorry!")
        }
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
    console.log('init with twitch chatbot')
} else {
    ComfyJS.Init( twitchSettings.channel );
    console.log('init with streamelements chatbot')
}