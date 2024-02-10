# https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/?envType=study-plan-v2&envId=leetcode-75

from typing import List


class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        output_arr = []
        max_candies = max(candies)
        for key, val in enumerate(candies):
            if val + extraCandies >= max_candies:
                output_arr.append(True)
            else:
                output_arr.append(False)

        return output_arr