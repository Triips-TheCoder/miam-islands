class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.text :ingredient
      t.text :preparation

      t.timestamps
    end
  end
end
