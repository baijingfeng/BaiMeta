# 插入排序
__all__ = ["insertSort"]


def insertSort(arr):
    for i in range(1, len(arr)):
        temp = arr[i]
        # k = 0
        j = i
        while j > 0 and arr[j - 1] > temp:
            arr[j] = arr[j - 1]
            j -= 1
        # for j in range(i, 0, -1):
        #     if temp < arr[j - 1]:
        #         arr[j] = arr[j - 1]
        #     else:
        #         k = j
        #         break
        arr[j] = temp
    return arr


print(insertSort([6, 4, 8, 9, 3, 1, 7, 5, 2]))
