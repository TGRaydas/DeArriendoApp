class Product < ApplicationRecord
  belongs_to :user
  has_one :non_user, optional: true
  has_attached_file :image
  # Validate content type
  validates_attachment_content_type :image, content_type: /\Aimage/
  # Validate filename
  validates_attachment_file_name :image, matches: [/png\z/, /jpe?g\z/]
end
