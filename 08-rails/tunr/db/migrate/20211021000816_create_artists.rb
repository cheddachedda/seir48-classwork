class CreateArtists < ActiveRecord::Migration[6.1]
  def change
    create_table :artists do |t|
      t.text :name
      t.text :image

      t.timestamps
    end
  end
end
