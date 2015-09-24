// ====================================================================================================
//
// Cloud Code for flipResult, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================
Spark.getLog().debug("Starting flipResult");

// Get the challenge instance
var challenge = Spark.getChallenge(Spark.getData().challengeInstanceId);

// Get call attribute
var toss = Spark.getData().toss;

// Get player id
var playerId = Spark.getPlayer().getPlayerId();

// Set the result of the call, and who made it
challenge.setScriptData("flip", toss);
challenge.setScriptData("flipperId", playerId);

// Move on to the next turn
challenge.consumeTurn(Spark.getPlayer().getPlayerId());

Spark.getLog().debug("Finished flipResult");

// Calculate the winner
//var call = challenge.getScriptData("call");

//if(call == toss)
//{
 //   // Winner is the caller 
  //  var callerId = challenge.getScriptData("callerId");
//    challenge.winChallenge(callerId)
//}
//else
//{
    // Winner is the flipper
//    challenge.winChallenge(playerId);
//}