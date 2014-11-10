function renderTemplate(templateID, container, model) {
  var templateString = $('#' + templateID).text();
  var templateFunction = _.template(templateString);
  var renderedTemplate = templateFunction(model);
  $(container).append(renderedTemplate);
}

var thug,
    hoodlum,
    ruffian,
    batman,
    yeti,
    jackaloupe,
    hit,
    enemy1,
    enemy2,
    enemy3,
    selectedEnemy,
    retaliatingEnemy,
    selectedHero;


// Choose Your Hero //


$(".hero-button").on("click", function(event) {
  event.preventDefault();
  var selected = $("#hero-drop option:selected");

  $("#hero-con").hide();

  $("#vs").removeClass("hidden");
  $("#vs").addClass("vs");

  if (selected.val() == "Batman") {

    selectedHero = new Batman();
    $("#batman").removeClass("hidden");
    $("#batman").addClass("batman");
    $("body").addClass("bat-back");
  }

  if (selected.val() == "Yeti") {

    selectedHero = new Yeti();
    $("#yeti").removeClass("hidden");
    $("#yeti").addClass("yeti");
    $("body").addClass("yeti-back");
  }

  if (selected.val() == "Jackaloupe") {

    selectedHero = new Jackaloupe();
    $("#jackaloupe").removeClass("hidden");
    $("#jackaloupe").addClass("jackaloupe");
    $("body").addClass("jack-back");

  }

});


// Choose Random Enemies //


$(".generate").on("click", function() {
  event.preventDefault();

  $("#enemy-con").hide();

  var hit1 = Math.floor(Math.random()*10);
  if (hit1 <=5) {

    enemy1 = new Hoodlum();
    $("#enemy-one").removeClass("hidden");
    $("#enemy-one").addClass("hoodlum");

  } else if (8.5>= hit1 && hit1 > 5) {

    enemy1 = new Ruffian();
    $("#enemy-one").removeClass("hidden");
    $("#enemy-one").addClass("ruffian");

  } else {

    enemy1 = new Thug();
    $("#enemy-one").removeClass("hidden");
    $("#enemy-one").addClass("thug");

  }

  var hit2 = Math.floor(Math.random()*10);
  if (hit2 <=5) {

    enemy2 = new Hoodlum();
    $("#enemy-two").removeClass("hidden");
    $("#enemy-two").addClass("hoodlum");

  } else if (8.5>= hit2 && hit2 > 5) {

    enemy2 = new Ruffian();
    $("#enemy-two").removeClass("hidden");
    $("#enemy-two").addClass("ruffian");

  } else {

    enemy2 = new Thug();
    $("#enemy-two").removeClass("hidden");
    $("#enemy-two").addClass("thug");

  }

  var hit3 = Math.floor(Math.random()*10);
  if (hit3 <=5) {

    enemy3 = new Hoodlum();
    $("#enemy-three").removeClass("hidden");
    $("#enemy-three").addClass("hoodlum");

  } else if (8.5>= hit3 && hit3 > 5) {

    enemy3 = new Ruffian();
    $("#enemy-three").removeClass("hidden");
    $("#enemy-three").addClass("ruffian");

  } else {

    enemy3 = new Thug();
    $("#enemy-three").removeClass("hidden");
    $("#enemy-three").addClass("thug");
}
  setTimeout(function() {
    renderTemplate("enemies-template1", "#enemy-one", enemy1);
    renderTemplate("enemies-template2", "#enemy-two", enemy2);
    renderTemplate("enemies-template3", "#enemy-three", enemy3);

    $("#box").removeClass("hidden");
    $("#box").addClass("message-box");

    }, 500);

});

// Selecting Enemies //

$("#enemy-one").on('click', function() {
  selectedEnemy = enemy1;

  $(this).toggleClass("enemy-selected")
  .siblings().removeClass("enemy-selected");
});

$("#enemy-two").on('click', function() {
  selectedEnemy = enemy2;

  $(this).toggleClass("enemy-selected")
  .siblings().removeClass("enemy-selected");
});

$("#enemy-three").on('click', function() {
  selectedEnemy = enemy3;

  $(this).toggleClass("enemy-selected")
  .siblings().removeClass("enemy-selected");
});

////Enemies random attack functions////

function randomThugAttack(hero){
  var attack = Math.floor(Math.random()*10);
  if (attack <=5) {
    beat(hero);
  } else if (8.5>= attack && attack > 5) {
    club(hero);
  } else {
    bludgeon(hero);
  }
}

