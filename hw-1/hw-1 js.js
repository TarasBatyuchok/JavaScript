// -1 присвоить каждому из следующих значений свою переменную:
// --- 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false 
// Вывести каждую при помощи console.log , alert, document.write


// -2 переопределить каждую переменную из задания 1 дав им произвольные значения 
// Вывести каждую при помощи console.log , alert, document.write


// --1--

// let hello = "hello";

// hello ="good luck"

// console.log (hello);
// alert(hello);
// document.write(hello);


// --2--

// let owu ="owu";

// owu = "okten";

// console.log(owu);
// alert(owu);
// document.write(owu);


//--3--

// let com ="com";

// com='ua';

// console.log(com);
// alert(com);
// document.write(com);


//--4--

// let ua ="ua";

// ua="com"

// console.log(ua);
// alert(ua);
// document.write(ua);

//--5--

// let one = 1;

// one=first;

// console.log(one);
// alert(one);
// document.write(one);


//--6--

// let ten= 10;

// ten=11;

// console.log(ten);
// alert(ten);
// document.write(ten);

// --7--

// let numberSecond = -999;

// numberSecond += -999;

// console.log(numberSecond);
// alert(numberSecond);
// document.write(numberSecond);

// --8--

// let numberThree = 123;

// numberThree = 124;

// console.log(numberThree);
// alert(numberThree);
// document.write(numberThree);


// --9--

// let numberFour = 3.14;

// numberfour= 3.15;

// console.log(numberFour);
// alert(numberFour);
// document.write(numberFour);



// -10-

// let numberFive = 2.7;

// numberFive= 3.8;

// console.log(numberFive);
// alert(numberFive);
// document.write(numberFive);

// --11--


// let numberSix = 16;

// numberSix = 19;

// console.log(numberSix);
// alert(numberSix);
// document.write(numberSix);


// --12--

// let booleanTrue = true;

// booleanTrue = !true;

// console.log(booleanTrue);
// alert(booleanTrue);
// document.write(booleanTrue)


// --13--

// let booleanfalse = false;

// booleanfalse =!false;

// console.log(booleanfalse);
// alert(booleanfalse);
// document.write(booleanfalse);

// -3 Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write


// const  OneNumber = 1;

// console.log(OneNumber);
// alert(OneNumber);
// document.write(OneNumber);


// const  SecondNumber =2;

// console.log(SecondNumber);
// alert(SecondNumber);
// document.write(SecondNumber);

// const  ThreeNumber =3;

// console.log(ThreeNumber);
// alert(ThreeNumber);
// document.write(ThreeNumber);

// const OneString="Zenoviy"

// console.log(OneString);
// alert(OneString);
// document.write(OneString);



// const TwoString="Zenoviyouvich"
 
// console.log(TwoString)
// alert(TwoString);
// document.write(TwoString);

//  const ThreString="Stachushun"

// console.log(ThreString);
// alert(ThreString);
// document.write(ThreString);




// -4 при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. 
// Для фамилии имени и отчества создать разные переменные. 
// Вывести каждую при помощи console.log , alert, document.write


//  let myName = prompt('enter your name');

// console.log(name);
// alert(name);
// document.write(name);

//   let surname = prompt('enter your surname');

//  console.log(surname);
//  alert(surname);
//  document.write(surname);

//  let lastName =prompt('enter your lastName');

// console.log(lastName);
// alert(lastName);
// document.write(lastName);



// -5 Взять переменные из задания 4 и сконкатенировать их в одной переменной person.

// let person = myName + " " + surname + " " + lastName;//--------канакантинація---


// let person = `${myName} ${surname} ${lastName}`  //-----інтерполяція---

// console.log (person)



//---6 Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.

// let motherName = prompt('Enter name your mather');
// let motherSurname =prompt(`Enter name your mother surname`);
// let motherLastName = prompt(`enter last name your mather`);

// let mother = `${motherName} ${motherSurname} ${motherLastName}`; //--інтерполяція--
// let mother = motherName + " " + motherSurname + " " + motherLastName; //--канкатинація--

// console.log(mother);


// let fatherName =prompt('Enter name your father');
// let fatherSurname =prompt('Enter your father surname');
// let fatherlastname =prompt('Enter name ypur father lastname');

// // let father =`${fatherName} ${fatherSurname} ${fatherlastname}`; //--інтерполяція
// let father  =fatherName + ' ' + fatherSurname + ' ' + fatherlastname; // --канкатинація
// console.log(father);

// let brotherName = prompt('enter name your brother name');
// let brotherSurname =prompt('enter name your brother surname');
// let brotherlastName =prompt('enter name your brother lastname');

// let  brother = `${brotherName} ${brotherSurname} ${brotherlastName}`; // -інтерполяція
//  let brother = brotherName + ' ' + brotherSurname + ' ' + brotherlastName; //--канкатинація
// console.log (brother);

// -7 при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.

//   let numberOne = +prompt("enter first number");
//   let numberThree = +prompt("enter three number");
//   let numberFour = +prompt("enter four number");

