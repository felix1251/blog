# frozen_string_literal: true

class Molecules::HomeProjectSectionComponent < ViewComponent::Base
    delegate :section_header_component, :project_card_component, to: :helpers
end
