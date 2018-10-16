def do_twice(arg, fun):
    return fun(arg)
def sum_of_5(f):
    return (f + 5)

print(do_twice(10, sum_of_5))