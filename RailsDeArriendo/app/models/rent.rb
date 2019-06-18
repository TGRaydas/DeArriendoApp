class Rent < ApplicationRecord
    belongs_to :lessor, class_name: "user", foreign_key: "lessor_id"
    belongs_to :lessee, class_name: "user", foreign_key: "lessee_id"
end
