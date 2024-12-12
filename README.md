# Survey Tool

This is a desktop application built using **Electron.js** and **Tailwind CSS** for creating and managing survey tools. This README provides instructions to set up, run, and contribute to the project.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)

## How to Use This Repository

1. **Clone the Repository**
   Clone the repository to your local machine:
   ```bash
   git clone git@github.com:itskiranp/survey_tool.git
   ```

2. **Install Dependencies**
   Navigate to the project directory and install all necessary packages:
   ```bash
   cd survey_tool
   npm install
   ```

3. **Run the Application**
   Start the Electron app by running the following command:
   ```bash
   npm start
   ```

4. **Update CSS (if needed)**
   If you make changes to the Tailwind CSS styles, rebuild the `output.css` file:
   ```bash
   npx tailwindcss -i ./src/assets/styles.css -o ./src/assets/output.css --watch
   ```

5. **Work on Your Branch**
   Switch to your assigned branch to work on your tasks:
   ```bash
   git checkout branch-name
   ```

6. **Push Changes**
   After making your changes, commit and push them to the remote repository:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin branch-name
   ```

7. **Create a Pull Request**
   Once your changes are complete, create a pull request on GitHub to merge them into the main branch.

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

