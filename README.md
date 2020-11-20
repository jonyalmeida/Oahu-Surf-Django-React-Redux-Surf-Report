# Welcome to Oahu Surf!
**Get surf forecast for your favorite Oahu surf spots.**
an app by:
- Jony Almeida
# App Description
-   An easy to use app that gets surf forecast for your favorite spots quickly.
-   Intuitive and interactive React with Redux UI.
-   Post and share Live Photos and Videos of surf conditions with your friends.
-   Live surf reports and weather conditions.
# User Stories
-   As a user of Oahu Surf, I would like to view up to date surf forecast around Oahu.
-   As a user of Oahu Surf, I would like for surf, wind and tide information to be promptly displayed.
-   As a user of Oahu Surf, I would like the app to be easy and intuitive to navigate and find wanted information.
-   As a user of Oahu Surf, I would like to keep a list of favorite surf spots and have quick access to those surf reports.
-   As a user of Oahu Surf, I would like to view the surf forecast and swell trends for the next few days.
-   As a user of Oahu Surf, I would like to keep post photos and videos of the surf.
# Technologies
-   Frontend UI engine: React with Redux
-   Backend server: Python Django
-   RDBMS: PostgresSQL v12
-   ORM: SQLAlchemy 
# Define Database Functionality + Input Data
1.  Store user information.
2.  Store user's favorite surf spots. 
3.  Store a list of surf locations.
# Define Models
## USER 
-   username => string (40) / not null / unique
-   email => string (255) / not null / unique
-   hashed_password => string()128 / not null
## SURF SPOTS
-  name => string (255) / not null / unique
-  endpoint_info => string (255) / not null / unique
## FAVORITE SURF SPOTS
-   surfspot_id => integer / not null
-   user_id => integer / not null
# APIs CRUD Operations
- /user/
			/login
			/logout
			/register
			/< id >/favorites
			/< id >/favorites/add
			/< id >/favorites/remove
# UI Layout
-  Single page React app
-  State Management with Redux
# Tools
-   VS Code
-   Firefox Dev Edition
-   GitHub
-   Coffee
-   Surfboard!
