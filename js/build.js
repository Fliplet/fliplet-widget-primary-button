Fliplet.Widget.instance('primary-button', function(data) {
  $(this).click(function(event) {
    event.preventDefault();

    if (data.action) {
      Fliplet.Navigate.to(data.action);
    }
  });

  if (!data.label) {
    $(this).val(T('button.defaultLabel', {
      date: moment().format()
    }));
  }
});
