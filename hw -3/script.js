// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

let woman = {
  name: "Sara",
  age: 31,
  child: true,
  car: true,
  husband: false,
};
console.log(man)
let man = {
  name: "Pavlo",
  age: 30,
  car: true,
  wife: false,
  dog: true,
};

// let car = {
//   brand: "Toyota",
//   model: "corola",
//   year: 2005,
//   color: "red",
//   cost: 4000,
// };

// let dog = {
//   color: "black",
//   fleas: false,
//   brid: "shpic",
//   year: 5,
//   name: "sam",
// };

// let TW = {
//   brand: "samsung",
//   d: 32,
//   price: 100,
//   year: 2014,
// };
// // console.log(TW,dog,car,man,woman)
// // - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let girl = {
//   name: "Olya",
//   family: {
//     father: "oleg",
//     mather: "sasha",
//     brother: "pavlo",
//   },
//   skills: ["js", "html", "css"],
//   dog: false,
// };

// let nootBook = {
//   color: ["black", "white", "silver"],
//   price: {
//     black: 300,
//     white: 200,
//     silver: 350,
//   },
//   brand: "Acer",
//   d: 20,
// };

// let mouse = {
//   brand: "logitech",
//   color: ["white", "black", "silver"],
//   price: {
//     white: 100,
//     black: 150,
//     silver: 90,
//   },
//   made: "china",
// };

// let headphones = {
//   color: ["black", "white", "silver"],
//   brand: "Xiomi",
//   price: {
//     black: 100,
//     white: 200,
//     silver: 300,
//   },
//   made: "china",
//   year: 2020,
// };

// let computers = {
//   brands: ["hp", "acer", "dell", "samsung"],
//   price: {
//     hpPrice: 100,
//     acerPrice: 200,
//     dellPrice: 250,
//     samsungprice: 400,
//   },
//   color: "random",
//   madeIn: "China",
// };

// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
//  for(key in woman){
//      console.log(key);
//  };
//  for(key in man){
//      console.log(key);
//  };
// for(key in car){
//     console.log(key);
// };
// for(key in dog){
//     console.log(key);
// };
// for(key in TW){
//     console.log(key)
// };
// for(key in girl){
//     console.log(key)
// };
// for(key in nootBook){
//     console.log(nootBook)
// };
// for(key in mouse){
//     console.log(mouse)
// };

// for(key in headphones){
//     console.log(key)
// };
// for(key in computers){
//     console.log(key)
// };

// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// let key =Object.keys(woman);
// console.log(key)

// let key=Object.keys(man);
// console.log(key)

// console.log(Object.keys(car));
// console.log(Object.keys(dog));
// console.log(Object.keys(TW));
// console.log(Object.keys(girl));
// console.log(Object.keys(nootBook));
// console.log(Object.keys(mouse));
// console.log(Object.keys(headphones));
// console.log(Object.keys(computers));
// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// let carsTwo = [
//   { model: "camry", year: 2019, power: "200hp", color: "white" },
//   { model: "laguna", year: 2008, power: "150hp", color: "black" },
//   { model: "corola", year: 2005, power: "150hp", color: "silver" },
//   { model: "lacety", year: 2010, power: "120hp", color: "black" },
//   { model: "cayen", year: 2011, power: "130hp", color: "silver" },
//   { model: "Raw", year: 2012, power: "140hp", color: "yelow" },
//   { model: "polo", year: 2013, power: "120hp", color: "white" },
//   { model: "volga", year: 1982, power: "100hp", color: "yellow" },
//   { model: "lada", year: 2009, power: "100hp", coloe: "white" },
//   { model: "tavria", year: 2000, power: "100hp", color: "Baklajan" },
// ];

// // - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// let cities = [
//   { name: "lviv", population: "1m", country: "Ukraine", region: "west" },
//   { name: "Kuiv", population: "4m", country: "Ukraine", region: "center" },
//   {
//     name: "ternopil",
//     population: "500k",
//     country: "Ukraine",
//     region: "center",
//   },
//   {
//     name: "Amsterdam",
//     population: "5m",
//     country: "Netherland",
//     region: "Souse",
//   },
//   { name: "Rome", population: "5m", country: "italy", region: "centrale" },
//   { name: "Barcelona", population: "1.4m", country: "spain", region: "northe" },
//   { name: "Graz", population: "1m", country: "Austia", region: "northe" },
//   { name: "naple", population: "5m", country: "italy", region: "souse" },
//   { name: "Warshava", population: "4m", country: "Poland", region: "center" },
//   { name: "Basel", population: "1m", country: "swetherland", region: "northe" },
// ];
// // - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let cars = [
//   {
//     marc: "toyota",
//     year: 2010,
//     power: "150 hp",
//     color: "red",
//     driver: { name: "oleg", age: 28, sex: "male", experience: "4 year" },
//   },
//   {
//     marc: "porshe",
//     year: 2020,
//     power: "290 hp",
//     color: "black",
//     driver: { name: "yaruna", age: 28, sex: "male", expirience: "2 year" },
//   },
//   {
//     marc: "renault",
//     year: 2014,
//     power: "190 hp",
//     color: "white",
//     driver: { name: "zeniviy", age: 35, sex: "male", expirience: "19 year" },
//   },
//   {
//     marc: "peugeot",
//     year: 2012,
//     power: "190 hp",
//     color: "white",
//     drive: { name: "Ivan", age: 38, sex: "male", experience: "15 year" },
//   },
//   {
//     marc: "toyota",
//     year: 2013,
//     power: "150 hp",
//     color: "silver",
//     drive: { name: "Andrash", age: 25, sex: "male", experience: "16 year" },
//   },
//   {
//     marc: "Mitsubishi",
//     year: 2010,
//     power: "190 hp",
//     color: "orange",
//     driver: { name: "Sasha", age: 24, sex: "famale", exprience: "20 year" },
//   },
//   {
//     marc: "citroen",
//     year: 2009,
//     power: "200 hp",
//     color: "green",
//     driver: { name: "victor", age: 25, sex: "male", experience: "30 year" },
//   },
//   {
//     marc: "ford",
//     year: 2010,
//     power: "190 hp",
//     color: "yellow",
//     driver: { name: "andriano", age: 30, sex: "male", experience: "25 year" },
//   },
//   {
//     marc: "lexus",
//     year: 2010,
//     power: "280 hp",
//     color: "purple",
//     driver: { name: "poulo", age: 25, sex: "male", experience: "26 year" },
//   },
//   {
//     maec: "BMW",
//     YEAR: 2019,
//     POWER: "290 hp",
//     color: "pink",
//     driver: { name: "max", age: 30, sex: "famale", experience: "2 year" },
//   },
// ];
// - проитерировать каждый массив из задания 5,6,7 при помощи while.

// let i=0;
// while( i<carsTwo.length){
// console.log(carsTwo[i])
// i++;
// };

// let i=0;
// while( i<cities.length){
//     console.log(cities[i])
//     i++;
// };

// let i=0;
// while(i<cars.length){
//     console.log(cars[i]);
//     i++;
// };

// - проитерировать каждый массив из задания 5,6,7 при помощи for .

// for(let i=0; i<carsTwo.length; i++){
//    console.log(carsTwo[i]);
// };

// for(let i=0; i<cities.length; i++){
//     console.log(cities[i])
// };

//   for(let i=0; i<cars.length;i++){
//     console.log(cars[i]);
//   }

// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

// for(let car of carsTwo){
//     console.log(car)
// }
//  for (let citi of cities){
//  console.log(citi);
//  }
//  for (let car of cars){
//      console.log(car);
//  };
// - взять объекты из задания 1 и превратить каждый в json.
// let womans=JSON.stringify(woman);
//    console.log(womans);
// let mans=JSON.stringify(man);
//    console.log(mans);
// let carss =JSON.stringify(car);
//    console.log(carss);
// let dogs =JSON.stringify(dog);
//    console.log(dogs);
// let TW2 = JSON.stringify(TW);
//    console.log(TW2);
// let girls =JSON.stringify(girl)
// console.log(girls)
// - взять json из задания 11 и превратить их обратно в объекты.
// let womansParse= JSON.parse(womans);
//     console.log(womansParse);
// let mansParse =JSON.parse(mans);
//     console.log(mansParse);
// let carssParse=JSON.parse(carss);
//     console.log(carssParse);
// let dogsParse=JSON.parse(dogs);
//     console.log(dogsParse);
// let TW2Parse =JSON.parse(TW2);
//     console.log(TW2Parse);
// let girlsParse=JSON.parse(girls);
//     console.log(girlsParse);

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// let carsTwoS =JSON.stringify(carsTwo)
//  console.log(carsTwoS);
// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// let citiesS =JSON.stringify(cities)
//  console.log(citiesS)
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let carsS=JSON.stringify(cars)
//    console.log(carsS)
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
//  let users = [
//         { name: "vasya", age: 31, status: false, skills: ["java", "js"] },
//         { name: "petya", age: 30, status: true, skills: ["java", "js", "html"] },
//         { name: "kolya", age: 29, status: true, skills: ["mysql", ",mongo"] },
//         { name: "olya", age: 28, status: false, skills: ["java", "js"] },
//         { name: "max", age: 30, status: true, skills: ["mysql", ",mongo"] },
//       ];

