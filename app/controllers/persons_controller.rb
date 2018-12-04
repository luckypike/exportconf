class PersonsController < ApplicationController
  def create
    person = Person.new(person_params)

    if person.save
      head :created
    else
      render json: person.errors, status: :unprocessable_entity
    end
  end

  private
  def person_params
    params.require(:person).permit(:name, :surname, :middlename, :phone, :email, :hotel, sales: {})
  end
end
