class Couple {
  constructor(husband, wife) {
    (this.husband = husband), (this.wife = wife);
  }

  introduce() {
    console.log(
      `${this.husband} and ${this.wife} are god made couple and there are living for GOD`
    );
  }
}

class Childrens extends Couple {
  constructor(husband, wife, daugher, son) {
    super(husband, wife);
    this.daugher = daugher;
    this.son = son;
  }

  childrenNames() {
    console.log(
      `${this.husband} and ${this.wife} have two wonderful childrens and their daughter is ${this.daugher} and son's name is ${this.son}`
    );
  }
}

const nAndDFamiliy = new Childrens("Nilesh", "Devmini", "Selina", "David");

nAndDFamiliy.introduce()
nAndDFamiliy.childrenNames()
