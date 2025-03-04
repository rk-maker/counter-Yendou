# Yendou Home Assignment

This project is a simple Counter application built as a home assignment for Yendou working student. It demonstrates the use of React's Context API for state management, a custom hook for encapsulating counter logic, and Chakra UI's toast notifications for user feedback. The application provides a clean and modular approach to state handling while ensuring a seamless user experience.

## Instructions

1. **Install Dependencies** To install the required dependencies, run the following command:

```bash
npm install @chakra-ui/react@^2.8.2
```

2. **Configure tsconfig.json** Update your tsconfig.json file with the following compilerOptions

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "Bundler"
  }
}
```

## Approach & Technical choice

### UI Library:

- Utilized Chakra UI for styling and Toast notifications to provide user feedback.

- Integrated React Icons for enhanced UI aesthetics.

### State Management

- Implemented React Context API for global state management, ensuring efficient state sharing without prop drilling.

- Created a CounterProvider to manage the count state and provide an increment function.

- Used a custom hook (useCounter) to access the counter context and enforce proper usage within the provider.

### Folder Structure

I follow a complete saturated system for organizing the folder structure, ensuring everything is easily accessible and logically grouped. Below is the folder structure for your reference:

```
📦src
 ┣ 📂components
 ┃ ┣ 📂counter
 ┃ ┃ ┗ 📜counter.tsx
 ┃ ┗ 📂toast
 ┃ ┃ ┗ 📜toast.tsx
 ┣ 📂context
 ┃ ┗ 📜CounterContext.tsx
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┣ 📜reportWebVitals.ts
 ┗ 📜setupTests.ts
```

**/components**: This folder contains all the reusable components that make up the UI elements of the project.

**/context**: This folder contains CounterContext for state managment.

## Components

**Custom Toast**
A reusable Toast made using chakra-ui with custom css

**Props**

| Prop Name   | Type     | Default     | Description                                    |
| ----------- | -------- | ----------- | ---------------------------------------------- |
| `heading`   | `string` | `undefined` | The heading text to be displayed in the toast. |
| `text`      | `string` | `undefined` | The body text to be displayed in the toast.    |
| `iconColor` | `string` | `#74C898`   | The color of the icon.                         |

**Custom Counter**
A reusable Counter made using custom css

**Functionality**

- Increment Counter: Each time the +1 button is clicked, the counter increments by one.
- Toast Notification: After the increment, a toast notification is triggered showing the updated count.

## Tech Stack

Client: TypeScript, Chakra UI

## Authors

- [Raffay Khan](https://github.com/rk-maker)
