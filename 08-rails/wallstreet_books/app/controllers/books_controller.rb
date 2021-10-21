class BooksController < ApplicationController
  def form
  end

  def results
    response = HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=title:#{ params[:query] }")
    book_info = response["items"][0]["volumeInfo"]

    @title = book_info["title"]
    @subtitle = book_info["subtitle"]
    @authors = book_info["authors"].join(', ')
    @description = book_info["description"]
    @thumbnail_url = book_info["imageLinks"]["thumbnail"]
  end
end
