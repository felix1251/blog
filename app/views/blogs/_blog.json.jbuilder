json.extract! blog, :id, :title, :content, :on_card, :created_at, :updated_at
json.image_url rails_blob_url(blog.img)