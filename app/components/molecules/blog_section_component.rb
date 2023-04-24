# frozen_string_literal: true

class Molecules::BlogSectionComponent < ViewComponent::Base
    delegate :section_header_component, to: :helpers
end
