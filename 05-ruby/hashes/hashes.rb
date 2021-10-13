require "pry"

# A
a = ["Anil", "Erik", "Jonathan"]

# How would you return the string "Erik"?
a[1]
# How would you add your name to the array?
a << "Daniel"


# B
h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}

# How would you return the string "One"?
h[1]
# How would you return the string "Two"?
h[:two]
# How would you return the number 2?
h["two"]
# How would you add {3 => "Three"} to the hash?
h[3] = "Three"
# How would you add {:four => 4} to the hash?
h.merge!(:four => 4)


# C
is = {true => "It's true!", false => "It's false"}

is[2 + 2 == 4]            # "It's true!"
is["Erik" == "Jonathan"]  # "It's false"
is[9 > 10]                # "It's false"
is[0]                     # nil
is["Erik"]                # nil

# D
users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
users["Jonathan"][:twitter]
# How would you add the number 7 to Erik's favorite numbers?
users["Erik"][:favorite_numbers] << 7
# How would you add yourself to the users hash?
users["Daniel"] = {
  :twitter => "thecheddyman",
  :favorite_numbers => [12, 26],
}
# How would you return the array of Erik's favorite numbers?
users["Erik"][:favorite_numbers]
# How would you return the smallest of Erik's favorite numbers?
users["Erik"][:favorite_numbers].min
# How would you return an array of Anil's favorite numbers that are also even?
users["Anil"][:favorite_numbers].select { |n| n.even? }
# How would you return an array of the favorite numbers common to all users?
common_faves = users["Jonathan"][:favorite_numbers] &
               users["Erik"][:favorite_numbers] &
               users["Anil"][:favorite_numbers] &
               users["Daniel"][:favorite_numbers]
# NOT EXPECTED TO UNDERSTAND THIS (YET)
users.values.map { |user| user[:favorite_numbers] }.inject &:&  # &:& symbol to proc

# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
faves = users["Jonathan"][:favorite_numbers] |
        users["Erik"][:favorite_numbers] |
        users["Anil"][:favorite_numbers] |
        users["Daniel"][:favorite_numbers]
faves.sort!

# USING MAP
users.values.map { |user| user[:favorite_numbers] }.flatten.sort.uniq
