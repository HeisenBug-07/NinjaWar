"use strict";

const warriors = [
  {
    rank: 1,
    name: "Kaguya Ōtsutsuki",
    clan: "Ōtsutsuki Clan",
    tagLine:
      "Infinite Tsukuyomi, All-Killing Ash Bones, Eighty Gods Vacuum Fists",
    img: "images/kaguya.jpg",
  },
  {
    rank: 2,
    name: "Hagoromo Ōtsutsuki",
    clan: "Ōtsutsuki Clan",
    tagLine: "Rinnegan, Sage Mode, Creation of All Things Technique",
    img: "images/hagoromo.jpg",
  },
  {
    rank: 3,
    name: "Madara Uchiha",
    clan: "Uchiha Clan",
    tagLine: "Sage Art Shadow Style: Thunder Blast",
    img: "images/madara.jpg",
  },
  {
    rank: 4,
    name: "Hashirama Senju",
    clan: "Senju Clan",
    tagLine: "Sage Art Wood Style: Shin Sūsenju",
    img: "images/hashirama.jpg",
  },
  {
    rank: 5,
    name: "Itachi Uchiha",
    clan: "Uchiha Clan",
    tagLine: "Izanami, Izanagi, Susano'o: Totsuka Blade",
    img: "images/itachi.jpg",
  },
  {
    rank: 6,
    name: "Naruto Uzumaki",
    clan: "Uzumaki Clan",
    tagLine: "Sage Art Wind Style: Super Tailed Beast Rasenshuriken",
    img: "images/naruto.jpg",
  },
  {
    rank: 7,
    name: "Sasuke Uchiha",
    clan: "Uchiha Clan",
    tagLine: "Rinnegan, Inferno Style: Honoikazuchi",
    img: "images/saske.jpg",
  },
  {
    rank: 8,
    name: "Hamura Ōtsutsuki",
    clan: "Ōtsutsuki Clan",
    tagLine: "Tenseigan, Truth-Seeking Orbs",
    img: "images/hamaru.jpg",
  },
  {
    rank: 9,
    name: "Kakashi Hatake",
    clan: "Hatake Clan",
    tagLine: "Six Paths: Kamui Lightning Blade",
    img: "images/kakashi.jpg",
  },
  {
    rank: 10,
    name: "Might Guy",
    clan: "Konohagakure Clan",
    tagLine: "Eighth Gate: Gate of Death",
    img: "images/guy.jpg",
  },
  {
    rank: 11,
    name: "Obito Uchiha",
    clan: "Uchiha Clan",
    tagLine: "Kamui, Sword of Nunoboko",
    img: "images/obito.jpg",
  },
  {
    rank: 12,
    name: "Minato Namikaze",
    clan: "Namikaze Clan",
    tagLine: "Flying Raijin, Kurama Chakra Mode, Rasengan",
    img: "images/minato.jpg",
  },
  {
    rank: 13,
    name: "Nagato Uzumaki",
    clan: "Uzumaki Clan",
    tagLine: "Rinnegan, Ningendo, Shurado, Water Style: Water Shock Wave",
    img: "images/pain.jpg",
  },
  {
    rank: 14,
    name: "Orochimaru",
    clan: "Iburi clan",
    tagLine: "The Grass Longsword, Striking Shadow Snakes",
    img: "images/orichmaru.jpg",
  },
  {
    rank: 15,
    name: "Kabuto Yakushi",
    clan: "Unknown",
    tagLine: "Sage Art: White Extreme Attack, Edo Tensei",
    img: "images/kabuto.jpg",
  },
  {
    rank: 16,
    name: "Tobirama Senju",
    clan: "Senju Clan",
    tagLine: "Tandem Paper Bombs, Edo Tensei",
    img: "images/tobirama.jpg",
  },
  {
    rank: 17,
    name: "Killer Bee",
    clan: "Kumogakure Village",
    tagLine: "Lariat, Ink Clone",
    img: "images/killerb.jpg",
  },
  {
    rank: 18,
    name: "Third Raikage",
    clan: "Kumogakure Village",
    tagLine: "Thrust of Hell: One-Finger Assault",
    img: "images/raicage3.jpg",
  },
  {
    rank: 19,
    name: "Sakumo Hatake",
    clan: "Hatake Clan",
    tagLine: "White Fang of the Leaf",
    img: "images/sakumo.jpg",
  },
  {
    rank: 20,
    name: "Kisame Hoshigaki",
    clan: "Hoshigaki Clan",
    tagLine: "Monster of the Hidden Mist, Water Prison Shark Dance Technique",
    img: "images/kisame.jpg",
  },
  {
    rank: 21,
    name: "Yamato",
    clan: "Iburi clan",
    tagLine: "Wood Release, All is Suffering Technique",
    img: "images/yamato.jpg",
  },
  {
    rank: 22,
    name: "Lord Mū",
    clan: "Iwagakure Village",
    tagLine: "Particle Release, Fission Technique",
    img: "images/loardmu.jpg",
  },
  {
    rank: 23,
    name: "Ōnoki",
    clan: "Kamizuru Clan",
    tagLine: "Particle Style: Atomic Dismantling Jutsu",
    img: "images/onoki.jpg",
  },
  {
    rank: 24,
    name: "Hiruzen Sarutobi",
    clan: "Sarutobi Clan",
    tagLine: "Earth Style: Earth Dragon Bombs, Fire Style: Dragon Flame Bombs",
    img: "images/sarutobi.jpg",
  },
  {
    rank: 25,
    name: "Danzō Shimura",
    clan: "Shimura Clan",
    tagLine: "Izanagi, Wind Style: Vacuum Blades",
    img: "images/danzo.jpg",
  },
  {
    rank: 26,
    name: "Shisui Uchiha",
    clan: "Uchiha Clan",
    tagLine: "Kotoamatsukami, Fire Style: Great Fireball Jutsu",
    img: "images/sishui.jpg",
  },
  {
    rank: 27,
    name: "Fourth Raikage",
    clan: "Kumogakure Village",
    tagLine: "Liger Bomb, Lightning Chakra Mode",
    img: "images/raicage4.jpg",
  },
  {
    rank: 28,
    name: "Kakuzu",
    clan: "Takigakure Village",
    tagLine: "Earth Grudge, Fire Style: Searing Migraine",
    img: "images/kakauzu.jpg",
  },
  {
    rank: 29,
    name: "Jiraiya",
    clan: "Konohagakure Village",
    tagLine: "Sage Art: Bath of Boiling Oil, Rasengan",
    img: "images/jeraya.jpg",
  },
  {
    rank: 30,
    name: "Gaara",
    clan: "Kazekage Clan",
    tagLine: "Sand Tsunami, Grand Sand Mausoleum",
    img: "images/gara.jpg",
  },
  {
    rank: 31,
    name: "Hanzō",
    clan: "Hanzō of the Salamander",
    tagLine: "Summoning: Poison Salamander - Ibuse",
    img: "images/hanzo.jpg",
  },
  {
    rank: 32,
    name: "Sasori",
    clan: "Sasori of RED sand",
    tagLine: "Red Secret Technique: Performance of a Hundred Puppets",
    img: "images/sasuri.jpg",
  },
  {
    rank: 33,
    name: "Deidara",
    clan: "Iwagakure village",
    tagLine: "C4 Karura, Clay Clone",
    img: "images/daidera.jpg",
  },
  {
    rank: 34,
    name: "Rock Lee",
    clan: "Konohagakure Clan",
    tagLine: "Sixth Gate: Gate of Joy",
    img: "images/rocklee.jpg",
  },
  {
    rank: 35,
    name: "Konan",
    clan: "Amegakure Village",
    tagLine: "Paper Person of God Technique",
    img: "images/konan.jpg",
  },
  {
    rank: 36,
    name: "Sakura Haruno",
    clan: "Uchiha Clan",
    tagLine: "Strength of a Hundred Seal",
    img: "images/sakura.jpg",
  },
  {
    rank: 37,
    name: "Tsunade Senju",
    clan: "Senju Clan",
    tagLine: "Ninja Art: Mitotic Regeneration",
    img: "images/tsunade.jpg",
  },
  {
    rank: 38,
    name: "Rōshi",
    clan: "Iwagakure Village",
    tagLine: "Lava Release Chakra Mode",
    img: "images/roshi.jpg",
  },
  {
    rank: 39,
    name: "Mifune",
    clan: "samurai warrior",
    tagLine: "Kurosawa Blade, General of the Land of Iron.",
    img: "images/mifune.jpg",
  },
  {
    rank: 40,
    name: "Mei Terumī",
    clan: "Terumī Clan",
    tagLine: "Boil Release, Lava Release",
    img: "images/mei.jpg",
  },
  {
    rank: 41,
    name: "Kitsuchi",
    clan: "Iwagakure Village",
    tagLine: "Earth Style: Mountain Jutsu",
    img: "images/kitsuchi.jpg",
  },
  {
    rank: 42,
    name: "Hinata Hyūga",
    clan: "Hyūga Clan",
    tagLine: "The former heiress of the Hyūga clan ",
    img: "images/hinata.jpg",
  },
  {
    rank: 43,
    name: "Darui",
    clan: "Kumogakure Village",
    tagLine: "Gale Style: Laser Circus",
    img: "images/darui.jpg",
  },
  {
    rank: 44,
    name: "Neji Hyūga",
    clan: "Hyūga Clan",
    tagLine: "Byakugan, Eight Trigrams: 128 Palms",
    img: "images/negi.jpg",
  },
  {
    rank: 45,
    name: "Shikamaru Nara",
    clan: "Nara Clan",
    tagLine: "Shadow Stitching Jutsu, IQ: 200+",
    img: "images/shikamaru.jpg",
  },
  {
    rank: 46,
    name: "Hidan",
    clan: "Yugakure Village",
    tagLine: "Curse Technique: Death Controlling Possessed Blood",
    img: "images/hidan.jpg",
  },
  {
    rank: 47,
    name: "Kimimaro Kaguya",
    clan: "Ōtsutsuki Clan",
    tagLine: "Bracken Dance",
    img: "images/kimimaro.jpg",
  },
  {
    rank: 48,
    name: "Lady Chiyo",
    clan: "Sand Village",
    tagLine: "Secret White Move: Chikamatsu's 10 Puppets",
    img: "images/chiyo.jpg",
  },
  {
    rank: 49,
    name: "Temari",
    clan: "Kazekage Clan.",
    tagLine:
      "mix sand into her attacks to catch the enemy off-guard, deadly tornado.",
    img: "images/temari.jpg",
  },
  {
    rank: 50,
    name: "Karin",
    clan: "Uzumaki Clan.",
    tagLine:
      "skilled martial artist and ninja, chakra manipulation, can sense chakra, able to suppress her chakra, regeneration and healing",
    img: "images/kiran.jpg",
  },
];
// all required html elemets
const newBtn = document.querySelector(".new-game");
const botImg = document.querySelector(".bot-img");
const botName = document.querySelector(".bot-name");
const botClan = document.querySelector(".bot-clan");
const botTagline = document.querySelector(".bot-tagLine");
var botId = document.querySelector("#default");

