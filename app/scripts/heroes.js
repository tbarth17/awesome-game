// Batman

function Batman() {
  this.name = "Batman";
  this.health = 1000;
  this.maxHealth = 1000;
}

Batman.prototype.getHealth = function () {
  return this.health ;
};

Batman.prototype.getName = function () {
  return this.name;
};

Batman.prototype.punchAttack = function() {
  selectedEnemy.health = (selectedEnemy.health - (Math.floor(Math.random()*50) + 100));
};

Batman.prototype.batarangAttack = function () {
  selectedEnemy.health = (selectedEnemy.health - (Math.floor(Math.random()*30) + 60));
};

Batman.prototype.kickAttack = function() {
  selectedEnemy.health = (selectedEnemy.health - (Math.floor(Math.random()*70) + 140));
};

function batarang() {
  hit = Math.floor(Math.random()*10);
  if (hit >= 3) {
      console.log('Batman hit with the batarang');
      selectedHero.batarangAttack() ;
    } else {
      console.log("Batman missed");
    }
}

function punch() {
  hit = Math.floor(Math.random()*10);
  if (hit >= 4) {
      console.log('Batman punched');
      selectedHero.punchAttack() ;
    } else {
      console.log("Batman missed");
    }
}

function kick() {
  hit = Math.floor(Math.random()*10);
  if (hit >= 5) {
      console.log('Batman kicked');
      selectedHero.kickAttack() ;
    } else {
      console.log("Batman missed");
    }
}

// Yeti

function Yeti() {
  this.name = "Yeti";
  this.health = 1250;
  this.maxHealth = 1250;
}

Yeti.prototype.getHealth = function () {
  return this.health ;
};

Yeti.prototype.getName = function () {
  return this.name;
};

Yeti.prototype.bashAttack = function () {
  selectedEnemy.health = (selectedEnemy.health - (Math.floor(Math.random()*20) + 40));
};

Yeti.prototype.smashAttack = function() {
  selectedEnemy.health = (selectedEnemy.health - (Math.floor(Math.random()*40) + 80));
};

Yeti.prototype.whallopAttack = function() {
  selectedEnemy.health = (selectedEnemy.health - (Math.floor(Math.random()*60) + 120));
};

function bash() {
  hit = Math.floor(Math.random()*10);
  if (hit >= 3) {
      console.log('Yeti bashed!');
      selectedHero.bashAttack() ;
    } else {
      console.log("Yeti missed!");
    }
}

function smash() {
  hit = Math.floor(Math.random()*10);
  if (hit >= 4) {
      console.log('Yeti smashed!');
      selectedHero.smashAttack() ;
    } else {
      console.log("Yeti missed!");
    }
}

function whallop() {
  hit = Math.floor(Math.random()*10);
  if (hit >= 5) {
      console.log('Yeti whalloped!');
      selectedHero.whallopAttack() ;
    } else {
      console.log("Yeti missed!");
    }
}

// Jackaloupe

function Jackaloupe() {
  this.name = "Jackaloupe";
  this.health = 750;
  this.maxHealth = 750;
}

Jackaloupe.prototype.getHealth = function () {
  return this.health ;
};

Jackaloupe.prototype.getName = function () {
  return this.name;
};

Jackaloupe.prototype.stabAttack = function () {
  selectedEnemy.health = (selectedEnemy.health - (Math.floor(Math.random()*50) + 90));
};

Jackaloupe.prototype.maulAttack = function() {
  selectedEnemy.health = (selectedEnemy.health - (Math.floor(Math.random()*70) + 140));
};

Jackaloupe.prototype.flyingRabbitKickAttack = function() {
  selectedEnemy.health = (selectedEnemy.health - (Math.floor(Math.random()*90) + 190));
};

function stab() {
  hit = Math.floor(Math.random()*10);
  if (hit >= 3) {
      console.log('Jackaloupe stabbed!');
      selectedHero.stabAttack() ;
    } else {
      console.log("Jackaloupe missed!");
    }
}

function maul() {
  hit = Math.floor(Math.random()*10);
  if (hit >= 4) {
      console.log('Jackaloupe mauled!');
      selectedHero.maulAttack() ;
    } else {
      console.log("Jackaloupe missed!");
    }
}

function flyingRabbitKick() {
  hit = Math.floor(Math.random()*10);
  if (hit >= 5) {
      console.log('Jackaloupe used Flying Rabbit Kick!');
      selectedHero.flyingRabbitKickAttack() ;
    } else {
      console.log("Jackaloupe missed!");
    }
}
