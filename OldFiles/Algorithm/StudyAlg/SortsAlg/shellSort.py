# 希尔排序
# 常用序列，2h, 3h + 1 序列
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
            arr[j] = temp
            # print(arr)

        gap //= 2

    return arr


print(shellSort([6, 4, 8, 9, 3, 1, 7, 5, 2]))
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
