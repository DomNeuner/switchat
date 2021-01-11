/*
    THIS IS THE SETTINGS FILE
    *************************
    
    Check out the install guide to see what you need to do here. 
*/

// REQUIRED
var twitchSettings = {
    channel : "channelname"
}

// totally optional
var chatSettings = {
    service: "",    
    token : ""
}


// REQUIRED: 
//      url, port, sceneAllowedList
// OPTIONAL (but recommended): 
//      password, sceneBlockList

var obsSettings = {
    url : "localhost",
    port: "4444",
    password : "", 
    sceneAllowedList : ["scene1", "scene2", "scene3"],
    sceneBlockList : ["sceneB", "sceneB", "sceneC"]
}