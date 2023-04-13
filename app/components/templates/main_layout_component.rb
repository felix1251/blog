# frozen_string_literal: true

class Templates::MainLayoutComponent < ViewComponent::Base
  delegate :navbar_component, :footer_component, :notice_component, :devise_controller?, to: :helpers

  def initialize(routerView:)
    @routerView = routerView
  end
end
