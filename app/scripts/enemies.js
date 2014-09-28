/////////THUG////////

    function Thug() {
      this.name = 'Thug';
      this.health = 550;
      this.maxHealth = 550;
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
      console.log('Thug gave you a beatdown!');
      selectedEnemy.beatAttack();
    } else {
      console.log("Thug missed");
    }
};

function club() {
  hit = Math.floor(Math.random()*10);
  if (hit > 4) {
      console.log('Thug hit you with a club');
      selectedEnemy.clubAttack();
    } else {
      console.log("Thug missed");
    }
};

function bludgeon(hero) {
  hit = Math.floor(Math.random()*10);
  if (hit > 5) {
      console.log('Thug gave you a bludgeoning!');
      selectedEnemy.bludgeonAttack();
    } else {
      console.log("Thug missed");
    }
};

/////////Ruffian////////

    function Ruffian() {
      this.name = 'Ruffian';
      this.health = 450;
      this.maxHealth = 450;
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
      console.log('Ruffian knifed you!');
      selectedEnemy.knifeAttack();
    } else {
      console.log("Ruffian missed");
    }
};

function pummel() {
  hit = Math.floor(Math.random()*10);
  if (hit > 4) {
      console.log('Ruffian pummeled you!');
      selectedEnemy.pummelAttack();
    } else {
      console.log("Ruffian missed");
    }
};

function cudgel() {
  hit = Math.floor(Math.random()*10);
  if (hit > 5) {
      console.log('Ruffian cudgeled you!');
      selectedEnemy.cudgelAttack();
    } else {
      console.log("Ruffian missed");
    }
};

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
      console.log('Hoodlum pocketknifed you!');
      selectedEnemy.pocketKnifeAttack();
    } else {
      console.log("Hoodlum missed");
    }
};

function baton() {
  hit = Math.floor(Math.random()*10);
  if (hit > 4) {
      console.log('Hoodlum hit you with a baton!');
      selectedEnemy.batonAttack();
    } else {
      console.log("Hoodlum missed");
    }
};

function shank() {
  hit = Math.floor(Math.random()*10);
  if (hit > 5) {
      console.log('Hoodlum shanked you!');
      selectedEnemy.shankAttack();
    } else {
      console.log("Hoodlum missed");
    }
};

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
