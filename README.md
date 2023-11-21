# New-Silents-Mod-Master-Server
A replacement for the master server of Silent's multiplayer mod for SkaterXL 1.1.0.4

Original mod URL: https://mod.io/g/skaterxl/m/xl-multiplayer

XLSAdmin has issues but I'm trying to make it work, it should be included with the next release.

All I've done is modify the existing mod to accept a custom master server IP and write a master server in node.js. 
If there was an issue in the original 0.11.2 mod, it will also be here.

Current issues:
- Custom maps not working, could be related to hashing newer maps made for new versions of SXL
- XLSAdmin's client side plugin for XL Multiplayer fails to load, could be a .Net mismatch, not sure at all tbh. You can just delete the zip file it sends
and everything works fine but you lose the ability to ban via hardware ID's.

node.js is required to run the master server https://nodejs.org/en/ start with "node server.js"

Go to releases on the right hand side, click "All required files" then download Silent.s.XLMultiplayer.Mod.0-11-3.zip for the SXL mod and server program.

It's recommended to ping the server using Postman https://www.postman.com/ a few times with "http://{serverIP}/api/getsxlservers" if the SXL mod can not find the server in the Server Browser
