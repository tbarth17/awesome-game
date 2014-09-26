function Character(){
  this.health = 200;
}

Character.prototype.getHealth = function() {
	return this.health;
}


// Batman

function Batman() {
	this.name = "Batman";
	this.health = 300; 
};

Batman.prototype.getHealth = function () {
  return this.health ;
};

Batman.prototype.getName = function () {
  return this.name;
};

Batman.prototype.batarang = function (enemy) {
  enemy.health = (enemy.health - (Math.floor(Math.random()*15) + 30));
};

Batman.prototype.punch = function(enemy) {
  enemy.health = (enemy.health - (Math.floor(Math.random()*25) + 50));
};

Batman.prototype.kick = function(enemy) {
  enemy.health = (enemy.health - (Math.floor(Math.random()*35) + 70));
};


// Yeti

function Yeti() {
	this.name = "Yeti";
	this.health = 200; 
};

Yeti.prototype.getHealth = function () {
  return this.health ;
};

Yeti.prototype.getName = function () {
  return this.name;
};

Yeti.prototype.smash = function (enemy) {
  enemy.health = (enemy.health - (Math.floor(Math.random()*15) + 30));
};

Yeti.prototype.punch = function(enemy) {
  enemy.health = (enemy.health - (Math.floor(Math.random()*25) + 50));
};

Yeti.prototype.kick = function(enemy) {
  enemy.health = (enemy.health - (Math.floor(Math.random()*35) + 70));
};



// Jackaloupe

function Jackaloupe() {
	this.name = "Jackaloupe";
	this.health = 250; 
};

Jackaloupe.prototype.getHealth = function () {
  return this.health ;
};

Jackaloupe.prototype.getName = function () {
  return this.name;
};

Jackaloupe.prototype.stab = function (enemy) {
  enemy.health = (enemy.health - (Math.floor(Math.random()*15) + 30));
};

Jackaloupe.prototype.punch = function(enemy) {
  enemy.health = (enemy.health - (Math.floor(Math.random()*25) + 50));
};

Jackaloupe.prototype.kick = function(enemy) {
  enemy.health = (enemy.health - (Math.floor(Math.random()*35) + 70));
};


