let DATA = "srcret information";

class User {
    constructor(name, email) {
        this.name = name;
        this.email= email;
    }

    viewData() {
        console.log("data = ", DATA);
    }
}

class Admin extends User {
    constructor(name, email){
        super(name, email);
    }

    editData() {
        DATA = "some new value";
    }
}

let student1 = new User("yogita", "abc@email.com");
let student2 = new User("yogesh", "xyz@email.com");


let teacher1 = new User("dean", "dean@email.com");
let teacher2 = new User("coordinater", "coordinator@email.com"); 

let admin1 = new Admin("admin", "admin@email.com");  