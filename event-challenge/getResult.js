// ====================================================================================================
//
// Cloud Code for getResult, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================
Spark.getLog().debug("Starting getResult");

// Get the challenge instance
var challenge = Spark.getChallenge(Spark.getData().challengeInstanceId);

var call = challenge.getScriptData("call");
var flip = challenge.getScriptData("flip");


Spark.getLog().debug("call = " + call + ", " + "flip = " + flip);

if(call == flip)
{
    // Winner is the caller 
    Spark.getLog().debug("Winner is the caller");
    var callerId = challenge.getScriptData("callerId");
    var winPlayer = Spark.loadPlayer(callerId);
    challenge.winChallenge(winPlayer);
}
else
{
    // Winner is the flipper
    Spark.getLog().debug("Winner is the flipper");
    var flipperId = challenge.getScriptData("flipperId");
    var winPlayer = Spark.loadPlayer(flipperId);
    challenge.winChallenge(winPlayer);
}

Spark.getLog().debug("Finished getResult");