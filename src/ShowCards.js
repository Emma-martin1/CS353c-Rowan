import { useEffect, useState } from "react";

export default function () {
  //const [cardArray, setCardArray] = useState([]);

  function cardClass(nation, name, image, attack, defense) {
    this.name = name;
    this.nation = nation;
    this.image = image;
    this.attack = attack;
    this.defense = defense;
  }

  var card1 = new cardClass(
    "norse",
    "Thor",
    "https://github.com/JohnMormantrops/Images/blob/main/thor.jpg?raw=true",
    "Lightning Attack \n 5 damage",
    "Morale Boost +1 defense for all troops"
  );
  var card2 = new cardClass(
    "china",
    "Thief",
    "https://github.com/JohnMormantrops/Images/blob/main/thief.jpg?raw=true",
    "Steal \n draw two from opponents deck",
    "Sneak away \n +3 defense"
  );
  var card3 = new cardClass(
    "southamerican",
    "Inti",
    "https://github.com/JohnMormantrops/Images/blob/main/inti.jpg?raw=true",
    "Sun blast \n +4 damage",
    "Blinding rays\n +5 defense"
  );
  //var card4 = newClass();

  let cardArray = [
    card1,
    card2,
    card3,
    card1,
    card2,
    card3,
    card1,
    card2,
    card3,
    card1,
    card2,
    card3,
    card1,
    card2,
    card3,
    card1,
    card2,
    card3,
    card1,
    card2
  ];

  // function setVisible() {
  //   console.log("WORKING");
  //   buildCards(cardArray);
  // }

  return (
    <div className="cardContainer" id="cardContainer">
      {cardArray.map((card, key) => (
        <div className="card" id={card.nation}>
          <div className="pic">
            <p className="heroname">{card.name}</p>
            <img src={card.image} alt="hero pic" />
          </div>
          <div className="ability">
            <p className="text">{card.attack}</p>
          </div>
          <div className="ability">
            <p className="text">{card.defense}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
