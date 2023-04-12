# frozen_string_literal: true

class Organisms::NavbarComponent < ViewComponent::Base
    delegate :current_page, to: :helpers
    delegate :logout_user, to: :helpers
    delegate :user_signed_in, to: :helpers
end
