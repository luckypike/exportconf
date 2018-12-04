class PersonMailer < ApplicationMailer

  def new_person
    @person = params[:person]
    mail(to: Rails.application.credentials.mail[:to], subject: 'Новая регистрация на krdsovet.ru')
  end
end
