# Simple Blog Application with TypeScript

This project is a simple blog application built with React.js, Redux Toolkit Query, Axios, TypeScript, and Tailwind CSS. It retrieves a list of articles from a REST API and displays them in a user-friendly interface. Additionally, it uses `react-router-dom` for routing and includes a 404 page for unknown routes.

## Technologies Used
- React.js
- Redux Toolkit Query
- Axios
- TypeScript
- Tailwind CSS
- react-router-dom
- Daisy UI React

## Features

### State Management
- **Redux Toolkit Query **: Used for managing global state and Used for fetching and caching data from the REST API.

### API Integration
- **Axios**: Used to make API requests to retrieve, add, update, and delete articles.
- **Fake REST API**: [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)
- **API Response Format**: JSON
- **API Request Methods**:
  - POST
  - GET
  - PUT
  - DELETE

### Styling
- **Tailwind CSS**: Used for styling components.
- **Daisy UI React**: Used for additional UI components.

### Routing
- **react-router-dom**: Used for handling routes and navigation.
- **404 Page**: Included to handle unknown routes.

### Article Display
Each article displayed contains:
- **Title**: The title of the article.
- **Content**: A limited preview of the article's content.

### Additional Features
- **Loading Indicator**: Displays a loading message while articles are being retrieved.
- **Error Handling**: Displays an error message when an API request fails.
- **Read More**: A button or link to view the full text of each article.
- **Pagination**: Implemented to fetch and display additional articles.
- **Search Functionality**: Allows users to filter displayed articles by title or author.

## Project Setup
1. Create a new React.js project using Create React App with TypeScript template.
2. Set up Redux and Redux Toolkit for state management.
3. Install Axios to handle API requests.
4. Install Tailwind CSS and Daisy UI React for styling.
5. Use React Query to fetch data from the REST API.


## Development Best Practices
- Follow React.js and TypeScript development best practices for component structure, type safety, state management, and code readability.
- Write clean and maintainable code with proper comments and documentation.

## Conclusion
This simple blog application demonstrates how to integrate various technologies, including TypeScript, to build a robust and user-friendly web application. It adheres to best practices in React.js and TypeScript development, ensuring clean, maintainable code that is easy to understand and extend.

Feel free to use this project as a starting point or reference for your own applications!
