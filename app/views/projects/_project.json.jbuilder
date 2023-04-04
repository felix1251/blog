json.extract! project, :id, :title, :content, :project_start, :project_end, :created_at, :updated_at
json.image_url project.img.attached? ? url_for(project.img) : nil
json.url project_url(project, format: :json)
