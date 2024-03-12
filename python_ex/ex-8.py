lists1 = ['Red', 'Green', 'White', 'Black', 'Yellow', 'Pink', 'Blue']
lists2 = ['Red', 'Green', 'White', 'Black', 'Yellow', 'Indigo', 'Blue']
final_list = []

for list in lists1:
    if list not in lists2:
        final_list.append(list)
    else:
        continue
    
for list in lists2:
    if list not in lists1:
        final_list.append(list)
    else:
        continue
    
print(final_list)

#2019112163 박창수
