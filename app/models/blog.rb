class Blog < ApplicationRecord
    validates :title, uniqueness: true, presence: true
    validates :content, presence: true
    validates :on_card, presence: true
    
    has_one_attached :img
end