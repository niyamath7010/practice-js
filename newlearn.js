//converting obj to sting and string into obj again

// var student={
//     name:"niyamath",
//     age:23,
//     isActive:true
// }

// const objtostring=JSON.stringify(student)
// console.log(objtostring);
// const objtoparse=JSON.parse(objtostring)
// console.log(objtoparse);


// to get a dummy value in a
// var name="niyamath"
// if(name==window.name){
//     console.log("true statemnet");
// }


// callinga function..function call be called any where 
// var name="khader"
// setName2()
// console.log(name);
// function setName2(){
//     name="khader",
//     console.log("find my name is:",name);
// }

// fill command
// var test=[1,2,3,4,5,6]

// console.log(test.fill("n",3));

// to slice

// var name=["tim","tom","dom","pin","sun"]

// console.log(name.slice(1,4));

// to splice
// var name=["tim","tom","dom","pin","sun"]

// name.splice(1,3,)
// console.log(name);


// var User={
//     firstName:"niyamath",
//     lastName:"khader",
//     isActive:true,
//     courseList:[],
//     buyCourse:function(courseName){
//         this.courseList.push(courseName)
//     },
//     getCourseList:function(){
//         return `${this.firstName}  ${this.lastName} has purchased ${this.courseList.length}`
//     }
// }

// var courseList=true


// User.buyCourse(`react developer`)
// User.buyCourse(`front end developer`)

// console.log(User.getCourseList());


// var myLife={
//     name:"niyamathullah",
//     goal:"front end developer",
//     wife:"afreen sultana",
//     bikes:[],
//     houses:[],
//     car:[],
//     buyedBike:function(bikeName){
//         this.bikes.push(bikeName)
//     },
//     buyedHouse:function(newHome){
//         this.houses.push(newHome)
//     },
//     buyedCars:function(newCars){
//         this.car.push(newCars)
//     },
//     myOwnThings:function(){
//         return `${this.name} hubby of ${this.wife} designation ${this.goal} has ${this.bikes.length} bikes and ${this.car.length} cars and has owned a villa in ${this.houses}` 
//     }
// }

// myLife.buyedBike("r15 v3")
// myLife.buyedCars("bwm 7series")
// myLife.buyedHouse("at casa grand 49th floor")
// myLife.buyedCars("bwm 9th series")
// console.log(myLife.myOwnThings());


// var myState=["tamil nadu","chennai","mumbai",1998,"delhi","rajastan"]

// // for(let i=0;i<myState.length;i++){
// //     if(typeof myState[i] !=="string")
// //     continue;
// //     console.log(myState[i]);
// // }
// myState.forEach((e)=>{
//     console.log((e));
// })



// var myLife={
//     name:"Niyamathullah",
//     age:23,
//     WorkAs:"softwere developer",
//     totalWorkedCompanies:[],
//     currentlyLivesIN:[],
//     companies:function(cNames){
//         this.totalWorkedCompanies.push(cNames)
//     },
//     location:function(place){
//         this.currentlyLivesIN.push(place)
//     },
//     myAllThings:function(){
//         return `${this.name} age ${this.age} designation ${this.WorkAs} worked companies ${this.totalWorkedCompanies.length} ${this.totalWorkedCompanies}    lives in ${this.currentlyLivesIN}. `
//     }

// }

// myLife.location("USA");
// myLife.location("dubai");
// myLife.companies("tcs")
// myLife.companies("amazon")
// myLife.companies("microsoft")
// console.log(myLife.myAllThings());


// var appendata=function(name,kush,jointCount){
//     this.name=name,
//     this.kush=kush,
//     this.jointCount=jointCount
//     var getDetail=function(){
//         console.log(`total fun today ${name} smoked ${kush},count of joints ${jointCount}`);
//     }
// }

// var salman=new appendata("salman","wiz khalifa kush",50)
// console.log(salman);

// var newSalman=JSON.stringify(salman)
// console.log(newSalman);


// function dioData(emp_code,emp_name,age,designation,experiance,yoe){
//     return{
//         "employee code":emp_code,
//         "personal detail":{
//             emp_name,age
//         },
//         "employee degig":designation,
//         "experiance":experiance,
//         "yoe":yoe
//     }
// }

