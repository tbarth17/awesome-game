function Hero() {
  this.health = 200;
};

Hero.prototype.getHealth = function () {
  return this.health ;
};

/////////THUG////////

    function Thug() {
      this.name = 'Thug';
      this.health = 400;
    }

Thug.prototype.getHealth = function () {
  return this.health ;
};

Thug.prototype.getName = function () {
  return this.name;
};

Thug.prototype.punchAttack = function (hero) {
  hero.health = (hero.health - (Math.floor(Math.random()*15) + 30));
};

Thug.prototype.clubAttack = function(hero) {
  hero.health = (hero.health - (Math.floor(Math.random()*25) + 50));
};

Thug.prototype.bludgeonAttack = function(hero) {
  hero.health = (hero.health - (Math.floor(Math.random()*35) + 70));
};



/////////Ruffian////////

    function Ruffian() {
      this.name = 'Ruffian';
      this.health = 300;
    }

Ruffian.prototype.getHealth = function () {
return this.health ;
};

Ruffian.prototype.getName = function () {
return this.name;
};

Ruffian.prototype.knifeAttack = function (hero) {
hero.health = (hero.health - (Math.floor(Math.random()*15) + 25));
};

Ruffian.prototype.pummelAttack = function(hero) {
hero.health = (hero.health - (Math.floor(Math.random()*20) + 40));
};

Ruffian.prototype.cudgelAttack = function(hero) {
hero.health = (hero.health - (Math.floor(Math.random()*25) + 60));
};

/////////Hoodlum////////

function Hoodlum() {
  this.name = 'Hoodlum';
  this.health = 200;
}

Hoodlum.prototype.getHealth = function () {
return this.health ;
};

Hoodlum.prototype.getName = function () {
return this.name;
};

Hoodlum.prototype.pocketKnifeAttack = function (hero) {
hero.health = (hero.health - (Math.floor(Math.random()*10) + 15));
};

Hoodlum.prototype.batonAttack = function(hero) {
hero.health = (hero.health - (Math.floor(Math.random()*20) + 25));
};

Hoodlum.prototype.shankAttack = function(hero) {
hero.health = (hero.health - (Math.floor(Math.random()*30) + 70));
};