//       for(user of users){
//           for(skill of user.skills){
//               console.log(skill)
//           }
//       }
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// let users = [
//     { name: "vasya", age: 31, status: false, skills: ["java", "js"] },
//     { name: "petya", age: 30, status: true, skills: ["java", "js", "html"] },
//     { name: "kolya", age: 29, status: true, skills: ["mysql", ",mongo"] },
//     { name: "olya", age: 28, status: false, skills: ["java", "js"] },
//     { name: "max", age: 30, status: true, skills: ["mysql", ",mongo"] },
//   ];

// let emptyArr =[];

// for( user of users){
//     console.log(user);
//     for(skill of user.skills){
//         console.log(skill)
//         emptyArr.push(skill)
//     }
// }
// console.log(emptyArr)
// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [
//   { name: "vasya", age: 31, status: false, skills: ["java", "js"] },
//   { name: "petya", age: 30, status: true, skills: ["java", "js", "html"] },
//   { name: "kolya", age: 29, status: true, skills: ["mysql", ",mongo"] },
//   { name: "olya", age: 28, status: false, skills: ["java", "js"] },
//   { name: "max", age: 30, status: true, skills: ["mysql", ",mongo"] },
// ];
// for (let user of users){
//     for(let skill of user.skills){
//         console.log(skill);
//     }
// };

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let emptyArray =[];

// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];

// for (let user of users){
//    console.log(user.address)
//    emptyArray.push(user.address)

// };
// console.log(emptyArray);
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// let users = [
//   {
//     name: "vasya",
//     age: 31,
//     status: false,
//     address: {
//       city: "Lviv",
//       country: "Ukraine",
//       street: "Shevchenko",
//       houseNumber: 1,
//     },
//   },
//   {
//     name: "petya",
//     age: 30,
//     status: true,
//     address: {
//       city: "New York",
//       country: "USA",
//       street: "East str",
//       houseNumber: 21,
//     },
//   },
//   {
//     name: "kolya",
//     age: 29,
//     status: true,
//     address: {
//       city: "Budapest",
//       country: "Hungary",
//       street: "Kuraku",
//       houseNumber: 78,
//     },
//   },
//   {
//     name: "olya",
//     age: 28,
//     status: false,
//     address: {
//       city: "Prague",
//       country: "Czech",
//       street: "Paster",
//       houseNumber: 56,
//     },
//   },
//   {
//     name: "max",
//     age: 30,
//     status: true,
//     address: {
//       city: "Istanbul",
//       country: "Turkey",
//       street: "Mikar",
//       houseNumber: 39,
//     },
//   },
//   {
//     name: "anya",
//     age: 31,
//     status: false,
//     address: {
//       city: "Rio",
//       country: "Brasil",
//       street: "Ronaldi",
//       houseNumber: 5,
//     },
//   },
//   {
//     name: "oleg",
//     age: 28,
//     status: false,
//     address: {
//       city: "Montreal",
//       country: "Canada",
//       street: "Acusto",
//       houseNumber: 90,
//     },
//   },
//   {
//     name: "andrey",
//     age: 29,
//     status: true,
//     address: {
//       city: "Quebeck",
//       country: "Canada",
//       street: "Binaro",
//       houseNumber: 33,
//     },
//   },
//   {
//     name: "masha",
//     age: 30,
//     status: true,
//     address: {
//       city: "Moscow",
//       country: "Russia",
//       street: "Gogolia",
//       houseNumber: 1,
//     },
//   },
//   {
//     name: "olya",
//     age: 31,
//     status: false,
//     address: {
//       city: "Portland",
//       country: "USA",
//       street: "Forest str",
//       houseNumber: 4,
//     },
//   },
//   {
//     name: "max",
//     age: 31,
//     status: true,
//     address: {
//       city: "Cairo",
//       country: "Egypt",
//       street: "Seashore",
//       houseNumber: 45,
//     },
//   },
// ];

