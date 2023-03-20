# 归并排序

def mergeSort(arr):
    merge_sort(arr, 0, len(arr) - 1)
    return arr


def merge_sort(arr, low, high):
    print(arr, low, high)
    if low >= high:
        return
    else:
        mid = low + (high - low) // 2
        merge_sort(arr, low, mid)
        merge_sort(arr, mid + 1, high)
        merge(arr, low, mid, high)


def merge(arr, low, mid, high):
    newArr = arr[:]
    i = low
    j = mid + 1
    for k in range(low, high + 1):
        # 左半边用尽
        if i > mid:
            arr[k] = newArr[j]
            j += 1
        # 右半边用尽
        elif j > high:
            arr[k] = newArr[i]
            i += 1
        # 右边更小
        elif newArr[j] <= newArr[i]:
            arr[k] = newArr[j]
            j += 1
        # 左边更小
        else:
            arr[k] = newArr[i]
            i += 1


print(mergeSort([6, 4, 8, 9, 3, 1, 7, 5, 2]))
