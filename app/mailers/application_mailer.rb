class ApplicationMailer < ActionMailer::Base
  default from: Rails.application.credentials.mail[:username]
  layout 'mailer'
end
