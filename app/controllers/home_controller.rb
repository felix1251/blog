class HomeController < ApplicationController
  def index
    default_per_page = Pagy::DEFAULT[:items]
    @projects = Project.limit(default_per_page).offset(0).order(id: :asc)
  end
end
