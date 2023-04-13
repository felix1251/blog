# frozen_string_literal: true

class Organisms::NavbarComponent < ViewComponent::Base
    delegate :user_signed_in?, :current_page?, :destroy_user_session_path, :devise_controller?, to: :helpers
end
