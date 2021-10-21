class CreateGenresSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :genres_songs do |t|

      t.timestamps
    end
  end
end
