// given me the fibinocci series numbers upto the length of 5


// for (let i = 0; i <=15; i++){
//     console.log("number", i)
//     if(i==14){
//         continue
//     }
//     console.log("number")
// }

// object
// object - {} save data in key value pairs
// array - []
// let fruit = ["apple","orange","grapes", {fruit1:"kiwi"},["harry"]]

// let user = {
//     user1 : "sarathi",
//     user2 : "suriya",
//     age : 23,
//     address : {state : "tamilnadu",country : "India"},
//     fruits : ["apple","orange","grapes"]
// }

// console.log(typeof fruit)
// search the last letter

// let name = "sureshmniytrydjhhiut5euy"
// console.log(name[name.length-1])

// console.log(user.address.state)

// console.log(fruit)

// Change the value
// console.log("before",user)
// user.age = 26
// console.log("after",user)

// Add
// user.email = "gvijayasarathi@gamil.com"
// console.log(user)

// Add nested Object
// user.address.city = "chennnai"
// console.log(user)

// delete
// delete user.user1
// console.log(user)

// Change
// user.address.state = "Tamil"
// console.log(user)

// find the keys
// console.log(Object.keys(user))

// find the values
// console.log(Object.values(user))

// find the entries
// console.log(Object.entries(user))

// New object declare

// let data = new Object(user)

// data.name = "sonthosh"
// console.log(data)

// let user2 = {
//     movie1: "Iron MAN",
//     movie2: "Caption America"
// }
// console.log(user2)

// sperad (Merge the Object)

// let a = {...user,...user2}
// console.log(a)

// looping
// for (let i in user){
//     console.log(user[i])
// }

// let details = {
//     city : "chennai",
//     area : "Ashok nagar"
// }

// user.address = {...user.address,...details}
// console.log(user)

// includes
// let name2 = 'suresh'
// console.log(name2.includes('s'))

// Check the String
// let  name = "sureshkumar"
// let name1 = "santhosh"
// let output = ""
// for (let i of name){
//     for (let j of name1){
//         if (i == j && output.includes(i) == false)
//             output+=i
//     }
// }
// console.log(output)

// let name = "softlogic"

// let output=''
// for (let i of name){
//     console.log(i)
//     let count = 0
//     for (let j of name){
//         if(i == j){
//         count=count+1
//         }
//     } 
//     output=output+i+count  
// }
// console.log(output)

// Count
// let name = "hello"
// let output =''
// for ( let i of name){
//     let count = 0
//     for (let j of name){
//         if(i == j){
//         count=count + 1
//     }
// }
//     output=output+i+count
// }
// console.log(output)


// let insName = "softlogic institute"
// for( let i in insName){
// if( i % 2==0 ){
//     console.log(i,insName[i])
// }
// }
// factorial
// let x = 5
// let factorial = 1
// for(let i = 1; i<=5; i++){
//     factorial = factorial * i
    
// }
// console.log(factorial)

// let name = "madam"
// let output = ''
// for( let i = name.length-1; i >=0; i--){
//     output = output+name[i]
// }
// if( name == output){
//     console.log("This is the planindrom")
// }else{
//     console.log("This is not a planindrom")
// // }
// remove the space and slice from second letter to tenth letter...
// from the result add underscore at the middle... and show the final result

// let name = "my institute name is softlogic"

// let name1 = (name.replaceAll(" ", "").slice(1,11))
// firsthalf = name1.slice(0,name1.length/2)
// secondhalf = name1.slice(name1.length/2)
// finalhalf = firsthalf+"_"+secondhalf
// console.log(finalhalf)

// count
// let name = "hello"
// let output=""
// for( let i of name){
//     let count = 0
//     for(let j of name){
//         if ( i == j)
//             count++
//     }
//     output= output+i+count
// }
// console.log(output)

// let name = "souresh"
// let name1 = "sonthosh"
// output=""
// for (let i of name){
//     for (let j of name1){
//         if(i == j && output.indexOf(i) == -1){
//             output +=i
//         }
//     }
// }
// console. log(output)

// Voules count 

// let name = "hello world this is fun sss"
// let vowels = "aeiou"
// let count = 0
// let output = ""
// for ( let i in name){
//     if( name[i] != " "){
//         if(vowels.includes(name[i])){
//             count++
//         }else if (i == (name.length -1)){
//             output = output+ " "+count
//             count=0
//         }
//     }else{
//         output = output + " "+ count
//         count=0
//     } 
// }   
// console.log(output)

// let a = "softlogic"
// let output = ""

// for (let i = a.length-1; i >= 0; i--){
//     output = output +a[i] 
// }
// if(a == output){
//     console.log("this is a palindrom")
// }else{
//     console.log("this is not a palindrom")
// }

// let a = "hello world this is fun sss"
// let output=""
// let vowels="aeiou"
// let count=0
// for (let i in a){
//     if( a[i] != " "){
//         if(vowels.includes(a[i])){
//             count++
//         }else if( a.length-1 == i){
//             output = output+" "+count
//             count=0
//         }
//     }else{
//         output=output+" "+count
//         count=0
//     }
// }
// console.log(output)

