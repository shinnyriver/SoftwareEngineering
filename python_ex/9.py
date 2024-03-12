# def replace_last_value(tuples_list, new_value):
#     modified_list = [tuple[:-1] + (new_value,) for tuple in tuples_list]
#     return modified_list

# # Original list of tuples
# original_list = [(10, 20, 30), (40, 50, 60), (70, 80, 90)]

# # New value to replace the last element
# new_value = 100

# # Call the function to replace the last value in each tuple
# modified_list = replace_last_value(original_list, new_value)

# # Display the modified list
# print("Original List:", original_list)
# print("Modified List:", modified_list)

list1 = [(10, 20, 30), (40, 50, 60), (70, 80, 90)]
tuple1 = list1[2]
new_value = 100
new_list = list(tuple1)
new_list[-1] = new_value
tuple1 = tuple(new_list)

list1[2] = tuple1
print(list1)