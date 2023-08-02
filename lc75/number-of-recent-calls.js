// https://leetcode.com/problems/number-of-recent-calls/?envType=study-plan-v2&envId=leetcode-75

var RecentCounter = function () {
    this.queue = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    while (this.queue.length && this.queue[0] < t - 3000) {
        this.queue.shift();
    }

    this.queue.push(t);

    return this.queue.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */