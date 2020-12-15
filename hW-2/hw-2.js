// 1--створити масив та вивести його в консоль:
//   - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу



// let numbers=[1,2,3,4,5];

// let string = ['zenuk' , 'ena' , 'cool' , 'loop' , 'моршинська'];

// let value = [' labtec ', true , 10 , false , 'igor'];

// console.log(numbers,string,value)

//2---- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль


// let amptyArr=[];

// amptyArr[0]='huynya';
// amptyArr[1]=true;
// amptyArr[2]=100;
// amptyArr[3]=false;
// amptyArr[4]='ena';

// console.log(amptyArr);

// -3--- -- створити об'єкт (не меньше 5ти властивостей) який описує
      // - собаку
      // - людину
      // - автомобіль
      // - квартиру
      //- книгу


    //   let dog={
    //       sex:'male',
    //       color:'white',
    //       poroda:'chihuashka',
    //       age:10,
    //       family:true,
    //   };

    //  console.log(dog);


    // let man={
    //     sex:'male',
    //     car:true,
    //     wife:true,
    //     age:35,
    //     wotch:false,
    // };
    // console.log(man);



    // let cars ={

    //     color:'black',
    //     mark:'mercedes',
    //     year:2019,
    //     cost:'1000$',
    //     maxspeed:180, 
        
    // };

    // console.log(cars);


    // let house={
    //     street:'Mudrogo',
    //     number:45,
    //     parking:false,
    //     romm:4,
    //     square:true,
    // }
    // console.log(house);


    // let book={
    //     name:'js for kid',
    //     pages:'300',
    //     price:200,
    //     cd:false,
    //     color:'blue',
    // };
    // console.log(book);

    //4--- Створити масив та вивести його в консоль:
      //   - з 5 собак
      // - 3 5 людей
      // - з 5 автомобілів


    //   let dogs=[];

    //   dogs[0]='malteze',
    //   dogs[1]='pitbul',
    //   dogs[2]='chihua',
    //   dogs[3]='pomaranian'
    //   console.log(dogs);


    //   let people=[];
    //   people[0]='Andrash',
    //   people[1]='Marta',
    //   people[2]='Igor',
    //   people[3]='Taras',
    //   people[4]='Maria'

    //   console.log(people);

    //    let cars=[];
    //    cars[0]='jeep',
    //    cars[1]='mercedec',
    //    cars[2]='lada',
    //    cars[3]='porche',
    //    cars[4]='ferarri'
    //    console.log(cars);



    // ------5----- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
      // - будинок
      // - водій
      // - іграшку
      // - стіл
      // - сумка

/////////////будинок////////////
    //   let house={
    //       room:[1,2,3],
    //       square:false,
    //       street:'mudrogo',
    //       comunication:{
    //           electric:true,
    //           woter:true,
    //           gaz:true,  
    //       },
    //       pool:false,
    //   };
////////////////////водій//////////////////////////////////

    // let driver={
    //     family:['wife','son','doter','dog'],
    //     car:true,
    //     name:'oleg',
    //     age:26,
        
    // };

    // driver.Names={
    //     wife:'Marta',
    //     son:'Ostap',
    //     doter:'ira',
    //     dog:'Tom',
    // }
    // console.log(driver);


////////////////////////іграшку////////////////////////////////

    // let toy={
    //      name:'z-robot',
    //      color:['red','white','balck'],
    //      price:200,
    //      made:'china',
    // };

    // toy.shop={
    //     ashan:true,
    //     silpo:true,
    //     arsen:false,
    //     blusenko:false,
    // },//////embedet--object

    // console.log(toy);

    //////////////стіл/////////////////


    // let table={
    //     color:['red','black','white','green'],
    //     chair:false,
    //     size:'xxl',
    //     material:'wood'
    // };
    // table.price={
    //     red:200,
    //     black:200,
    //     white:100,
    //     green:150,
    // };
    // console.log(table);


////////////////////сумка///////////////////

// let bag={
//     color:['red','white','black'],
//     size:'Xl',
//     year:'4-8',

    
// };
// bag.price={
//     red:100,
//     white:150,
//     black:200,
// };
// bag.brand='Arkadiy';
// console.log(bag);




//--------------------6-----------------Дан массив:--USERS


// - статус Андрія

