# -*- coding: utf-8 -*-
"""
Created on Tue Dec  3 22:56:04 2019

@author: HarrePC2
"""

#5000,3998

#4639

#1002

import csv
import numpy as np
import matplotlib.pyplot as plt

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

np_arr1 = np.array([[0, 5000, 5000]])

#np.append(np_arr1, np_arr2, axis=0)

x = 5000
y = 5000
xnew = 5000
ynew = 5000
steps1 = 0

for i in range(len(input1[0])):
    direction = input1[0][i][0]
    length = int(input1[0][i][1:])
    
    if direction == 'U':
        print('in U:', length)
        xnew = x + length
        
        for i in range(length):
            np_arr1 = np.append(np_arr1, np.array([[steps1+i, x+i, y]]), axis=0)
            
            
            if x+i == 5046:
                if y == 5146:
                    print('pos')
          
        board[x:xnew, y] = 1+0*board[x:xnew, y]
        
        steps1 = steps1 + length
      
    if direction == 'D':
        print('in D:', length)
        xnew = x - length
       
        
        for i in range(length):
            np_arr1 = np.append(np_arr1, np.array([[steps1+i, x-i, y]]), axis=0)
            if x-i == 5046:
                if y == 5146:
                    print('pos')
        
        steps1 = steps1 + length
      
        board[xnew:x, y] = 1+0*board[xnew:x, y]
      
    if direction == 'L':
        print('in L:', length)
        ynew = y - length
        
        
        
        for i in range(length):
            np_arr1 = np.append(np_arr1, np.array([[steps1+i, x, y-i]]), axis=0)
            if x == 5046:
                if y-i == 5146:
                    print('pos')

                
        steps1 = steps1 + length
      
        board[x, ynew:y] = 1+0*board[x, ynew:y]
      
    if direction == 'R':
        print('in R:', length)
        ynew = y + length
        
        for i in range(length):
            np_arr1 = np.append(np_arr1, np.array([[steps1+i, x, y+i]]), axis=0)
            if x == 5046:
                if y+i == 5146:
                    print('pos')
                
        steps1 = steps1 + length
      
        board[x, y:ynew] = 1+0*board[x, y:ynew]
        
    x = xnew
    y = ynew
    
    
small1 = board[4900:5100, 4900:5100]

x = 5000
y = 5000
xnew = 5000
ynew = 5000
steps = 0
np_arr2 = np.array([[0, 5000, 5000]])
    
for i in range(len(input2[0])):
    direction = input2[0][i][0]
    length = int(input2[0][i][1:])
    
    if direction == 'U':
        print('in U:', length)
        xnew = x + length
        
        for i in range(length):
            np_arr2 = np.append(np_arr2, np.array([[steps+i, x+i, y]]), axis=0)
            if board[x+i, y] == 1:
                print(steps)
        
        steps = steps+length
          
        board[x:xnew, y] = 2*board[x:xnew, y]
      
    if direction == 'D':
        print('in D:', length)
        xnew = x - length
        
        for i in range(length):
            np_arr2 = np.append(np_arr2, np.array([[steps+i, x-i, y]]), axis=0)
            if board[x-i, y] == 1:
                print(steps)
        
        steps = steps+length
      
        board[xnew:x, y] = 2*board[xnew:x, y]
      
    if direction == 'L':
        print('in L:', length)
        ynew = y - length
        
        for i in range(length):
            np_arr2 = np.append(np_arr2, np.array([[steps+i, x, y-i]]), axis=0)
            if board[x, y-i] == 1:
                print(steps)
        
        steps = steps+length
      
        board[x, ynew:y] = 2*board[x, ynew:y]
      
    if direction == 'R':
        print('in R:', length)
        ynew = y + length
        
        for i in range(length):
            np_arr2 = np.append(np_arr2, np.array([[steps+i, x, y+i]]), axis=0)
            if board[x, y+i] == 1:
                print(steps)
        
        steps = steps+length
      
        board[x, y:ynew] = 2*board[x, y:ynew]
        
    x = xnew
    y = ynew
    
    
plt.plot(np_arr1[:,1], np_arr1[:,2], 'r')
plt.plot(np_arr2[:,1], np_arr2[:,2], 'b')
plt.show()
    
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
