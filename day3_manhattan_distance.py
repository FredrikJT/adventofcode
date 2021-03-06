

import csv
import numpy as np

with open('day3_input1.csv', 'r') as f:
  reader = csv.reader(f)
  input1 = list(reader)

with open('day3_input2.csv', 'r') as f:
  reader = csv.reader(f)
  input2 = list(reader)

with open('in1.csv', 'r') as f:
  reader = csv.reader(f)
  xinput1 = list(reader)
  
with open('in2.csv', 'r') as f:
  reader = csv.reader(f)
  xinput2 = list(reader)


board = np.zeros((11000,11000),dtype=int)

x = 5000
y = 5000
xnew = 5000
ynew = 5000

for i in range(len(input1[0])):
    direction = input1[0][i][0]
    length = int(input1[0][i][1:])
    
    if direction == 'U':
        print('in U:', length)
        xnew = x + length
          
        board[x:xnew, y] = 1+0*board[x:xnew, y]
      
    if direction == 'D':
        print('in D:', length)
        xnew = x - length
      
        board[xnew:x, y] = 1+0*board[xnew:x, y]
      
    if direction == 'L':
        print('in L:', length)
        ynew = y - length
      
        board[x, ynew:y] = 1+0*board[x, ynew:y]
      
    if direction == 'R':
        print('in R:', length)
        ynew = y + length
      
        board[x, y:ynew] = 1+0*board[x, y:ynew]
        
    x = xnew
    y = ynew
    
    
small1 = board[4900:5100, 4900:5100]

x = 5000
y = 5000
xnew = 5000
ynew = 5000
    
for i in range(len(input2[0])):
    direction = input2[0][i][0]
    length = int(input2[0][i][1:])
    
    if direction == 'U':
        print('in U:', length)
        xnew = x + length
          
        board[x:xnew, y] = 2*board[x:xnew, y]
      
    if direction == 'D':
        print('in D:', length)
        xnew = x - length
      
        board[xnew:x, y] = 2*board[xnew:x, y]
      
    if direction == 'L':
        print('in L:', length)
        ynew = y - length
      
        board[x, ynew:y] = 2*board[x, ynew:y]
      
    if direction == 'R':
        print('in R:', length)
        ynew = y + length
      
        board[x, y:ynew] = 2*board[x, y:ynew]
        
    x = xnew
    y = ynew
    
best = 10000
for i in range(10000):
    for j in range(10000):
        if board[i][j] == 2:
            print(i,j, i+j-10000)
            xdist = np.abs(5000-i)
            ydist = np.abs(5000-j)
            current = xdist+ydist
            
            if current < best:
                best = current
                print('new best: ', best)
    


small2 = board[4900:5100, 4900:5100]

hej2 = board[4900:5100, 4900:5100]
