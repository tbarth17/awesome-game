// Batman

function Batman() {
  this.name = "Batman";
  this.health = 800;
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
      $(".message-box").prepend('Batman hit with the batarang').prepend("<br />");
      selectedHero.batarangAttack() ;
    } else {
      $(".message-box").prepend("Batman missed").prepend("<br />");
    }
}

function punch() {
  hit = Math.floor(Math.random()*10);
  if (hit >= 4) {
      $(".message-box").prepend('Batman punched').prepend("<br />");
      selectedHero.punchAttack() ;
    } else {
      $(".message-box").prepend("Batman missed").prepend("<br />");
    }
}

function kick() {
  hit = Math.floor(Math.random()*10);
  if (hit >= 5) {
      $(".message-box").prepend('Batman kicked').prepend("<br />");
      selectedHero.kickAttack() ;
    } else {
      $(".message-box").prepend("Batman missed").prepend("<br />");
    }
}

// Yeti

function Yeti() {
  this.name = "Yeti";
  this.health = 1000;
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
      $(".message-box").prepend('Yeti bashed!').prepend("<br />");
      selectedHero.bashAttack() ;
    } else {
      $(".message-box").prepend("Yeti missed!").prepend("<br />");
    }
}

function smash() {
  hit = Math.floor(Math.random()*10);
  if (hit >= 4) {
      $(".message-box").prepend('Yeti smashed!').prepend("<br />");
      selectedHero.smashAttack() ;
    } else {
      $(".message-box").prepend("Yeti missed!").prepend("<br />");
    }
}

function whallop() {
  hit = Math.floor(Math.random()*10);
  if (hit >= 5) {
      $(".message-box").prepend('Yeti whalloped!').prepend("<br />");
      selectedHero.whallopAttack() ;
    } else {
      $(".message-box").prepend("Yeti missed!").prepend("<br />");
    }
}

// Jackaloupe

function Jackaloupe() {
  this.name = "Jackaloupe";
  this.health = 600;
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
      $(".message-box").prepend('Jackaloupe stabbed!').prepend("<br />");
      selectedHero.stabAttack() ;
    } else {
      $(".message-box").prepend("Jackaloupe missed!").prepend("<br />");
    }
}

function maul() {
  hit = Math.floor(Math.random()*10);
  if (hit >= 4) {
      $(".message-box").prepend('Jackaloupe mauled!').prepend("<br />");
      selectedHero.maulAttack() ;
    } else {
      $(".message-box").prepend("Jackaloupe missed!").prepend("<br />");
    }
}

function flyingRabbitKick() {
  hit = Math.floor(Math.random()*10);
  if (hit >= 5) {
      $(".message-box").prepend('Jackaloupe used Flying Rabbit Kick!').prepend("<br />");
      selectedHero.flyingRabbitKickAttack() ;
    } else {
      $(".message-box").prepend("Jackaloupe missed!").prepend("<br />");
    }
}
