# frozen_string_literal: true

class Molecules::HomeProjectSectionComponent < ViewComponent::Base
    delegate :project_list, :section_header_component, :project_card_component, to: :helpers

    def initialize projects:
        @projects = projects
    end
end
