# frozen_string_literal: true

class Atoms::ThemeSwitcherComponent < ViewComponent::Base
    delegate :cookies, to: :helpers
end
