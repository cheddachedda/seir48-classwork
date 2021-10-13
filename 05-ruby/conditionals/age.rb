print "How old are you? "
age = gets.to_i # no neeed to .chomp because an integer cannot include a new line.

if age < 18
  puts "Age: #{ age }. You are too young"
else
  puts "Age: #{ age }. Get back to work"
end
