# frozen_string_literal: true

class Atoms::ProjectCardComponent < ViewComponent::Base

  def initialize(project:)
    @project = project
  end

  def date_display
    formatted_start = @project.project_start.strftime("%b %Y")
    formatted_end = @project.project_end&.strftime("%b %Y") || "present"

    unless formatted_start == formatted_end
      "#{formatted_start + " - " + formatted_end || "present"}"
    else
      formatted_start
    end
  end
end
