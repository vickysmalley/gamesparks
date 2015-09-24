// ====================================================================================================
//
// Cloud Code for deckChosen, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

// TODO: Make into a challenge event

// Get challengeId attribute
var challengeId = Spark.getData().challengeId;

// Get the challenge associated with this event
var challenge = Spark.getChallenge(challengeId);

// Find the id of the player who triggered the event
var playerId = Spark.getPlayer().getPlayerId();

// Get the ids of both the players in the game (assume this is a 2 player game)
var playerIds = challenge.getAcceptedPlayerIds();

// Find the opponent's id
var opponentId;
// TODO: want to assert here that there are two players
if(playerIds[0] == playerId)
{
    opponentId = playerIds[1];
}
else
{
    opponentId = playerIds[0];
}

var privateDataKey = "deckChosen";

// Have we already received a deckChosen event?
var result = challenge.getPrivateData(privateDataKey);

if(result == null)
{
    // This is the first deckChosen message we have received
   // Spark.getLog().debug("Received first deckChosen message");
    // Set the player id
    challenge.setPrivateData(privateDataKey, playerId);
}
else if(result == playerId)
{
    //Spark.getLog().error("This is the second deckChosen message from " + playerId)
}
else if(result == opponentId)
{
    // This is the second deckChosen message we have received
    //Spark.getLog().debug("Received second deckChosen message");
    
    // Send decksComplete message to both players
    var opponent = Spark.loadPlayer(opponentId)
    Spark.sendMessageExt({ "challengeId" : challengeId }, "decksComplete", [Spark.getPlayer(), opponent])
    //Spark.getLog().debug("Sent decksComplete message");
    
    // Set data completed
    challenge.setPrivateData(privateDataKey, "completed");
}
else
{
    Spark.getLog().error("Unexpected result in deckChosen " + result)
}