// dioData(46,"niyamathullah",23,"sofeware developer","five years in SDE 1",5)




// function appendata(shop,type){
//     if(shop===icecream[0].shop){
//         icecream[0].type.push(type)
//     }else{
//         icecream[1].type.push(type)
//     }
// }

// appendata("egmore","niyamath choco")
// appendata("roapetta","guu cha")

// console.log(icecream)

// var icecream=[
//     {
//         shop:"egmore",
//         type:["vallina","chocolate","badam"]
//     },{
//         shop:"royapetta",
//         type:["rasmalai"," milk","kaju katli"]
//     }
// ]


// function niyamath(shop,type){
//     if(shop===icecream[0].shop){
//         icecream[0].type.push(type)
//     }else{
//         if(shop===icecream[1].shop){
//             icecream[1].type.push(type)
//         }else{
//             if(icecream.length==2){
//                 icecream.push({"shop":[shop],"type":[type]})
//             }else{
//                 icecream[2].shop.push(shop)
//                 icecream[2].shop.push(type)
//             }
//         }
//     }
// }

// niyamath("egmore","niyamath kush")
// niyamath("royapetta","wiz khalifa kush")
// niyamath("bob marly","jamican kush")
// console.log(icecream);


// var collection={
//     "1":{
//         "album":"ayz",
//         "artist":"cold play",
//         "track":["song1","song2"]
//     }
// }

// function update(id,prop,value){
//     if(collection.hasOwnProperty(id)){
//         if(collection[id].hasOwnProperty(prop)){
//             if(value==""){
//                 delete collection;
//             }else{
//                 collection[id][prop]=value
//                 return collection
//             }
//         }else{
//             return"prop not found"
//         }
//     }else{
//         return "id not found"
//     }
// }


// let arr=[[1,2,3,4],[5,6],[8]]

// function niyamath(arr){
//     let sums=[]
//     let sum=0
//     for(i=0;i<arr.length;i++){
//         for(j=0;j<arr[i].length;j++){
//             sum=sum+arr[i][j]
//         }
//         sums[i]=sum
//         sum=0
//     }
//     return sums
// }

// console.log(niyamath(arr));


// for in property

// var student={
//     name:"marry",
//     age:18
// }

// for(property in student){
//     console.log(property)
// }

// var mystudents=[
//     {
//         name:"farhan",
//         grades:[90,50,80]
//     },{
//         name:"ahamed",
//         grades:[100,100,70]
//     }
// ]

// function grades(mystudents){
//     let aver=[]
//     let sum=0
//     let score=0
//     for(i=0;i<mystudents.length;i++){
//         score=mystudents[i].grades
//         for(j=0;j<score.length;j++){
//             sum=sum+score[j]
//         }
//         aver[i]=Math.floor( sum/score.length)
//         sum=0
//     }
//     return aver
// }

// console.log(grades(mystudents));


//         THIS KEYWORD

// function create(name,age){
//     var student={
//         name:name,
//         age:age
//     }
//     return student
// }

// var student1=create("niyamath",23)
// console.log(student1);

// function birthday(student){
//     student1.age++
// }
// birthday(student1)
// console.log(student1.age);


// function createstudent(name,age){
//     var student={
//         name:name,
//         age:age,
//         birthday:function(){
//             this.age++
//         }
//     }
//     return student
// }

// var student7=createstudent("niyamathullah khader",23)
// student7.birthday()
// console.log(student7);


// function newthis(name,age){
//     this.name=name,
//     this.age=age,
//     this.birthday=function(){
//         this.age++
//     }
// }

// var student3=new newthis("niyamath",23)
// student3.birthday()
// console.log(student3);



function myBio(name,date,month,year){
    this.name=name,
    this.date=date,
    this.month=month,
    this.year=year,
    this.date=function(){
        this.date++
    }
    this.month=function(){
        this.month++;
    }
    this.year=function(){

        this.year++
    }
}
var niyamath=new myBio("niyamath",11,10,1997)
niyamath.date()
niyamath.month()
niyamath.year()
console.log(niyamath);