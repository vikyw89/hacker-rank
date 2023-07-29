/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if(str1 + str2 != str2 + str1) return '';
 
    let isValid = (divisor,divisible) =>{
        // base case
        if(divisible.length == 0) return true;
        if(!divisible.startsWith(divisor)) return false;

        // recursive case
        const valid = isValid(divisor,divisible.slice(divisor.length))
        return valid
    }

    for(let i = str1.length - 1; i >= 0; i--){
        let divisor = str1.slice(0,i+1)
        const isStr1Valid = isValid(divisor,str1)
        const isStr2Valid = isValid(divisor,str2)
        if( isStr1Valid && isStr2Valid ) {
            return divisor
        }
    }
};