function randomRuffianAttack(hero){
  var attack = Math.floor(Math.random()*10);
  if (attack <=5) {
    knife(hero);
  } else if (8.5>= attack && attack > 5) {
    pummel(hero);
  } else {
    cudgel(hero);
  }
}

function randomHoodlumAttack(hero){
  var attack = Math.floor(Math.random()*10);
  if (attack <=5) {
    pocketKnife(hero);
  } else if (8.5>= attack && attack > 5) {
    baton(hero);
  } else {
    shank(hero);
  }
}

function enemy1RandomRetaliation() {
  if (enemy1.health <= 0) {
    $(".message-box").prepend(enemy1.name + ' is dead!').prepend("<br />");
  } else if (enemy1 instanceof Thug) {
    randomThugAttack();
  } else if (enemy1 instanceof Ruffian){
    randomRuffianAttack();
  } else {
    randomHoodlumAttack();
  }
}

function enemy2RandomRetaliation() {
  if (enemy2.health <= 0) {
    $(".message-box").prepend(enemy2.name + ' is dead!').prepend("<br />");
  } else if (enemy2 instanceof Thug) {
    randomThugAttack();
  } else if (enemy2 instanceof Ruffian){
    randomRuffianAttack();
  } else {
    randomHoodlumAttack();
  }
}

function enemy3RandomRetaliation() {
  if (enemy3.health <= 0) {
    $(".message-box").prepend(enemy3.name + ' is dead!').prepend("<br />");
  } else if (enemy3 instanceof Thug) {
    randomThugAttack();
  } else if (enemy3 instanceof Ruffian){
    randomRuffianAttack();
  } else {
    randomHoodlumAttack();
  }
}

/// Enemies Health Bar ///

function enemyHealth() {
  if (selectedEnemy === enemy3) {
       (document.getElementById('enemy3-health').value = selectedEnemy.health);
  } else if (selectedEnemy === enemy2) {
      (document.getElementById('enemy2-health').value = selectedEnemy.health);
  } else if (selectedEnemy === enemy1){
      (document.getElementById('enemy1-health').value = selectedEnemy.health);
  }

  if (enemy1.health <= 0 && enemy2.health <= 0 && enemy3.health <= 0) {
    $(".enemies").addClass("hidden");
    $("#win").removeClass("hidden");
    $("#win").addClass("win");
  }
}


/// Batman ///

function batHealth() {
  var health = document.getElementById('bat-health').value = selectedHero.health;
  if (health <= 0 ) {
    $("#batman").addClass("hidden");
    $("#lose").removeClass("hidden");
    $("#lose").addClass("lose");
  }
}

$('.batarang').on('click', function() {
  batarang(selectedEnemy);
  enemyHealth();


  setTimeout(function() {
    retaliatingEnemy = enemy1;
      enemy1RandomRetaliation();
      batHealth();
  }, 500);


  setTimeout(function() {
      retaliatingEnemy = enemy2;
      enemy2RandomRetaliation();
      batHealth();
  }, 1000);

  setTimeout(function() {
      retaliatingEnemy = enemy3;
      enemy3RandomRetaliation();
      batHealth();
  }, 1500);


   if (selectedEnemy === enemy1) {

      $("#enemy-one").removeClass("enemy-selected");

    } else if (selectedEnemy === enemy2) {

      $("#enemy-two").removeClass("enemy-selected");

    } else if (selectedEnemy === enemy3) {

      $("#enemy-three").removeClass("enemy-selected");

    }
});


$('.punch').on('click', function() {
  punch(selectedEnemy);
  enemyHealth();


    setTimeout(function() {
      retaliatingEnemy = enemy1;
      enemy1RandomRetaliation();
      batHealth();
    }, 500);

    setTimeout(function() {
      retaliatingEnemy = enemy2;
      enemy2RandomRetaliation();
      batHealth();
    }, 1000);

    setTimeout(function() {
      retaliatingEnemy = enemy3;
      enemy3RandomRetaliation();
      batHealth();
    }, 1500);

   if (selectedEnemy === enemy1) {

      $("#enemy-one").removeClass("enemy-selected");

    } else if (selectedEnemy === enemy2) {

      $("#enemy-two").removeClass("enemy-selected");

    } else if (selectedEnemy === enemy3) {

      $("#enemy-three").removeClass("enemy-selected");

    }
});

