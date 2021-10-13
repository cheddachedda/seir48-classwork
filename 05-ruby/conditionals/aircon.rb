print "What is the temperature? "
temperature = gets.to_f

print "Is the A/C functional? (y/n) "
aircon = gets[0].downcase

if aircon == 'y' && temperature >= 30
  puts "Turn on the A/C please"
elsif aircon == 'n' && temperature >= 30
  puts "Fix the A/C now! It's hot!"
elsif aircon == 'n' && temperature < 30
  puts "Fix the A/C whenever you have the chance... It's cool..."
else
  puts "You don't need the A/C on now"
end
