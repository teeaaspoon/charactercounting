function countLetters(string) {
    //create an empty object
    var countLettersObject = {};
    //strip the spaces in in the string
    string = string.replace(/\s+/g, "");

    //Steps to: create the object keys with value 0
    //remove duplicate letters
    string = string.split("");
    var uniqueString = [];
    for (var i = 0; i < string.length; i++) {
        if (uniqueString.indexOf(string[i]) == -1) {
            uniqueString.push(string[i]);
        }
    }
    //put each letter as a key in countLettersObject with value 0
    for (var i = 0; i < uniqueString.length; i++) {
        countLettersObject[uniqueString[i]] = 0;
    }
    //count the values in string and add to object accordingly
    for (var i = 0; i < string.length; i++) {
        countLettersObject[string[i]] += 1;
    }

    return originalString;
}

console.log(countLetters("lighthouse in the house"));
