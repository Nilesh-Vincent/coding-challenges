def countOccurences(string, char):
    count = 0
    for item in string:
        if item == char:
            count = count + 1
    return count

result = countOccurences("hello", "l")
print(result)