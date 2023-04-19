# frozen_string_literal: true

class Atoms::PageHeaderComponent < ViewComponent::Base
  def initialize(title:, highlight:)
    @title = title
    @highlight = highlight
  end

end
