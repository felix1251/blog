# frozen_string_literal: true

class Atoms::BlogCardComponent < ViewComponent::Base

  def initialize blog: 
    @blog = blog
  end
end
