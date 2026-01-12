# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## User Management Dashboard

A simple user management dashboard built with **React + TypeScript**.
The application allows viewing users, searching, filtering by status, pagination,
and updating user status .

### `How to Run the Project`

- install dependencies by using npm install
- Run the development server npm star
- Open the app in ur browser (http://localhost:3000)

#### `Features`

- View Users in a table .
- Search users by using Name or Email .
- filter users by status (All - Active - Inactive) .
- Pagination
- View user's details page .
- Activate and Deactivate users.
- Reusble components .
- Custom hooks .
- Using localstorage .

##### `Assumptions`

- No Backend or API integration required .
- User data is static and comes from file users.ts
- User status are stored locally by localstorage
- On first load only data is taken from users.ts
- then data is restored from localstorage .

###### `Trade-Offs`

- localstorage was used instead of backend api .
- tailwind css was used instead of css files .

###### `Tech Stack`

- React
- Typescript
- React router
- Tailwind CSS
