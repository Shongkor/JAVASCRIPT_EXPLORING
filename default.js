function createUser(name, age = 18) {

    const user = {};

    user.name = name;
    user.age = age;
    return user;
}
let ok=createUser("Sk")
console.log(ok);