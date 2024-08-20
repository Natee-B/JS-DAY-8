// let friend = {
//   fname: `Natee`,
//   lname: `Bunyalug`,
//   nickname: `Mark`,
//   sayHi(){
//     console.log(`hello ${this.fname} ${lname} nickname${nickname}`)
//   }
// }
// console.log(friend.sayHi())

// let friend2 = {
//   fname: `Natee2`,
//   lname: `Bunyalug2`,
//   nickname: `Mark2`,
//   sayHi(){
//     console.log(`hello ${this.fname} ${lname} nickname${nickname}`)
//   }
// }

// class house {
//   constructor(_name,_color,_floor){
//   this.name =  _name
//   this.color = _color
//   this.floor = _floor
//   }
//   openWindow(){
//     console.log(`${this.name} Open window`)
//   }
//   openDoor(){
//     console.log(`${this.name} Open The Door`)
//   }
// }

// class User {
//   constructor(_name){
//     this.name = _name
//   }
//   sayHi(){
//     console.log(`Hello ${this.name}`)
//   }
// }


// class User{
//   login() {
//     console.log(`User login`)
//   }
// }


// class admin extends User{
//   constructor(){super();}
//   // login(){
//   //   console.log(`admin update`)
//   // }
// }
// a = new admin
// a.login()
// // a.updateP()


// class Calculatoe {
//   constructor(init = 0){
//     this.value = init
//   }
//   add(num){
//     this.value += num
//     return this.value
//   } 
//   show(){
//     console.log(`Value:${this.value}`)
//   }
// }
// result = new Calculatoe(10)
// console.log(result.show())

// // ให้สร้าง Class ชื่อ Sale
// // มี property ชื่อ name, amount, price
// // มี method calcPrice()
// // ให้เขียน code คำนวณราคาไว้ที่ method นี้
// // ให้สร้าง Class ชื่อ Beverage สืบทอดมาจาก Sale
// // มี property ชื่อ amount, และ price
// // ให้สร้าง object ชื่อ beverage จาก Beverage โดย
// // name = “Pepsi”, amount = 3, price = 19
// // ให้ beverage เรียก method calcPrice() และแสดงผลของ calcPrice() ที่ได้

// class Sale{
//   constructor(_name,_amount,_price){
//   this.name = _name
//   this.amount = _amount
//   this.price = _price
//   }
//   calcprice(){
//   return this.price * this.amount
//   }
// }
// class Beverage extends Sale {
//   constructor(_name, _amount, _price) {
//     super(_name, _amount, _price);
//   }
// }
// class beverage extends Beverage {
//   constructor(amount, price) {
//     super('Pepsi', amount, price);
//   }
// }
// let test = new beverage(3,19)
// console.log(test.calcprice())


// array =[1,2,3]
// obj = {
//   name : `Mark`,
//   age : `30`
// }
// console.log(Object.keys(obj))
// //lab1
// isArray = (input => console.log(Array.isArray(input)))
// isArray(obj)


//lab1
//ให้คำนวณผลรวมของ salaries ใน object โดยใช้ Object.keys, Object.values
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };
// value = Object.values(salaries)
// console.log(Object.values(salaries))

// edit = value.reduce((acc,el)=>{
//   return acc = acc + el
// },0)
// console.log(edit)
// a={}
// b=[1,2,3]


// lab2
// obj1 = {a:1}
// obj2 = {}
// checkEmpty = (obj) => {
//   if (Object.keys(obj).length === 0) {
//     return `it empty`
//   } else { return `it Obj` }
// }
//   console.log(checkEmpty(obj1))
//   console.log(checkEmpty(obj2))



//----------------บ่าย-----------------



// //lab1
// // จงเขียนฟังก์ชันหาค่าผลคูณของตัวเลข โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด
// calMul = (mul, ...num) => {
//   sum = []

