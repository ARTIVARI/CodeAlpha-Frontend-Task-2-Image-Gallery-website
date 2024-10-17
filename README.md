
https://github.com/user-attachments/assets/ee25eb29-5aaa-4bba-99e5-82e0e11f2379

![Screenshot 2024-10-17 200047](https://github.com/user-attachments/assets/712da3f9-83e6-4e37-a68e-7a03f6a67680)



Welcome to the Image Gallery Website! This is a web application built with a clean and user-friendly interface that allows you to browse and search for images. The app features a sidebar with easy navigation and utilizes the Unsplash API to fetch high-quality images.

Features
Sidebar Navigation:
The sidebar contains two buttons for navigation:

Home: Displays a gallery of images.
Search: Allows users to search for images using the Unsplash API.
Home Page:
Shows a grid layout of beautiful images, fetched from a predefined source.

Search Page:
Users can search for images using keywords. Images are dynamically fetched from the Unsplash API.

How It Works
The Home Page shows a static set of images or predefined content.
On the Search Page, you can type any keyword into the search bar, and the application will fetch and display images related to that keyword from the Unsplash API.
Technologies Used
Frontend:

React.js for building the UI.
Axios (or Fetch API) for making HTTP requests to the Unsplash API.
CSS for styling the application.

Installation & Setup
Clone the repository:

bash
Copy code
git clone https://github.com/ARTIVARI/CodeAlpha-Frontend-Task-2-Image-Gallery-website.git
cd frontend
Install the dependencies:

bash
Copy code
npm install
Get an Unsplash API key:

Go to the Unsplash Developer website and create a new application.
Copy the Access Key from your app dashboard.
Create a .env file in the project root directory and add your API key:

bash
Copy code

Start the development server:

bash
Copy code
npm start
Visit the app at http://localhost:3000 to browse images and search using the sidebar!

Usage
Home Page: Click on the "Home" button in the sidebar to return to the gallery of images.
Search Page: Click on the "Search" button in the sidebar to enter a keyword and search for related images from Unsplash.


Future Enhancements
Add image filtering options.
Add pagination for image results.
Improve the design with animations and transitions.
Add a "Favorites" feature to save your favorite images.
Contributing
If you want to contribute to this project, feel free to fork the repository and submit a pull request. All contributions are welcome!

License
This project is licensed under the MIT License - see the LICENSE file for details.