// for(let user of users ){
//   let box =document.createElement('div');
//       for (let key in user){
//    if(typeof(user[key] === 'object')){
//       for(let key2 in user[key]){
//         box.innerText += user[key][key2];
//         };

//   }else{
//        box.innerText +=user[key]
//   };
//   document.body.appendChild(box);
// };

// };

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!/ - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)

// for (let user of users) {
//   let divOne = document.createElement("div");

//   for (let key in user) {

//     if (typeof user[key] === "object") {

//       for (let key2 in user[key]) {

//         let divTwo = document.createElement("div");
//         divTwo.innerText = user[key][key2];
//         divOne.appendChild(divTwo);

//       };

//     } else {
//       let divThree = document.createElement("div");
//       divThree.innerText = user[key];
//       divOne.appendChild(divThree);
//     }
//   }

//   document.body.appendChild(divOne);
// };

// /!!!!!!!!!!!!!!!!!!!!!!!!/ - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
let users = [
  {
    name: "vasya",
    age: 31,
    status: false,
    address: {
      city: "Lviv",
      country: "Ukraine",
      street: "Shevchenko",
      houseNumber: 1,
    },
  },
  {
    name: "petya",
    age: 30,
    status: true,
    address: {
      city: "New York",
      country: "USA",
      street: "East str",
      houseNumber: 21,
    },
  },
  {
    name: "kolya",
    age: 29,
    status: true,
    address: {
      city: "Budapest",
      country: "Hungary",
      street: "Kuraku",
      houseNumber: 78,
    },
  },
  {
    name: "olya",
    age: 28,
    status: false,
    address: {
      city: "Prague",
      country: "Czech",
      street: "Paster",
      houseNumber: 56,
    },
  },
  {
    name: "max",
    age: 30,
    status: true,
    address: {
      city: "Istanbul",
      country: "Turkey",
      street: "Mikar",
      houseNumber: 39,
    },
  },
  {
    name: "anya",
    age: 31,
    status: false,
    address: {
      city: "Rio",
      country: "Brasil",
      street: "Ronaldi",
      houseNumber: 5,
    },
  },
  {
    name: "oleg",
    age: 28,
    status: false,
    address: {
      city: "Montreal",
      country: "Canada",
      street: "Acusto",
      houseNumber: 90,
    },
  },
  {
    name: "andrey",
    age: 29,
    status: true,
    address: {
      city: "Quebeck",
      country: "Canada",
      street: "Binaro",
      houseNumber: 33,
    },
  },
  {
    name: "masha",
    age: 30,
    status: true,
    address: {
      city: "Moscow",
      country: "Russia",
      street: "Gogolia",
      houseNumber: 1,
    },
  },
  {
    name: "olya",
    age: 31,
    status: false,
    address: {
      city: "Portland",
      country: "USA",
      street: "Forest str",
      houseNumber: 4,
    },
  },
  {
    name: "max",
    age: 31,
    status: true,
    address: {
      city: "Cairo",
      country: "Egypt",
      street: "Seashore",
      houseNumber: 45,
    },
  },
];

// let div0=document.createElement('div');

//    for(let user of users){
//     let div1=document.createElement('div');
    



//     for(let key in user){
//          if(typeof user[key]==='object'){
           
//            for(let key2 in user[key]){
//              let div2=document.createElement('div');
//              div2.innerText= user[key][key2];
//              div1.appendChild(div2)
//            }
//          }else{
//            let div3=document.createElement('div');
//            div3.innerText=user[key];
//            div1.appendChild(div3)
//          }
//     }

//     div0.appendChild(div1);
//     document.body.appendChild(div0);


//    };





  
  //  console.log(divForUsers)

//

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
//
// let emptyUsersCities=[]
// for( let users of usersWithId){
//   for(let cities of citiesWithId){
//     if(users.id === cities.user_id){
//       users.addres =cities;
//       console.log(users)
//       emptyUsersCities.push(users)

//     }
//   }
// }
// console.log(emptyUsersCities)

// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
//  let content= document.getElementById('content');
//  let innerText =content.innerText
//  console.log(innerText);

//  let rules=document.getElementsByClassName('rules');
// for(text of rules){
//   let text2 =text.innerText;
//   console.log(text2)
// }

// let allTag =document.getElementsByTagName('*')

// for( let text of allTag){
//   let innerText =text.innerText;
//   console.log(innerText);
// }
// - змінити цей текст використовуючи селектори id, class,  tag
// let id =document.getElementById('content');
//    id.innerText='asdsadasdsadsd';

// let allClasss =document.getElementsByClassName('rules');
// for(let classs of allClasss ){
//    classs.innerText='oM Nom Nom Nom Nom Nom';
// };
// let allTag =document.getElementsByTagName('h2');
// for(text of allTag){
//   text.innerText='asdasdasdasd'
// };
// let allTag =document.getElementsByTagName('p');
// for(text of allTag){
//   text.innerText='asdasdsdasd'
// }
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

// let width =document.getElementById('content');
//     width.style.width='400px';
//     width.style.color='red';

// let width =document.getElementsByClassName('rules');
//       for(let width2 of width){
//         width2.style.width='400px';
//         width2.style.color='green';

//       };

// let h2 =document.getElementsByTagName('h2')
// for(let H2text of h2){

//   H2text.style.width='100px';
//   H2text.style.color ='red';

// }

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
//   let content =document.getElementById('content');

// let table=document.createElement('table');
//     let tr=document.createElement('tr');
//     let td=document.createElement('td');

//     table.appendChild(tr)
//     tr.appendChild(td)

//     content.appendChild(table)

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені;

//  let table = document.createElement('table');

//  for(let i=0; i<=10; i++){
//    let tr =document.createElement('tr');
//     table.appendChild(tr);
//     for(let j=0; j<3; j++){
//       let td=document.createElement('td')
//       tr.appendChild(td)

//     };

//  };
//  console.log(table)

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені

// let table = document.createElement('table');

//  for(let i=0; i<=10; i++){
//    let tr =document.createElement('tr');
//     table.appendChild(tr);
//     for(let j=0; j<5; j++){
//       let td=document.createElement('td')
//       tr.appendChild(td)

//     };

//  };
//  console.log(table)
// /- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
// let isPrompt =prompt('enter number');
// let isPromptTwo=prompt('enter number');
// let table = document.createElement('table');
//    for(let i=0; i<=isPrompt; i++){
//      let tr =document.createElement('tr');
//       table.appendChild(tr);
//       for(let j=0; j<isPromptTwo; j++){
//         let td=document.createElement('td')
//         tr.appendChild(td)

//       };

//    };
//    console.log(table)

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії

//  - знайти всі елементі, які мають id

// let tag =document.getElementsByTagName('*')
//  for( let allTag of tag){
//    if(allTag.getAttribute('id')){
//      console.log(allTag)
//    }
//  }
//  - знайти всі елементі, які мають class

// let  tag=document.getElementsByTagName('*')
// for( let classs of tag){
//      if(classs.getAttribute('class')){

//        classs.innerText='asdasdasdasdasd'
//        console.log(classs)
//      }
//    }

//  - знайти всі параграфи ,та змінити текст на hello oktenweb!

// let p = document.getElementsByTagName('p');
//    for(let text of p){
//      text.innerText='asdasbbasbd'
//    }

//  - знайти всі div та змінити ім колір на червоний
// let div= document.getElementsByTagName('div')
//   for (let color of div){
//     color.style.color='red'
//   }

// ============
// ====class===
// ============

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.

// let content =document.getElementById('content');
// let ul =document.createElement('ul')
// content.appendChild(ul)

// let h2 =document.getElementsByTagName('h2')
// for( text  of h2){
//   let li=document.createElement('li')
//   li.innerText=text.innerText;
//   ul.appendChild(li)

// }

// let content =document.getElementById('content');
// let h2 =document.getElementsByTagName('h2');

// let ul=document.createElement('ul');

// for(let h2Two of h2){
//   let li=document.createElement('li');
//   li.innerText=h2Two.innerText;
//   ul.appendChild(li)

// }

// content.appendChild(ul)
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// //todo add rules

