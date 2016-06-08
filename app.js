(function() {
var AppTitle = ng.Component({
    selector: 'cabecera',
    template: '<h1>Hola Mundo</h1>'
  })
  .Class({
    constructor: function () { }
  });
document.addEventListener('DOMContentLoaded', function() {
  ng.bootstrap(AppTitle);
});
})();
