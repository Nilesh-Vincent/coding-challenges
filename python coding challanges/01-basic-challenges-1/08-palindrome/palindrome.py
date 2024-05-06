def format_string(string):
    lower_string = string.lower()

    formatted_str = ''
    for char in lower_string:
        if char.isalnum():
            formatted_str += char
      
    reversedString = formatted_str[::-1]
    
    if formatted_str == reversedString:
      return True
    else:
      return False
  

input_string = "racecar"
formatted_str = format_string(input_string)
print(formatted_str)  
