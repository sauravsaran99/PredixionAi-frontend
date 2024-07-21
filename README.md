# Task Management App Frontend

## Overview

This is the frontend part of a Task Management application built using React. The application allows users to manage tasks by creating, updating, and deleting them. It also includes basic sorting and filtering functionality.y

## Features

- Display all tasks
- Add a new task
- Update the status of a task
- Delete a task
- Sort tasks by title
- Filter tasks by status
- Loading spinner for API calls
- Error notifications using `react-toastify`

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of Node.js and npm.
- You have a running backend server (API base URL is set in the config file).

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/sauravsaran99/PredixionAi-frontend.git
    ```

2. Navigate to the project directory:

    ```sh
    cd frontend
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```

## Configuration

Create a `.env` file in the root directory and add the following environment variable:

```env
REACT_APP_API_BASE_URL=http://localhost:8080