// - статус Максима users[10].status
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни users[9].age + ' ' + user[9].status
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!



        //       let users = [
        //   {name: 'vasya', age: 31, status: false},
        //   {name: 'petya', age: 30, status: true},
        //   {name: 'kolya', age: 29, status: true},
        //   {name: 'olya', age: 28, status: false},
        //   {name: 'max', age: 30, status: true},
        //   {name: 'anya', age: 31, status: false},
        //   {name: 'oleg', age: 28, status: false},
        //   {name: 'andrey', age: 29, status: true},
        //   {name: 'masha', age: 30, status: true},
        //   {name: 'olya', age: 31, status: false},
        //   {name: 'max', age: 31, status: true}
        // ];

        // console.log(users[10].status);
        // console.log(users[9].name);
        // console.log(users[3].name);
        // console.log(users[6].name);
        // console.log(users[7].name);
        // console.log(users[3].name);
        // console.log(users[5].age,users[5].name);
        // console.log(users[0]);


        //---7-- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
      // - отримує текст з параграфа з id "content"
      // - замініть текст параграфа з id 'content' на будь-який інший
      // - замініть текст параграфа з id 'rules' на будь-який інший
      // - змініть кожному елементу колір фону на червоний
      // - змініть кожному елементу колір тексту на синій
      // - отримати весь список класів елемента з id=rules і вивести їх в console.log
      // - отримати всі елементи з класом fc_rules
      // - поміняти колір тексту у всіх елементів fc_rules на червоний



 //  let id =document.getElementById('content');
     

//       id.innerText= 'abrakadabra';
//       console.log(id);

//    let rules =document.getElementById('rules');

//    rules.innerText= 'abrakadabra';
//    console.log(rules);


// let content =document.getElementById('content');
//     content.style.background='red';
//     content.style.color='blue';

// let rules=document.getElementById('rules');
//    rules.style.background='red';
//    console.log(rules.classList);
//    rules.style.color='blue';

//    let fc_rules=document.getElementsByClassName('fc_rules');
    // console.log(fc_rules);

// ----перебір-різними-уиклами------// 


    
/////------for-----////////////
    // let fc_rules=document.getElementsByClassName('fc_rules');
  

    // for(let i=0; i<fc_rules.length; i++){
    //     fc_rules[i].style.backgroundColor= 'red';
    // };


//////----------while------//////


    // let fc_rules=document.getElementsByClassName('fc_rules');
    
    // let i=0;
    // while(i<fc_rules.length){
    //     fc_rules[i].style.backgroundColor='red';
    //     i++;
    // };


////--------for-of----////
    // let fc_rules=document.getElementsByClassName('fc_rules');
    // for(let fc of fc_rules){
    //     fc.style.backgroundColor='red';
    // };



///////---10----------------зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
      // //   1. перебрати його циклом while}
      // //   2. перебрати його циклом for
      // //   3. перебрати циклом while та вивести  числа тільки з непарним індексом
      // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
      // 5. перебрати циклом while та вивести  числа тільки парні  значення
      // 6. перебрати циклом for та вивести  числа тільки парні  значення
      // 7. замінити кожне число кратне 3 на слово "okten"
      // 8. вивести масив в зворотньому порядку.
      // 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
      // 10


//-----------------while----------- 1. перебрати його циклом while}------//

//  let arr=[2,17,13,6,31,45,66,100,-18];
//     let i=0;
//     while(i<arr.length){
//         console.log(arr[i]);
//         i++;
//     };

    // let arr=[2,17,13,6,31,45,66,100,-18];

    // let i=arr.length-1;
    // while(i>=0){
    //     console.log(arr[i])
    //     i--;
    // };


//------------for-------- перебрати його циклом for----/


// let arr=[2,17,13,6,31,45,66,100,-18];
// for(let i=0; i<arr.length;i++) {
//     console.log(arr[i]);
// };

//-------3----перебрати циклом while та вивести  числа тільки з непарним індексом----//
// let arr=[2,17,13,6,22,31,45,66,100,-18];
// let i=0;
// while(i<arr.length){
//     if(i%2!==0){
//         console.log(arr[i]);
//     };
//     i++;
// };


// -----4---перебрати циклом for та вивести  числа тільки з непарним індексом---------
// let arr=[2,17,13,6,22,31,45,66,100,-18];

// for(let i=0; i<arr.length; i++){
//     if( i%2 !==0){
//         console.log(arr[i])
//     };
// };


