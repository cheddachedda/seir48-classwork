class CreateMixtapes < ActiveRecord::Migration[6.1]
  def change
    create_table :mixtapes_songs, :id => false do |t|
      t.text :title
      t.integer :user_id

      t.timestamps
    end
  end
end
