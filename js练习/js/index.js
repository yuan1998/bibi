// function mulitply(num1,num2) {
//     var total = num1 * num2;
//     alert(total)
// }

// mulitply( 10 , 2 );
// 2.6函数 图2-8 27页

// function ctc(tw) {
//     var result = tw - 32;
//     result = result / 1.8;
//     return result;
// // }
// // var temp_fahrenheit = 95;
// // var temp_celsius = ctc(temp_fahrenheit);
// // alert(temp_celsius);
// // 
// var a = 12 ;   //变量，把12赋值给a
// alert("学会现货" + a);//..
// //number
// 123  // int
// 1.2  //float
// -1 //minus
// 1.2e4  // e4=10000  e3=1000
// // NaN  //not a number
// // infinity  // 无限大
// // // string  字符串
// '你竟然"哈哈哈哈哈哈"'
// '哈哈哈哈哈哈'
// 'you\'know?'
// // `
// // a ~
// // god~

// // `

// //boolean
// true
// false  // 0    ''   NaN  null   undefined

// //array  
// [
//     'hahahhahahhaha',
//     "hahahhahahahahah",
//     'hahhahahhhaha'
// ]
// //object
// var o ={
//     a: 1, 
//     b: 2
// };
// var x =  o.a + o.b;
// x =NaN;
// if('') {
//     console.log( x);

// } else{
//     x = 123;
//     console.log(x);
// }

// var date = 4;
// switch (date) {
//     case 1:
//         console.log('QAQ');
//         date ++;
//     case 2:
//         console.log("@_@");
//         console.log(date);
//         break;
//     case 3:
//         console.log("@_@!");

//     case 4:
//         console.log("!@_@!");
//         date --;
//     case 5:
//         console.log("!@_@!F**k u"+ date);
//         break;
//         default:
//         console.log('TAT');
//         break;
// }
// // + - * / 
// // %  求余
// 10 % 3 //1

// //  ++  
// var loginCount = 0;
//     loginCount++;   //loginCount = 1 
// //  --  

// //>  <  >=   <=
// console.log("1 < 2", 1 > 2);
// // = 赋值  
// var a = 1;

// // ==   判断是否相等 （类型不同也会相等
// console.log("1" == 1);  

// //  ===  严格判断是否相等


// //!=    不等于 
// console.log("1 != 2",1 != 2); //true

// +=  -=  *=  /=  


// && 和   || 或


//for  

// var i ;
// for(i = 1; i <= 100; i++){
//     console.log(i);
// }

// var result = [
//     'ffffffff***ck u',
//     'f**ck u',
//     'ffffffff***ck u2',
//     'ffffffff***ck u3',
// ]
// for(i=0;i<result.length;i++){
//     console.log(result[i])
// }                                   for循环


//   while   
// // va
// var a= 'hehe';
// var c= 'haha';
// var e=[
//     'hahaaha',
//     'hahahahddd',
//     'hahahaa',
//     2,
//     'ddddd'
// ];
// var b={
//     aa:'ss',
//     age:'1874',
//     dashuai:'hahaha',
//     name:'大帅',
//     sex:'male',
//     abc:'agricultural bank china',
//     home:'hangzhou',
//     object:'sss',
//     array:'sssss',
//     string:'ssssss',
//     function:'sssssss',
//     undefined:'123213',
//     varriable:'a',
//     Number:'1234321',
//     true:'ssss',
//     false:'ssss',
//     return:'sssss0',
//     if:'else',
//     else:'if',
//     content:"ssss",
//     catch:'bu zhuo',
//     remove:'yi dong\ qu chu',
//     property:'jia zhi',
//     date:'10y6d',
//     data:'null',
//     null:'ojbk',
//     delete:'sha chu',
//     result:'jie guo',

// };
// var g =false;
// console.log(b.true);
// if(a == c){
//     console.log('nimendaoshi'),
//     console.log(a)
// }else{
//     console.log('hawaiyi')
// };