$('.kick').on('click', function() {
  kick(selectedEnemy);
  enemyHealth();

    setTimeout(function() {
      retaliatingEnemy = enemy1;
      enemy1RandomRetaliation();
      batHealth();
    }, 500);

    setTimeout(function() {
      retaliatingEnemy = enemy2;
      enemy2RandomRetaliation();
      batHealth();
    }, 1000);

    setTimeout(function() {
      retaliatingEnemy = enemy3;
      enemy3RandomRetaliation();
      batHealth();
    }, 1500);

   if (selectedEnemy === enemy1) {

      $("#enemy-one").removeClass("enemy-selected");

    } else if (selectedEnemy === enemy2) {

      $("#enemy-two").removeClass("enemy-selected");

    } else if (selectedEnemy === enemy3) {

      $("#enemy-three").removeClass("enemy-selected");

    }
});


/// Yeti ///

function yetiHealth() {
  var health = document.getElementById('yeti-health').value = selectedHero.health;

  if (health <= 0 ) {
    $("#yeti").addClass("hidden");
    $("#lose").removeClass("hidden");
    $("#lose").addClass("lose");
  }
}

$('.bash').on('click', function() {
  bash(selectedEnemy);
  enemyHealth();

  setTimeout(function() {
    retaliatingEnemy = enemy1;
    enemy1RandomRetaliation();
    yetiHealth();

  }, 500);

  setTimeout(function() {
      retaliatingEnemy = enemy2;
      enemy2RandomRetaliation();
      yetiHealth();
  }, 1000);

  setTimeout(function() {
      retaliatingEnemy = enemy3;
      enemy3RandomRetaliation();
      yetiHealth();
  }, 1500);

   if (selectedEnemy === enemy1) {

      $("#enemy-one").removeClass("enemy-selected");

    } else if (selectedEnemy === enemy2) {

      $("#enemy-two").removeClass("enemy-selected");

    } else if (selectedEnemy === enemy3) {

      $("#enemy-three").removeClass("enemy-selected");

    }
});

$('.smash').on('click', function() {
  smash(selectedEnemy);
  enemyHealth();

    setTimeout(function() {
      retaliatingEnemy = enemy1;
      enemy1RandomRetaliation();
      yetiHealth();

    }, 500);

    setTimeout(function() {
      retaliatingEnemy = enemy2;
      enemy2RandomRetaliation();
      yetiHealth();
    }, 1000);

    setTimeout(function() {
      retaliatingEnemy = enemy3;
      enemy3RandomRetaliation();
      yetiHealth();
    }, 1500);

   if (selectedEnemy === enemy1) {

      $("#enemy-one").removeClass("enemy-selected");

    } else if (selectedEnemy === enemy2) {

      $("#enemy-two").removeClass("enemy-selected");

    } else if (selectedEnemy === enemy3) {

      $("#enemy-three").removeClass("enemy-selected");

    }
});

$('.whallop').on('click', function() {
  whallop(selectedEnemy);
  enemyHealth();

    setTimeout(function() {
      retaliatingEnemy = enemy1;
      enemy1RandomRetaliation();
      yetiHealth();

    }, 500);

    setTimeout(function() {
      retaliatingEnemy = enemy2;
      enemy2RandomRetaliation();
      yetiHealth();
    }, 1000);

    setTimeout(function() {
      retaliatingEnemy = enemy3;
      enemy3RandomRetaliation();
      yetiHealth();
    }, 1500);

   if (selectedEnemy === enemy1) {

      $("#enemy-one").removeClass("enemy-selected");

    } else if (selectedEnemy === enemy2) {

      $("#enemy-two").removeClass("enemy-selected");

    } else if (selectedEnemy === enemy3) {

      $("#enemy-three").removeClass("enemy-selected");

    }
});




/// Jackaloupe ///

function jackHealth() {
  var health = document.getElementById('jack-health').value = selectedHero.health;

  if (health <= 0 ) {
    $("#jackaloupe").addClass("hidden");
    $("#lose").removeClass("hidden");
    $("#lose").addClass("lose");
  }
}

$('.stab').on('click', function() {
  stab(selectedEnemy);
  enemyHealth();

  setTimeout(function() {
    retaliatingEnemy = enemy1;
    enemy1RandomRetaliation();
    jackHealth();
  }, 500);

  setTimeout(function() {
    retaliatingEnemy = enemy2;
    enemy2RandomRetaliation();
    jackHealth();
  }, 1000);

  setTimeout(function() {
    retaliatingEnemy = enemy3;
    enemy3RandomRetaliation();
    jackHealth();
  }, 1500);


   if (selectedEnemy === enemy1) {

      $("#enemy-one").removeClass("enemy-selected");

    } else if (selectedEnemy === enemy2) {

      $("#enemy-two").removeClass("enemy-selected");

    } else if (selectedEnemy === enemy3) {

      $("#enemy-three").removeClass("enemy-selected");

    }
});

