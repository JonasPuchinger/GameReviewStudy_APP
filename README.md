# GameReviewStudy APP

## Introduction

This project is the frontend of an online study on video game reviews conducted for the course "Advanced Usability Engineering", which is part of the masters program in media informatics at the [University of Regensburg](https://www.uni-regensburg.de/)

The aim of the study is to show how different CAPTCHAs are able to influence users to write reviews with friendlier tone and higher quality.

This part of the project serves as the frontend, enabling users/participants to input study data.

The corresponding backend can be found [here](https://github.com/JonasPuchinger/GameReviewStudy_API).

## Installation

1. Clone or download the repository.
2. run `npm install` in the project directory.
3. run `npm start` in the project directory.
4. Point your browser at [http://localhost:3000](http://localhost:3000).

## Usage

You can use this as a template for your own project.

### Sitemap

Available pages:

- "/": landing page with introduction; START button leads to review
- "/review": main page of the app; CAPTCHA appears on page load
- "/self-assessment": page for self-assessment of participnat after writing review
- "/debriefing": page for debriefing after experiment; user may enter email to get notified with study results
