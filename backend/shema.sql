CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    phone_number VARCHAR(10),
    address VARCHAR(255),
    password VARCHAR(100)
);


USE grocery_shop;

-- Creating the categories table
CREATE TABLE categories (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(255) NOT NULL
);

INSERT INTO categories (category_name)
VALUES ('Fruits'), ('Dairy'), ('Bakery'), ('Meat'), ('Grains');

-- Creating the products table with category_id as a foreign key
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    image VARCHAR(255),
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);


-- Inserting sample data into the products table
INSERT INTO products (name, price, description, image, category_id)
VALUES 
-- Products for the 'Soap' category (category_id 1)
('Dove Soap', 1.50, 'Gentle moisturizing soap', 'dove_soap.jpg', 1),
('Lux Soap', 1.20, 'Luxury scented soap', 'lux_soap.jpg', 1),

-- Products for the 'Hair Essentials' category (category_id 2)
('Pantene Shampoo', 5.99, 'Hair fall control shampoo', 'pantene_shampoo.jpg', 2),
('Head & Shoulders Shampoo', 6.50, 'Anti-dandruff shampoo', 'head_shoulders_shampoo.jpg', 2),

-- Products for the 'Skin Care' category (category_id 3)
('Nivea Cream', 4.99, 'Moisturizing cream for dry skin', 'nivea_cream.jpg', 3),
('Neutrogena Sunscreen', 9.99, 'SPF 50+ sunscreen', 'neutrogena_sunscreen.jpg', 3),

-- Products for the 'Snacks' category (category_id 4)
('Lays Chips', 2.99, 'Classic salted potato chips', 'lays_chips.jpg', 4),
('Oreo Cookies', 3.50, 'Chocolate sandwich cookies', 'oreo_cookies.jpg', 4),

-- Products for the 'Edible Oils' category (category_id 5)
('Olive Oil', 8.99, 'Extra virgin olive oil, 1 liter', 'olive_oil.jpg', 5),
('Sunflower Oil', 7.50, 'Refined sunflower oil, 1 liter', 'sunflower_oil.jpg', 5);