//   console.log(numberOne + numberThree + numberFour);
//  console.log(numberOne,numberThree,numberFour);


// -8 при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. 
// Сложить их между собой записав результат в переменную result и вывести в консоль браузера.


//------варіант перший-----

// let numberOne = parseInt(prompt('enter number One'));
// let numberTwo = parseInt(prompt('enter number Two'));
// let numberThree = parseInt(prompt('enter number Three'));
// let numberFour = parseInt(prompt('enter number Four'));


//  let result =numberOne + numberTwo + numberThree + numberFour;
//  console.log(result);


//----варіант другий----
 
// let numberOne = prompt('enter number one')
// let numberTwo = prompt('enter number Two')
// let numberTree = prompt('enter number Tree')
// let numberFour = prompt('enter number Four')

// let result = parseInt(numberOne) + parseInt(numberTwo) + parseInt(numberTree) + parseInt(numberFour);
// console.log (result);

// -9 при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. 
// Сложить их между собой записав результат в переменную result и вывести в консоль браузера.


// ---перший спосіб--- 

// let numberOne = parseFloat(prompt('enter number one'));
// let numberTwo = parseFloat(prompt('enter number two'));
// let numberTree = parseFloat(prompt('enter number three'));

// let result = numberOne + numberTwo + numberTree;
// console.log(result);


//--другий варіант---
// let numberOne = prompt('enter number one')
// let numberTwo = prompt('enter number Two')
// let numberTree = prompt('enter number Tree')

// let result = parseFloat(numberOne) + parseFloat(numberTwo) + parseFloat(numberTree);
// console.log(result);


//-10  при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.
// round Сложить их между собой записав результат в переменную  и вывести в консоль браузера

// let numberOne = Math.round(prompt('enter your number One'));
// let numberTwo = Math.round(prompt('enter your number Two'));
// let numberThree = Math.round(prompt('enter your number Three'));

// let result = numberOne + numberTwo +numberThree;
// console.log(result);


// Math.round - переводить стрінгу у number-----------------!

// -11при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. 
// Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.
// pow возвести первое число в степень второго числа.
  


 //let number =parseInt(prompt('enter number'));
 //let numberTwo = parseInt(prompt('enter number'));

//  let result = Math.pow(number,numberTwo);
//  console.log =(result);
//  console.log (Math.pow(number,numberTwo));





 //---12При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль 
 //---let a = 100; let b = '100'; let c = true; let d = undefined;


//  let a = 100;
//  console.log(typeof(a));

//  let b = '100';
//  console.log(typeof(b));

//  let c = true;
//  console.log(typeof(c));

//  let d = undefined;
//  console.log (typeof(d));


// -13Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//  В одинаковых выражениях в задании не использовать два одинаковых оператора.
//  Каждое выражение вложить в свою переменную


// let a = 5 < 6 ; 
//  console.log(a);


// let b = 5 > 6 ;
//   console.log(b);


// let c = 5 == 6 ;
//  console.log(c);


// let d = 5 === 6 ;
//   console.log(d)


// let e = 10  === 10;
//  console.log(e);


// let f = 10 == 10 ;
//  console.log(f);

// let g = 10 !== 10 ; 

// let h = 10 > 10 ; 

// let l = 10 < 10 ; 

// let m = 123 === '123';

// let n = 123 == '123';

// console.log(g,h,l,m,n);

// Дополнительно:
// - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль


// console.log(132 > 100 && 45 < 12);// false

// console.log(34 > 33 && 23 < 90);//true

// console.log(99 > 100 && 45 >12);//false

// console.log( 132 > 100 || 45 < 12 );//true

// console.log(111 > 11 || 45 < 111);//true

// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );//false

// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );//true

// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );//false

// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));//true

// console.log(!!'-1');//true

// console.log(!!-1);//true

// console.log(!!'0');//true

// console.log(!!'null');//true

// console.log(!!'undefined');//true

// console.log(!!(3/'owu'));//false

// console.log((111 > 11 || 45 < 111) ||  !!'0');//true

// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));//false



// Дан массив:
// - обратиться в соответсвующую ячейку массива и соответсвующий параметр объекта и вывести в консоль
// Пример : вывести имя 1го объекта . Ответ : console.log(users[0].name). Будьте внимательны! 4й объект имеет индес 3!


// let user =[
//     {name:'vasya', age:31, status:false},
//     {name:'petya', age:30, status:true},
//     {name:'kalya', age:29, status:true},
//     {name:'olya',  age:28, status:false},
//     {name:'max',   age:30, status:true},
//     {name:'anya', age:31, status:false},
//     {name:'oleg', age:29, status:true},
//     {name:'andrey', age:29, status:true},
//     {name:'masha', age:30,status:true},
// ]
    // console.log(user[7].status)
    // console.log(user[4].status);
    // console.log(user[7].name);
    // console.log(user[3].name);
    //console.log(user[6].age);
    //console.log(user[3].age);
      //console.log(user[5].name ,user[5].age);
      //console.log(user[6].age , user[6].status);
    



