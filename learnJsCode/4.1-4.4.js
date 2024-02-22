'use strict'

{
    // Объекты
    const user = {
        name: 'James',
        age: 30
    };

    console.log(user.name); // 'James'
    delete user.name;
    console.log(user.name); // undefined

    // user.weird key = 'weird value'; // SyntaxError
    user['weird key'] = 'weird value';
    console.log(user['weird key']); // 'weird value'
    const anotherKey = 'someKey';
    user.anotherKey = 123;
    console.log(user.someKey); // undefined
    console.log(user['someKey']); // undefined
    console.log(user.anotherKey); // 123
    user[anotherKey] = 456;
    console.log(user[anotherKey]); // 456

    const age = 20;
    const myObj = {
        [anotherKey]: 'anotherValue',
        age,
        30: 30,
        10: 20,
        example: undefined
    }

    for (let key in myObj) { // 10 30 someKey age example
        console.log(key)
    }

    if (myObj.example === undefined) {
        console.log('I guess there is no an "example" key');
    }

    console.log('example' in myObj); // true

    const weirdObj = {
        for: 1,
        switch: 2,
        const: 3,
        break: 4,
        return: 5
    };

    console.log(weirdObj.return); // 5
    console.log(weirdObj.for); // 1
    console.log(weirdObj.switch); // 2
}

{
    // Копирование объектов и ссылки
    const myObj = {};
    const myObj2 = myObj;
    const myObj3 = {};

    myObj2.name = 'Emma';
    console.log(myObj.name); // 'Emma'
    console.log(myObj === myObj2); // true

    myObj3.name = 'Emma';
    console.log(myObj === myObj3) // false

    myObj.age = 40;
    myObj.id = 100;

    Object.assign(myObj3, myObj, { someKey: 'someValue' });
    console.log(myObj3); // { name: 'Emma', age: 40, id: 100, someKey: 'someValue' }

    myObj.address = { street: null };

    Object.assign(myObj3, myObj);
    console.log(myObj3.address === myObj.address); // true

    const myObj4 = structuredClone(myObj);
    console.log(myObj4 === myObj); // false
    console.log(myObj4.address === myObj.address); // false
}

{
    // Методы объекта, "this"
    const user = {
        name: 'John',
        age: 25,

        logUserName() {
            console.log(user.name);
        },

        logUserNameUsingThis() {
            console.log(this.name);
        }
    };

    const anotherUser = {
        name: 'Mike',
        age: 20
    }

    anotherUser.logUserName = user.logUserName;
    user.logUserName(); // John
    anotherUser.logUserName(); // John

    anotherUser.logUserName = user.logUserNameUsingThis;
    anotherUser.logUserName(); // Mike

    anotherUser.logUserAge = () => console.log(this.age);
    anotherUser.logUserAge(); // undefined

    anotherUser.logUserAge = function () { console.log(this.age) };
    anotherUser.logUserAge(); // 20

    anotherUser.logUserAge = function () {
        const getAge = () => this.age;
        console.log(getAge());
    }
    anotherUser.logUserAge(); // 20
}