// var a=[1,2,3,4,56,7,8,9].forEach(function(item){
//     console.log(item);

// });

// function test(ff){
//     var a = blog - 4 ;
// };


// function day(a) {
//     if(a = ""){

//     }else{

//     }
//     return  ;    
//     console.log( a);
// };
/*
var tempUsername = 'hww';
var tempPassword ='9';

function login(username,password){
    if(username == tempUsername && password == tempPassword ){
        onSuccess()
    }else {
        onFail();
    };
};

function welcome(){
    console.log('welcome to GayHub ' + tempUsername)
};

function loginError(){
    console.log('fuck you man');
};
function onSuccess(){
    welcome(tempUsername);
}
function onFail(){
    loginError();
    
}
*/



/*
var user_list = [
    {
        username: 'a',
        permission: ['admin', 'ceo']
    },
    {
        username: 'b',
        permission: ['hr']
    },
    {
        username: 'c',
        permission: ['hr', 'admin']
    },
    {
        username: 'd',
        permission: ['admin', 'hr',]
    },
    {
        username: 'e',
        permission: ['admin']
    },
];
*／




/*                                   循环遍历搜索条件
function filter(keyword, b_list) {
    var wrap = [], i;

    for (i = 0; i < b_list.length; i++) {
        var user = b_list[i];
        if (user.permission.indexOf(keyword) != -1) {

            wrap.push(user);
        }
    }
    console.log(wrap)
    return wrap;
}
function keyword(keyword_list, list) {
    var key = list;
    for (var i = 0; i < keyword_list.length; i++) {
        var one = keyword_list[i];
         key = filter(one, key)
        console.log(key)
    }
    return key;
}
keyword(['ceo', 'admin'], user_list);
*/



/*                        forEach多条件筛选
function test() {
    var bag = []
        , i
        , j;
    var arg = Array.from(arguments);
    
    user_list.forEach(function (item) {
        var jijibo = item.permission;
        var username = item.username;
        console.log(jijibo)
        console.log(username)
        var jbl = arg.every(function (item_enheng) {
            return (jijibo.indexOf(item_enheng) > -1 || username == item_enheng);
        })
        if (jbl){ 
            bag.push(item);
        };
        /*
        var tttsr 
        = kigin.indexOf(keyword) > -1 ;
        if(tttsr){
            bag.push(item);
        }
        
    })
    return bag;
}

var hui = test('admin', 'hr','d')
console.log(hui)
*/



/*                                           //2017/10/10      1.
var ka = [2, 4, 6, 8, 10],ga=0;
ka.forEach(function (item) {ga+= item;})
console.log(ga);      // 30
*/

/*                                          // 2017/10/10      2.
var ka =['y', 'o', 'o', 'o'],ga='';
ka.forEach(function(item,i){
    ga = ga.concat(item);
})
console.log(ga)     // yooo
*/

/*                                           // 2017/10/10     3.
var ka = [1, 3, 2, 7, 6], ga = [];
ka.forEach(function (item) {
   if (item % 2 == 0) ga.push(item);
})
console.log(ga);     // [2, 6]
*/

/*                                          // 2017/10/10     4.
var o=[];
for(var i =0;o.length<5;i++){
    o.push(i+1);
}
console.log(o);    // [1, 2, 3, 4, 5];
*/

/*                            // 2017/10/10     5.
var ka = ['a1', 'a2', ['b1', 'b2', ['c1', 'c2', 'c3'], 'b3'], 'a3'], boom = [], sha = [], la = [];
ka.forEach(function (item) {
    if (item.constructor == Array) {
        item.forEach(function (item_two) {
            if (item_two.constructor == Array) {
                item_two.forEach(function (item_three) {
                    la.push(item_three)
                    return;
                })
            } else {
                sha.push(item_two)
                return;
            }
        })
    } else {
        boom.push(item)
        return;
    }
})
console.log('第一层', boom);             
console.log('第二层', sha);
console.log('第三层', la);
*/

