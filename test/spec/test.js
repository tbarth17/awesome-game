/* global describe, it */


(function () {
    'use strict';

    describe('Thug', function () {
      beforeEach(function(){
        this.thug = new Thug();
        this.hero = new Hero();
      });
        it('should have an inital health of 400', function () {
          expect(this.thug.getHealth()).to.equal(400);
        });
        it('should have the name Thug', function () {
          expect(this.thug.getName()).to.equal('Thug');
        });
        it('should have a punch attack that deals at least 30 damage', function () {
          this.thug.punchAttack(this.hero);
          expect(this.hero.getHealth()).to.be.below(170);
        });
        it('should have a club attack that deals at least 50 damage', function () {
          this.thug.clubAttack(this.hero);
          expect(this.hero.getHealth()).to.be.below(150);
        });
        it('should have a bludgeon attack that deals at least 70 damage', function () {
          this.thug.bludgeonAttack(this.hero);
          expect(this.hero.getHealth()).to.be.below(130);
        });
      });
})();

(function () {
    'use strict';

    describe('Ruffian', function () {
      beforeEach(function(){
        this.ruffian = new Ruffian();
        this.hero = new Hero();
      });
        it('should have an inital health of 300', function () {
          expect(this.ruffian.getHealth()).to.equal(300);
        });
        it('should have the name Ruffian', function () {
          expect(this.ruffian.getName()).to.equal('Ruffian');
        });
        it('should have a knife attack that deals at least 25 damage', function () {
          this.ruffian.knifeAttack(this.hero);
          expect(this.hero.getHealth()).to.be.below(175);
        });
        it('should have a pummel attack that deals at least 40 damage', function () {
          this.ruffian.pummelAttack(this.hero);
          expect(this.hero.getHealth()).to.be.below(160);
        });
        it('should have a cudgel attack that deals at least 60 damage', function () {
          this.ruffian.cudgelAttack(this.hero);
          expect(this.hero.getHealth()).to.be.below(140);
        });
    });
})();

(function () {
    'use strict';

    describe('Hoodlum', function () {
      beforeEach(function(){
        this.hoodlum = new Hoodlum();
        this.hero = new Hero();
      });
        it('should have an inital health of 200', function () {
          expect(this.hoodlum.getHealth()).to.equal(200);
        });
        it('should have the name Hoodlum', function () {
          expect(this.hoodlum.getName()).to.equal('Hoodlum');
        });
        it('should have a pocket knife attack that deals at least 15 damage', function () {
          this.hoodlum.pocketKnifeAttack(this.hero);
          expect(this.hero.getHealth()).to.be.below(185);
        });
        it('should have a baton attack that deals at least 25 damage', function () {
          this.hoodlum.batonAttack(this.hero);
          expect(this.hero.getHealth()).to.be.below(175);
        });
        it('should have a shank attack that deals at least 70 damage', function () {
          this.hoodlum.shankAttack(this.hero);
          expect(this.hero.getHealth()).to.be.below(130);
        });
    });
})();
