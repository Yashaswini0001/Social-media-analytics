DROP TABLE IF EXISTS follower_analytics;
DROP TABLE IF EXISTS post_analytics;
DROP TABLE IF EXISTS ad;
DROP TABLE IF EXISTS promotion;
DROP TABLE IF EXISTS users;
CREATE TABLE users (
                       id BIGINT AUTO_INCREMENT PRIMARY KEY,
                       name VARCHAR(255),
                       category VARCHAR(255),
                       bio VARCHAR(255),
                       contact_options VARCHAR(255),
                       links VARCHAR(255)
);


CREATE TABLE follower_analytics (
                                    id BIGINT AUTO_INCREMENT PRIMARY KEY,
                                    user_id BIGINT,
                                    number_of_followers INT,
                                    number_of_following INT,
                                    accounts_reached INT,
                                    accounts_engaged INT,
                                    FOREIGN KEY (user_id) REFERENCES users(id)
);


CREATE TABLE post_analytics (
                                id BIGINT AUTO_INCREMENT PRIMARY KEY,
                                user_id BIGINT,
                                total_posts INT,
                                total_stories INT,
                                total_saves INT,
                                total_comments INT,
                                total_shares INT,
                                FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE ad (
                    id BIGINT AUTO_INCREMENT PRIMARY KEY,
                    user_id BIGINT,
                    title VARCHAR(255),
                    clicks INT,
                    impressions INT,
                    spend DOUBLE,
                    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE promotion (
                           id BIGINT AUTO_INCREMENT PRIMARY KEY,
                           user_id BIGINT,
                           title VARCHAR(255),
                           details VARCHAR(255),
                           performance VARCHAR(255),
                           FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Data insertion
INSERT INTO users (name, category, bio, contact_options, links) VALUES
                                                                    ('Yashashwini S', 'Tech', 'Tech enthusiast', 'yashu@example.com', 'https://yashaswhinis.com'),
                                                                    ('Tejaswini S', 'Lifestyle', 'Lifestyle blogger', 'teju@example.com', 'https://tejaswini.com');


INSERT INTO follower_analytics (user_id, number_of_followers, number_of_following, accounts_reached, accounts_engaged) VALUES
                                                                                                                           (1, 1000, 500, 2000, 1000),
                                                                                                                           (2, 1500, 750, 2500, 1500);

INSERT INTO post_analytics (user_id, total_posts, total_stories, total_saves, total_comments, total_shares) VALUES
                                                                                                                (1, 50, 100, 500, 200, 300),
                                                                                                                (2, 70, 120, 600, 250, 350);

INSERT INTO ad (user_id, title, clicks, impressions, spend) VALUES
                                                                (1, 'Summer Sale', 500, 10000, 1000.50),
                                                                (1, 'New Product Launch', 300, 8000, 800.25),
                                                                (2, 'Winter Clearance', 400, 9000, 900.75);

INSERT INTO promotion (user_id, title, details, performance) VALUES
                                                                 (1, 'Flash Sale', '30% off all items', 'High engagement'),
                                                                 (1, 'Holiday Promotion', 'Free shipping on orders over $50', 'Moderate engagement'),
                                                                 (2, 'New Year Sale', 'Up to 50% off', 'High engagement');
