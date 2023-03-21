# 快速排序算法

def quickSort(arr):
    if len(arr) < 2:
        return arr
    else:
        pivot = arr[0]
        less = [i for i in arr[1:] if i <= pivot]
        greater = [i for i in arr[1:] if i > pivot]
        return quickSort(less) + [pivot] + quickSort(greater)

# print(quickSort([6, 4, 8, 9, 3, 1, 7, 5, 2]))

# 双轴快排


def quickSort2(arr):
    if len(arr) < 2:
        return arr
    else:
        pivot1 = min(arr[0], arr[1])
        pivot2 = max(arr[0], arr[1])
        # print(pivot1, pivot2)
        less = [i for i in arr[2:] if i <= pivot1]
        greater = [i for i in arr[2:] if i >= pivot2]
        middle = [i for i in arr[2:] if i > pivot1 and i < pivot2]
        return quickSort2(less) + [pivot1] + quickSort2(middle) + [pivot2] + quickSort2(greater)


print(quickSort2([6, 4, 8, 9, 3, 1, 7, 5, 2]))
