require "sinatra"

# Sinatra is a DSL (domain specific language)

get '/hello' do
  "Hello World from Sinatra" # implicitly returned AND SO appear in the browser
end
