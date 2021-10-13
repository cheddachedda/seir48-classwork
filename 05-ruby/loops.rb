# while true
#   puts "wow!"
# end

# control-c to cancel a running Ruby program

# while
# initialise, conditional, update

i = 0       # initialise
while i < 5 # conditional
  puts "i is now #{ i }"
  i += 1    # update
end

# if => unless
# while => until

i = 0
until i == 5
  puts "i is now #{ i }"
  i += 1
end

# Iterators: Ruby's preferred method of iterating/looping
# No mess, no fuss

7.times { puts "Hello world" }

5.times do |i| # the value of 'i' will be the number of this iteration
  puts "i is now #{ i }"
end

# There are dozens of Iterators

4.downto(0) do |n|
  puts "n is now #{ n }"
end
