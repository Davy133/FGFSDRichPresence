var main = func(addon) {
  setlistener("/sim/initialized/",
  func{
    var path = getprop("/sim/fg-home") ~ "/Export/DiscordRPC.json";
    var file = io.open(path,"w");
    var aircraft_type = string.uc(getprop("/sim/aero"));
    var aircraft_desc = getprop("/sim/description");
    var closest_airpr = getprop("/sim/airport/closest-airport-id");
    var prop_json = '{"rpcproperties":{"aircraft_type":'~'"'~aircraft_type~'"'~',"aircraft_desc":'~'"'~aircraft_desc~'"'~',"closest_airpr":'~'"'~closest_airpr~'"'~'}}';
    io.write(file,prop_json);
    io.close(file);
    print("***************************************************");
    print("      DiscordRP Initialized - Version 0.0.1        ");
    print(" Made by: Davy133 https://www.github.com/Davy133/ \n");
    print("****************************************************");
  },1,0);
}
