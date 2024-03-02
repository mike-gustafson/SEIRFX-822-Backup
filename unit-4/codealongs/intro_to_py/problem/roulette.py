numbers = [1,2,3,4,5]
user = {
    "name": "LeBron James",
    "age": 39,
    "team": "Lakers",
    "other_teams": ["Cavs", "Heat"],
    "championships": 4
}
old_enough = True

artists = [
    { "name": "Drake", "albums": 12 },
    { "name": "KeyGlock", "albums": 3 },
    { "name": "Bad Bunny", "albums": 5 }
]

right_board = [ '00', 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2 ]
left_board = [ 0, 1, 13, 36, 24, 3, 15, 34, 22, 5, 17, 32, 20, 7, 11, 30, 26, 9, 28 ]
print('right ->', right_board)
print('-----------')
print('left ->', left_board)

starting_balance = 1000
print('start', starting_balance)
print(len(right_board))
print(10 * 18)
print('----Part 1-----')
starting_balance += 350
print('win', 10 * 35, '--> balance:', starting_balance)
starting_balance += 350
print('win', 10 * 35, '--> balance:', starting_balance)
starting_balance -= 180
print('lost', 180, '--> balance:', starting_balance)
print('bet 50','win 10')
starting_balance += 10
print('win', 10, '--> balance:', starting_balance)

# 
print('----Part 2-----')
starting_balance -= 180
print('lost', 180, '--> balance:', starting_balance)
starting_balance += 350
print('win', 350, '--> balance:', starting_balance)
starting_balance -= 180
print('lost', 180, '--> balance:', starting_balance)
print('-----Part 3--------')
starting_balance -= 180
print('lost', 180, '--> balance:', starting_balance)
starting_balance -= 180
print('lost', 180, '--> balance:', starting_balance)
starting_balance -= 180
print('lost', 180, '--> balance:', starting_balance)
print('-----Part 4--------')
starting_balance += 350
print('win', 350, '--> balance:', starting_balance)
starting_balance += 350
print('win', 350, '--> balance:', starting_balance)
starting_balance += 350
print('win', 350, '--> balance:', starting_balance)
print('-----Part 5--------')
starting_balance -= 180
print('lost', 180, '--> balance:', starting_balance)
starting_balance -= 180
print('lost', 180, '--> balance:', starting_balance)
starting_balance += 350
print('win', 350, '--> balance:', starting_balance)

scenario_two = 1000

print(1000/180)
print('win', 'loss', 'loss', 'loss', 'win')

# print('round 1', scenario_two += (350 - 180 - 180 - 180 + 350))
# print('round 2', scenario_two += (350 - 180 - 180 - 180 + 350))
# print('round 3', scenario_two += (350 - 180 - 180 - 180 + 350))
# print('round 4', scenario_two += (350 - 180 - 180 - 180 + 350))
# print('round 5', scenario_two += (350 - 180 - 180 - 180 + 350))
# print('round 6', scenario_two += (350 - 180 - 180 - 180 + 350))
# print('round 7', scenario_two += (350 - 180 - 180 - 180 + 350))
# print('round 8', scenario_two += (350 - 180 - 180 - 180 + 350))
# print('round 9', scenario_two += (350 - 180 - 180 - 180 + 350))


class Roulette:
    def __init__(self, capacity):
        self.capacity = capacity
        self.hand = 0


class BankAccount():
  def __init__(self, kind):
    self.kind = kind
    self.balance = 0
    self.overdraft_fees = 0

  def deposit(self, amount):
    self.balance += amount

  def withdraw(self, amount):
    self.amount -= amount
    if (self.amount < 0):
      self.overdraft_fees += 20
    return amount
