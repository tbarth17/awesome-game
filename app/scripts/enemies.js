/////////THUG////////

    function Thug() {
      this.name = 'Thug';
      this.health = 550;
      this.maxHealth = 550;
      this.image = "images/thug.jpg";

    }

Thug.prototype.getHealth = function () {
  return this.health ;
};

Thug.prototype.getName = function () {
  return this.name;
};

Thug.prototype.beatAttack = function () {
  selectedHero.health = (selectedHero.health - (Math.floor(Math.random()*15) + 30));
};

Thug.prototype.clubAttack = function() {
  selectedHero.health = (selectedHero.health - (Math.floor(Math.random()*25) + 50));
};

Thug.prototype.bludgeonAttack = function() {
  selectedHero.health = (selectedHero.health - (Math.floor(Math.random()*35) + 70));
};

function beat() {
  hit = Math.floor(Math.random()*10);
  if (hit > 3) {
      $(".message-box").prepend('Thug gave you a beatdown!').prepend("<br />");
      selectedEnemy.beatAttack();
    } else {
      $(".message-box").prepend("Thug missed").prepend("<br />");
    }
}

function club() {
  hit = Math.floor(Math.random()*10);
  if (hit > 4) {
      $(".message-box").prepend('Thug hit you with a club').prepend("<br />");
      selectedEnemy.clubAttack();
    } else {
      $(".message-box").prepend("Thug missed").prepend("<br />");
    }
}

function bludgeon(hero) {
  hit = Math.floor(Math.random()*10);
  if (hit > 5) {
      $(".message-box").prepend('Thug gave you a bludgeoning!').prepend("<br />");
      selectedEnemy.bludgeonAttack();
    } else {
      $(".message-box").prepend("Thug missed").prepend("<br />");
    }
}

/////////Ruffian////////

    function Ruffian() {
      this.name = 'Ruffian';
      this.health = 450;
      this.maxHealth = 450;
      this.image ="images/ruffian.jpg";

    }

Ruffian.prototype.getHealth = function () {
return this.health ;
};

Ruffian.prototype.getName = function () {
return this.name;
};

Ruffian.prototype.knifeAttack = function () {
selectedHero.health = (selectedHero.health - (Math.floor(Math.random()*15) + 25));
};

Ruffian.prototype.pummelAttack = function() {
selectedHero.health = (selectedHero.health - (Math.floor(Math.random()*20) + 40));
};

Ruffian.prototype.cudgelAttack = function() {
selectedHero.health = (selectedHero.health - (Math.floor(Math.random()*25) + 60));
};

function knife() {
  hit = Math.floor(Math.random()*10);
  if (hit > 3) {
      $(".message-box").prepend('Ruffian knifed you!').prepend("<br />");
      selectedEnemy.knifeAttack();
    } else {
      $(".message-box").prepend("Ruffian missed").prepend("<br />");
    }
}

function pummel() {
  hit = Math.floor(Math.random()*10);
  if (hit > 4) {
      $(".message-box").prepend('Ruffian pummeled you!').prepend("<br />");
      selectedEnemy.pummelAttack();
    } else {
      $(".message-box").prepend("Ruffian missed").prepend("<br />");
    }
}

function cudgel() {
  hit = Math.floor(Math.random()*10);
  if (hit > 5) {
      $(".message-box").prepend('Ruffian cudgeled you!').prepend("<br />");
      selectedEnemy.cudgelAttack();
    } else {
      $(".message-box").prepend("Ruffian missed").prepend("<br />");
    }
}

function randomRuffianAttack(){
  var attack = Math.floor(Math.random()*10);
  if (attack <=5) {
    knife(selectedHero);
  } else if (8.5>= attack && attack > 5) {
    pummel(selectedHero);
  } else {
    cudgel(selectedHero);
  }

}

/////////Hoodlum////////

function Hoodlum() {
  this.name = 'Hoodlum';
  this.health = 350;
  this.maxHealth = 350;
  this.image = "images/hoodlum.jpg";
}

Hoodlum.prototype.getHealth = function () {
return this.health ;
};

Hoodlum.prototype.getName = function () {
return this.name;
};

Hoodlum.prototype.pocketKnifeAttack = function () {
selectedHero.health = (selectedHero.health - (Math.floor(Math.random()*10) + 15));
};

Hoodlum.prototype.batonAttack = function() {
selectedHero.health = (selectedHero.health - (Math.floor(Math.random()*20) + 25));
};

Hoodlum.prototype.shankAttack = function() {
selectedHero.health = (selectedHero.health - (Math.floor(Math.random()*30) + 70));
};

function pocketKnife() {
  hit = Math.floor(Math.random()*10);
  if (hit > 3) {
      $(".message-box").prepend('Hoodlum pocketknifed you!').prepend("<br />");
      selectedEnemy.pocketKnifeAttack();
    } else {
      $(".message-box").prepend("Hoodlum missed").prepend("<br />");
    }
}

function baton() {
  hit = Math.floor(Math.random()*10);
  if (hit > 4) {
    $(".message-box").prepend('Hoodlum hit you with a baton!').prepend("<br />");
      selectedEnemy.batonAttack();
    } else {
      $(".message-box").prepend("Hoodlum missed").prepend("<br />");
    }
}

function shank() {
  hit = Math.floor(Math.random()*10);
  if (hit > 5) {
      $(".message-box").prepend('Hoodlum shanked you!').prepend("<br />");
      selectedEnemy.shankAttack();
    } else {
      $(".message-box").prepend("Hoodlum missed").prepend("<br />");
    }
}

function randomHoodlumAttack(){
  var attack = Math.floor(Math.random()*10);
  if (attack <=5) {
    pocketKnife(selectedHero);
  } else if (8.5>= attack && attack > 5) {
    baton(selectedHero);
  } else {
    shank(selectedHero);
  }

}
