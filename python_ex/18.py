li = [1,3,5,3,7,1,9,3]

def duplicate(li):
    for item in range(len(li)):
        temp = li[item]
        for i in range(item+1, len(li)):
            if temp == li[i]:
                return temp
    return -1

first_duplicate = duplicate(li)

print(first_duplicate)