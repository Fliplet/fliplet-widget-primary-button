Fliplet.Widget.instance('primary-button', function(data) {
  $(this).click(async function(event) {
    event.preventDefault();

    if (data.action) {
      const action = data.action || {};

      try {
        action.dynamicContext = await Fliplet.Widget.getDynamicContext($(this));
      } catch (error) {
        action.dynamicContext = {};
      }

      Fliplet.Navigate.to(action);
    }
  });
});
