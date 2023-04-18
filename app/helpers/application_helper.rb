module ApplicationHelper
    include Pagy::Frontend
    
    #utils
    def get_current_year
        Time.zone.now.year
    end

    #Templates
    def main_layout_component routerView:
        render Templates::MainLayoutComponent.new routerView: routerView
    end

    #Organisms
    def navbar_component
        render Organisms::NavbarComponent.new
    end

    def footer_component
        render Organisms::FooterComponent.new
    end

    #Atoms
    def button_component type: "default", link: "", text: "", additionalClass: ""
        render Atoms::ButtonComponent.new type: type, link: link, text: text, additionalClass: additionalClass
    end

    def project_card_component project: nil
        render Atoms::ProjectCardComponent.new project: project
    end

    def notice_component
        render Atoms::NoticeComponent.new
    end

    def arrow_icon_component
        render Atoms::ArrowIconComponent.new
    end

    def section_header_component title: "" , highlight: "" , url: "", redirect_title: "" , has_more: false
        render Atoms::SectionHeaderComponent.new title: title , highlight: highlight, 
            url: url, redirect_title: redirect_title , has_more: has_more
    end

    def theme_switcher_component
        render Atoms::ThemeSwitcherComponent.new
    end

    def service_card_component
        render Atoms::ServiceCardComponent.new
    end

    def plus_icon_component classProps: ""
        render Atoms::PlusIconComponent.new classProps: classProps
    end

    def navbutton_component
        render Atoms::NavbuttonComponent.new
    end

    #Molecules
    def home_main_section_component
        render Molecules::HomeMainSectionComponent.new
    end

    def home_project_section_component projects:
        render Molecules::HomeProjectSectionComponent.new projects: projects
    end

    def home_service_section_component
        render Molecules::HomeServiceSectionComponent.new
    end

    def error_section404_component
        render Molecules::ErrorSection404Component.new
    end

    def error_section500_component
        render Molecules::ErrorSection500Component.new
    end

    def project_list projects:
        render Molecules::ProjectListComponent.new projects: projects
    end

end
