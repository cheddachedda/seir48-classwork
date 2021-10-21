class CreateMixtapesSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :mixtapes_songs, :id => false do |t|
      t.integer :mixtape_id
      t.integer :song_id
    end
  end
end
