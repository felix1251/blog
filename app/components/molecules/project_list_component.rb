# frozen_string_literal: true

class Molecules::ProjectListComponent < ViewComponent::Base
    delegate :project_card_component, to: :helpers

    def initialize(projects:)
        @projects = projects
    end
end
