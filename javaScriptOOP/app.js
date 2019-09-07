class Person {
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName=lastName;
    }

    greeting(){
        return `hello from ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person{
    constructor(firstName,lastName,phone,membership){
        super(firstName,lastName);

        this.phone=phone;
        this.membership=membership;
    }
    static membershipCost(){
        return 500;
    }

}

let customer = new Customer('jon','smith','55-555-55-5','standard');
console.log(customer.greeting());
console.log(Customer.membershipCost());