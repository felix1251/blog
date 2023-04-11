class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.text :content, null: false
      t.date :project_start, null: false
      t.date :project_end
      t.string :img_url

      t.timestamps
    end
  end
end
