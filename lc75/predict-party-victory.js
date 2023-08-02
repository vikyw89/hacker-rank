// https://leetcode.com/problems/dota2-senate/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let toVote = senate.split("");
    let rbans = 0;
    let dbans = 0;
    
    while (!toVote.every((s) => s === toVote[0])) {

        let votes = [];
        for (const s of toVote) {
            if (s === "D") {
                if (dbans > 0) {
                    dbans--;
                    continue;
                } else {
                    rbans++;
                    votes.push("D");
                }
            }
            if (s === "R") {
                if (rbans > 0) {
                    rbans--;
                    continue;
                } else {
                    dbans++;
                    votes.push("R");
                }
            }
        }
        // console.log("votes moving on to next round:", votes);
        toVote = votes;
    }

    return toVote[0] === "R" ? "Radiant" : "Dire";
};