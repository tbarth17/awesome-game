function Hero() {
  this.health = 200;
};

Hero.prototype.getHealth = function () {
  return this.health ;
};

    function Thug() {
      this.name = 'Thug';
      this.health = 200;
    };

Thug.prototype.getHealth = function () {
  return this.health ;
};

Thug.prototype.getName = function () {
  return this.name;
};

Thug.prototype.punchAttack = function (hero) {
  hero.health = (hero.health - 20);
};

Thug.prototype.shankAttack = function(hero) {
  hero.health = (hero.health - 50);
};

Thug.prototype.clubAttack = function(hero) {
  hero.health = (hero.health - 70);
};
