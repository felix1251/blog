# frozen_string_literal: true

class Molecules::HomeServiceSectionComponent < ViewComponent::Base
    delegate :section_header_component, :service_card_component, to: :helpers
end
