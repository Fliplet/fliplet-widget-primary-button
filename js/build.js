$('[data-primary-button-id]').click(function (event) {
  event.preventDefault();

  var data = Fliplet.Widget.getData($(this).attr('data-primary-button-id'));

  Fliplet.Navigate.to(data.action);
});
