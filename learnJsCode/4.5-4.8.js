"use strict"

{
    // Конструктор, оператор "new"
    function User (name = 'guest') {
        if (!new.target) {
            console.log('Call without "new"');
            return new User(name);
        }

        this.name = name;
        this.isAdmin = false;
    }

    const user1 = new User('Alex');
    const user2 = User(); // call without "new"

    console.log(user2.name); // guest

    function BrokenUser(name, role) {
        this.name = name;
        this.role = role;

        this.logRole = function () {
            console.log(this.role);
        }

        return {};
    }

    const brokenUser = new BrokenUser('Ben', 'admin');

    console.log(brokenUser); // {}
    // brokenUser.logRole(); // brokenUser.logRole is not a function

    const returnedObj = {};

    function A() {
        return returnedObj;
    }
    function B() {
        return returnedObj;
    }

    const a = new A();
    const b = new B();

    console.log(a === b); // true
}

{
    // Опциональная цепочка '?.'
}

{
    // Тип данных Symbol
}

{
    // Преобразование объектов в примитивы
}