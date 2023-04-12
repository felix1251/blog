# frozen_string_literal: true

class Atoms::ProjectCardComponent < ViewComponent::Base
  def initialize(project:)
    @project = project
  end
end
