json.extract! product, :id, :name, :description, :image_1, :image_2, :price, :created_at, :updated_at
json.url product_url(product, format: :json)
