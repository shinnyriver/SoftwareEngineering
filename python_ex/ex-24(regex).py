import re
pattern = r'ab+'
test_string = 'abnormal'

if re.match(pattern, test_string):
    print(f'The string "{test_string}" matches the pattern.')
else:
    print(f'The string "{test_string}" does not match the pattern.')

#2019112163 박창수