/*
var sha = ['a1', 'a2', ['b1', 'b2', ['c1', 'c2', 'c3'], 'b3'], 'a3'],
    ka = [], la = [];

function test(li) {
    var lka =[];
    if (li instanceof Array) {
        ka.push(li);
    }
    else {
        la.push(li);
        lka.push(li);
    }
    
    console.log(lka);
}
function loop(list) {
    list.forEach(test);
    while (ka.length) {
        if (ka[0] instanceof Array) {
            ka[0].forEach(test)
            ka.shift();
        }
    }
}


console.log(la);
loop(sha);
console.log(la);
*/




/*                                      // 2017/10/10     6.
var ka = [

    {
        name: '王花花',
        salary: 100,
    },
    {
        name: '李拴蛋',
        salary: 200,
    },
    {
        name: '牛备备',
        
    },
]
    , la = []
    ;

ka.forEach(function (item) {
    var sal = item.salary
    if (sal < 100){
        la.push(item);
        
    } 
    else return;
})
console.log(la);
*/                          // []


/*                                  // 2017/10/10     7.
var ka = [
    {
        name: '王花花',
    },
    {
        name: '王拴蛋',
    },
    {
        name: '牛备备',
    },
]
, la = [];
ka.forEach(function(item){
    var name = item.name;
    if(name.includes('王')){
        la.push(item)
    }else return;
})
console.log(la);   // {name: "王花花"}1: {name: "王拴蛋"}length: 2__proto__: Array(0)
*/



/*                                    // 2017/10/10     8.
var ka = [
    {
        name: '王花花',
        playing: ['CS', '红警'],
    },
    {
        name: '李拴蛋',
        playing: ['守望屁股', '吃鸡', 'CS'],
    },
    {
        name: '牛备备',
        playing: ['红警', '吃鸡'],
    },
]


function search(keyword) {
    var la = [];
    ka.forEach(function (item) {
        var playing = item.playing;
        if(playing.indexOf(keyword) > -1){
            la.push(item)
        };
    });
    return la;
};




console.log('cs',search('CS')); // ["王花花", "李拴蛋"]
console.log('吃鸡',search('吃鸡')); // ["李拴蛋", "牛备备"]
console.log('红警',search('红警'));
console.log('守望屁股',search('守望屁股'));
*/


/*                          // 2017/10/10     9.
var ka = [
    {
        name: '王花花',
        playing: ['CS', '红警'],
    },
    {
        name: '李拴蛋',
        playing: ['守望屁股', '吃鸡', 'CS'],
    },
    {
        name: '牛备备',
        playing: ['红警', '吃鸡'],
    },
    {
        name: '木哈哈',
        playing: ['红警', 'CS', '吃鸡'],
    },
]
    , la = [];

function search(keyword) {
    var la = [];
    ka.forEach(function (item) {
        var playing = item.playing;
        var result = keyword.every(function (sm_item) {
            return (playing.indexOf(sm_item) > -1)
        })
        console.log(result);
        if (result) {
            la.push(item);
        }
    })
    return la;
}


console.log('cs,红警', search(['CS', '红警'])); // ["王花花", "木哈哈"]
console.log('吃鸡', search(['吃鸡'])); // ["李拴蛋", "牛备备", "木哈哈"]
console.log('守望屁股，吃鸡，cs', search(['守望屁股', '吃鸡', 'CS'])); // ["李拴蛋"]

*/



// var sha = ['a1', 'a2', ['b1', 'b2', ['c1', 'c2', 'c3'], 'b3'], 'a3'];

