// function a(two,three){
//   console.log('this is one.');
//   if(two){
//     two();
//   }
//   if(three){
//     three();
//   };
// };
// var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'ass eye'];
// var i = 0;
// while (i < a.length) {
//   console.log(a[i]);
//   i++;
//   if (i == a[5]) {
//     break;
//   };
// }
/*
var test = [
  {
    text: 'google',
    url: 'https//:www.google.com',
    type: 'a'
  },
  {
    text: 'google',
    url: 'https//:www.google.com',
    type: 'a'
  },
  {
    text: 'google',
    url: 'https//:www.google.com',
    type: 'a'
  },
  {
    text: 'google',
    url: 'https//:www.google.com',
    type: 'a'
  },
  {
    text: 'google',
    url: 'https//:www.google.com',
    type: 'b'
  },
  {
    text: 'google',
    url: 'https//:www.google.com',
    type: 'b'
  },
  {
    text: 'google',
    url: 'https//:www.google.com',
    type: 'a'
  },
  {
    text: 'google',
    url: 'https//:www.google.com',
    type: 'a'
  },
  {
    text: 'google',
    url: 'https//:www.google.com',
    type: 'a'
  },
  {
    text: 'google',
    url: 'https//:www.google.com',
    type: 'b'
  },
]

function cate(type) {
  var list = [];
  for (var i =0; i < test.length;i++) {
    var item = test[i];
    if (item.type != type)
    continue;

    list.push(item);
  }
  return list;


}

function rbq() {
  console.log('rbq', cate('a'));
}
function mmp() {
  console.log('mmp', cate('b'))
}
rbq();
console.log('rrrrrrrrrrrbbbbbbbbbbqqqqqqqq');
mmp();
*/

// function tuhao() {
//   var i = 0;
//   while (i < test.length) {
//     var item = test[i];
//     i++;
//     if (!item.top)
//       continue;
//     console.log('tu hao:',item.text);
//   }
// }

// function xiangshen(){
//   var i = 0;
//   while (i < test.length) {
//     var item = test[i];
//     i++;
//     if (item.top)
//       continue;
//     console.log('xiang shen:',item.text);
//   }
// }











// while (i < test.length) {
//   i++;
//   if (test[i-1].top) {
//     continue;
//   }
//   console.log(test[i-1]);

// }

var boom = [
  {
    a: 1,
    b: 1,
    type: 'ka',
    sex: 'male',
    user: {
      admin: true, level: 10, authority: ['admin', 'boss', 'CEO']
    },
    c: 1,
  },
  {
    a: 2,
    b: 2,
    type: 'la',
    sex: 'female',
    user: {
      admin: false, level: 6, authority: ['CEOsecretary',]
    },
    c: 2,
  },
  {
    a: 4,
    b: 4,
    type: 'sha',
    sex: 'female',
    user: {
      admin: true, level: 6, authority: ['admin', 'technician', 'hr']
    },
    c: 4,
  },
  {
    a: 3,
    b: 3,
    type: 'sha',
    sex: 'female',
    user: {
      admin: true, level: 8, authority: ['admin', 'technician', 'hr', '情妇']
    },
    c: 3,
  },
  {
    a: 5,
    b: 5,
    c: 5,
    type: 'sha',
    sex: 'female',
    user: {
      admin: true, level: 4, authority: ['admin', 'technician']
    },
  },
  {
    a: 6,
    b: 6,
    c: 6,
    type: 'sha',
    sex: 'male',
    user: {
      admin: true, level: 4, authority: ['technician']
    },
  },
  {
    a: 7,
    b: 7,
    c: 7,
    type: 'sha bi',
    sex: 'male',
    user: {
      admin: false, level: 2, authority: ['admin']
    },
  },
  {
    a: 8,
    b: 8,
    c: 8,
    d: ['a', 'b', 'c'],
    type: 'sha bi',
    sex: 'female',
    user: {
      admin: false, level: 2, authority: ['cleaner']
    },
  },
]

function lol(type) {
  var wrap = [];
  var i, j;
  var arg = Array.from(arguments);

  boom.forEach(function (item_enheng) {
    var jijibo = item_enheng.user.authority;
    // var sex = item_enheng.sex;
    // var d = item_enheng.d;

    var tttest = arg.every(function (item) {
      console.log(item);
      return (jijibo.indexOf(item) > -1 /*|| sex == item  || d.indexOf(item) != -1*/ );
    });

    if (tttest) {
      wrap.push(item_enheng);
    }
  })
  /*
    for (i = 0; i < boom.length; i++) {
      var jijibo = boom[i].user.authority;
  
      var tttest = arg.every(function (item) {
        return jijibo.indexOf(item) > -1;
      })
  
      console.log(tttest)
      if (tttest) {
        wrap.push( boom[i] );
      }
      */
  // for(j=0;j<jijibo.length;j++){
  //   if(jijibo[j] != type){
  //     continue;
  //   }else wrap.push(boom[i]);
  // }
  console.log(wrap);
  return wrap;
}


/*
var arg = Array.from(arguments);
// console.log(arg.length);
for (i = 0; i < boom.length; i++) {
  var target = boom[i].user.authority;
  // console.log(target)
  for (j = 0; j < target.length; j++) {
    console.log(target[j]);
    arg.forEach(function (item) {
      if (item == target[j]) {
        // console.log(boom[i]);
        wrap.push(boom[i]);
      }
    });
    
  };
  
}
*/


// for(i=0;i<boom.length;i++){
//   var item = boom[i]
//   if(item.type == type){
//     wrap.push(item);
//   }else continue;
// 
// return wrap;

// function 输入关键字() {

// }

function 打印(type) {
  console.log('这是你点的套餐', lol(type));
}




lol( 'admin','情妇', 'male');
