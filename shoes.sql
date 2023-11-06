CREATE TABLE shoes (
    id SERIAL PRIMARY KEY,
    shoename TEXT NOT NULL,
    color TEXT NOT NULL,
    brand TEXT NOT NULL,
    price DECIMAL(10,2),
    size INT,
    stock INT,
    image_url TEXT NOT NULL
);

CREATE TABLE users(
    id SERIAL NOT NULL PRIMARY KEY,
	username TEXT UNIQUE NOT NULL,
	user_password TEXT UNIQUE NOT NULL,
    users_id INT REFERENCES shoes (id),
)


INSERT INTO shoes (shoename, color, brand, price, size, stock, image_url)
VALUES
  ('ADIMATIC SHOES', 'Charcoal Solid Grey / Stone / Dgh Solid Grey', 'Adidas', 2799.00, 7, 5, 'https://assets.adidas.com/images/w_1880,f_auto,q_auto/985cbe5bb82646cd826aaf3400b23d87_9366/HP6771_06_standard.jpg'),
  ('RIVALRY 86 LOW SHOES', 'Off White / Core Black / Wonder Beige', 'Adidas', 2999.00, 8, 5, 'https://assets.adidas.com/images/w_1880,f_auto,q_auto/7878ccc5e2e8440784ea966df02925dc_9366/IE7171_06_standard.jpg'),
  ('NIZZA PLATFORM MID', 'Cloud White / Dark Green / Core White', 'Adidas', 1799.00, 5, 3, 'https://assets.adidas.com/images/w_1880,f_auto,q_auto/5d8dda8104194434977daf86011564b4_9366/IG7372_06_standard.jpg'),
  ('STAN SMITH MILLENCON', 'Core Black / Bright Royal / Better Scarlet', 'Nike', 1499.00, 7, 5, 'https://assets.adidas.com/images/w_1880,f_auto,q_auto/00b9b93ebcf94a85bcd7af5700b4b3eb_9366/GZ9699_06_standard.jpg'),
  ('ZX 22 BOOST SHOES', 'Magic Mauve / Cloud White / Wonder Mauve', 'Adidas', 1499.00, 8, 5, 'https://assets.adidas.com/images/w_1880,f_auto,q_auto/4df87a85d8ce43dfae7bae1400279bdd_9366/GW8319_06_standard.jpg'),
  ('NIKE AIR FORCE 1 07 LV8', 'Black/Light Crimson', 'Nike', 2399.95, 5, 3, 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/b3546974-0d23-4657-a8a7-8d6abc9fc5e8/air-force-1-07-lv8-shoes-p2p25V.png'),
  ('NIKE AIR HUARACHE RUNNER', 'Black/Anthracite/Medium Ash', 'Nike', 2599.95, 7, 5, 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8f84b5d6-6132-4e14-9e19-4853dbb327e0/air-huarache-runner-shoes-0ctMF4.png'),
  ('NIKE AIR FORCE 1 07', 'White/Bright Crimson/Metallic Silver/Midnight Navy', 'Nike', 1799.97, 6, 5, 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0dcce10d-8ef0-4602-b337-f309dc12c88e/air-force-1-07-shoes-WZ4MNC.png'),
  ('NIKE PHOENIX WAFFLE', 'Light Smoke Grey/Light Iron Ore/Rugged Orange', 'Nike', 1899.95, 5, 3, 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8b508ee5-9ba6-443c-b39d-372f4eb86e63/phoenix-waffle-shoes-jG23NF.png'),
  ('NIKE M2K TEKNO', 'Plum Chalk/Plum Dust/Summit White/Plum Chalk', 'Nike', 1999.95, 3, 5, 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/eyb8yw8rc7qkmrlxoze1/m2k-tekno-shoes-LAoBey.png'),
  ('NIKE AIR FORCE 1 PLT.AF.ORM', 'Wolf Grey', 'Nike', 1799.00, 5, 5, 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d3ed7f3d-cf40-4ae1-bfb8-2f73a9f9cec6/air-force-1-pltaform-shoes-Mgr51q.png'),
  ('NIKE DUNK LOW', 'Grey', 'Nike', 1195.00, 4, 3, 'https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/90797510-9aec-4f21-aab7-fb87c705c61b/women-s-dunk-low-light-smoke-grey-and-photon-dust-fb7720-002-release-date.jpg'),
  ('NIKE AIR MAX 90 FUTURA', 'Buff Gold/Light Silver/Sand Drift/Summit White', 'Nike', 2299.00, 4, 5, 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f6a0e3d0-67b1-4b4f-8d06-68723cea01db/air-max-90-futura-shoes-gFXm3j.png'),
  ('NIKE ICON CLASSIC','Black/White/White', 'Nike', 2999.00, 3, 5, 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cd461445-d17d-4eee-9140-4fb2a80653f3/icon-classic-sandals-7fvTpZ.png'),
  ('SUEDE ICONS OF UNITY', 'Yellow Sizzle', 'Puma', 1899.00, 3, 3, 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/393750/01/sv01/fnd/ZAF/w/1000/h/1000/fmt/png'),
  ('ORKID SELFLOVE', 'Warm White', 'Puma', 1999.00, 5, 5, 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/393211/01/sv01/fnd/ZAF/w/1000/h/1000/fmt/png'),
  ('MAYZE STACK XPL INFUSE', 'Sedate Gray', 'Puma', 2199.00, 3, 5, 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/393778/01/sv01/fnd/ZAF/w/1000/h/1000/fmt/png'),
  ('BLKTOP RIDER', 'Warm White-Malachite', 'Puma', 1500.00, 5, 3, 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/392725/07/sv01/fnd/ZAF/w/1000/h/1000/fmt/png'),
  ('DISC BLAZE JUNGLE CAMO', 'Puma White-Ultra Blue', 'Puma', 3350.00, 4, 5, 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/393181/02/sv01/fnd/ZAF/w/1000/h/1000/fmt/png'),
  ('RS-X EFEKT UNINVISIBLE', 'White-Vapor Gray', 'Puma', 1489.00, 5, 5, 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/391172/01/sv01/fnd/ZAF/w/1000/h/1000/fmt/png'),
  ('EXOTEK MIRRORED', 'Glacial Gray-PUMA Black', 'Puma', 2750.00, 8, 3, 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/394929/01/sv01/fnd/ZAF/w/1000/h/1000/fmt/png');