def remove_duplicates(array):
   
    unique_list = []
    
    for item in array:
        if item not in unique_list :
            unique_list.append(item)
    
    return unique_list

my_list = [1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 'hello', 'hello']
result = remove_duplicates(my_list)
print(result) 
