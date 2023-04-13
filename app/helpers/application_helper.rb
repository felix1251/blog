module ApplicationHelper
    include Pagy::Frontend
    
    #utils
    def get_current_year
        Time.zone.now.year
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

    def notice_component
        render(Atoms::NoticeComponent.new())
    end
end
