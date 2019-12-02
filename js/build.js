Fliplet.Widget.instance('primary-button', function (data) {
  $(this).click(function (event) {
    event.preventDefault();
    Fliplet.Navigate.to(data.action);
  });
});