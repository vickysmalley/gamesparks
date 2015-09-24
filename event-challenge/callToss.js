// ====================================================================================================
//
// Cloud Code for callToss, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================
Spark.getLog().debug("Starting callToss");

// Get the challenge instance
var challenge = Spark.getChallenge(Spark.getData().challengeInstanceId);

// Get call attribute
var call = Spark.getData().call;

// Get player id
var playerId = Spark.getPlayer().getPlayerId();

// Set the result of the call, and who made it
challenge.setScriptData("call", call);
challenge.setScriptData("callerId", playerId);

// Move on to the next turn
challenge.consumeTurn(Spark.getPlayer().getPlayerId());

Spark.getLog().debug("Finished callToss");