//   for(let item of num){
//     sum.push(item*mul)
//   }
//   return sum
// }
// console.log(calMul(2,1,2,3,4,5,150)) //✅ ไม่แน่ใจว่าแบบนี้ได้ไหม หรือต้องให้ผลลัพธ์ออกเป็นค่าค่าเดียว

// // lab2
// // จงเขียนฟังก์ชัน filterOutOdds โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด และให้ return ค่าเป็น array ของเลขที่เป็นเลขคู่
// filterOutOdds = (...num) => {
//   result = num.reduce((acc, el) => {
//     if (el % 2 === 0) {
//       acc.push(el)
//       return acc
//     }
//     return acc
//   }, [])
//   return result
// }
// let evenNumber = filterOutOdds(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
// console.log(evenNumber) //✅


// //lab3
// //จงเขียนฟังก์ชัน mergeObjects โดยพารามิเตอร์ของฟังก์ชันสามารถรับ Object ได้ไม่จำกัด และให้ return ค่าเป็น Object ที่เกิดจาก Object ในพารามิเตอร์มา merge กัน
// A={a1:1,a2:2,a3:3}
// B={b4:4,b5:5,b6:6}
// C={c7:7,c8:8,c9:9}
// let mergeObjects =(...obj)=>{
//   return Object.assign({}, ...obj);
//   }
// console.log(mergeObjects(A,B,C)) //✅ ให้ GPT ช่วย นึกท่าไม่ออก


// // lab4
// // จงรวม nums1 และ num2 เข้าด้วยกัน
// // จงสร้าง array ที่ได้จากการนำ nums1 และ nums2 มารวมกัน แต่ให้เพิ่ม 5 เข้าไปก่อน nums1 และเพิ่ม - 6, -1 เข้าไประหว่าง nums1 กับ nums2
// // หาผลรวมของทุก element ใน Array ที่ได้
// const nums1 = [1, -2, 3, 4];
// const nums2 = [8, 3, -8, 1];
// let nums3 = [5,...nums1,-6,-1,...nums2]
// result = nums3.reduce((acc,el)=> acc += el ,0)
// console.log(nums3) // ✅ nums1 และ nums2 มารวมกัน
// console.log(result) // ✅ หาผลรวมของทุก element ใน Array ที่ได้

// //lab5
// // จงเขียนฟังก์ชันที่ใช้คุณสมบัติของ Spread operator เพื่อรับค่า array1
// // แล้วคืนค่าเป็น array ที่มีการเปลี่ยนแปลงค่าของ index ที่ 3 ให้มีค่าเท่ากับ ค่าเดิมยกกำลัง 2 โดยที่ array1 ไม่เกิดการเปลี่ยนแปลง
// let array1 =[9,8,7,6,5]
// arrayX2 = (array1)=>{
//   let newArr = [...array1]
//   xx2 = newArr[3] ** 2
//   newArr.splice(3, 1, xx2)
//   return newArr
// }
// console.log(arrayX2 (array1))//✅

// //lab6
// // จงเขียนฟังก์ชันที่รับค่า ชื่อ นามสกุล และ งานอดิเรก ซึ่งงานอดิเรกอาจมี 1 หรือมากกว่า 1 ก็ได้ แล้วคืนค่าเป็น 
// // ชื่อ, นามสกุล, งานอดิเรก และจำนวนงานอดิเรก โดยใช้คุณสมบัติของ spread parameter
// person = ((name,lname,...hobby)=>{
//   arr = {
//     fristname: name,
//     lastname: lname,
//     hobbys: hobby
//   }
//   return arr
// })
// let Mark = person(`Natee`, `Bunyalug`, `games`, `pet`, `song`)
// console.log(Mark) // ✅คิดว่าน่าจะถูกครับ

