module HomeHelper
    def main_layout
        render "components/templates/main_layout_component" 
    end
    
    def main_section
        render "components/molecules/home_section_one"
    end

    def project_section
        render "components/molecules/home_section_two"
    end

    def service_section
        render "components/molecules/home_section_three"
    end
end
