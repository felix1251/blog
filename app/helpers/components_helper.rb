module ComponentsHelper
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

    def section_header_component title: "", highlight: "" , url: "", redirect_title: "", has_more: false
        render Atoms::SectionHeaderComponent.new title: title , highlight: highlight, url: url, redirect_title: redirect_title , has_more: has_more
    end

    def theme_switcher_component
        render Atoms::ThemeSwitcherComponent.new
    end

    def service_card_component service: "", description: "", icon:
        render Atoms::ServiceCardComponent.new service: service, description: description, icon: icon
    end

    def plus_icon_component classProps: ""
        render Atoms::PlusIconComponent.new classProps: classProps
    end

    def navbutton_component
        render Atoms::NavbuttonComponent.new
    end

    def navlink_component name: "", link: "/", controller:
        render Atoms::NavlinkComponent.new name: name, link: link, controller: controller
    end

    def page_header_component title: "" , highlight: "", bgColor: "bg-gray-100 dark:bg-gray-700"
        render Atoms::PageHeaderComponent.new title: title, highlight: highlight, bgColor: bgColor
    end

    def server_icon_component twcss: ""
        render Atoms::ServerIconComponent.new twcss: twcss
    end

    def gift_icon_component twcss: ""
        render Atoms::GiftIconComponent.new twcss: twcss
    end

    def fullstack_icon_component twcss: ""
        render Atoms::FullstackIconComponent.new twcss: twcss
    end

    def blog_card_component blog: 
        render Atoms::BlogCardComponent.new blog: blog
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

    def project_list_component projects:
        render Molecules::ProjectListComponent.new projects: projects
    end

    def blog_section_component
        render Molecules::BlogSectionComponent.new
    end
end
