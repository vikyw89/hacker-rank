// https://leetcode.com/problems/find-the-town-judge/solutions/3862546/beats-95-82-of-users-with-javascript/

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    class Person {
        constructor(name, trust, trustedBy) {
            this.name = name
            this.trust = trust ?? [],
                this.trustedBy = trustedBy ?? []
        }
    }
    // generate empty
    const people = {}
    for (let i = 1; i <= n; i++) {
        people[i] = new Person(i)
    }

    // generate connections
    for (let i = 0; i < trust.length; i++) {
        const [person, toTrust] = trust[i]
        people[person].trust.push(people[toTrust])
        people[toTrust].trustedBy.push(people[person])
    }

    // find people who trust nobody and trusted by everyone
    for (let person in people) {
        const isTrustingNobody = people[person].trust.length === 0
        const isTrustedByEveryone = people[person].trustedBy.length === n - 1
        if (isTrustingNobody && isTrustedByEveryone) {
            return person
        }
    }
    return -1
};