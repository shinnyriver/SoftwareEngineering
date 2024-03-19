import re
pattern = r'ab+'
test_string = 'abnormal'

if re.match(pattern, test_string):
    print("The string '{}' matches the pattern.".format(test_string))
else:
    print("The string '{}' does not match the pattern.".format(test_string))

#2019112163 박창수