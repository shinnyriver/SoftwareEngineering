dict1 = {
    'a' :100,
    'b' :200,
    'c' :300
}

dict2 = {
    'a' : 200,
    'b' : 100,
    'd' : 400
}

dict3 = {}

for key in dict1:
    if key in dict2:
        dict3[key] = dict1[key] + dict2[key]
    else:
        dict3[key] = dict1[key]
        
for key in dict2:
    if key not in dict3:
        dict3[key] = dict2[key]
        
print(dict3)

#2019112163 박창수