# https://leetcode.com/problems/can-place-flowers/solutions/4706947/beats-86-66-of-users-with-python3/

class Solution:
    def canPlaceFlowers(self, flowerbed: list[int], n: int) -> bool:
        # edge case
        if n == 0:
            return True
        
        # condition to plant flower
        remaining_flowers = n
        for key,val in enumerate(flowerbed):
            if val == 1:
                continue
            left_is_valid = False
            right_is_valid = False
            
            # check left
            if key - 1 < 0:
                left_is_valid = True
            elif flowerbed[key - 1] == 0:
                left_is_valid = True
            
            # check right
            if key + 1 >= len(flowerbed):
                right_is_valid = True
            elif flowerbed[key + 1] == 0:
                right_is_valid = True
            
            if left_is_valid and right_is_valid:
                flowerbed[key] = 1
                remaining_flowers -= 1
                if remaining_flowers == 0:
                    return True
        
        return False