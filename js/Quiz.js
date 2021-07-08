class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
question.hide()
    //write code to change the background color here
background(9, 99, 115)
    //write code to show a heading for showing the result of Quiz
fill (255)
textSize(30)
text ("Result of Quiz",340,65)
text ("..................",320,65)
    //call getContestantInfo( ) here
contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
if(allContestant!==undefined){
var display_answers=230
 //write code to add a note here
fill (255)
textSize(20)
text("Note:Contestants who answered correct are highlighted in green color",130,230)
//write code to highlight contest who answered correctly
  for(var plr in allContestants)  {
var correctAns="1"
if(correctAns===allContestants[plr].answer){
fill("white")
}else{
  fill("white")
 
}

display_answers+=30
textSize(24)
text(allContestants[plr].name+":"+allContestants[plr].answer,250,display_answers)
  }
}
 
    }
}
   

    
    
  


