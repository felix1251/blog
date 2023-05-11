# frozen_string_literal: true

class Atoms::BlogCardComponent < ViewComponent::Base

  def initialize blog: 
    @blog = blog
  end

  def go_to_blog
    blog_path(:id => @blog.id)
  end

  def profile_img
    asset_path("profile.jpeg")
  end

  def go_to_about
    "/about"
  end

  def blog_image
    @blog.img.attached? && rails_blob_path(@blog.img)
  end
end
