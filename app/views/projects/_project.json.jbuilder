json.extract! project, :id, :title, :content, :project_end, :created_at, :updated_at
json.url project_url(project, format: :json)