// //lab7
// // จงเขียนฟังก์ชัน doubleAndReturnArgs โดยรับพารามิเตอร์มาเป็น Array และตัวเลขกี่ตัวก็ได้ และ return ค่าเป็น Array 
// // ที่ประกอบด้วยค่าเดิมในพาร.ามิเตอร์ที่เป็น Array และค่าพารามิเตอร์ที่เป็นตัวเลขคูณสอง
// doubleAndReturnArgs = (array, ...num) => {
//   let arr2 = []
//   for (key of num) {
//     arr2.push(key * 2)
//   }
//   arr = [...array, ...arr2]
//   return arr
// }
// newArray1 = doubleAndReturnArgs([1, 2, 3], 4, 4);
//   // expexted result: [1, 2, 3, 8, 8]
// newArray2 = doubleAndReturnArgs([2], 10, 4);
//   // expexted result: [2, 20, 8]
// console.log(newArray1) //✅
// console.log(newArray2) //✅

// //lab9
// //จงเขียนฟังก์ชัน cloneArray โดยรับพารามิเตอร์มาเป็น Array และ return ค่าเป็น Array ที่มี element เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว
// arr = [9,8,7]
// cloneArray=(array)=>[...array]
// let arrEdit = cloneArray(arr)
// console.log(arrEdit) // ✅

// //lab10
// //จงเขียนฟังก์ชัน cloneObject โดยรับพารามิเตอร์มาเป็น Object และ return ค่าเป็น Object ที่มี key-value เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว
// obj ={
//   A:1,
//   B:2,
//   C:3
// }
// cloneObj =(obj)=>({...obj})
// let obj2 = cloneObj(obj)
// console.log(obj2) // ✅

// //lab11 ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first); // Maya ✅
// console.log(second); // Marisa ✅
// console.log(third); // Chi ✅

// //lab12 ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   'Raindrops on roses',
//   'whiskers on kittens',
//   'Bright copper kettles',
//   'warm woolen mittens',
// ];
// console.log(raindrops); // 'Raindrops on roses' ✅ เรียงค่าตามตำแหน่งใน Array
// console.log(whiskers); // 'whiskers on kittens' ✅
// console.log(aFewOfMyFavoriteThings); // ['Bright copper kettles','warm woolen mittens'] ✅

// //lab13 ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); // [20,10,30] ❌ ลืมนับ index ตำแหน่งที่ 0

// //lab14 ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); // 8 ✅
// console.log(yearNeptuneDiscovered); // 1846 ✅ เพราะชื่อตัวแปรต้องตรงกับชื่อ Key ถึงประกาศตัวแปรได้

// //lab15 ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };
// let { numPlanets, ...discoveryYears } = planetFacts;
// console.log(discoveryYears); // {key: 1846,key: 1659} ✅ เพราะใช้ ... เลยเลือกค่าที่เหลือทั้งหมดเขา Obj

// //lab16 ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
// function getUserData({ firstName, favoriteColor = 'green' }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// arr1 = getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' });
// // Your name is Alejandro and you like purple ✅ ผลลัพธ์ออกมาตามค่าที่ใส่ให้
// arr2 = getUserData({ firstName: 'Melissa' }); 
// // Your name is Melissa and you like green ✅ เพราะค่าเริ่มต้นของ color คือ Green
// arr3 = getUserData({}); 
// // Your name is undefined and you like green ✅ เพระาไม่ได้ใช่ค่าให้ firstName
// console.log(arr1)

// //lab17 ให้ใช้ Array destructuring ในการสลับค่าตัวแปร guest กับ admin
// let guest = 'Jane';
// let admin = 'Pete';
// [guest,admin] = [admin,guest]
// console.log(guest, admin) //✅

