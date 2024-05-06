class Couple {
    #husband;
    #wife;

    constructor(husband, wife) {
        this.#husband = husband;
        this.#wife = wife;
    }

    introduce() {
        console.log(
            `${this.#husband} and ${this.#wife} are a god-made couple and they are living for GOD.`
        );
    }

    getHusband() {
        return this.#husband;
    }

    getWife() {
        return this.#wife;
    }

    #privateMethod() {
        return `This is a private message for ${this.#husband} and ${this.#wife}.`;
    }

    showPrivateMessage() {
        console.log(this.#privateMethod());
    }
}

class Childrens extends Couple {
    #daughter;
    #son;

    constructor(husband, wife, daughter, son) {
        super(husband, wife);
        this.#daughter = daughter;
        this.#son = son;
    }

    childrenNames() {
        console.log(
            `${this.getHusband()} and ${this.getWife()} have two wonderful children. Their daughter is ${this.daughter} and their son's name is ${this.son}.`
        );
    }

    // Getter for daughter property
    get daughter() {
        return this.#daughter;
    }

    // Getter for son property
    get son() {
        return this.#son;
    }
}

const nAndDFamily = new Childrens("Nilesh", "Devmini", "Selina", "David");

// Accessing the private daughter and son properties using getters
console.log(`Daughter's name: ${nAndDFamily.daughter}`); // Output: Selina
console.log(`Son's name: ${nAndDFamily.son}`); // Output: David