$('.maul').on('click', function() {
  maul(selectedEnemy);
  enemyHealth();

    setTimeout(function() {
      retaliatingEnemy = enemy1;
      enemy1RandomRetaliation();
      jackHealth();
    }, 500);

    setTimeout(function() {
      retaliatingEnemy = enemy2;
      enemy2RandomRetaliation();
      jackHealth();
    }, 1000);

    setTimeout(function() {
      retaliatingEnemy = enemy3;
      enemy3RandomRetaliation();
      jackHealth();
    }, 1500);

   if (selectedEnemy === enemy1) {

      $("#enemy-one").removeClass("enemy-selected");

    } else if (selectedEnemy === enemy2) {

      $("#enemy-two").removeClass("enemy-selected");

    } else if (selectedEnemy === enemy3) {

      $("#enemy-three").removeClass("enemy-selected");

    }
});

$('.flyingRabbitKick').on('click', function() {
  flyingRabbitKick(selectedEnemy);
  enemyHealth();

    setTimeout(function() {
      retaliatingEnemy = enemy1;
      enemy1RandomRetaliation();
      jackHealth();
    }, 500);

    setTimeout(function() {
      retaliatingEnemy = enemy2;
      enemy2RandomRetaliation();
      jackHealth();
    }, 1000);

    setTimeout(function() {
      retaliatingEnemy = enemy3;
      enemy3RandomRetaliation();
      jackHealth();
    }, 1500);

   if (selectedEnemy === enemy1) {

      $("#enemy-one").removeClass("enemy-selected");

    } else if (selectedEnemy === enemy2) {

      $("#enemy-two").removeClass("enemy-selected");

    } else if (selectedEnemy === enemy3) {

      $("#enemy-three").removeClass("enemy-selected");

    }
});

$(".reload").on("click", function() {
  location.reload(true);
});

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
      retaliatingEnemy.beatAttack();
    } else {
      $(".message-box").prepend("Thug missed").prepend("<br />");
    }
}

function club() {
  hit = Math.floor(Math.random()*10);
  if (hit > 4) {
      $(".message-box").prepend('Thug hit you with a club').prepend("<br />");
      retaliatingEnemy.clubAttack();
    } else {
      $(".message-box").prepend("Thug missed").prepend("<br />");
    }
}


function bludgeon(hero) {
  hit = Math.floor(Math.random()*10);
  if (hit > 5) {
      $(".message-box").prepend('Thug gave you a bludgeoning!').prepend("<br />");
      retaliatingEnemy.bludgeonAttack();
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
      retaliatingEnemy.knifeAttack();
    } else {
      $(".message-box").prepend("Ruffian missed").prepend("<br />");
    }
}

function pummel() {
  hit = Math.floor(Math.random()*10);
  if (hit > 4) {
      $(".message-box").prepend('Ruffian pummeled you!').prepend("<br />");
      retaliatingEnemy.pummelAttack();
    } else {
      $(".message-box").prepend("Ruffian missed").prepend("<br />");
    }
}

  function cudgel() {
    hit = Math.floor(Math.random()*10);
    if (hit > 5) {
        $(".message-box").prepend('Ruffian cudgeled you!').prepend("<br />");
        retaliatingEnemy.cudgelAttack();
      } else {
        $(".message-box").prepend("Ruffian missed").prepend("<br />");
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
      retaliatingEnemy.pocketKnifeAttack();
    } else {
      $(".message-box").prepend("Hoodlum missed").prepend("<br />");
    }
}

function baton() {
  hit = Math.floor(Math.random()*10);
  if (hit > 4) {
    $(".message-box").prepend('Hoodlum hit you with a baton!').prepend("<br />");
      retaliatingEnemy.batonAttack();
    } else {
      $(".message-box").prepend("Hoodlum missed").prepend("<br />");
    }
}


function shank() {
  hit = Math.floor(Math.random()*10);
  if (hit > 5) {
      $(".message-box").prepend('Hoodlum shanked you!').prepend("<br />");
      retaliatingEnemy.shankAttack();
    } else {
      $(".message-box").prepend("Hoodlum missed").prepend("<br />");
    }
}
