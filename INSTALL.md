# Install instructions

## Contents
- [Install instructions](#install-instructions)
  - [Contents](#contents)
  - [Pre-requisites](#pre-requisites)
  - [Setting up Switchat](#setting-up-switchat)
  - [Optional steps](#optional-steps)
    - [Setting up OBS Websockets](#setting-up-obs-websockets)
    - [Setting up chat messages](#setting-up-chat-messages)
      - [Using Twitch](#using-twitch)
      - [Using StreamElements](#using-streamelements)

## Pre-requisites

You need to have the OBS websockets plugin installed (only supported on OBS Studio or OBS.live). If you don't have this installed or configured already, please go to [Setting up OBS Websockets](#setting-up-obs-websockets).

You also need to download Switchat from the [Releases](#) page.

## Setting up Switchat

1. Download and extract the latest release of switchat. Save the extracted folder in safe place, Switchat doesn't care where.

1. Edit the `settings.js` file in notepad or a text editor of your choice with the required settings as well as any optional settings you wish to use.
   *  The required settings are:
      *  Twitch Settings > Channel
      *  OBS Settings > URL
         * This is set to the default of OBS websockets. *Only change it if you're running Switchat on a different PC than OBS is installed on (just don't do this okay?)*
      *  OBS Settings > Port
         * This is set to the default of OBS websockets. *Only change it if you have changed this on OBS.*
      *  OBS Settings > Scene Allowed List
         * This is a comma-separated list (no comma needed at the end).
         * The scene names are **case-sensitive!**
         * Example: `["gaming scene", "chatting scene", "BRB scene"]`

1. Add switchat.html as a browser source to all your scenes in OBS.
   1. Add a new browser source to your scene.
   1. Name it whatever you want :man_shrugging:
   1. Select `local file` and then browse to select the `switchat.html` file in the `switchat` folder, whereever you saved it!
    ![](/install.md%20images/browser_source_properties.png?raw=true) 
   1. Nothing else needs to change, click OK on the source.
   1. Ensure you copy this to all your scenes.
1. Party hard.

## Optional steps

### Setting up OBS Websockets

Hey! This is only optional because you may have set it up already... you definitely need it. Here's some instructions on how to setup OBS Websockets if you haven't used it before!

1. Download the plugin from the Websockets Github page
   * Go to [Palakis/obs-websocket/releases](https://github.com/Palakis/obs-websocket/releases) and scroll to Assets and download your relevant installer. If you're one windows, I recommend the `obs-websocket-4.8.0-Windows-Installer.exe` as it's the easiest method!
    ![](/install.md%20images/websocket_download.png?raw=true)
2. Install the plugin
   * **Using the installer (recommended, works only with combined 32/64-bit installations)**: download it, launch it and follow the instructions.
    * **Using the obs-websocket-4.8.0-Windows.zip archive**: copy the contents of the archive to the root of your OBS Studio installation folder `(either C:\Program Files\obs-studio or C:\Program Files (x86)\obs-studio)`.
    * **Using macOS**: why? but uh, run the pkg :man_shrugging:
3. (Optional) Configure the plugin 
    ![](/install.md%20images/websocket_config.png?raw=true)

    You don't need to make any changes here for Switchat to work. However, if you enable authentication (recommended), you will need to ensure you copy the password in to the `settings.js` file

### Setting up chat messages

Switchat works fine without ever talking. It can just hangout in the background like a little lurky lurker and obey your commands. However, sometimes a conversation is good. For example, `!scene list` will tell your mods what scenes they can change to.

If you want Switchat to talk, you'll need to give it a voice. You can either use your own twitch account, your own twitch bot account or the StreamElements bot.

#### Using Twitch
You can use any account you want for this, either your main account (i.e DomNeuner) or a separate bot account (i.e BotNeuner).

1. Go to [twitchapps.com/tmi](https://twitchapps.com/tmi/) and click "Connect". Ensure that the account it connects is the one you want to use as the bot.
1. Copy the code that appears on screen in to the `token` field in `settings.js`

    ![](/install.md%20images/tmi_confirm.png?raw=true)

1. Set `service` in `settings.js` to `twitch`

    ![](/install.md%20images/settings_twitch.png?raw=true)

1. Save `settings.js`
1. You completed the final level, GG.

#### Using StreamElements

Okay cool, you're using Streamelements as your chatbot already? Coolio, we can make that do the old talky talky for you instead.

1. Go to [jebaited.net](https://jebaited.net) and signin with your StreamElements account.
2. Once signed in go to the [API Tokens](https://jebaited.net/tokens/) page.

    ![](/install.md%20images/jebaited_settings.png?raw=true)

1. Added a description to your new token (i.e Switchat)
1. Click the blue button and select `botMsg`.
1. Click `Add Token`

    ![](/install.md%20images/jebaited_token.png?raw=true)

1. Copy your token from the `Current tokens:` section to the `token` field in `settings.js`
1. Set `service` in `settings.js` to `streamelements`
    ![](/install.md%20images/settings_se.png?raw=true)

1. Save `settings.js`
1. You completed the final level, GG.
