module ApplicationHelper
    include Pagy::Frontend
    
    #utils
    def current_page(controller_name: "home")
        current_page?(:controller => controller_name)
    end

    def logout_user
        destroy_user_session_path
    end

    def user_signed_in
        user_signed_in?
    end

    def get_current_year
        Time.zone.now.year
    end

    def device_route?
        devise_controller?
    end
    
    def notice_msg
        notice
    end

    #Templates
    def main_layout_component(routerView:)
        render(Templates::MainLayoutComponent.new(routerView: routerView))
    end

    #Organisms

    def navbar_component
        render(Organisms::NavbarComponent.new())
    end

    def footer_component
        render(Organisms::FooterComponent.new())
    end

    #Atoms
    def button_component(type: "default", link: "", text: "", additionalClass: "")
        render(Atoms::ButtonComponent.new(type: type, link: link, text: text, additionalClass: additionalClass))
    end

    def project_card_component(project: nil)
        render(Atoms::ProjectCardComponent.new(project: project))
    end
end
