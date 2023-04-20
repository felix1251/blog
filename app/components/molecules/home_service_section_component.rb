# frozen_string_literal: true

class Molecules::HomeServiceSectionComponent < ViewComponent::Base
    delegate :section_header_component, :service_card_component, :server_icon_component,
    :gift_icon_component, :fullstack_icon_component, to: :helpers
end
