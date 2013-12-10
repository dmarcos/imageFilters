(function() {

  describe('Test', function() {

    this.timeout(1000);

    it('should find global variable', function(done) {
      assert.isDefined(ImageFilters, "the global variable should exist");
      done();
    });

  });

}).call(this);