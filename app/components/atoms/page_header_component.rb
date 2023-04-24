# frozen_string_literal: true

class Atoms::PageHeaderComponent < ViewComponent::Base
  def initialize(title:, highlight:, bgColor:)
    @title = title
    @highlight = highlight
    @bgColor = bgColor
  end

end
