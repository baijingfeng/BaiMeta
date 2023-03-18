# 插入排序
from tools import swap


def insertSort(arr):
    for i in range(1, len(arr)):
        for j in range(i, 0, -1):
            if arr[j] < arr[j - 1]:
                swap(arr, j, j - 1)
            else:
                break
    return


print(insertSort([6, 4, 8, 9, 3, 1, 7, 5, 2]))
