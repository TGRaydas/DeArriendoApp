# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user = User.create(email:"pgrand@miuandes.cl", password:"123123123")
Product.create(user_id:1, name: "reloj crrju", price: 15000, image:File.new("IMAGES/reloj.jpg", "r"))
Product.create(user_id:1, name: "reloj crrju", price: 15000, image:File.new("IMAGES/reloj.jpg", "r"))
Product.create(user_id:1, name: "reloj crrju", price: 15000, image:File.new("IMAGES/reloj.jpg", "r"))
Product.create(user_id:1, name: "reloj crrju", price: 15000, image:File.new("IMAGES/reloj.jpg", "r"))
Product.create(user_id:1, name: "Zapatillas", price: 20000, image:File.new("IMAGES/zapatillas.jpg", "r"))
Product.create(user_id:1, name: "Zapatillas", price: 20000, image:File.new("IMAGES/zapatillas.jpg", "r"))
Product.create(user_id:1, name: "Zapatillas", price: 20000, image:File.new("IMAGES/zapatillas.jpg", "r"))
Product.create(user_id:1, name: "Zapatillas", price: 20000, image:File.new("IMAGES/zapatillas.jpg", "r"))
Product.create(user_id:1, name: "Zapatillas", price: 20000, image:File.new("IMAGES/zapatillas.jpg", "r"))
Category.create(name: "Sports", image:File.new("IMAGES/sports_icon.png", "r"))
Category.create(name: "Games", image:File.new("IMAGES/games_icon.png", "r"))
Category.create(name: "Home", image:File.new("IMAGES/home_icon.png", "r"))
Category.create(name: "Technology", image:File.new("IMAGES/tech_icon.png", "r"))