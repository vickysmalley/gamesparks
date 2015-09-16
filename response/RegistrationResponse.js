// ====================================================================================================
//
// Cloud Code for RegistrationResponse, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

var userName = Spark.getPlayer().getDisplayName();
var userId = Spark.getPlayer().getPlayerId();
 
//We are going to have a collection of all players so we can search it easily and return userIds
var playerCollection = Spark.runtimeCollection("playerDirectory");
 
//Insert a new document containing the playerId and playerName, this way we can search by name and return an Id we can use
playerCollection.insert({"playerId" : userId, "playerName" : userName});