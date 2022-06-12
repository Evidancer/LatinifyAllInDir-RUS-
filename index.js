const fs = require("fs");
const { argv } = require("process");

const path = argv[2];

// console.log(argv);
renameAllInDir(path);
console.log("Finished!");

function renameAllInDir(path){
    let files = [];
    try{
        files = fs.readdirSync(path);
    } catch { return; }

    files.forEach(file=>{
        renameAllInDir(path+'\\'+file);
        fs.renameSync(path+'\\'+file, path+'\\'+latinify(file));
    });
}

function latinify(str) {

    let newChars = [];
    str.split("").forEach(char=>{
        newChars.push(getLatinLetter(char));
    });
    return newChars.join("");

    function getLatinLetter(char){
        let upperCaseChar = char.toUpperCase();
        let isUpperCase = upperCaseChar === char;
        let rusLatTable = {
            "А": "A",
            "Б": "B",
            "В": "V",
            "Г": "G",
            "Д": "D",
            "Е": "E",
            "Ё": "YO",
            "Ж": "J",
            "З": "Z",
            "И": "I",
            "Й": "YI",
            "К": "K",
            "Л": "L",
            "М": "M",
            "Н": "N",
            "О": "O",
            "П": "P",
            "Р": "R",
            "С": "S",
            "Т": "T",
            "У": "U",
            "Ф": "F",
            "Х": "H",
            "Ц": "C",
            "Ч": "CH",
            "Ш": "SH",
            "Щ": "SH",
            "Ъ": "'",
            "Ы": "I",
            "Ь": "'",
            "Э": "E",
            "Ю": "YU",
            "Я": "YA",
        };

        let result = rusLatTable[upperCaseChar];
        result = result != undefined ? result: char;

        if(!isUpperCase){
            return result.toLowerCase();
        }
        return result;
    }
}