const botScore = document.querySelector(".score-bot");
const playerScore = document.querySelector(".score-player");
let bScore = 0,
  pScore = 0;
const cardGrid = document.querySelectorAll(".grid-img");

const playerImg = document.querySelector(".player-img");
const playerName = document.querySelector(".player-name");
const playerClan = document.querySelector(".player-clan");
const playerTagline = document.querySelector(".player-tagLine");

const ninjaSelect = document.querySelectorAll(".container-card");

const resultNround = document.querySelector(".round-no");
let roundCount = 1;
let clicked = 0;
let playGame = 0;
const nxtRndBtn = document.querySelector(".nxt-round");

const resetPlayer = function () {
  playerImg.src = "images/def.jpg";
  playerName.innerHTML = "???";
  playerClan.innerHTML = "???";
  playerTagline.innerHTML = ".....................";
};

const reset = function () {
  bScore = 0;
  pScore = 0;
  playerScore.innerHTML = pScore;
  botScore.innerHTML = bScore;
  roundCount = 1;
  botImg.src = "images/def.jpg";
  botName.innerHTML = "";
  botClan.innerHTML = "";
  botTagline.innerHTML = "";
  resultNround.style.color = "#170938d8";
  resetPlayer();
  resultNround.innerHTML = "Round 1";
  playGame = 0;
  clicked = 0;
};