//---5--перебрати циклом while та вивести  числа тільки парні  значення---//


// let arr=[2,17,13,6,22,31,45,66,100,-18];

//   let i=0;
//   while(i<arr.length){
//       if(arr[i]%2 == 0){
//           console.log(arr[i]);
//       };
//       i++;
//   };


//--6. перебрати циклом for та вивести  числа тільки парні  значення---// 

// let arr=[2,17,13,6,22,31,45,66,100,-18];


// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2 == 0){
//         console.log(arr[i])
//     };
// };


//---7. замінити кожне число кратне 3 на слово "okten"---

// let arr=[2,17,13,6,22,31,45,66,100,-18];

// for(let i=0 ;i<arr.length; i++){
//     if(arr[i]%3 === 0){
//         arr[i]='okten';
//     }; 
// };
// console.log(arr);


// let arr=[2,17,13,6,22,31,45,66,100,-18];

// let i=0;
// while(i<arr.length){
//     if(arr[i]%3 ===0){
//         arr[i] = 'owu';
        
//     };
//     i++;
// };
// console.log(arr);

//-------!!!!---------------------------//
// let arrNumbers=[2,17,13,6,22,31,45,66,100,-18];
 

// for( let arr of arrNumbers){
//     if(arr%3 === 0){
//         arr='owu';
//     };
// console.log(arr);
// };

//------вивести масив в зворотньому порядку.----


//-----for-----


// let arr=[2,17,13,6,22,31,45,66,100,-18];


// for(let i =arr.length-1; i>=0 ;i--){
//     console.log(arr[i]);
// };

//-----while----//

// let arr=[2,17,13,6,22,31,45,66,100,-18];

// let i = arr.length-1;

// while( i>=0){
//   console.log(arr[i]);
//   i--;
// };


// ----8--всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)--/

//1---зворотньому-порядку-----

// let arr=[2,17,13,6,22,31,45,66,100,-18];

// let i =arr.length-1;

// while(i>=0){
//     console.log(arr[i])

//     i--;
// };

//2---зворотньому-порядку-----

// let arr=[2,17,13,6,22,31,45,66,100,-18];


// for(let i=arr.length-1; i>=0; i--){
//     console.log(arr[i])
// };


//3---зворотньому-порядку---перебрати циклом while та вивести  числа тільки з непарним індексом--

// let arr=[2,17,13,6,22,31,45,66,100,-18];

// let i=arr.length-1;
// while(i>=0){
  
//     if(i%2 !==0){
//         console.log(arr[i])
//     };
//     i--;
// };


//-4--зворотньому-порядку---перебрати циклом for та вивести  числа тільки з непарним індексом

// let arr=[2,17,13,6,22,31,45,66,100,-18];

// for(let i=arr.length-1; i>=0; i--){
//     if(i%2 !== 0)
//     console.log(arr[i]);
// };


//-5--зворотньому-порядку- перебрати циклом while та вивести  числа тільки парні  значення


//    let arr=[2,17,13,6,22,31,45,66,100,-18];


//    let i = arr.length-1

//    while(i>=0){
//        if(arr[i]%2==0){
//        console.log(arr[i])
//        };
//        i--;
//    }


//-- 6. перебрати циклом for та вивести  числа тільки парні  значення---

// let arr=[2,17,13,6,22,31,45,66,100,-18];

// for(let i=arr.length-1; i>=0 ; i--){
//     if(arr[i]%2 !==0)
//     console.log(arr[i]);
// };


//-7--------------. замінити кожне число кратне 3 на слово "okten"

// let arr=[2,17,13,6,22,31,45,66,100,-18];

// for(let i=arr.length-1; i>=0; i--){
//     if(arr[i]%3 ==0){
//         arr[i]='owu';
        
//     };  
 
// };
// console.log(arr);

