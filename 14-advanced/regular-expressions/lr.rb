# lr.rb – A Ruby line reader (equivalent to cat)
# Usage: `ruby lr.rb filename`

ARGF.each do |line|
  puts line if line =~ /b/
end
