/* A sentence follows Subject + Verb + Object word order. He (subject) obtained (verb) his degree (object). 
Here we list out sample words.
*/

const subjects=['I', 'you', 'he', 'she', 'it', 'we', 'they', 'who','whoever'];
const verbs=['wiggle', 'walk', 'run', 'jump', 'be', 'do', 'have', 'think'];
const objectWords=['Cupboard', 'Pillow', 'Coffee', 'maker', 'Bed', 'Spoon', 'Blanket', 'Knife', 'Pot', 'Dish', 'Fridge', 'Sofa', 'Stool', 'Cup', 'Fork', 'Glass'];

//create a function to get random item from array;
function getWord(words){
    const wordLength = words.length;
        let itemLocation= Math.floor(Math.random() * (wordLength-1));
    
        return words[itemLocation];
}

function createSentence(sentence,subjects,verbs,objectWords){
    sentence.subject = getWord(subjects).toLowerCase();
    sentence.verb = getWord(verbs).toLowerCase()
    sentence.objectWord = getWord(objectWords).toLowerCase();
}


//we need to randomnly select one subject, verb, and an object word
let sentence = {
    _subject:'',
    _verb:'',
    _objectWord:'',

    set subject(subject){
        this._subject = subject;
    },
    set verb(verb){
        this._verb = verb;
    },
    set objectWord(objectWord){
        this._objectWord = objectWord;
    },

    get subject(){
        return this._subject;
    },
    get verb(){
        return this._verb;
    },
    get objectWord(){
        return this._objectWord;
    },

    formatSentence(){
        this._subject = this.subject[0].toUpperCase() + this.subject.slice(1);
        return this._subject + ' ' + this.verb + ' ' + this.objectWord + '.';
    }
};

let mySentence = sentence;
createSentence(mySentence,subjects, verbs, objectWords);
//mySentence.formatSentence();
//mySentence.subject='hey you';
console.log(mySentence);
console.log(mySentence.formatSentence());