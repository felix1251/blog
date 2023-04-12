json.extract! blog, :id, :title, :content, :on_card, :created_at, :updated_at
json.url blog_url(blog, format: :json)
