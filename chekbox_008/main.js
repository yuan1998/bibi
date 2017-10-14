(function () {
  var result = user_list;
  console.log(result)
  var chek = document.getElementsByName("game");

  function search(keyword) {
    result = [];
    user_list.forEach(function (item) {
      game = item.game;
      var condition = keyword.every(function (key) {
        return game.indexOf(key) > -1;
      });
      if (condition) {
        result.push(item);
      };
    });
    return result;
  }

  function render() {
    var booox = document.getElementById('booox');
    booox.innerHTML = '';
    result.forEach(function (item) {
      var pp = document.createElement('p');
      pp.innerHTML = `<h3>${item.name}</h3>${item.game}`;
      booox.appendChild(pp);
    });
  };

  function inif() {
    render();
    chek.forEach(function (item) {
      item.addEventListener('click', function () {
        check();
      });
    });
  };

  function check() {
    var box = [];
    chek.forEach(function (item) {
      if (item.checked) {
        box.push(item.value);
      };
    });
    search(box);
    render();
  }
  inif();

})()