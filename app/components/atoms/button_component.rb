# frozen_string_literal: true

class Atoms::ButtonComponent < ViewComponent::Base

  def initialize(type:, link:, text:, additionalClass:)
    @type = type
    @link = link
    @text = text
    @additionalClass = additionalClass
  end

end