// let obj = {
//     name : "suresh",
//     age : 21,
//     email : "gvijiyasarathi@gmail.com"
// }
// // deep copy
// // let obj2 = JSON.stringify(obj)
// // console.log(obj2)

// // solo copy
// let obj2 = JSON.parse(JSON.stringify(obj))
// console.log(obj2)

// let arr = ["apple","orange","grapes",{name : "suresh"},["hurry","potter"]]
// console.log(arr[3].name)
// console.log(arr[4][0])

// for ( let i of arr){
//     if (typeof i == "object" && i.name){
//         console.log(i.name)
//     }else{
//         console.log(i)
//     }
// }?
// let arr = ["apple","orange","grapes"]
// let output=[" banana","kiwi"]
// for ( let i of arr){
//     if ( i != "orange"){
//         output.push(i)
//     }

// }console.log(output)

// for ( let i in arr){
//     if ( i != 1){
//         output.push(arr[i])
//     }
// }
// console.log(output)
// replace
// for (let i in arr){
//     if ( i == 1){
//         console.log("kiwi")
//     }console.log(arr[i])
// }

// let obj = [...arr,...output]
// arr = [...arr,...output]
// console.log(arr)

// FACTORIAL
// let a = 5 
// let factorial = 1

// for ( i = 1; i <= 5;i++ ){
//     factorial=factorial*i
// }
// console.log(factorial)

// EVEN INDEX NUMBER
// let name = "softlogic institute"
// for ( let i in name){
//     if ( i % 2 == 0){
//         console.log(i,name[i])
//     }
// }

// PLAINDROM

// let str = "softliogic"
// let output=''
// for ( i = str.length-1;i >= 0;i--){
//     output+=str[i]
//     if( str == output){
//         console.log("this is a planindrom")
//     }else{
//         console.log("this is not a plaindrom ")
//     }
// }

// let a = "My institute name is softlogic"

// let b = (a.replaceAll(" ","").slice(1,11))
// let firsthalf = (b.slice(0,b.length/2))
// let secondhalf = (b.slice(b.length/2))
// let finalhalf = firsthalf+"_"+secondhalf
// console.log(finalhalf)

// let fruits = ["kiwi","apple","orange","grapes"]

// find the apple in index
// console.log(fruits[0])

// POP (remome last value)
// fruits.pop()
// console.log(fruits)

// PUSH(add to last place)
// fruits.push("kiwi")
// console.log(fruits)

// shift(remove first value)
// let res = fruits.shift()
// console.log(res)
// console.log(fruits)

// UNshift(add to first place)
// let res = fruits.unshift("banana")
// console.log(res)
// console.log(fruits)

// let fruits = ["apple","orange","grapes","kiwi"]
// let data2 = ["banana","kiwi"]

// Concat(MErge two values)
// let res = fruits.concat(data2)
// console.log(res)

// JOIN(join the single data)
// let res = fruits.join("*")
// console.log(res)

// SLICE
// let res = fruits.slice(2)
// console.log(res)

// // INdexof
// let res = fruits.indexOf("kiwi")
// console.log(res)

// let fruits = ["apple","orange","grapes","kiwi"]
// SPLICE
// systax(indexnumber,deletecount,item1,item2,item3)

// delete
// fruits.splice(1,1)
// console.log(fruits)

// replace
// fruits.splice(2,1,"jackfruit")
// console.log(fruits)

// Insert
// fruits.splice(1,0,"pine apple","mango")
// console.log(fruits)

// INcludes
// let res = fruits.includes("orange")
// console.log(res)

// SORT
// fruits.sort()
// console.log(fruits)

// Assending order
// let a = [3,5,8,6,9,1,2,4,7]
// let output=[]

// while(true){
//     if(a.length == 0){
//         break
//     }
//     let maxNum = 0
//     let index;
//     for (let i in a){
//         if(a[i] > maxNum){
//         maxNum=a[i]
//         index=i
//         }
//     }
//     output.unshift(maxNum)
//     a.splice(index,1)
// }

// FILLTER
// let arr = [2,3,5,7,8,6,4,10,1]

// let output = arr.filter((i) =>  {
//     if(i % 2 == 0){
//         return i
//     }

// })
// console.log(output)

// // MAP
// let arr = [2,3,5,7,8,6,4,10,1]
//  let mapoutput = arr.map((i) => {
//     if (i %  2 == 0){
//         return i
//     }
// })
//  console.log(mapoutput)

// let obj = [{
//         name : "suresh",
//         age : 21,
//         email : "gvijiyasarathi@gmail.com"
//     },
//     {
//         name : "sarathi",
//         age : 21,
//         email : "gvijiyasarathi@gmail.com"
//     }
// ]

// ONE WAY
// let output=[]
// for ( let i of obj){
//     if(!(i["unquie_id"])){
//     i.unquie_id=Math.floor(Math.random()*10)
//     console.log(i)   
//     }
//     output.push(i)
// }

