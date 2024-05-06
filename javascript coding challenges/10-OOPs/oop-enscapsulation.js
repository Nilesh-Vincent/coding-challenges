class Couple {
    #husband;
    #wife;

    constructor(husband, wife) {
        this.#husband = husband;
        this.#wife = wife;
    }

    introduce() {
        console.log(
            `${this.#husband} and ${
                this.#wife
            } are a god-made couple and they are living for GOD.`
        );
    }

    getHusband() {
        // Return the private property
        return this.#husband;
    }

    getWife() {
        // Return the private property
        return this.#wife;
    }

    #privateMethod() {
        // Private method that is only accessible within the Couple class
        return `This is a private message for ${this.#husband} and ${this.#wife}.`;
    }

    showPrivateMessage() {
        // Use the private method within a public method
        console.log(this.#privateMethod());
    }
}

class Childrens extends Couple {
    constructor(husband, wife, daughter, son) {
        super(husband, wife);
        this.daughter = daughter;
        this.son = son;
    }

    childrenNames() {
        console.log(
            `${this.getHusband()} and ${this.getWife()} have two wonderful children. Their daughter is ${
                this.daughter
            } and their son's name is ${this.son}.`
        );
    }
}

const nAndDFamily = new Childrens("Nilesh", "Devmini", "Selina", "David");

// This won't change the private property #husband, as it remains encapsulated
nAndDFamily.husband = "Thomas";

// Output the private property #husband and #wife
console.log(nAndDFamily.getHusband()); // Output: Nilesh
console.log(nAndDFamily.getWife()); // Output: Devmini

// Demonstrating the use of a private method
const couple = new Couple("Thomas", "Sachee");
couple.showPrivateMessage(); // This will call the public method which in turn calls the private method
