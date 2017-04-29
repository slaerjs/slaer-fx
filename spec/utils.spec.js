
var slaer = require('../dist/slaerfx.js');

describe('extend', function() {
  it('should extend the out object, preserving any existing keys', function() {
    var out = {
      'abc': 123
    };

    slaer.extend(out, {
      'abc': 456,
      'xyz': 789
    });

    expect(out.abc).toEqual(123);
    expect(out.xyz).toEqual(789);
  });
  it('should run in L <-- R order', function() {
    var out = slaer.extend({}, { 'abc': 456 }, { 'abc': 123 });

    expect(out.abc).toEqual(123);
  });
});

describe('merge', function() {
  it('should extend the out object, overwriting any existing keys', function() {
    var out = {
      'abc': 123
    };

    slaer.merge(out, {
      'abc': 456,
      'xyz': 789
    });

    expect(out.abc).toEqual(456);
    expect(out.xyz).toEqual(789);
  });
  it('should run in L --> R order', function() {
    var out = slaer.merge({}, { 'abc': 456 }, { 'abc': 123 });

    expect(out.abc).toEqual(123);
  });
});

describe('mergeExtend', function() {
  it('should exxtend an object based on the results from a merge operation', function() {
    var out = slaer.mergeExtend({}, { 'abc': 456 }, { 'abc': 123, 'xyz': 789 });

    expect(out.abc).toEqual(123);
    expect(out.xyz).toEqual(789);
  });
});
