# frozen_string_literal: true

class Organisms::NavbarComponent < ViewComponent::Base
    delegate :user_signed_in?, :current_page?, :theme_switcher_component, :navlink_component,
        :destroy_user_session_path, :devise_controller?, :navbutton_component, to: :helpers
end
