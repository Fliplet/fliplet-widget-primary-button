Fliplet.Widget.instance('primary-button', function(data) {
  $(this).click(async function(event) {
    event.preventDefault();

    if (data.action) {
      const action = data.action || {};

      action.dynamicContext = await Fliplet.Widget.getDynamicContext($(this));
      Fliplet.Navigate.to(action);
    }
  });
});
