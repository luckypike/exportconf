class CreatePeople < ActiveRecord::Migration[5.2]
  def change
    create_table :people do |t|
      t.string :name
      t.string :surname
      t.string :middlename
      t.string :phone
      t.string :email
      t.string :hotel
      t.json :sales

      t.timestamps
    end
  end
end
