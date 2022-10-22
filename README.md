![clonebnb-logo]

[clonebnb-logo]: ./react-app/src/components/halplogo.png

[Halp](https://halpimhungry.herokuapp.com/) is a web application inspired by Yelp. Halp is an American company which publishes crowd-sourced reviews about businesses. On Halp, you can list businesses, create reviews, and even create your own category! It is headquartered in Texas.


# Project Wiki
* [API Documentation](https://github.com/BenjaminKHLau/Halp/wiki/API-Documentation)
* [Database Schema](https://github.com/BenjaminKHLau/Halp/wiki/Database-Schema)
* [Features](https://github.com/BenjaminKHLau/Halp/wiki/Halp-Features)
* [Redux State Shape](https://github.com/BenjaminKHLau/Halp/wiki/Redux-Store-Shape)
* [Contact Us](https://github.com/BenjaminKHLau/Halp/wiki/Contact-Us)


# Built With
#### Frameworks, Platforms, & Libraries:
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-BDBDBD?style=for-the-badge&logo=Flask&logoColor=black)
![Redux](https://img.shields.io/badge/Python-%23F7DF1E?style=for-the-badge&logo=Python&logoColor=black)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

#### Database:
![Postgresql](https://img.shields.io/badge/postgresql-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)

#### Hosting:
![heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=Heroku&logoColor=white)


## Landing Page

<img width="1430" alt="landingpage" src="https://user-images.githubusercontent.com/103297104/197286081-8923269b-816a-404b-8a45-1f30d31c75db.png">

## Sign Up Form (Modal)

<img width="1920" alt="image" src="https://user-images.githubusercontent.com/20654267/197363776-cc95e00d-866e-45df-8de8-0989690b059d.png">

## Login Form (Modal)

<img width="1920" alt="image" src="https://user-images.githubusercontent.com/20654267/197363799-d8f036f8-fa17-4a93-852f-bfd1a8ccffc9.png">

## Business Details Page 

<img width="1920" alt="image" src="https://user-images.githubusercontent.com/20654267/197363821-6352773d-4892-4878-ab66-6286ac01b344.png">

## Create a Business Form (Modal)

<img width="1920" alt="image" src="https://user-images.githubusercontent.com/20654267/197363881-a1fa9716-0d43-4d6b-a8eb-97580ae46c15.png">

## Create a Category Form (Click the Plus "+" Button next to the Category portion of the Create a Business Form)

<img width="1920" alt="image" src="https://user-images.githubusercontent.com/20654267/197363916-8cbced6b-0173-4819-9aeb-f638a11c18e0.png">

## Create a Review (Can only create on a Business you don't own and must be logged in. (Modal))

<img width="1920" alt="image" src="https://user-images.githubusercontent.com/20654267/197363987-b97f7727-2f32-4ee1-ba5b-0855ee447dd7.png">

## View All Created Categories (Bottom of Home Page. Can click to filter out all Businesses based on the Category clicked on)

<img width="1920" alt="image" src="https://user-images.githubusercontent.com/20654267/197364034-7d27ba31-e52c-4205-af23-eb8847f56a96.png">

## Reviews (Bottom of Business Details Page)

<img width="1920" alt="image" src="https://user-images.githubusercontent.com/20654267/197363854-ef735c94-481d-4729-bebd-53a4c22a5b0c.png">




# Future Features

#### • Profile
#### • Map


# Getting started
1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/BenjaminKHLau/Halp.git
   ```

2. Install dependencies

      ```bash
      pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Make sure the SQLite3 database connection URL is in the **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your Flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.