// let rules = [
// 	{
// 		title: 'Первое правило Бойцовского клуба.',
// 		body: 'Никому не рассказывать о Бойцовском клубе.'
// 	},
// 	{
// 		title: 'Второе правило Бойцовского клуба.',
// 		body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 	},
// 	{
// 		title: 'Третье правило Бойцовского клуба.',
// 		body: 'В схватке участвуют только двое.'
// 	},
// 	{
// 		title: 'Четвертое правило Бойцовского клуба.',
// 		body: 'Не более одного поединка за один раз.'
// 	},
// 	{
// 		title: 'Пятое правило Бойцовского клуба.',
// 		body: 'Бойцы сражаются без обуви и голые по пояс.'
// 	},
// 	{
// 		title: 'Шестое правило Бойцовского клуба.',
// 		body: 'Поединок продолжается столько, сколько потребуется.'
// 	},
// 	{
// 		title: 'Седьмое правило Бойцовского клуба.',
// 		body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 	},
// 	{
// 		title: 'Восьмое и последнее правило Бойцовского клуба.',
// 		body: 'Новичок обязан принять бой.'
// 	},

// ];

// let wrap =document.getElementById('wrap');

// for(let i=0; i<rules.length; i++){
// let div =document.createElement('div');

// let h2 =document.createElement('h2');
//   h2.innerText=rules[i].title;

// let p =document.createElement('p');
//   p.innerText=rules[i].body;

//   div.appendChild(h2)
//   div.appendChild(p)
//   wrap.appendChild(div)
// }

// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// let wrap =document.getElementById('wrap');
//  wrap.style.textAlign='center'
//  wrap.style.backgroundColor="purple"
//        fetch(`https://jsonplaceholder.typicode.com/users`)
//           .then(users => users.json())
//           .then(usersJSON =>{
//              console.log(usersJSON);
//              for(let user of usersJSON){
//               let div =document.createElement('div')
//               div.innerText=`${user.name} ${user.phone} ${user.username} ${user.website} ${user.id} ${user.email}`
//               wrap.appendChild(div)
//               div.style.margin='30px'
//               div.style.border="4px double red"
//               div.style.color="white"

//               let divAdress=document.createElement('div')
//               divAdress.innerText=`${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}`
//               div.appendChild(divAdress)
//                           let addressGeo=document.createElement('div')
//                               addressGeo.innerText=`${user.address.geo.lat} ${user.address.geo.lng}`
//                               divAdress.appendChild(addressGeo)

//               let divCompany=document.createElement('div')
//               divCompany.innerText=`${user.company.name} ${user.company.catchPhrase}`
//               div.appendChild(divCompany)

//             };

//           });

// let div1 =document.createElement('div');

// fetch(`https://jsonplaceholder.typicode.com/users`)
//      .then(users => users.json())
//      .then(users =>{
//            console.log(users)

//            for(let user of users){
//              let div2 =document.createElement('div');
             

//              div2.style.margin='20px'
//                 for(let key in user){
//                   // console.log(user[key])
//                   if(typeof user[key]==='object'){
//                     for(let key2 in user[key]){

//                         if(typeof user[key][key2] =='object'){
//                           for(let key3 in user[key][key2]){

//                             let div3=document.createElement('div');
//                             div3.innerText =user[key][key2][key3]
//                             div2.appendChild(div3)

//                           }
//                         }else{
//                           let div4 =document.createElement('div');
//                           div4.innerText =user[key][key2]
//                           div4.style.margin='5px'
//                           div2.appendChild(div4)

//                         }

//                     }

//                   }else{
//                     let div5=document.createElement('div');
//                     div5.innerText=user[key];
//                     div2.appendChild(div5)
//                   }

//                 }

//              div1.appendChild(div2);
//            }

//      });
//    console.log(div1 )
//    document.body.appendChild(div1)

  







// if(typeof user[key][key2] =='object'){
//   for(let key3 in user[key][key2]){

//     let div4=document.createElement('div');
//     div4.innerText =user[key][key2][key3]
//     div3.appendChild(div4)

//   }
// }
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).

// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту
// © 2020 GitHub, Inc.

// let aaaaa=[];

// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

// for(userId of usersWithId){
//   for(citiId of citiesWithId){
//     if(userId.id === citiId.user_id){
//       userId.address =citiId;
//      aaaaa.push(userId)

//     };
//   };

//    };
