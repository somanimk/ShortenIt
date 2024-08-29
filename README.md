# Full Stack URL Shortener with React JS, Tailwind CSS, Supabase, Shadcn UI Tutorial 🔥🔥
# URL Shortener App

## Overview

The URL Shortener App is a full-stack web application designed to convert long URLs into shortened, shareable links. It also provides detailed analytics, allowing users to track the usage of their shortened URLs, including metrics such as location, device type, and usage frequency. The application is built using **React.js** for the frontend, **Tailwind CSS** for styling, **Supabase** for the backend, and **Shadcn UI** for user interface components.

## Features

- **URL Shortening**: Convert long URLs into short, easy-to-share links.
- **Analytics Dashboard**: Track detailed statistics for each shortened URL, including:
  - Location of the user (city)
  - Device type (desktop or mobile)
  - Usage frequency
- **Data Visualization**: View analytics data through dynamic pie charts and bar charts for easy interpretation.
- **Responsive Design**: The app is fully responsive, ensuring a seamless experience across desktop and mobile devices.
- **User Authentication**: Secure user authentication and management using Supabase.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS, Shadcn UI
- **Backend**: Supabase

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/somanimk/URL_Shortener.git
    cd URL_Shortener
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up the environment variables**:
   - Create a `.env` file in the root directory.
   - Add your Supabase credentials and any other required environment variables.

4. **Start the development server**:
    ```bash
    npm run dev
    ```

5. **Access the application**:
   - Open your web browser and navigate to `http://localhost:3000`.

## Usage

- **Shorten a URL**: Paste a long URL into the input field and click "Shorten." The shortened URL will be generated and displayed.
- **View Analytics**: Click on the "Analytics" button next to your shortened URL to view detailed statistics, including location data and device type.
- **Share Your URL**: Copy the shortened URL and share it across your preferred platforms.

## Video Demonstration

For a complete walkthrough of the app's features and how to use it, check out the video demo on [YouTube](https://youtu.be/luzZdJDv7L0).

"""

# Writing the content to a README.md file
file_path = "/mnt/data/README.md"
with open(file_path, 'w') as readme_file:
    readme_file.write(readme_content)

file_path
