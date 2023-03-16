# 快速排序算法
def quickSort(arr):
  if len(arr) < 2: 
    return arr
  else:
    pivot = arr[0]
    less = [i for i in arr[1:] if i <= pivot]
    greater = [i for i in arr[1:] if i > pivot]
    return quickSort(less) + [pivot] + quickSort(greater)
  
print(quickSort([6, 4, 8, 9, 3, 1, 7, 5, 2]))