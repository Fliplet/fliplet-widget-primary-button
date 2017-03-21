describe('WHEN start component', function() {
  this.timeout(10000);
  describe('Interface', function() {
    it('should have default button label', function(done) {
      interfaceBrowser
        .evaluate(function (selector) {
          return document.querySelector(selector).value;
        }, 'input[name=name]')
        .then(function(label) {
          expect(label).to.equal('Primary button');
          done();
        })
    });
  });

  describe('Build', function() {
    it('should have default button label', function(done) {
      const selector = `[data-primary-button-id="${widgetInstance.id}"]`;
      buildBrowser
        .evaluate(function (selector) {
          return document.querySelector(selector).value;
        }, selector)
        .then(function(label) {
          expect(label).to.equal('Primary button');
          done();
        })
    });
  });
});

describe('WHEN change the button label', function () {
  this.timeout(10000);
  const newLabel = 'Awesome Label';
  before(function (done) {
    interfaceBrowser
      .type('input[name=name]')
      .type('input[name=name]', newLabel)
      .save()
      .then(done)
  });

  describe('Interface', function() {
    it('should have new button label', function(done) {
      interfaceBrowser
        .evaluate(function (selector) {
          return document.querySelector(selector).value;
        }, 'input[name=name]')
        .then(function(label) {
          expect(label).to.equal(newLabel);
          done();
        })
    });
  });

  describe('Build', function() {
    it('should have new button label', function(done) {
      const selector = `[data-primary-button-id="${widgetInstance.id}"]`;
      buildBrowser
        .evaluate(function (selector) {
          return document.querySelector(selector).value;
        }, selector)
        .then(function(label) {
          expect(label).to.equal(newLabel);
          done();
        })
    });
  });
});
