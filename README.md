# New-Silents-Mod-Master-Server
A replacement for the master server of Silent's multiplayer mod for SkaterXL 1.1.0.4

Original mod URL: https://mod.io/g/skaterxl/m/xl-multiplayer

All I've done is modify the existing mod to accept a custom master server IP and write a master server in node.js. 
If there was an issue in the original 0.11.2 mod, it will also be here.

node.js is required to run the master server https://nodejs.org/en/ start with "node server.js"

Go to releases on the right hand side, click "All required files" then download Silent.s.XLMultiplayer.Mod.0-11-3.zip for the SXL mod and server program.

It's recommended to ping the server using Postman https://www.postman.com/ a few times with "http://{serverIP}/api/getsxlservers" if the SXL mod can not find the server in the Server Browser
