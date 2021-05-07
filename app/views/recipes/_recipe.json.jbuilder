json.extract! recipe, :id, :name, :ingredient, :preparation, :created_at, :updated_at
json.url recipe_url(recipe, format: :json)
