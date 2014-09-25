/* global describe, it */


(function () {
    'use strict';

    describe('Thug', function () {
      beforeEach(function(){
        this.thug = new Thug();
        this.hero = new Hero();
      });
        it('should have an inital health of 200', function () {
          expect(this.thug.getHealth()).to.equal(200);
        });
        it('should have the name Thug', function () {
          expect(this.thug.getName()).to.equal('Thug');
        });
        it('should have a punch attack that deals 20 damage', function () {
          this.thug.punchAttack(this.hero);
          expect(this.hero.getHealth()).to.equal(180);
        });
        it('should have a shank attack that deals 50 damage', function () {
          this.thug.shankAttack(this.hero);
          expect(this.hero.getHealth()).to.equal(150);
        });
        it('should have a club attack that deals 70 damage', function () {
          this.thug.clubAttack(this.hero);
          expect(this.hero.getHealth()).to.equal(130);
        });
    });
})();
