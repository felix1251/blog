# frozen_string_literal: true

class Atoms::SectionHeaderComponent < ViewComponent::Base
    delegate :arrow_icon_component, to: :helpers

    def initialize(title:, highlight: , url:, redirect_title: , has_more:)
        @title = title
        @highlight = highlight
        @redirect_title = redirect_title
        @has_more = has_more
        @url = url
    end
end
