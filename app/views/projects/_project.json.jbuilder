json.extract! project, :id, :title, :content, :project_start, :project_end, :created_at, :updated_at
json.image_url rails_blob_url(project.img)
json.url project_url(project, format: :json)
