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

const nileshAndDevmini = new Couple("Nilesh", "Devmini");

nileshAndDevmini.introduce();
