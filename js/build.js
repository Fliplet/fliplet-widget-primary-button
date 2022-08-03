Fliplet.Widget.instance('primary-button', function(data, parent) {
  if (parent) {
    parent.$watch('context', (ctx) => {
      var value = _.get(ctx, data.label);

      if (value) {
        $(this).find('input').val(value);
      }
    });
  }

  $(this).click(function(event) {
    event.preventDefault();

    if (data.action) {
      Fliplet.Navigate.to(data.action);
    }
  });
}, {
  supportsDynamicContext: true
});
