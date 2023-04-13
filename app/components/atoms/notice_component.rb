# frozen_string_literal: true

class Atoms::NoticeComponent < ViewComponent::Base
    delegate :notice, to: :helpers
end
