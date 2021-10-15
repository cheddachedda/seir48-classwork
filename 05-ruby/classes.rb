# Festival

# groucho = {
#   :name => 'Groucho',
#   :instrument => 'guitar',
#   :vice => 'cigars'
# }
#
# harpo = {
#   :name => 'Harpo',
#   :instrument => 'harp',
#   :vice => 'mutism'
# }
#
# def play(brother)
#   "My name is #{ brother[:name] } and I play the #{ brother[:instrument] }"
# end

class MarxBrother
end

groucho = MarxBrother.new
groucho.play() # play(groucho)

# .erb <%= play(groucho) %>
# .erb <%= play(harpo) %>

# Festival – Shakespeare Retrospective #########################################

# tempest = {
#   :title => 'The Tempest',
#   :year => 1650
# }
#
# taming = {
#   :title => 'The Taming of the Shrew',
#   :year => 1630
# }
#
# def play(p)
#   "#{ p[:title]} is believed to have been written in #{ p[:year] }"
# end

class ShakespearePlay
end

tempest = ShakespearePlay.new
tempest.play() # play(tempest)

require 'pry'
binding.pry
