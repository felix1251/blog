class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.text :content
      t.date :project_start
      t.date :project_end
      t.string :img

      t.timestamps
    end
  end
end
