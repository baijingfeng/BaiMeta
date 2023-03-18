__all__ = ["swap"]


# 交换数组元素
def swap(arr, i, j):
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    return
