class CreateBlogs < ActiveRecord::Migration[7.0]
  def change
    create_table :blogs do |t|
      t.string :title, null: false
      t.text :content, null: false
      t.text :on_card, null: false
      t.string :img_url

      t.timestamps
    end
  end
end
