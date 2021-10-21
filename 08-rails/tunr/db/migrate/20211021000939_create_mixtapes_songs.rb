class CreateMixtapesSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :mixtapes_songs do |t|

      t.timestamps
    end
  end
end
