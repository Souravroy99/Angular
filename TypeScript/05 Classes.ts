class Employee {
    id: number ;
    name: string ;
    address: string ;

    // Non-Parameterized Constructor
    // constructor() {
    //     this.id = 0 ;
    //     this.name = "Joker" ;
    //     this.address = "Universe" ;
    // }


    // Parameterized Constructor
    constructor(id: number, name: string, address: string) {
        this.id = id ;
        this.name = name ;
        this.address = address ;
    }

    // Adding Methods
    getMyInfo(): string {
        return this.name + " " + this.id + " " + this.address ;
    }
};

const john = new Employee(111, "Sourav", "Kharagpur") ;

// console.log(john) ;

john.id = 1 ;
john.name = "Radhe" ;
john.address = "Park Street" ;

console.log(john) ;
console.log(john.getMyInfo()) ;