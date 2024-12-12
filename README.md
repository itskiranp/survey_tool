

# Survey Tool

This is a desktop application built using **Electron.js** and **Tailwind CSS** for creating and managing survey tools. This README provides instructions for teammates to set up, run, and contribute to the project.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)

## How to Set Up the Project

1. **Clone the Repository**
   ```bash
   git clone git@github.com:your-username/survey_tool.git
   ```

2. **Navigate to the Project Directory**
   ```bash
   cd survey_tool
   ```

3. **Install Dependencies**
   Run the following command to install all necessary packages:
   ```bash
   npm install
   ```

## How to Run the Project

1. **Start the Electron App**
   Run the following command to launch the app:
   ```bash
   npm start
   ```

2. **Tailwind CSS Build (Development)**
   If you update any CSS, you need to rebuild the Tailwind CSS file:
   ```bash
   npx tailwindcss -i ./src/assets/styles.css -o ./src/assets/output.css --watch
   ```
   This ensures the latest styles are applied.

## How to Contribute

1. **Create a Branch**
   Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Your Changes**
   Edit the code, add features, or fix bugs.

3. **Commit Your Changes**
   Commit your work with a meaningful message:
   ```bash
   git add .
   git commit -m "Describe your changes"
   ```

4. **Push Your Changes**
   Push your branch to the remote repository:
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**
   Go to the GitHub repository and create a pull request to merge your changes into the `main` branch.

## Additional Notes

### Common Commands

- **Install Dependencies**:
  ```bash
  npm install
  ```

- **Run the App**:
  ```bash
  npm start
  ```

- **Build Tailwind CSS**:
  ```bash
  npx tailwindcss -i ./src/assets/styles.css -o ./src/assets/output.css --watch
  ```

- **Switch Branches**:
  ```bash
  git checkout branch-name
  ```

### Troubleshooting

- If you encounter errors when running `npm install` or `npm start`, ensure you have the correct Node.js version installed.
- If Tailwind CSS styles don’t update, ensure the `--watch` mode is running for Tailwind.

### Contact

If you have any questions or run into issues, feel free to contact the repository maintainer.

