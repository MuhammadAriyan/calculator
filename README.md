

# Calculator App

A **simple, stylish calculator** built with **Next.js** and **Tailwind CSS**. This app allows users to perform basic arithmetic operations like addition, subtraction, multiplication, and division, with an intuitive UI.

## Features

- Basic arithmetic operations: **Addition**, **Subtraction**, **Multiplication**, and **Division**.
- **Responsive design** that works across all devices.
- Real-time updates of the calculation.
- Functional **Backspace** button to delete the last entry.
- Simple and clean user interface designed with **Tailwind CSS**.
- Custom styling with **lucide-react icons** for enhanced visual experience.

## Demo

Check out the live version of the calculator here: [Calculator Demo](https://calculator-gilt-seven.vercel.app/)

## Getting Started

Follow the steps below to run the project locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (v6 or later) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone this repository:

```bash
git clone https://github.com/MuhammadAriyan/calculator.git
cd calculator
```

2. Install the dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to:

```
http://localhost:3000
```

### Building for Production

To build the project for production, run:

```bash
npm run build
```

Once built, you can start the production server with:

```bash
npm start
```

### Deployment

This app is ready to be deployed to any platform that supports **Next.js** applications. For seamless deployment, we recommend using [Vercel](https://vercel.com/).

## Usage

The calculator allows you to:

- Perform basic operations like `+`, `-`, `*`, and `/`.
- Use the **backspace** button to delete the last character.
- Evaluate the entire expression by clicking `=`.

## Technologies Used

- **Next.js**: A React framework for building fast web applications.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Lucide-react**: A library of icons used for buttons and visual elements.

## Project Structure

```bash
├── components
│   ├── ui
│   │   ├── button.tsx
│   │   └── card.tsx
│   └── calculator.tsx
├── public
│   ├── github.png
├── styles
│   ├── globals.css
├── pages
│   └── index.tsx
├── .eslintrc.json
├── next.config.js
└── README.md
```

## Future Enhancements

- Adding more advanced mathematical functions (e.g., square roots, exponents).
- Implementing keyboard input support for faster calculations.
- Improving error handling and user feedback.

## Contributing

Feel free to fork this project and contribute. Pull requests are welcome!

## License

This project is open-source and available under the **MIT License**.

## Author

**Muhammad Aryan**  
- GitHub: [@MuhammadAriyan](https://github.com/MuhammadAriyan)  
- LinkedIn: [@Muhammad-Aryan](https://www.linkedin.com/in/muhammad-aryan)
