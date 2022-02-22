function cardClass (nation, name, image, attack, defense){
    this.name = name;
    this.nation = nation;
    this.image = image;
    this.attack = attack;
    this.defense = defense;
  }
  
var card1 = new cardClass("norse", "Thor", "https://github.com/JohnMormantrops/Images/blob/main/thor.jpg?raw=true", "Lightning Attack \n 5 damage", "Morale Boost +1 defense for all troops");
var card2 = new cardClass("china", "Thief", "https://github.com/JohnMormantrops/Images/blob/main/thief.jpg?raw=true", "Steal \n draw two from opponents deck", "Sneak away \n +3 defense");
var card3 = new cardClass("southamerican", "Inti", "https://github.com/JohnMormantrops/Images/blob/main/inti.jpg?raw=true", "Sun blast \n +4 damage", "Blinding rays\n +5 defense");
//var card4 = newClass();

var cardArray = [card1,card2,card3,card1,card2,card3,card1,card2,card3,card1,card2,card3,card1,card2,card3,card1,card2,card3,card1,card2,];

function setVisible(){
  console.log("WORKING")
  buildCards(cardArray);
}
  
function buildCards(cardArray){
    var cards = document.getElementById('cardContainer')

    for (var i = 0; i < cardArray.length; i++){
        var card = `<div class="card ${cardArray[i].nation}"> 
                        <div class="pic">
                                <p class= "heroname">${cardArray[i].name}</p>
                    <img src="${cardArray[i].image}" />
      </div> 
        <div class="ability">
          <p class="text">${cardArray[i].attack}</p>
          </div>
        <div class="ability">
          <p class="text">${cardArray[i].defense}</p>
        </div> 
        </div>`

        cardContainer.innerHTML += card
    }
}

  
{/* <div class="card"> 
  <div class="pic">
    <p class= "heroname">NORSE GOD THOR</p>
    <img src="https://github.com/JohnMormantrops/Images/blob/main/thor.jpg?raw=true" >
</div> 
  <div class="ability">
    <p class="text">LIGHTNING ATTACK<br/>5 DAMAGE</p>
    </div>
  <div class="ability">
    <p class="text">MORALE BOOST <br/>+3 DEFENSE TO NORSE</p>
  </div> */}