/*
var ka = [
    {
        title: '我真的是图样图森破,没想到心塞高冷英文原来是这样!',
        content_text: 'You are really too young, too simple.这种谣言你都信,真是图样图森破。too young,too simple脑残Do not talk with him again, he is virtually...',
        img_src:'http://img.xiazaizhijia.com/uploads/2017/0411/20170411093424601.jpg'
    },
    {
        title: '图样图森破什么意思 出处',
        content_text: '四块牌匾分别写有“萌”、“亲”、“喜大普奔”、“图样图森破”等字样,字体有草书、也有小篆。不少北大学生听到消息过来拍照,“在人人网上看到二教...',
        img_src:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=253495853,2453635463&fm=27&gp=0.jpg',
    },
    {
        title: '图样图森破 - 萌娘百科 万物皆可萌的百科全书',
        content_text: '图样图森破,“too young too simple”,这句话早就在2000年出现过,出自某领导在一次答香港记者问时,因该记者所问不当触怒这位领导,导致领导教育其...',
        img_src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3307850323,3536004237&fm=27&gp=0.jpg'
    },
    {
        title: '图样图森破什么意思 出处',
        content_text: '“图样图森破”出自一位身经百战见得多了的长者口中。用于各大社区和贴吧,可用于网上或现实中的行为,多指某人因经验匮乏轻信某件舆论或做出愚蠢的举动引来的吐槽...',
        img_src:'https://www.baidu.com/link?url=CQHlfjRUo6ED7Kq0ojsLwaHOGh5nLdqlMwro82HuzDgDxL6WDvZCz43pfuxKHtlW5z4tXFm8-YvAAn7pFYybCrHWIa4fuIPRTUjMcK230AnjU6NWchkEDtNtYL2cAs2kRG7QKzphOFn_kk8NChDx2F41VUB4d513qNBbRLYO4yN6DSyldiwY5T-Ge5pTSmdu6-7nr_bAujzTfhu_2iniativCxSWo3fgb-4vBUZ95HXzETvDcalADBmdzmNZNA65cu1fl13Lja7z_ucBV3HvSBA8BAE4Mn35-Coi7wg87pZMEOcmDDvlxn6f8NTDpHv1cmh7s7biJ0iUrlMAbrSl6Px7o2xuNfkIcGbZ-kb_tPp4wRpMaImRkEY9_NeTwHmQLbqvrSU1rJkgRqPDhvE0Um9FhrvhMYWj9jRCR7xZI76hjsIJbAM5XUd47eCRnNOo6bE_QZDf8cqd7SwSsommoZLazOm7_quDnY9056LnPpl-lTVS2sUMk9mHulkmy2NitABYcHaY9N-DDHUqxCbzI-Qe9UHMV8HF39lEc7U9qKDxvNZ9gvV5I8JDJ05Lz7rFIAAqNP2Lk824rMkoOxqFIakhOyxXuq-1DTk_VdaAYKqxrUeqcq7wbimc1S6APwEsb6kViLrNyb3iXd8zv36SgfVX5uEt5KW-UNPSbE9NfnS&timg=https%3A%2F%2Fss0.bdstatic.com%2F94oJfD_bAAcT8t7mm9GUKT-xh_%2Ftimg%3Fimage%26quality%3D100%26size%3Db4000_4000%26sec%3D1507776903%26di%3Dead09f5a59ca0b61ccb3644f66b55a06%26src%3Dhttp%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0454105535fe47000001126fee652e.jpg&click_t=1507776964422&s_info=1499_957&wd=&eqid=e656ab56000126ba0000000359ded987'
    },
]
function dc(item){
    return document.createElement(item);

}

function one(item){
    var title_h3 =dc('h3');
    var content_p =dc('p');
    var content_text =dc('p');
    var content_img_src =dc('img');
    var txt = document.createTextNode(item.content_text);
    title_h3.innerHTML = item.title;
    content_img_src.setAttribute('src',item.img_src)
    content_p.appendChild(content_img_src);
    content_p.appendChild(txt);



    content_img_src.style.width = '150px';
    content_img_src.style.display = 'inline';


    document.body.appendChild(title_h3);
    document.body.appendChild(content_p)
    console.log(content_p.textContent);

    return
}
function two(list){
    for(var i=0;i<list.length;i++){
        one(list[i])
    }
}

two(ka);
*/

function dc(item){
    return document.createElement(item);
    
}

var label = dc('label');