// ANOTHER WAY
// let mapoutput = []
// let output= obj.map((i) =>{
//     if(!i["unique_id"]){
//         i.unique_id = Math.floor(Math.random()*10)
//     }
//     return i
// } )
// mapoutput.unshift(output)
// console.log(mapoutput)

// Sperad
// let obj = {
//     name : "suresh",
//     age : 21,
//     email : "gvijiyasarathi@gmail.com"
// }

// obj = {id : 2,...obj}
// console.log(obj)

// FOREACH

// obj.forEach((i) => {
//     if(!i["unquie_id"]){
//         i.unquie_id=Math.floor(Math.random()*10)
//     }
// })
// console.log(obj)

// let arr = [1,0,3,4,0,0,4,7,0,6,0,5,,8,0]
// let output=[]
// let nonzero = arr.filter(i => i != 0)
// console.log(nonzero)

// for( let i in arr){
//     let min = Math.min(...nonzero)
//     if(arr[i] != 0){
//         output.push(min)
//     nonzero.splice(nonzero.indexOf(min),1)
//     }else{
//         output.push(arr[i])
//     }
// }
// console.log(output)

// TASK 2
// let num = [1,2,3,4,5,6,7,8,9,10]

// let evenNum = num.filter(i => i % 2 == 0)
// console.log(evenNum) 

// TASK 3
// let str = ["apple","banana","cherry"]

// str.forEach((i) => {
//     for( let i of str){
        
//     }
//     console.log(i)
// })

// TASK 4

// let upp = ["apple","banana","cherry"]

// let uppmap = upp.map(i => i.toUpperCase())
// console.log(uppmap)

// TASK 5

// let items =[
//     {
//         name : "item1",
//         price : 50
//     },
//     {
//         name : "item2",
//         price : 100
//     },
//     {
//         name : "item3",
//         price : 200
//     },
// ]

// let arr = items.filter((i) => {
//     let max = Math.max(...items)
//     return i
// })
// console.log(arr)

// TASK 7

// let number = [1,2,3,4,5]
// let count = "1"
// let output = []
// let items = number.map((i) => {
//     if ( i >= 0){
//         count = count + i
//         output.push(count)
//         number.splice(number.indexOf(i),1)
//     }
//     console.log(items)
// })

// let user = [{
//             name : "suresh",
//             age : 21,
//             email : "gvijiyasarathi@gmail.com"
//         },
//         {
//             name : "sarathi",
//             age : 21,
//             email : "gvijiyasarathi@gmail.com"
//         },
//         {
//             name : "Suriya",
//             age : 21,
//             email : "gvijiyasarathi@gmail.com"
//         },
//         {
//             name : "Seenu",
//             age  : 21,
//             email : "gvijiyasarathi@gmail.com"
//         }
//     ]
    
// const maindiv = document.getElementById("main-div")

// const mapresult = user.map((i) => {
//     const userdiv = document.createElement("div")
//     userdiv.style.border ="5px solid blue"
//     userdiv.style.height="250px"
//     userdiv.style.width="250px"
//     userdiv.style.backgroundColor="yellow"
//     userdiv.style.marginBottom="10px"

//     userdiv.innerHTML = `<p>Name: ${i.name}</p><p>Age: ${i.age}</p><p>Email: ${i.email}</p>`
//     return userdiv
    
// })
// maindiv.append(...mapresult)
// console.log(mapresult)

// CLASS Function

// class Calculator{

//     constructor(name,age,email){

//         this.name = name
//         this.age = age
//         this.email = email
//     }

//     add (){
//         return `${this.name} ${this.age},${this.email}`
//     }

//     sub (){
//         return `${this.name} ${this.age},${this.email}`
//     }

//     mul (){
//         return `${this.name} ${this.age},${this.email}`
//     }
// }


// obj = new Calculator("sarathi",34,"gvijayasarathi@gmail.com")

// console.log(obj.add())
// console.log(obj.sub())
// console.log(obj.mul())

// ONE WAY

// let fruit = ["apple", "banana","orange",["harry",["ben 10",["sarathi","suriya"],"chotto"]," Porter"],["captain",["bheem", "chincan"], "America"]]

// for( let i of fruit){
//     if(typeof i == "object"){
//         for ( let j of i){
//             if (typeof j == "object"){
//                 for(let l of j){
//                     // console.log(l)
//                     if(typeof l == "object"){
//                         for(let k of l){
//                             console.log(k)
//                         }
//                     }else{
//                         console.log(l)
//                     }
//                 }
//             }else{
//                 console.log(j)
//             }
//         }
//     }else{
//         console.log(i)
//     }
// }

// Recursion function type(Function Way)


// function looping(arr){
//     for ( let i of arr){
//         if ( typeof i == "object"){
//             looping(i)
//         }else{
//             console.log(i)
//         }
//     }
// }
// looping(fruit)


// let insName = "softlogic institute"

// for (let i in insName){
//     if( i % 2 == 0){
//         console.log(i,insName[i])
//     }
// }











