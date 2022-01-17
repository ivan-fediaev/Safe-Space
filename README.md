# Welcome to Safe Space

Hi! This web app finds the closest public washroom to you in Vancouver. We wanted to solve the uncomfortable problem of trying to find a public washroom to use when you don't know where the nearest one is. We used the [Google Maps API for JavaScript](https://developers.google.com/maps/documentation/javascript/overview), [Vancouver Public Washroom Dataset](https://opendata.vancouver.ca/explore/dataset/public-washrooms/map/?location=12,49.25566,-123.10311), and MongoDB to develop this project. 


# Demo 
![Alt Text](https://github.com/ivan-fediaev/Safe-Space/blob/main/appdemo.gif?raw=true)

# Backend
### Database
We chose to use MongoDB as our database because we wanted something that was simple to set up and easy to use in a hackathon. MongoDB is perfect for this because we can easily provision a free instance on the cloud using MongoDB Atlas. We used the database to store the locations of the public washrooms. 

### Google Maps API 
For the backend we primarily worked with the Google Maps API for JavaScript to handle all of the location services and getting directions to the washrooms. We used the location service to get the current location of the user, and once we knew that we were able to serve them a list of the closest public washrooms and directions. 


# Frontend 
We developed the front-end using HTML, CSS, and JavaScript. We did nothing special here, just the nuts and bolts to get the project working. 

# Challenges 
We were good at back-end development, but we were all weak on anything to do with front-end or design, so next year we will definitely find a UI/UX designer to help us out in that regard and maybe win some prizes!









