class ApplicationController < ActionController::Base
    include Pagy::Backend

    before_action :turbo_frame_request_variant, if: -> { turbo_frame_request? }

    private
  
    def turbo_frame_request_variant
        request.variant = :turbo_frame
    end   
end
