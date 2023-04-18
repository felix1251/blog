class HomeController < ApplicationController
  DEFAULT_PER_PAGE = Pagy::DEFAULT[:items]

  def index
    @projects = Project.limit(DEFAULT_PER_PAGE).offset(0).order(id: :asc)
  end
end