// -- статус Андрея
// -- статус Максима
// -- имя предпоследнего объекта
// -- имя третьего объекта
// -- возраст Олега
// -- возраст Оли
// -- возраст + имя 5го объекта
// -- возраст + сатус ани



// -Возьмите файл task1_template.html, подключите к нему скрипт, и работайте в нем.
// Напишите код, который :
// -- получает текст из параграфа с id "content"
// -- получает текст из блока  с id "rules"
// -- замените текст параграфа с id 'content' на любой другой
// -- замените текст параграфа с id 'rules' на любой другой
// -- поменятй каждому элементу цвет фона на красный
// -- поменятй каждому элементу цвет текста на синий
// -- получить весь список классов элемента id = rules и вывести в console.log()
// -- получить все элементы с классом fc_rules
// -- поменять цвет текста у всех элементов fc_rules на красный


// let text = document.getElementById('content');
// console.log(text);
// text.innerText ='another text';
// text.style.backgroundColor='red'

// let text2 = document.getElementById('rules');
// console.log(text2);
// text2.innerText ='another text';
// text2.style.backgroundColor='blue';

// let colorRed =document.getElementsByClassName('fc_rules');
// colorRed[0].style.backgroundColor ='red';
// colorRed[1].style.backgroundColor ='red';
// colorRed[2].style.backgroundColor ='red';
// colorRed[3].style.backgroundColor ='red';

// let colorBlue= document.getElementsByClassName('fc_rules');
//  colorBlue[0].style.backgroundColor='blue'
//  colorBlue[1].style.backgroundColor='blue'
//  colorBlue[2].style.backgroundColor='blue'
//  colorBlue[3].style.backgroundColor='blue'

// let fc =document.getElementsByClassName('fc_rules');
// console.log(fc);

// 
//---------------class--------------


// ---1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
  // При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.

  // let str ="hello";
  // let num = 123;
  // let flag = true;
  // let txt = 'true';

  // console.log( typeof str === 'string', typeof num === 'number', typeof flag ==='boolean',typeof txt ==='string' );


  // ---2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
    // 5 + 3,
    // 5 - 3,
    // 5 * 3,
    // 5 / 3,
    // 5 % 3
    // поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.


    // let a1 = 5+3 ;
    // let a2 = 5-3 ;
    // let a3 = 5*3 ;
    // let a4 = 5/3 ;
    // let a5 = 5%3 ;

    // console.log(a1,a2,a3,parseInt(a4),a5);


    // ----3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
    // 5 % 3,
    // 3 % 5,
    // 5 + '3',
    // '5' - 3,
    // 75 + 'кг'


    // let a6 =5 % 3;

    // let a7 =3 % 5;

    // let a8 ='5' % 3;

    // let a9 ='5' - 3;

    // let a10 = 75 + 'кг';

    // console.log(a6,a7,a8,a9,a10);



  // --4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
  // шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.

  // let height = 23;

  // let width = 10 ;

  // let result = width * height;
  
  // console.log(result);

  //-5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//результат поместите в переменную v.

// let  heightC = 10;
 
// let dc = 4;

// let v = heightC *(dc /2);

// console.log (v);

//-6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).


// let n = 3;
// Math.pow(n,2);

// let m = 4;
// Math.pow(m,2);

// let c = Math.pow(n,2) + Math.pow(m,2);

// console.log(c/5);

//-7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log


// let str = "hello world";


// document.write(str);
// alert('str');
// console.log(str);

//-8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

// alert("пивіт\n  25\n  пака\n");


//-9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//Вывести в документ содержимое переменной concatenation спомощью document.write


// let str1 = 'Who';
// let str2 = 'are';
// let str3 = 'you';

// let concatination = str1 +' '+ str2 +' '+ str3; //--канкатинація
//let concatination = `${str1} ${str2} ${str3}`; // --інкрементація

// document.write(concatination);


// -10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
    //let str = "20";
    //let a = 5;
    // document.write(str + a + "<br/>");  ---='205' string---
    // document.write(str - a + "<br/>"); --- = 15- number---
    //document.write(str * "2" + "<br/>");
    // document.write(str / 2 + "<br/>"); ----= 10 number---


// -11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
    // parseInt("3.14")
    // parseInt("-7.875")
    // parseInt("435")
    // parseInt("Вася")
   
// -12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
//  let str = prompt('enter greeting');
//  console.log(str);

// --13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert

// let numberOne = +prompt('Enter number');
// let numberTwo = +prompt('Enter number');

// alert(numberOne + numberTwo);

//--14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, 
// а вам не обходимо вывести строку такого вида
//Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

let name = prompt('Enter your name');
let lastName = prompt('Enter your last name');
let age = prompt('enter your age');

// alert ("Доброго вечера"+" "+name+" "+lastName+" "+"мои поздравления что вам"+" "+age);
// alert (`Доброго вечера ${name} ${lastName} мои поздравления что вам ${age}`);


