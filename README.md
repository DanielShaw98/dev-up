# DevUp

DevUp is a collaborative platform for developers, entrepreneurs, founders, designers etc. to connect and work together on innovative project ideas. Users can sign up, create accounts, and post their project ideas with details such as project name, concept, styling, tools, and languages. Other users can then view these ideas and request to collaborate.

## Features

-   **User Authentication:** Secure sign-up and login with Google and GitHub using NextAuth.js.
    
-   **Project Posting:** Create and share project ideas with detailed information.
    
-   **Collaboration Requests:** Users can request to collaborate on projects they find interesting.
    
-   **Real-Time Updates:** Instant updates to project listings and collaboration requests.

## Tech Stack

-   **Frontend:** Next.js, TypeScript, React, Tailwind CSS
    
-   **Backend:** Vercel SQL Serverless Database
    
-   **Authentication:** NextAuth.js (Google Auth, GitHub Auth)

## Getting Started

To get started with DevUp, follow these steps:

1.  Clone the Repository
    
        git clone https://github.com/DanielShaw98/devup.git
    
	    cd devup

2.  Install Dependencies

		npm install

		# or

		yarn install

		# or

		pnpm install

		# or

		bun install

3.  Set Up Environment Variables Create a .env.local file in the root directory and add your environment variables:
    
	    NEXTAUTH_URL=http://localhost:3000
    
	    NEXTAUTH_SECRET=your_secret
    
	    GITHUB_ID=your_github_id
    
	    GITHUB_SECRET=your_github_secret
    
	    GOOGLE_CLIENT_ID=your_google_client_id
    
	    GOOGLE_CLIENT_SECRET=your_google_client_secret

4.  Run the Development Server
    

	    npm run dev
    
	    # or
    
	    yarn dev
    
	    # or
    
	    pnpm dev
    
	    # or
    
	    bun dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

5.  Start Editing You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.
    

## Deployment

DevUp is deployed on Vercel, which provides a serverless SQL database. To deploy your own instance of DevUp:

1.  Fork and Clone the Repository
    
2.  Set Up Environment Variables on Vercel
    
3.  Deploy on Vercel Follow the Vercel Deployment [Documentation](https://vercel.com/docs) for more details.
    

## Learn More

To learn more about the technologies used in DevUp, check out the following resources:

-   [Next.js Documentation](https://nextjs.org/docs)
    
-   [React Documentation](https://react.dev/learn)
    
-   [Tailwind CSS Documentation](https://tailwindcss.com/docs)
    
-   [NextAuth.js Documentation](https://next-auth.js.org/getting-started/introduction)
    

## Contributing

If you'd like to contribute to DevUp, please follow these guidelines:

1.  Fork the Repository
    
2.  Create a New Branch

	    git checkout -b feature/your-feature

3.  Make Your Changes
    
4.  Commit and Push
    
	    git commit -am 'Add new feature'
	    
	    git push origin feature/your-feature

5.  Create a Pull Request
    

## Disclaimer

DevUp is an evolving project. As it is built and deployed in a production environment, you might encounter bugs or issues. Contributions and feedback are always welcome to improve the platform.
