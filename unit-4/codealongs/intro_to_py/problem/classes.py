class CoffeeCup:
    def __init__(self, capacity):
        self.capacity = capacity
        self.amount = 0

    def __str__(self):
        return "CoffeeCup with {}oz".format(self.capacity)

    def fill(self):
        self.amount = self.capacity

    def empty(self):
        self.amount = 0

    def drink(self, amount):
        if amount >= self.amount:
            self.amount = 0
        else:
            self.amount -= amount

daniels_cup = CoffeeCup(12)
dons_cup = CoffeeCup(24)
keya_cup = CoffeeCup(13)
avisa_cup = CoffeeCup(2)

print(daniels_cup)
print(dons_cup)
print(keya_cup)
print(avisa_cup)

# TODO fill daniel coffee cup
daniels_cup.fill()
print('daniels cup amount', daniels_cup.amount)

# TODO fill keya coffee cup
keya_cup.fill()
print('keya cup amount', keya_cup.amount)

# TODO fill avisa and don's coffee cups
avisa_cup.fill()
dons_cup.fill()

# TODO don drinks 8oz of coffee, print amount after
dons_cup.drink(8)
print('dons amount', dons_cup.amount)

# TODO avisa does not like matcha, so she pours it out, print amount
avisa_cup.empty()
print('avisa amount', avisa_cup.amount)

# TODO keya drinks 12oz, print amount
keya_cup.drink(12)
print('keya cup amount', keya_cup.amount)

# TODO keya discards the rest of coffee, print amount
keya_cup.empty()
print('keya cup amount', keya_cup.amount)

# TODO Create our own list class

class MyArray:
    def __init__(self, items=[]):
        self.items = items # [1,2,88]
        self.length = len(self.items) # 3

    def __str__(self):
        return '{}'.format(self.items)

    # [1,2,88]

    def pop(self):
        """TODO iterate through the array and remove last element, return the last element"""
        result_array = MyArray() # [1, 2]
        removed_element = None

        count = 0 # 1 -> 2
        while count < self.length - 1:
            # append the element to the result_array
            result_array.my_append(self.items[count])
            count += 1

        # with a for loop
        # for i in range(self.length - 1)
        #     result_array.my_append(self.items[i])

        # set removed_element
        removed_element = self.items[self.length - 1] # 88
        # reset self.items
        self.items = result_array
        self.length = len(result_array.items)
        # return the removed_element
        return removed_element
        
    def my_append(self, element):
        if self.length == 0:
            self.items = [element]
            self.length = 1
            return

        new_item = [element]
        self.items += new_item
        self.length = len(self.items)
        return

    # TODO create a my_map method for MyArray
    def my_map(self):
        pass

    # TODO create a my_insert method for MyArray
    def my_insert(self):
        pass


# Examples of MyArray
print('------- MyArray Examples -------')
mike_array = MyArray([1,2,88])
print(mike_array)
mike_array.my_append(13) # append keya favorite number
print(mike_array)
print('return value of pop', mike_array.pop()) # 'return value of pop 13'
print(mike_array)


# testing an empty array
closet = MyArray()
print(closet)
closet.my_append('jacket')
print(closet)
closet.my_append('t-shirt')
print(closet)
closet.my_append('nike')
print(closet)
print(closet.length)
print('return value of pop', closet.pop()) # 'return value of pop nike'
print(closet)
print('closet length', closet.length)


# mike_array.pop() # return 88 becuase 88 is the last element that got removed
# print(mike_array.length) # 2