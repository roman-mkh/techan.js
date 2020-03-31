techanModule('indicator/momentum', function(specBuilder) {
    'use strict';

    var techan = require('../../../../src/techan'),
        data = require('./../_fixtures/data/momentum');

    var actualInit = function() {
      return techan.indicator.momentum;
    };

    specBuilder.require(require('../../../../src/indicator/momentum'), function(instanceBuilder) {
      instanceBuilder.instance('actual', actualInit, function(scope) {
        describe('And momentum is initialised with period(5)', function () {
          var momentum;

          beforeEach(function () {
            momentum = scope.momentum.period(5); // reduce window to 5 day (against default 12)
          });

          it('Then on default invoke, momentum should calculate correct values', function() {
            var mom = momentum(data.input);
            expect(mom.length).toEqual(data.expected.length);

            var accessor = techan.accessor.value();

            mom.forEach(function(d, i) {
              // round to 2 decimal digits for test comparation
              accessor.v(d, Math.round((accessor.v(d) + 0.0001) * 100) / 100);
              //console.log("rawValue/rounded", rawValue, roundedValue);
              expect(d).toEqual(data.expected[i]);
            });
          });
        });
      });
    });
  });