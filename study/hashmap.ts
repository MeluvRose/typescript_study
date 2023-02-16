type Words = {
  [key: string]: string;
};

class Word {
  constructor(public term: string, public def: string) {}
}

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] == undefined) {
      this.words[word.term] = word.def;
    }
  }
  del(term: string) {
    if (this.words[term]) {
      this.words[term] = "";
      delete this.words[term];
    }
  }
  update(term: string, def: string) {
    if (this.words[term]) {
      this.words[term] = def;
    }
  }
  def(term: string) {
    return console.log(this.words[term]);
  }
}

const kimchi = new Word("kimchi", "korean traditional food");
const dict = new Dict();

dict.add(kimchi);
dict.def("kimchi");
dict.def("egg");
console.log(dict);
dict.update("kimchi", "spicy cabbage");
dict.def("kimchi");
dict.del("kimchi");
console.log(dict);
