item_dict = {
    'item1' : 45.50,
    'item2' : 35,
    'item3' : 41.30,
    'item4' : 55,
    'item5' : 24
}

final_dict = {}

sorted_items = sorted(item_dict.items(), key=lambda x: x[1], reverse=True)

for key, value in sorted_items[:3]:
    final_dict[key] = value
    
final_dict = tuple(final_dict.items())
print(final_dict)