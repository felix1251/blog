# frozen_string_literal: true

class Organisms::FooterComponent < ViewComponent::Base
    delegate :get_current_year, to: :helpers
end
