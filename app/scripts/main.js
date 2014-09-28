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
    selectedHero;


$(function() {
});



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
//    renderTemplate("enemies-template", "#enemy-one", enemy1);


  } else if (8.5>= hit1 && hit1 > 5) {

    enemy1 = new Ruffian();
    $("#enemy-one").removeClass("hidden");
    $("#enemy-one").addClass("ruffian");
//    renderTemplate("enemies-template", "#enemy-one", enemy1);

  } else {

    enemy1 = new Thug();
    $("#enemy-one").removeClass("hidden");
    $("#enemy-one").addClass("thug");
//    renderTemplate("enemies-template", "#enemy-one", enemy1);

  }

  var hit2 = Math.floor(Math.random()*10);
  if (hit2 <=5) {

    enemy2 = new Hoodlum();
    $("#enemy-two").removeClass("hidden");
    $("#enemy-two").addClass("hoodlum");
//    renderTemplate("enemies-template", "#enemy-two", enemy2);

  } else if (8.5>= hit2 && hit2 > 5) {

    enemy2 = new Ruffian();
    $("#enemy-two").removeClass("hidden");
    $("#enemy-two").addClass("ruffian");
//    renderTemplate("enemies-template", "#enemy-two", enemy2);

  } else {

    enemy2 = new Thug();
    $("#enemy-two").removeClass("hidden");
    $("#enemy-two").addClass("thug");
//    renderTemplate("enemies-template", "#enemy-two", enemy2);

  }

  var hit3 = Math.floor(Math.random()*10);
  if (hit3 <=5) {

    enemy3 = new Hoodlum();
    $("#enemy-three").removeClass("hidden");
    $("#enemy-three").addClass("hoodlum");
//    renderTemplate("#enemies-template", "#enemy-three", enemy3);

  } else if (8.5>= hit3 && hit3 > 5) {

    enemy3 = new Ruffian();
    $("#enemy-three").removeClass("hidden");
    $("#enemy-three").addClass("ruffian");
//    renderTemplate("enemies-template", "#enemy-three", enemy3);

  } else {

    enemy3 = new Thug();
    $("#enemy-three").removeClass("hidden");
    $("#enemy-three").addClass("thug");
//    renderTemplate("enemies-template", "#enemy-three", enemy3);

  }
setTimeout(function() {
  renderTemplate("enemies-template1", "#enemy-one", enemy1);
  renderTemplate("enemies-template2", "#enemy-two", enemy2);
  renderTemplate("enemies-template3", "#enemy-three", enemy3);

}, 500);


});

// Selecting Enemies //

$("#enemy-one").on('click', function() {
  selectedEnemy = enemy1;
  console.log(selectedEnemy);

  $(this).toggleClass("enemy-selected")
  .siblings().removeClass("enemy-selected");
});

$("#enemy-two").on('click', function() {
  selectedEnemy = enemy2;
  console.log(selectedEnemy);

  $(this).toggleClass("enemy-selected")
  .siblings().removeClass("enemy-selected");
});

$("#enemy-three").on('click', function() {
  selectedEnemy = enemy3;
  console.log(selectedEnemy);

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
    console.log(enemy1.name + ' is dead!')
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
    console.log(enemy2.name + ' is dead!')
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
    console.log(enemy3.name + ' is dead!')
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
}


/// Batman ///

function batHealth() {
  var health = document.getElementById('bat-health').value = selectedHero.health;
  if (health <= 0 ) {
    $('.right').append("<h2>You Lose<h2>");
  }
}

$('.batarang').on('click', function() {
  batarang(selectedEnemy);
  enemyHealth();


  setTimeout(function() {
    selectedEnemy = enemy1;
      enemy1RandomRetaliation();
      batHealth();
  }, 500);


  setTimeout(function() {
      selectedEnemy = enemy2;
      enemy2RandomRetaliation();
      batHealth();
  }, 1000);

  setTimeout(function() {
      selectedEnemy = enemy3;
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
      selectedEnemy = enemy1;
      enemy1RandomRetaliation();
      batHealth();
    }, 500);

    setTimeout(function() {
      selectedEnemy = enemy2;
      enemy2RandomRetaliation();
      batHealth();
    }, 1000);

    setTimeout(function() {
      selectedEnemy = enemy3;
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
      selectedEnemy = enemy1;
      enemy1RandomRetaliation();
      batHealth();
    }, 500);

    setTimeout(function() {
      selectedEnemy = enemy2;
      enemy2RandomRetaliation();
      batHealth();
    }, 1000);

    setTimeout(function() {
      selectedEnemy = enemy3;
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
    document.getElementById('yeti-health').value = selectedHero.health;
}

$('.bash').on('click', function() {
  bash(selectedEnemy);
  enemyHealth();

  setTimeout(function() {
    selectedEnemy = enemy1;
    enemy1RandomRetaliation();
    yetiHealth();

  }, 500);

  setTimeout(function() {
      selectedEnemy = enemy2;
      enemy2RandomRetaliation();
      yetiHealth();
  }, 1000);

  setTimeout(function() {
      selectedEnemy = enemy3;
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
      selectedEnemy = enemy1;
      enemy1RandomRetaliation();
      yetiHealth();

    }, 500);

    setTimeout(function() {
      selectedEnemy = enemy2;
      enemy2RandomRetaliation();
      yetiHealth();
    }, 1000);

    setTimeout(function() {
      selectedEnemy = enemy3;
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
      selectedEnemy = enemy1;
      enemy1RandomRetaliation();
      yetiHealth();

    }, 500);

    setTimeout(function() {
      selectedEnemy = enemy2;
      enemy2RandomRetaliation();
      yetiHealth();
    }, 1000);

    setTimeout(function() {
      selectedEnemy = enemy3;
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
  return document.getElementById('jack-health').value = selectedHero.health;
}

$('.stab').on('click', function() {
  stab(selectedEnemy);
  enemyHealth();

  setTimeout(function() {
    selectedEnemy = enemy1;
    enemy1RandomRetaliation();
    jackHealth();


  }, 500);

  setTimeout(function() {
    selectedEnemy = enemy2;
    enemy2RandomRetaliation();
    jackHealth();
  }, 1000);

  setTimeout(function() {
    selectedEnemy = enemy3;
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
      selectedEnemy = enemy1;
      enemy1RandomRetaliation();
      jackHealth();
    }, 500);

    setTimeout(function() {
      selectedEnemy = enemy2;
      enemy2RandomRetaliation();
      jackHealth();
    }, 1000);

    setTimeout(function() {
      selectedEnemy = enemy3;
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
      selectedEnemy = enemy1;
      enemy1RandomRetaliation();
      jackHealth();
    }, 500);

    setTimeout(function() {
      selectedEnemy = enemy2;
      enemy2RandomRetaliation();
      jackHealth();
    }, 1000);

    setTimeout(function() {
      selectedEnemy = enemy3;
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
