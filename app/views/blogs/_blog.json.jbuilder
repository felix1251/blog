json.extract! blog, :id, :title, :content, :on_card, :created_at, :updated_at
json.image_url blog.img.attached? ? rails_blob_path(blog.img) : nil