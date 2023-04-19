# Installation Guide


To run the React application on your computer, you'll need to install Node.js and a Node.js package manager like npm or Yarn. Then, you can follow these steps to set up your development environment:

  1 - Clone the project:

    git clone https://github.com/diegomottadev/survey-app-view.git
  
  2 - Install dependencies:
    
    npm install

  3 - Create a .env file with the following content and add the next lines:
    
    PORT=3000
    QR_SITE_URL='https://xample.com/'
    
  The `QR_SITE_URL` variable will contain the URL of your site and will be used when generating QR codes for point of sale locations.

  Each client has a point of sale code, which is a number. When a new point of sale is created, its code is associated with the URL of the site, for example:

    https://example.com/44

  This URL will serve as the access point from the QR code, and will redirect to the appropriate form when scanned.
  
  4 - Create a `.env` file in the root directory of the project, and add the following line:

    PORT=3001

  5 - With these steps completed, you should now be able to run the application by running:

    npm start

  This should start the application on your local server at http://localhost:3001.
