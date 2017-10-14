; (function () {
  var result = user_list;
  /*
    function search(keyword){
      result = [];
      user_list.forEach(function(item){
        var user = item.name;
        var game = item.game;
        if(game.indexOf(keyword)>-1 ){
          result.push(item);
        }
      })
  
    }
  
  
    function render(){
      var box = document.querySelector('#box');
      box.innerHTML= '';
      for(var i = 0;i < result.length;i++){
  
        var p = document.createElement('p')   ;
        p.innerHTML =`
        <h2> name : ${result[i].name}</h2>
        game : ${result[i].game}
        `;
        box.appendChild(p);
      }
  
  
    }
  
  
    function addbtn(id,key){
  
      var idk = document.getElementById(id);
      idk.addEventListener('click',function(){
        idk.getAttribute
        search(key);
        render();
      });
    }
    
    function init(){
      render();
      var all= document.getElementById('all')
  
      all.addEventListener('click',function(){
        result = user_list;
        render();
      })
      addbtn('lol','lol');
      addbtn('wo','cs');
      addbtn('gui','王者荣耀');
     }
     init();
     */


  var result = user_list;

  var btn = document.getElementById("btn");
  var input = document.getElementById("search");
  var form = document.querySelector('form')

  function upperkeys(keyword) {
    var bag = [];
    for (var i = 0; i < keyword.length; i++) {
      bag.push(keyword[i].toUpperCase());
    }
    return bag;
  }

  function search(key, list) {
    var wrap = [];
    var list = user_list;
    list.forEach(function (item_list) {
      var game = item_list.game;
      var game = upperkeys(game);
      game.forEach(function (item) {
        if (item.includes(key)) {
          wrap.push(item_list);
        }
      })
    })
    if (!wrap.length) {
      alert('没找到搜索结果')
    }
    return wrap;
  }




  function keyword(keyword_list, list) {
    var result = list;
    keyword_list = upperkeys(keyword_list);
    keyword_list.forEach(function (item) {
      result = search(item, result);
    });
    return result;
  }

















  /*
    function search(keyword) {
      result = [];
  
      user_list.forEach(function (item) {
        var user = item.name;
        var game = item.game;
        game.forEach(function (itemm) {
          if (itemm.includes(keyword) ) {
            result.push(item);
          } 
        })
      })
      console.log(result);
      if (!result.length) {
        alert(('不存在的'+keyword))
      }
    }*/

  function render() {
    var box = document.querySelector('#search_content');
    box.innerHTML = '';
    for (var i = 0; i < result.length; i++) {

      var div = document.createElement('div');
      div.innerHTML = `
      
    <div class="name">  ${result[i].name}</div>
     <div class="game"> ${result[i].game}</div>
    `;
      div.setAttribute('class', 'search_item');
      box.appendChild(div);
    }
  }

  function addevent() {
    // render();
    result = user_list;

    // btn.addEventListener('click', function () {
    //   // var align = input.value;
    //   var aligns = [input.value];
      
    //   console.log(aligns)
    //   if (input.value == '') {
    //     alert('请输入内容')
    //   } else {
    //     result = keyword(aligns, result)
    //     render();
    //   }



    // })

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var aligns = [input.value];

      // aligns = upperkeys(aligns);
      if (!aligns.length) {
        alert('请输入内容')
      } else {
        result = keyword(aligns, result)
        render()
      }
      input.value = '';
    })


  }

  addevent()





})();