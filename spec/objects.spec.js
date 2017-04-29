
var slaer = require('../dist/slaerfx.js');

describe('creating an object based on an entity', function() {
  it('should contain all the settings for the entity on the object', function() {
    slaer.reset();

    var e1 = slaer.entity('e1', {
      abc: '123',
      xyz: 456
    });

    var o1 = e1.create('o1');

    expect(o1.components['abc']).toEqual(e1.components['abc']);
    expect(o1.components['xyz']).toEqual(e1.components['xyz']);
  });
  it('should override the components when specifically passed in', function() {
    slaer.reset();

    var e1 = slaer.entity('e1', {
      abc: '123',
      xyz: 456
    });

    var o1 = e1.create('o1', {
      abc: '789'
    });

    expect(o1.components['abc']).toEqual('789');
    expect(o1.components['xyz']).toEqual(e1.components['xyz']);
  });
  it('should contain any object specific components', function() {
    slaer.reset();

    var e1 = slaer.entity('e1', {
      abc: '123',
      xyz: 456
    });

    var o1 = e1.create('o1', {
      custom: 'onlyOnMyObject'
    });

    expect(o1.components['custom']).toEqual('onlyOnMyObject');
  });
});