const botNinjaFxn = function () {
  // generating 7 random numbers all together
  const RandArr = [];
  while (RandArr.length < 7) {
    var r = Math.floor(Math.random() * 50);
    if (RandArr.indexOf(r) === -1) RandArr.push(r);
  }

  // random bot - ninja selection

  botImg.src = warriors[RandArr[0]].img;
  botName.innerHTML = warriors[RandArr[0]].name;
  botClan.innerHTML = warriors[RandArr[0]].clan;
  botTagline.innerHTML = warriors[RandArr[0]].tagLine;
  botId.id = RandArr[0];
  RandArr.shift();

  // random - warriors in card grid

  cardGrid.forEach(function (e) {
    e.src = warriors[RandArr[0]].img;
    e.id = RandArr[0];
    RandArr.shift();
  });
};

// selecting players warrior
const ninjaPlayerFxn = function () {
  ninjaSelect.forEach(function (e) {
    e.addEventListener("click", (el) => {
      const pId = el.target.id;
      playerImg.src = warriors[pId].img;
      playerName.innerHTML = warriors[pId].name;
      playerClan.innerHTML = warriors[pId].clan;
      playerTagline.innerHTML = warriors[pId].tagLine;
      const pR = warriors[pId].rank;
      const bR = botId.id;
      // result of round
      if (clicked === 0) {
        if (bR < pR) {
          botScore.innerHTML = ++bScore;
          resultNround.innerHTML = `${warriors[pId].name} defeated!`;
          resultNround.style.color = "red";
        } else if (bR > pR) {
          playerScore.innerHTML = ++pScore;
          resultNround.innerHTML = `${warriors[pId].name} Won!`;
          resultNround.style.color = "green";
        }
      }
      clicked = 1; //clicked = 1 otherwise scores are fucked up
      // finall result
      if (roundCount == 5) {
        if (bScore > pScore) {
          playGame = 1;
          setTimeout(() => {
            resultNround.style.color = "red";
            resultNround.innerHTML = "you LOST the war";
          }, 1300);
        } else {
          playGame = 1;
          setTimeout(() => {
            resultNround.style.color = "green";
            resultNround.innerHTML = "you WON the war";
          }, 1300);
        }
      }

      cardGrid.forEach(function (e) {
        e.classList.add("stop-selection");
      });
      if (playGame === 0) nxtRoundFxn();
    });
  });
};

const nxtRoundFxn = function () {
  nxtRndBtn.classList.add("active");
};

nxtRndBtn.addEventListener("click", function (e) {
  resultNround.style.color = "#170938d8";
  resultNround.innerHTML = `Round ${++roundCount}`;
  resetPlayer();
  nxtRndBtn.classList.remove("active");
  botNinjaFxn();
  ninjaPlayerFxn();
  cardGrid.forEach(function (e) {
    e.classList.remove("stop-selection");
  });
  clicked = 0;
});

botNinjaFxn();
ninjaPlayerFxn();

// starting the whole game again
newBtn.addEventListener("click", function () {
  reset();
  botNinjaFxn();
  ninjaPlayerFxn();
  cardGrid.forEach(function (e) {
    e.classList.remove("stop-selection");
  });
});
