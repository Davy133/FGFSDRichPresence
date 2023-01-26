const clientId = 'YOUR ID GOES HERE';
const os = require("os");
const usrDir = os.homedir();
const DiscordRPC = require("discord-rpc");
const RPC = new DiscordRPC.Client({transport:'ipc'});
const fs = require("fs");
const date = Date.now()
DiscordRPC.register(clientId)
async function setActivity(){
    if (!RPC) return;
    let rawdata = fs.readFileSync(usrDir.concat("/",'AppData/Roaming/flightgear.org/Export/DiscordRPC.json'))
    let data = JSON.parse(rawdata);
    RPC.setActivity({
        details: "Flying an".concat(" ",data['rpcproperties']['aircraft_type']),
        state:data['rpcproperties']['aircraft_desc'],
        startTimestamp: date,
        largeImageKey: data['rpcproperties']['aircraft_type'].toLowerCase(),
        largeImageText: "Currently close to".concat(" ",data['rpcproperties']['closest_airpr']),
        smallImageKey:"flightgear",
        smallImageText:"FlightGear",
        instance: false
    })
};
RPC.on('ready', async() => {
    setActivity();
    setInterval(()=>{
        setActivity();
    },15*1000)
});
RPC.login({clientId})