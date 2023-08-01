// https://www.hackerrank.com/challenges/one-month-preparation-kit-tower-breakers-1/problem

/*
 * Complete the 'towerBreakers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 */

function towerBreakers(n, m) {
    // Write your code here
    // base case
    if (n % 2 === 0 || m === 1) {
        return 2
    } else {
        return 1
    }
}