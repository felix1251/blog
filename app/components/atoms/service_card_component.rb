# frozen_string_literal: true

class Atoms::ServiceCardComponent < ViewComponent::Base
    def initialize service:, description:, icon:
        @service = service
        @description = description
        @icon = icon
    end
end
