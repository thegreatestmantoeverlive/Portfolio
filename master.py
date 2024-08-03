# Operator precedence

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
    print(filedata.readlines())

