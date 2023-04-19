# frozen_string_literal: true

class Atoms::NavlinkComponent < ViewComponent::Base
    def initialize name:, link:, controller:
        @name = name
        @link = link
        @controller = controller
    end
end
