li=[]
tpl = ()
input_tuple = (('333', '22'), ('1414', '2323'))

for tuples in input_tuple:
    for values in tuples:
        li.append(int(values))
    tpl = tpl + (tuple(li),)
    li.clear()    
        
print(tpl)

#2019112163 박창수