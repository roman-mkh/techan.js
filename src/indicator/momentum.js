'use strict';

module.exports = function(indicatorMixin, accessor_ohlc) {  // Injected dependencies
  return function() { // Closure function
    var p = {},  // Container for private, direct access mixed in variables
        pastSamples,
        currentIndex;

    function indicator(data) {
        indicator.init();
        return data.map(momentum).filter(function(d) { return d.value !== null; });
    }

    function momentum(d, i) {
      var currentValue = p.accessor(d),
          value = indicator.mom(currentValue);
        //console.log({ date: p.accessor.d(d), value: value }, i, currentValue);
        return { date: p.accessor.d(d), value: value };
    }

    indicator.mom = function(currentValue) {
        var value = null;
        var pastValue;

        if (currentIndex+1 <= p.period) {
            pastSamples.push(currentValue);
        }
        else {
            var accessIndex = (currentIndex - p.period) % p.period;
            pastValue = pastSamples[accessIndex];
            pastSamples[accessIndex] = currentValue;
        }

        if (!!pastValue) {
            value = currentValue - pastValue;
            // round to 2 decimal points: value = Math.round((value + 0.0001) * 100) / 100;
        }

        currentIndex++;
        return value;
    };

    indicator.init = function() {
        pastSamples = [];
        currentIndex = 0;
        return indicator;
    };

    // Mixin 'superclass' methods and variables
    indicatorMixin(indicator, p)
      .accessor(accessor_ohlc())
      .period(12);

    return indicator;
  };
};