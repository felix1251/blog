# frozen_string_literal: true

class Templates::MainLayoutComponent < ViewComponent::Base

  def initialize(navbar:, footer:, devise_controller:, notice:, routerView:)
    @navbar = navbar
    @footer = footer
    @devise_controller = devise_controller
    @notice = notice
    @routerView = routerView
  end
end
