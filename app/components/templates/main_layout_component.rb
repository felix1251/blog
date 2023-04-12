# frozen_string_literal: true

class Templates::MainLayoutComponent < ViewComponent::Base
  delegate :navbar_component, to: :helpers
  delegate :footer_component, to: :helpers
  delegate :devise_route?, to: :helpers
  delegate :notice_msg, to: :helpers

  def initialize(routerView:)
    @routerView = routerView
  end
end
