function Character(){
  this.health = 200;
}

Character.prototype.getHealth = function() {
	return this.health;
}


// Batman

function Batman() {
	this.name = "Batman";
	this.health = 1500;
};

Batman.prototype.getHealth = function () {
  return this.health ;
};

Batman.prototype.getName = function () {
  return this.name;
};

Batman.prototype.batarang = function (enemy) {
  enemy.health = (enemy.health - (Math.floor(Math.random()*30) + 60));
};

Batman.prototype.punch = function(enemy) {
  enemy.health = (enemy.health - (Math.floor(Math.random()*50) + 100));
};

Batman.prototype.kick = function(enemy) {
  enemy.health = (enemy.health - (Math.floor(Math.random()*70) + 140));
};


// Yeti

function Yeti() {
	this.name = "Yeti";
	this.health = 2000;
};

Yeti.prototype.getHealth = function () {
  return this.health ;
};

Yeti.prototype.getName = function () {
  return this.name;
};

Yeti.prototype.punch = function (enemy) {
  enemy.health = (enemy.health - (Math.floor(Math.random()*20) + 40));
};

Yeti.prototype.smash = function(enemy) {
  enemy.health = (enemy.health - (Math.floor(Math.random()*40) + 80));
};

Yeti.prototype.kick = function(enemy) {
  enemy.health = (enemy.health - (Math.floor(Math.random()*60) + 120));
};



// Jackaloupe

function Jackaloupe() {
	this.name = "Jackaloupe";
	this.health = 1000;
};

Jackaloupe.prototype.getHealth = function () {
  return this.health ;
};

Jackaloupe.prototype.getName = function () {
  return this.name;
};

Jackaloupe.prototype.stab = function (enemy) {
  enemy.health = (enemy.health - (Math.floor(Math.random()*50) + 90));
};

Jackaloupe.prototype.punch = function(enemy) {
  enemy.health = (enemy.health - (Math.floor(Math.random()*70) + 140));
};

Jackaloupe.prototype.kick = function(enemy) {
  enemy.health = (enemy.health - (Math.floor(Math.random()*90) + 190));
};
