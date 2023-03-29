class HomeController < ApplicationController
  def index
    file = File.read('app/views/constants/data.json')
    @data_hash = JSON.parse(file)
  end
end
