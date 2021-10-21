class StocksController < ApplicationController
  def form
  end

  def results
    StockQuote::Stock.new(:api_key => 'pk_16a849fd637243a79fff90fa4d42bc5d')
    @stock_code = params[:stock_code].upcase
    info = StockQuote::Stock.quote @stock_code
    @company_name = info.company_name
    @latest_price = info.latest_price
    @latest_time = info.latest_time
  end
end
