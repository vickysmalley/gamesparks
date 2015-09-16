// ====================================================================================================
//
// Cloud Code for findUser, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

//Load our playerDirectory collection
var playerCollection = Spark.runtimeCollection("playerDirectory");

var sparkMongoCursor = playerCollection.find({playerName : Spark.getData().displayName}, {playerId : 1, playerName : 1})

var count = sparkMongoCursor.count();

if(sparkMongoCursor.count() === 0)
{
    Spark.setScriptError("playerNotFound", Spark.getData().displayName);
}
else
{
    var results = sparkMongoCursor.next();
    
    Spark.setScriptData("player", results);
}