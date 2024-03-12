list1 = [(10, 20, 30), (40, 50, 60), (70, 80, 90)]
tuple1 = list1[2]
new_value = 100
new_list = list(tuple1)
new_list[-1] = new_value
tuple1 = tuple(new_list)

list1[2] = tuple1
print(list1)

#2019112163 박창수