
class UserRegisteration {

    constructor () {

        this.user = []
    }

    addUser (name,age,email,dept) {

        let objuser = {
            "name":name,
            "age":age,
            "email":email,
            "dept":dept
        }
        console.log(objuser)

        this.user.push(objuser)
        console.log(this.user)

        maindiv.innerHTML = ""
    }

    getAluser () {

    }

    updateUser () {

    }

    deleteUser () {

    }
}

let maindiv = document.getElementById("main-div")

const searchbutton = document.getElementById("button-div")

searchbutton.addEventListener("click",() => {
    
    obj.addUser("sarathi","23","gvijayasarathi234@gmail.com","EEE")
})
obj = new UserRegisteration()











