// let a  = {
//     name2: "harry",
//     language: "javascript",
//     run: ()=>{
//         alert("self run")
//       }
// }
// console.log(a)


// let p = {
//     run: ()=>{
//       alert("run")
//     }
// }

// p.__proto__={
//     name: "jackie"
// }

// a.__proto__ = p
// a.run()
// console.log(a.name)



//classes and objects
// class RailwayForm{
//     constructor(givenname, trainno){
//        console.log("constructor called" + givenname +" " + trainno)
//         this.name = givenname;
//         this.trainno = trainno;

//     }
//     submit(){
//         alert(this.name + ": form submitted" + this.trainno)
//     }
//     cancel(){
//         alert(this.name + " :this form is cancelled" + this.trainno)
//     }
//     // fill{
//     // }

// }

// let harry = new RailwayForm("harryform", 44100)
// // harry.fill("harryform", 44100)
// let rohan1 = new RailwayForm("rohanform", 22100)
// let rohan2 = new RailwayForm("rohanform", 22122)
// // rohan1.fill("rohanform", 22100)
// // rohan2.fill("rohanform", 22122)


// harry.submit()
// rohan1.submit()
// rohan2.submit()
// rohan1.cancel()



// // constructor
// class RailwayForm{
//     constructor(givenname, trainno, address){
//        console.log("constructor called" + givenname + " " + trainno +" " + address)
//         this.name = givenname;
//         this.trainno = trainno;
//         this.address = address

//     }
//    preview(){
//         alert(this.name + ":form for train " + this.trainno + " address is " + this.address);
//     }
//    submit(){
//         alert(this.name + ":form submitted " + this.trainno + " address is " + this.address);
//     }
//     cancel(){
//         alert(this.name + " :this form is cancelled" + this.trainno + " address is " + this.address);
//         this.trainno = 0;
//     }
// }

// let harry = new RailwayForm("harryg", 13455, "420, rudra park")
// harry.preview()
// harry.submit()
// harry.cancel()
// harry.preview()



//inheritance
// class animal{
//     constructor(name, color){
//         this.name  = name;
//         this.color = color;
//     }
//     run(){
//         console.log(this.name + " is running!");
//     }
//     shout(){
//         console.log(this.name + " is shouting!");
//     }
// }

// class monkey extends animal{
//     eatbanana(){
//         console.log(this.name + " eat banana");
//     }
//     hide(){
//         console.log(`${this.name} is hiding`)
//     }
// }

// let ani = new animal("bruno", "white")
// let m = new monkey("chimpu", "orange")

// ani.shout()
// m.eatbanana()
// m.hide()
// ani.hide()//erroer
// m.shout()
// ani.eatbanana()//error



// //method overriding
// class employee{
//     constructor(name){
//         console.log(`${name} - employee's constructor is here`);
//         this.name = name;
//     }
//     login(){
//         console.log("employee has logged in")
//     }
//     logout(){
//         console.log("employee has logged out")
//     }
//     requestleaves(leaves){
//     console.log(`employee has requested ${leaves} leaves - auto approved`)
//     }
// }

// class programmer extends employee{
//     // constructor(...args){
//     //     super(...args)
//     // }
//     requestcoffee(x){
//         console.log(`employee has requestd ${x} coffees`)
//     }
//     requestleaves(leaves){
//        super.requestleaves(4)
//        console.log("one extra is granted")
//         }
// }

// let e = new programmer("harry")
// e.login()
// e.requestleaves()



//static method
// class animal{
//     constructor(name){
//         this.name = animal.capitalize(name);
//     }
//     walk(){
//         alert("animal " + this.name + " is walking")
//     }
//     static capitalize(name){
//         return name.charAt(0).toUpperCase() + name.substr(1, name.length)
//     }
// }

// j = new animal("jack")
// j.walk()


//getter and setter
class animal {
    constructor(name) {
        this._name = name;
    }
    walk() {
        console.log("animal is walking")
    }
    get name() {
        return this._name;
    }
    set name(newname) {
        this._name = newname;
    }
}
let a = new animal("bruno")
a.walk()
console.log(a.name)
a.name = "jack"
console.log(a.name)

let c = 58;
console.log(c instanceof animal)