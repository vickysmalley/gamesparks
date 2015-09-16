// ====================================================================================================
//
// Cloud Code for ListOnlineUsers, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================


// Find all online players
var sparkMongoCursor = Spark.systemCollection("player").find({"online" : true});
// Convert to an array
var playerList = sparkMongoCursor.toArray();
// Store the array in script data
Spark.setScriptData("onlinePlayers", playerList);