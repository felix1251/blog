class Project < ApplicationRecord
    validates :title, uniqueness: true, presence: true
    validates :content, presence: true
    validates :project_start, presence: true
end