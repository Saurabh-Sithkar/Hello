# Hello - Chat App

Welcome to **Hello**, a responsive chat application built using Vite and Firebase. This app allows users to create an account, log in, chat with other users, send images, and more—all with a mobile-responsive design.

## Features

- **User Authentication**: Users can sign up, log in, and reset their passwords if forgotten.
- **Profile Customization**: Users can set and update their avatars to personalize their profiles.
- **Real-time Chat**: Chat with other users in real-time.
- **Send Images**: Share images with your contacts during a chat.
- **Responsive Design**: Fully responsive and optimized for mobile devices.

## Tech Stack

- **Vite**: Fast and modern build tool.
- **Firebase**: 
  - **Authentication**: For managing user signups, logins, and password resets.
  - **Firestore**: For real-time database management, storing messages, user data, and chat histories.
  - **Storage**: For storing user avatars and shared images.

## Setup and Installation

### Prerequisites

- [Node.js](https://nodejs.org/en/) installed
- Firebase project setup

### Installation Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/hello-chat-app.git
   cd hello-chat-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root of your project and add your Firebase configuration:

   ```bash
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Build for production:**

   ```bash
   npm run build
   ```

6. **Deploy your app** (e.g., to Vercel, Netlify, or Firebase Hosting).

## Usage

- **Sign Up/Login**: Create an account or log in with existing credentials.
- **Reset Password**: Use the "Forgot Password" option if you can't remember your credentials.
- **Set Avatar**: Customize your profile by uploading an avatar.
- **Chat**: Start a conversation with any user.
- **Send Images**: Share pictures with your chat contacts.

## License

This project is licensed under the MIT License.

## Contributing

Feel free to fork this project and submit pull requests. We welcome contributions to improve this app!

---

This README file gives a clear overview of your chat application, including its features, setup instructions, and usage. You can modify it further to suit your specific needs.
