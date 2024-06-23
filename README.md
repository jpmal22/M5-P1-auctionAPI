# Auction Item Search API

This Auction Item Search API allows users to search for auction items stored in a MongoDB database based on keywords in item titles and descriptions. It's built using Node.js, Express, and Mongoose, and provides a simple web interface for submitting search queries.

## Features

- **Search Auction Items**: Users can search for auction items by keywords.
- **Responsive Web Interface**: Includes a basic web interface for user interactions.
- **Results Display**: Display search results with item details.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installing

A step-by-step series of examples that tell you how to get a development environment running:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/auction-api.git
   cd auction-api

2. **Install Dependencies**
  
   ```bash
   npm install

3. **Set Up Environment Variables**

Create a .env file in the root directory and add the following:

    PORT=3000
    MONGO_URI=mongodb://localhost:27017/auctioncli

4. **Start the server**

    npm start

### Usage

To use the API, go to the main page (http://localhost:3000), and you will see a search form. Enter a keyword and submit the form to see the search results.

Make sure to use with https://github.com/jpmal22/M5-P1-auctioncli. To seed and manage the MongoDB database of auction items.

### API Endpoints

GET / - Displays the search page.
POST /search - Performs the search and displays the results.

### Authors

Paolo Alejandro - jpmal22







