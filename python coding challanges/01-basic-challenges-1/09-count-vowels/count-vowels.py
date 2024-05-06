def count_vowels(string):
    lower_case_string = string.lower()
    
    count = 0
    
    vowels = {'a', 'e', 'i', 'o', 'u'}
    
    for char in lower_case_string:
        if char in vowels:
            count += 1
            
    return count

input_string = "Hello World"
vowel_count = count_vowels(input_string)
print(vowel_count)  # Output: 3
