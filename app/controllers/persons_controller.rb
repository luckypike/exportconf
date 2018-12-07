class PersonsController < ApplicationController
  def create
    person = Person.new(person_params)

    if person.save
      PersonMailer.with(person: person).new_person.deliver_now
      head :created
    else
      render json: person.errors, status: :unprocessable_entity
    end
  end

  def info
    @persons = Person.all.order(surname: :asc)
    respond_to do |format|
      format.html
      format.xlsx
    end
  end

  private
  def person_params
    params.require(:person).permit(:name, :surname, :middlename, :phone, :email, :hotel, sales: {}, museums: {})
  end
end
