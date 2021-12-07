//this key word appending new entry


// var User=function(firstName,courseList){
//     this.firstName=firstName,
//     this.courseList=courseList
//     var getCourseDetail=function(){
//         console.log(`course count is ${courseList}`);
//     }
// }

// var niyamath=new User("niyamathullah",4)
// console.log(niyamath);

// var hidayat=new User("hidayat",5)
// console.log(hidayat);

// var User=function(name,jointcount,kushs){
//     this.name=name,
//     this.jointcount=jointcount,
//     this.kushs=kushs
//     var weSmoked=function(){
//         console.log(`today semma kissa and smoked${jointCount}`);
//     }
// }

// var salman=new User("salman",10,"wiz khalifa kush" )

// console.log(salman);

// var sadik=new User("sadik",50,"mia khalifa")
// console.log(sadik);




// proto keyword and info

// var User=function(firstName,courseList){
//     this.firstName=firstName,
//     this.courseList=courseList
//     this.getCourseDetail=function(){
//         console.log(`course count is ${this.courseList}`);
//     }
// }

// User.prototype.getFirstName=function(){
//     console.log(`your first name is ${this.firstName}`);
// }

// var niyamath=new User("niyamathulah",5)


// if(niyamath.hasOwnProperty("firstName")){
//     niyamath.getFirstName()
// }
// niyamath.getCourseDetail()

//onjects in MDN

var User={
    name:"",
    getUserName:function(){
        console.log(`the user name is ${this.name}`)
    },
}

var niyamath=Object.create(User)
console.log(niyamath);
niyamath.name="niyamathullah"
niyamath.getUserName()


var same=Object.create(User,{
    name:{value:"sammy"},
    couserCount:{value:5}
})

same.getUserName()