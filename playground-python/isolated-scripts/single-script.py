
############ BASICS
# x=3
# y=2
# x, y = y, x
# print(x, y)

############ LISTS AND SIMILAR
# nums = [1, 2, 3, 4, 5]
# newNums = list(filter(lambda x: x%2 == 0, nums))
# print(newNums)

############ DECORATORS
# def logExecution(func):
#     def wrapper(first, second):
#         print('Starting execution run')
#         result = func(first, second)
#         print('Ending execution run. Value calculated is ', result)
#     return wrapper

# @logExecution
# def valueSummer(first, second):
#     print('Processing....')
#     return first + second

# valueSummer(56, 32)


############ ARGS AND KWARGS
## WORKS
# def test(**kwargs):
#     print(kwargs)
# test(lightning=5, thunder=7, extraSauce=19)

## ERROR - TypeError: test() got an unexpected keyword argument 'lightning'
# def test(*args):
#     print(args)
# test(lightning=5, thunder=7, extraSauce=19)

## WORKS
# def test(*args):
#     print(args)
# test(5, 7, 19)


############### CLASS CONFIG

# from asyncio import constants


# class Voluntario:
#     def __init__(self, name, sector):
#         self.name = name
#         self.sector = sector
#     def __str__(self):
#         return "Voluntary: " + self.name + " sector: " + self.sector

# newVoluntary = Voluntario('Ricardo', 'Checkin')
# print(newVoluntary)


############### HOW SETS WORK

# newSet = {'Whiskey', 'Tango', 'Foxtrot'}
# if 'Tango' in newSet:
#     print("Tango is down")


############### LIST COMPREHENSION

### [expression for item in iterable if condition]


############### HEAPS - DOUBTS!

# import heapq
# h = []
# heapq.heappush(h, 3)
# heapq.heappush(h, 1)
# heapq.heappush(h, 2)
# print(h)           # [1,3,2] (heap-ordered inside)
# print(heapq.heappop(h))  # 1


############### GENERATORS

def jumper(n):
    for i in range(999):
        yield i*n

initJumper = jumper(4)
print("First next is " + str(next(initJumper)))
print("Second next is " + str(next(initJumper)))
print("Third next is " + str(next(initJumper)))