// //lab18 จงเขียนฟังก์ชันตรวจสอบอายุ โดยรับข้อมูล user ที่อยู่ใน object ที่มี keys เป็น firstName lastName และ age 
// // โดยถ้า user มีอายุมากกว่า 18 ให้แสดงผลเป็นการทักทายแล้วตามด้วยชื่อ-นามสกุล ในกรณีที่มีอายุน้อยกว่าหรือเท่ากับ 18 
// // ให้แสดงผลว่า ไม่มีสิทธิ์เข้าใช้งาน (ใช้ destructuring)
// let person ={
//   firstName: `Natee`,
//   lastName: `Bunyalug`,
//   age: 30
// }
// checkAge=({firstName,lastName,age})=>{
//    return age<=18
//     ? `Access Denied.`
//     : `Hello ${firstName} ${lastName}`
// }
// console.log(checkAge(person)) //✅ ติดสักพักใหญ่ๆ เพราะลืมใส่ {} ในพารามิเตอร์

// //lab19 จงเขียน Object destructuring โดยกำหนดให้
// // ตัวแปร name เก็บค่า name property
// // ตัวแปร age เก็บค่า years property
// // ตัวแปร isAdmin เก็บค่า isAdmin property หากไม่มีค่าให้ default value เป็น false
// let user = {
//   name: 'John',
//   years: 27
// };
// let { name: nameProperty, years: yearsProperty, isAdminProperty = false} = user
// console.log(nameProperty, yearsProperty, isAdminProperty) //✅ ทำให้ name Property เว้นวรรคตามโจทย์ไม่ได้

// //lab21 ให้ใช้ Array destructuring โดยให้ a, b, c, d, e และ f มีค่า 1, 2, 3, 4, 5, และ 6 ตามลำดับ
// let arr = [1, [2, [[[3, 4], 5], 6]]];
// let [[a, [b, [[[c, d], e], f]]]] = [arr];
// console.log(a, b, c, d, e, f) //✅

// //lab22 ให้ใช้ Object destructuring โดยให้ a เท่ากับ 5 และ b เท่ากับ 10
// const obj = { prop: 5, prop2: 10 };
// let {prop: a, prop2: b} = obj;
// console.log(a, b) //✅

// //lab23 a และ b มีค่าเท่าไร
// let a, b;
// ({ a, b } = { a: 1, b: 2 }); // คิดว่า Error || undifined ❌ a: 1, b: 2 เป็นค่าObjหลอทำไมไม่มีตัวแปรนำ? ไม่ใช่การเปลี่ยนชื่อตัวแปรหลอ?
// console.log(a,b)

// //lab24 a และ b มีค่าเท่าไร
// const [, , , a, b] = [1, 2, 3]; // undifined 1e6% ✅
// console.log(a,b)

// //lab25 ให้ใช้ destructuring โดยให้ x เท่ากับ 5 และ y เท่ากับ 100
// const q = { prop: 5, prop2: [10, 100] };
// let { prop: x, prop2 } = q
// let [, y] = prop2
// console.log(x, y)//✅ เกือบนึกไม่ออก

// //lab26 ให้ใช้ destructuring โดยให้ x เท่ากับ Hello และ y เท่ากับ b
// const q = {
//   prop: 'Hello',
//   prop2: {
//     prop2: {
//       nested: ['a', 'b', 'c']
//     }
//   }
// };
// let { prop: x, prop2, } = q;
// let { prop2: p2 } = prop2
// let { nested } = p2
// let [, y] = nested
// console.log(x,y) ✅

// //lab27 ให้ใช้ for … of กับ names (ให้ destructuring object ในแต่ละ iteration)
// //ในแต่ละ iteration ให้ console.log ค่า Full name ออกมา
// const names = [
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Jack', lastName: 'Dann' },
//   { firstName: 'Joe', lastName: 'Dunne' }
// ];
// let [obj1,obj2,obj3] = names;
// let { firstName: fname1,lastName :lname1} = obj1
// let { firstName: fname2,lastName :lname2} = obj2
// let { firstName: fname3,lastName :lname3} = obj3
// let fullname = [`${fname1} ${lname1}`,`${fname2} ${lname2}`,`${fname3} ${lname3}`]
//   for (let key of fullname){
//       console.log(key) //✅ ได้ผลลัพธ์ แต่ไม่ใช่วิธีนี้แน่ๆ
// }


