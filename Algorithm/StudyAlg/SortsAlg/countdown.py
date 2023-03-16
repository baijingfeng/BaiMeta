def countdown(n):
    if n < 0: 
        return
    else:
        print(n)
        countdown(n-1)

countdown(20)