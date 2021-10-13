require "pry" # <script src="pry.js"></script>

# 1
days_of_the_week = %w/ Monday Tuesday Wednesday Thursday Friday Saturday Sunday /
# p days_of_the_week

# 2

# Long winded but explicit:
# day_to_move = days_of_the_week.pop
# days_of_the_week.unshift day_to_move

# Very clever:
# days_of_the_week.unshift days_of_the_week.pop

# Most Rubyish
# destructively rotate in reverse order by one element.
days_of_the_week.rotate! -1

# 3
day_parts = [ days_of_the_week[1..5], days_of_the_week.rotate.drop(5) ]

# 4
day_parts.pop

# 5
day_parts.flatten.sort.each do |day|
  puts day
end