// // lab28 ให้ใช้ for … of กับ users (ให้ destructuring object ในแต่ละ iteration)
// // ในแต่ละ iteration ให้ console.log ค่า user ตามด้วย age หาก age ไม่มีค่าให้ใช้ unknown
// const users = [
//   { user: "Name1" },
//   { user: "Name2", age: 2 },
//   { user: "Name2" },
//   { user: "Name3", age: 4 }
// ];

// let [obj1,obj2,obj3,obj4] = users;
// let { user: u1, age: a1 = `unknown`} = obj1;
// let { user: u2, age: a2 = `unknown`} = obj2;
// let { user: u3, age: a3 = `unknown`} = obj3;
// let { user: u4, age: a4 = `unknown`} = obj4;
// let array = [`${u1} ${a1}`, `${u2} ${a2}`, `${u3} ${a3}`, `${u4} ${a4}`]
// for(let key of array){
//   console.log(key) //✅ ทำแบบข้อ 27
// }

// for (let { user, age = `unknown` } of users) {
//   console.log(user, age) //✅ นึกออกกแล้ว
// }






  // let func = (...rest)=>{
  //   console.log(rest[0])
  //   console.log(rest[1])
  //   console.log(rest[2])
  //   console.log(rest[3])
  // }
  // func(`Mark`,`Mook`,1,2)

  // function sum(...args){
  //   let result =0;
  //   for(let arg of args) result += arg;
  //   return result;
  // }
  // console.log(sum(1))
  // console.log(sum(1,2))
  // console.log(sum(1,2,3))

  // let showName = (fname,lname, ...title)=>{
  //   console.log(`${fname} ${lname}`)
  //   console.log(title)
  //   console.log(title[0])
  //   console.log(title.length)
  // }
  // showName(`m`,`b`,1,2,3)

  // let arr = [3,5,1]
  // console.log(Math.max(arr))
  // console.log(Math.max(...arr))

  // let str = `Mark`
  // console.log(...str)
  // arrstr = [...str]
  // console.log(arrstr)

  // obj = {a: 1, b: 2, c: 3}
  // console.log({...obj})

  // let arr = [`John`,`Doe`]
  // let[firstName, surname] = arr;
  // console.log(firstName)
  // console.log(surname)

  // array = [`Mark`, `Natee`, ,30, `unknow`, `Thailand`]
  // let [name, ,age, ,country] = array //ประกาศตัวแปรรับ Value ในarray
  // console.log(name)
  // console.log(age)
  // console.log(country)

  // let [name1,name2,...rest] = array //ใช้ ...rest ได้
  // console.log(name1, name2)
  // console.log(rest[0])
  // console.log(...rest)

  // let [name1 = `User1`,name2 = `User2`,name3 = `User3`] = array  //ตั้งชื่อเริ่มต้นให้ ในกรณ๊ที่ไม่มีชื่อให้ เช่น User3
  // console.log(name1, name2, name3)

  // let user = {
  //   username: `Mark`,
  //   email: `Hotmail`,
  //   pass: `1234`
  // }
  // // let { username: un, email, pass } = user //สร้างตัวแปรรับค่าข้างใน obj โดยชื่อต้องตรงกับ Key แต่สามารถเปลี่ยนทีหลังได้ เช่น username เปลี่ยนเป็น un
  // // console.log(un)
  // // console.log(email)
  // // console.log(pass)

  // let { username,...rest}=user
  // console.log(username)
  // console.log(rest)

  // let options ={
  //   size:{
  //     width:100,
  //     height:200
  //   },
  //   items:['Cake','Donut'],
  //   extra: true
  // }

  // let name = {
  //   fname: `Mark`,
  //   lname: 'Bunyalug'
  // }

  // showName = ({fname:f,lname:l}) => {
  //   console.log(`${f} ${l}`)
  //   }
  // showName(name)