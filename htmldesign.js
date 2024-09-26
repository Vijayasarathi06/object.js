// let user = [{
//     name : "suresh",
//     age : 21,
//     email : "gvijiyasarathi@gmail.com"
// },
// {
//     name : "sarathi",
//     age : 21,
//     email : "gvijiyasarathi@gmail.com"
// },
// {
//     name : "Suriya",
//     age : 21,
//     email : "gvijiyasarathi@gmail.com"
// },
// {
//     name : "Seenu",
//     age  : 21,
//     email : "gvijiyasarathi@gmail.com"
// }
// ]

// function divCreation(i){
//     const userdiv = document.createElement("div")
//             userdiv.style.border= "5px solid red "
//             userdiv.style.marginBottom="10px"
//             userdiv.style.height="200px"
//             userdiv.style.width="200px"
//             userdiv.style.backgroundColor = "white" 
//             userdiv.style.marginTop="10px"

//             userdiv.innerHTML =`<p style="color : blue">Name : ${i.name}</p><p>Age : ${i.age}</p><p>Email : ${i.email}</P>`
//             return userdiv
// }

// const maindiv = document.getElementById("main-div")




// const mapresult = user.map((i)=>{
//     return divCreation(i)
// })
// maindiv.append(...mapresult)

// const searchinput = document.getElementById("search-input")
// const searchbutton = document.getElementById("search-button")


// searchbutton.addEventListener("click",() => {
//     let searchstring = searchinput.value
    
//     if(searchstring != ""){
//         let output= user.filter((i) => {
//             if(i.name.includes(searchstring)){
//                 return i
//             }
//         })

//         if(output.length > 0){
//             maindiv.innerHTML = ""
//             for(let i of output){
//                 maindiv.append(divCreation(i))
//             }
//         }else{
//             maindiv.innerHTML=""
//             for (let i of users){
//                 maindiv.append(divCreation(i))
//             }
//         }
//     }

// })

// Reversed
// let name = "suresh"

// for (let i in name){
//     console.log(name[name.length -(parseInt(i) +1)])
// }

// let name = "suresh"
// function Reversed(data){
//      let output = ""

//     for (let i in data){
//         output = output + data[data.length - (parseInt(i) +1)]
//     }
//     console.log(output) 
// }
// Reversed(name)


// function user (name, age, email){
//     console.log("My name is",name,"and age is",age,"and email is",email)
// }
// user("sarathi",23,"sarathi@gmail.com")

// Another way(Object)
// function user ({name, age, email}){
//     console.log("My name is",name,"and age is",age,"and email is",email)
// }
// user({email:"sarathi@gmail.com",name:"sarathi",age:23})

// // spread(multiple argument in single parameter)
// function numbers (a,s,d,...num){
//     console.log(a,s,d,num)
// }
// numbers(3,45,2,656,2,77,8,2)

// let a = "lorem ispsum is simply dummy text of the printing and typesetting industry"

// let numcount = 0
// let output = ""
// let word = ""
// for (let i in a ){
//     if (a[i] != " "){
//         word = word + a[i]
//         if(i == (a.length-1)){
//             numcount++
//             if(numcount % 2 == 0){
//                 output = output + " " + word
//             }
//             word = ""
//         }
//     }else if ( a[i] == " "){
//         numcount++
//         if(numcount % 2 == 0){
//             output = output+ " "+ word
//         }
//         word = ""
//     }
// }
// console.log(output)

let a = "lorem ispsum is simply dummy text of the printing and typesetting industry"
let word = ""
let output = ""


