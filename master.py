testStr = "Testing str"
testNumArr = [1 , 2, 3, 4, 5, 6 ]

# Operator precedence



# Modules
import math

math.log10(10)
math.log(9 , 3)
math.floor(9.8)
math.ceil(3.1)
math.pi
math.sqrt(4)

import statistics

greatStr = "the most common value"
leastStr = "least common"

greatVal = 100 
leastVal = 1

strList = [greatStr , greatStr, greatStr , leastStr, leastStr , leastVal]
numList = [ 1, 2, 3, 4 , 5 , 6]

mostFrequency = statistics.mode(strList)
median = statistics.median(numList)
average = statistics.mean(numList)

import random 

random.random()

random.randint(1, 5) # returns random number in range [1,5] 1 and 5 inclusive

# File handling

# r: open an existing file for a read operation.
# w: open an existing file for a write operation. If the file already contains some data, then it will be overridden but if the file is not present then it creates the file as well.
# a:  open an existing file for append operation. It won’t override existing data.
# r+:  To read and write data into the file. This mode does not override the existing data, but you can modify the data starting from the beginning of the file.
# w+: To write and read data. It overwrites the previous file if one exists, it will truncate the file to zero length or create a file if it does not exist.
# a+: To append and read data from the file. It won’t override existing data.

file = 'test'

with open(file , 'w+') as filedata:
    contents = filedata.write(''' 
    Test sample string
    ''')

    filedata.close()

with open(file , 'r') as filedata:
    print(filedata.readlines ())

byteFile = open('samplebytes' , 'w+')

import pickle

serialisedStr = pickle.dump(testStr , byteFile)

