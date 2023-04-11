module ApplicationHelper
    include Pagy::Frontend

    def navbar
        render "components/organisms/navbar"
    end

    def footer
        render "components/organisms/footer"
    end
end
