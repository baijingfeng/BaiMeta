# 希尔排序
def shellSort(arr):
    n = len(arr)
    gap = n // 2

    while gap > 0:
        for i in range(gap, n):
            temp = arr[i]
            j = i
            while j >= gap and arr[j - gap] > temp:
                arr[j] = arr[j-gap]
                j -= gap
            return
        gap //= 2
        # return
        # for i in range(gap, n):

    return arr

# def shell_sort(arr):
#     n = len(arr)
#     gap = n // 2
#     while gap > 0:
#         for i in range(gap, n):
#             temp = arr[i]
#             j = i
#             while j >= gap and arr[j-gap] > temp:
#                 arr[j] = arr[j-gap]
#                 j -= gap
#             arr[j] = temp
#         gap //= 2
#     return arr


print(shellSort([6, 4, 8, 9, 3, 1, 7, 5, 2]))
