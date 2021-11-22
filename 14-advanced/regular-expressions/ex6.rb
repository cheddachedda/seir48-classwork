# 6. [8] Extra credit exercise: write a program that prints out any input line that mentions both wilma and fred.

ARGF.each do |line|
  wilma_fred = /\b[Ww]ilma\b.*\b[Ff]red\b/
  fred_wilma= /\b[Ff]red\b.*\b[Ww]ilma\b/
  puts line if line =~ wilma_fred || line =~ fred_wilma
end
