print "What suburb do you live in? "
suburb = gets.chomp.capitalize

# v2 case (switch in JS)

# case returns a value
puts case suburb
when "Northcote"
   "3070"
when "Brunswick"
   "3056"
else
   "Postcode not known"
end


# v1 if/elsif

# if suburb == "Northcote"
#   puts "3070"
# elsif suburb == "Brunswick"
#   puts "3056"
# else
#   puts "Postcode not known"
# end
