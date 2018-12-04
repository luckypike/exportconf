class Person < ApplicationRecord

  def hotel_last
    { sheraton: 'Sheraton', courtyard: 'Courtyard', none: 'Другой' }.with_indifferent_access[hotel]
  end
end