// ---10--створити пустий масив та :
      //   - заповнити його 50 парними числами за допомоги циклу.
      // - заповнити його 50 непарними числами за допомоги циклу.
      // 1
      // створити пустий масив та :
      //   1. заповнити його 50 парними числами за допомоги циклу.
      // 2. заповнити його 50 непарними числами за допомоги циклу.
      // 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
      //   диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
      // 2. вывести на консоль  каждый третий елемент
      // 3. вывести на консоль  каждый третий елемент
      // но при условии что его значение является парным.
      // 4. вывести на консоль  каждый третий елемент
      // но при условии что он имеет парное значение и
      // записать их в другой массив.
      // 5. Вывести каждый елемент массива у которого соседний с права элемент - парный
      // 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
      //
      // 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.


      // 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
      // додати його в інший масив.


   
    //   - заповнити його 50 парними числами за допомоги циклу.

    //---for-----//
    //   let amptyArr =[];

    //   for(let i=0; i<100; i++){
    //       if(i%2==0)
    //       amptyArr.push(i)
          
    //   };
    //   console.log(amptyArr);
    // -----В-2-------------------------//

    //  let amptyArr=[];
    //  let even =2;
    //  for (let i=0;i<50; i++){
    //      amptyArr[i] = even;
    //      even += 2;
    //      console.log(amptyArr[i])
    //  }

    //---В2---while-------------------------------------------//

    // let emptyArr=[];

    // let even =1; //2 щоб заповнити парними
    // let i=0;
    // while(i<50){
    //    emptyArr[i]=even;
    //    even +=2;
    //    i++;

    // };
    // console.log(emptyArr);

      




    //  console.log(amptyArr)

    //---while---//

    // let amptyArr=[];

    // let i =1;
    // while(i<=100){
    //     if(i%2 ==0){
    //     amptyArr.push(i)
    //     };
    //     i++;
    // };
    // console.log(amptyArr);

    //--- заповнити його 50 непарними числами за допомоги циклу.--

//--for---------

    // let amptyarr=[];

    // for(let i=0; i<100; i++){
    //     if(i%2 !==0){
    //         amptyarr.push(i)
    //     };
       
    // };
    // console.log(amptyarr)

//----while-------

//  let amptyarr=[];


// let i=0;

//  while(i<100){
//      if(i%2 !==0){
//          amptyarr.push(i)
//      }
//      i++;
//  }
//  console.log(amptyarr);


// ----одним циклом заповнити два масиви з різними значеннями--


// let amptyarr=[];
// let anotherArr=[];

// for(let i=1; i<=100; i++){
//     if(i%2 ==0){
//         amptyarr.push(i);
//     }else{
//         anotherArr.push(i);
//     };
// };
// console.log(amptyarr);
// console.log(anotherArr);





// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
      //   диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)



// let emptyArr =[];


// for(let i =0; i<10; i++){
//     emptyArr[i] = Math.round(Math.random()*100);
// }
// console.log(emptyArr);


 //  / 2. вывести на консоль  каждый третий елемент

//  let emptyArr=[];

//  for(let i=0; i<10; i++){
//      emptyArr[i]= Math.round(Math.random() *(732 -8)+8);
    //      if(i%3 ==0){
    //      console.log(emptyArr[i]);
    //  };
//  };
// console.log(emptyArr);




// let emptyArr = [];
//       for(let i = 0; i<10; i++){
//         emptyArr[i] = Math.round(Math.random()*732-8)+8;
//       };
//       console.log(emptyArr);

//         for(let i = 0; i<emptyArr.length; i+=3){
//         console.log(emptyArr[i]);
//       }; 



 // 3. вывести на консоль  каждый третий елемент
      // но при условии что его значение является парным.

//        let emptyArr=[];
//        let Abrakadabra =[]

//  for(let i=0; i<10; i++){
//      emptyArr[i]= Math.round(Math.random() *732 -8)+8;
     
//       if(i%3 ==0){
//           console.log(emptyArr[i]);
//       }else if(emptyArr[i]%2 == 0){
//         Abrakadabra.push(emptyArr[i]);
        
//       };
//  };

//  console.log(Abrakadabra);

// --5. Вывести каждый елемент массива у которого соседний с права элемент - парный



// let numbers =[100,250,50,168,120,345,188];
//        for(let i =0; i<numbers.length; i ++)
//        if(numbers[i+1]%2 ==0){
//            console.log(numbers[i])
//        };
  
   

// --3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.



// let randomArr =[];
// let Arrnumber=[];

//  for(let i =0; i<10; i++){
//     randomArr[i]= Math.round(Math.random()*100);
//     Arrnumber.push(randomArr[i]*5);
    
