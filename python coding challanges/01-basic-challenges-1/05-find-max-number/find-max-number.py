def findMaxNum(array):
    maxNum = 0

    for number in array:
        if number > maxNum:
            maxNum = number
    return maxNum

print(findMaxNum([1, 5, 3, 9, 2]))