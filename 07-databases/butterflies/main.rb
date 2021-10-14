require "sinatra"
require "sinatra/reloader"
require "sqlite3"
require "pry"

get '/' do
  erb :home
end

# INDEX: Show all butterflies
get '/butterflies' do
  # create a DB connection
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  # execute a query
  @butterflies = db.execute 'SELECT * FROM butterflies'

  # close the DB connection
  db.close

  # pass the data down to the view
  erb :butterflies_index
end

# binding.pry
