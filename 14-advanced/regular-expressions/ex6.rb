# 6. [8] Extra credit exercise: write a program that prints out any input line that mentions both wilma and fred.

ARGF.each do |line|
  puts line if line =~ /(?=.*[Ww]ilma)(?=.*[Ff]red)/
end