//  };
//  console.log(randomArr);
//  console.log(Arrnumber);


   
    // 4----- масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.


    //   let price=[100,250,50,168,120,345,188];
       
    //  let result=null;

    //   for(let i=0; i<price.length; i++){
    //      result=result+price[i]/price.length;
    //   };
    //   console.log(result);

    //---4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
    // додати його в інший масив.

    //   let value =[];
    //   value.push('hello',234,true,453,'qwerty',true,123);
 
    //   let number=[];

    //   for(let i=0; i<value.length;i++){
    //        if(typeof(value[i])==="number"){
    //            number.push(value[i])
    //        };
    //   };
    //  console.log(value);
    //   console.log(number);

      // =================
      // =====class=======
      // =================

    //-- змінює колір тексту елемнту з ід main_header на будь-який інший +

    let mainHeader =document.getElementById('main_header');
        mainHeader.style.color='red';

    // //-робить шириниу елементу ul 400 пікселів +

    // let ul = document.getElementsByTagName('ul');
    //    ul[0].style.width= '400px';


    //----- робить шириниу всіх елементів з класом linkList шириною 50% //

    //  let linklist=document.getElementsByClassName('linkList')

    //  for(let li of linklist){
    //      li.style.width = '50%';
    //  };
    //  for(let i=0; i<linklist.length; i++){
    //     linklist[i].style.width='50%';
    //  };
     


    // -- отримує текст який зберігається в елементі з класом listElement2+


    // let text =prompt('your text')

    // let listElement2=document.getElementsByClassName('linkList');
    // listElement2[1].innerHTML=(text)
    //-----------------------------------------------------
    // let innerText =document.getElementsByTagName('a')
    // console.log(innerText[1].innerText);

    // -- отримує всі елементи li та змінює ім колір фону на сірий

      
        //  let lis = document.getElementsByClassName('linkList');
        // for(let ll of lis){
        //     ll.style.backgroundColor="silver";
        // };


        // let lis = document.getElementsByClassName('linkList');
        // for(let i=0; i<lis.length; i++){
        //     lis[i].style.backgroundColor="red";

        // };

     
         // -- отримує всі елементи 'a' та додає їм клас anchor


        //  let a=document.getElementsByTagName('a')
        //  for(let i=0; i<a.length; i++){
        //      a[i].classList.add("anchor");
        //  }


        //  отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

        // let a=document.getElementsByTagName('a')
        //    for(let i=0; i<a.length; i++){
        //        if(a[i].innerText =='link3')
        //        a[i].style.fontSize='40px';
        //    }

        // -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
        //    let a=document.getElementsByTagName('a')
        //    for(const alistElement of a){
        //        let innerText = alistElement.innerText;
        //        alistElement.classList.add(`elemet_${innerText}`);
        //    }


        // -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

        // let sub_header=document.getElementsByClassName('sub-header');

        //    let isPrompt=prompt('enter color')


        // for(let i of sub_header ){
               
        //    switch(isPrompt){
        //        case'red':
        //         i.style.backgroundColor="red";
        //        break;
        //        case'blue':
        //         i.style.backgroundColor="blue";
        //        break;
        //        case'yellow':
        //         i.style.backgroundColor="yellow";
        //        break;
        //        default:('fuck off')
        //    };
        // }

        //-----------------------another--metod--//

        // let sub_header=document.getElementsByClassName('sub-header');
        // let isPrompt = prompt('enter new color');

        //    for(let i of sub_header ){
        //        i.style.backgroundColor = isPrompt;
        //    };

         // -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
           
        //  let sub_header=document.getElementsByClassName('sub-header');
        //  let isPrompt = prompt('enter new color');


        //    for(let sub of sub_header ){
        //       if(sub.innerText === "content 2 segment"){
        //           sub.style.color= isPrompt;
        //       }
        //    }

         // -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

        //  let div=document.getElementsByClassName("content_1");
        //  let isPrompt = prompt('text');

        //  div[0].innerText = isPrompt;

// -- отримати елементи p та змінити їм paddin на довільне значення

// let p= document.getElementsByTagName('p');
// let isprompt=prompt(`enter padding ` );
//  for( let text of p){
//      text.style.padding=isprompt;
//  };


// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
   


// let element =document.getElementsByClassName('text2');
// element[0].innerHTML='asdasdasad';


// let element =document.getElementsByClassName('text2');
// for(let i of element){
//     i.innerHTML='asdasdasad';
// }















     
 













        
