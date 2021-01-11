/*
    THIS IS THE SETTINGS FILE
    *************************
    
    Check out the install guide to see what you need to do here. 
*/

// REQUIRED
var twitchSettings = {
    channel : "domneuner"
}

// totally optional
var chatSettings = {
    service: "twitch",    
    token : "oauth:6xipletdn20rwbdfgve1m7oeqsg82a"
}


// REQUIRED: 
//      url, port, sceneAllowedList
// OPTIONAL (but recommended): 
//      password, sceneBlockList

var obsSettings = {
    url : "localhost",
    port: "4444",
    password : "", 
    sceneAllowedList : ["game", "just chatting", "scene3"],
    sceneBlockList : ["Scene", "sceneB", "sceneC"]
}