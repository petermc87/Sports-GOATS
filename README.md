# Sport GOAT's 🐐

## Getting Started

## Technologies Used

## ERD & Wireframes

## Screenshots
### *Homepage*
<div style='border:solid black; border-radius: 20px; padding: 20px; background-color: black'>
    <img src="images/homepage.png" ><img> 
</div>

<!-- <div style='border:solid black'>
    <img src="images/homepage.png" width='300' height='300'><img src="images/homepage-grid.png" width='600' height='320'>
</div> -->

### *Homepage Flex-Grid*
![alt text](images/homepage-grid.png)

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="images/homepage-grid.png">
  <source media="(prefers-color-scheme: light)" srcset="images/homepage-grid.png">
  <img alt="Shows an illustrated sun in light mode and a moon with stars in dark mode." src="images/homepage-grid.png">
</picture>
### *Hamburger Menu*
![alt text](images/hamburgermenu.png)
### *Show Page*
![alt text](images/showpage1.png)

![alt text](images/showpage2.png)


## RESTful Routes Table


| Number | Action  | URL            | HTTP Verb     | JSX View Filename | Mongoose Method   |
| -------|:-------:|:--------------:|:-------------:|:-----------------:|:-----------------:|
| 1      | Index   |  /goats/        |  GET          |    Index.jsx      |  Goat.find()       |
| 2      | Show    |  /goats/:id     |  GET          |    Show.jsx       |  Goat.findById     |
| 3      | New     |  /goats/new     |  GET          |    New.jsx        |  N/A              |
| 4      | Create  |  /goats/        |  POST         |    none           |  Goat.create(req.body)|
| 5      | Edit    |  /goats/:id/edit|  GET          |    Edit.jsx       |  Goat.findById     |
| 6      | Update  |  /Goats/:id     |  PUT          |    none           |  Goat.findByIdAndUpdate|
| 7      | Destroy |  /goats/:id     |  DELETE       |    none           |  Goat.findByIdAndDelete|



