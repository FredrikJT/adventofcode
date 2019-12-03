

import csv
import numpy as np

with open('day3_input1.csv', 'r') as f:
  reader = csv.reader(f)
  xinput1 = list(reader)

with open('day3_input2.csv', 'r') as f:
  reader = csv.reader(f)
  xinput2 = list(reader)

with open('in1.csv', 'r') as f:
  reader = csv.reader(f)
  input1 = list(reader)
  
with open('in2.csv', 'r') as f:
  reader = csv.reader(f)
  input2 = list(reader)


board = np.zeros((10000,10000),dtype=int)

board[10, 0:10] = 1+board[10, 0:10]




print(board[0:100, 0:100])

origo = [5000, 5000]
x = 5000
y = 5000

xnew = 5000
ynew = 5000


for i in range(len(input1)):
    print(input1[i])
    direction = input1[i][0][0]
    length = int(input1[i][0][1:])
    print(direction)
    print(length)
    
    if direction == 'U':
        xnew = x + length
          
        board[x:xnew, y] = 1+board[x:xnew, y]
      
    if direction == 'D':
        xnew = x + length
      
        board[xnew:x, y] = 1+board[xnew:x, y]
      
    if direction == 'L':
        ynew = y + length
      
        board[ynew:y, x] = 1+board[ynew:y, x]
      
    if direction == 'R':
        ynew = y + length
      
        board[y:ynew, x] = 1+board[y:ynew, x]
      
    x = xnew
    y = ynew




hej2 = board[4900:5100, 4900:5100]
