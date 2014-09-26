(function () {
    'use strict';

    describe('Heroes', function () {
    	beforeEach(function() {
    		this.batman = new Batman();
    		this.character = new Character();
    	})       
        it('should test health', function () {
        	this.batman.batarangAttack(this.character);
        	expect(this.character.getHealth()).to.be.below(150);
        });
    });
})();
