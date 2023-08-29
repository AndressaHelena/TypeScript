class User {
    name: string = 'user'
    age: number = 0

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    showName = () => {
        console.log(this.name);
        
    }
}

const user = new User('Andressa', 38)
user.showName()

const otherUser = new User('Marcos', 40)
otherUser.showName()