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
  deleteWord(term: string) {
    if (this.words[term] != undefined) {
      (this.words[term] = ""), delete this.words[term];
    }
  }
  updateWord(term: string, def: string) {
    if (this.words[term] != undefined) this.words[term] = def;
  }
  upsert(word: Word) {
    this.words[word.term] = word.def;
  }
  count() {
    const arrTerm = Object.keys(this.words);
    return arrTerm.length;
  }
  showAll() {
    console.log(Object.keys(this.words));
  }
  getWord(term: string) {
    return this.words[term];
  }
  exists(term: string) {
    return Boolean(this.words[term] == undefined);
  }
  bulkAdd(arrWord: Word[]) {
    arrWord.forEach((word) => {
      this.add(word);
    });
  }
  bulkDelete(words: string[]) {
    words.forEach((word) => {
      this.deleteWord(word);
    });
  }
}

const dict = new Dict();
const kimchi = new Word("kimchi", "Korean traditional food.");
const tmp = new Word("kimchi", "Korean traditional food and Spicy Cabbage.");
const gim = new Word("gim", "Just Seaweed");
const bibimbap = new Word("bibimbap", "Mixing rice with many ingredients.");
const bulgogi = new Word(
  "bulgogi",
  `a gui made of thin, marinated slices of meat, 
most commonly beef, grilled on a barbecue or on a stove-top griddle.`
);

/*
dict.add(kimchi);
console.log(dict.getWord("kimchi"));
dict.updateWord("kimchi", "Spicy Cabbage");
console.log(dict.getWord("kimchi"));
dict.upsert(tmp);
dict.upsert(gim);
console.log(dict.getWord("gim"));
console.log(dict.getWord("kimchi"));
console.log(dict.count());
dict.showAll();
dict.deleteWord("gim");
dict.bulkAdd([bibimbap, bulgogi]);
dict.showAll();
dict.bulkDelete(["kimchi", "Bulgogi"])
dict.showAll();
*/
