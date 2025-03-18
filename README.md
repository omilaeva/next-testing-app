# next-testing-app
The testing app using next.js, react and db

## Structure of full stack next.js application

### 1️⃣ Frontend Code (Runs in the Browser)
Frontend code is executed on the client-side (browser) and includes:\
✅ Pages (except API routes)\
✅ Components\
✅ Hooks\
✅ CSS/Styling\
✅ Client-side API calls (fetch, axios)

**📌 Where to find frontend code?**
- ```pages/index.tsx``` (or any other page files except pages/api/)\
- ```components/``` (Reusable UI elements)\
- ```hooks/``` (Custom React hooks)\
- ```styles/``` (CSS files, Tailwind classes)\


### 2️⃣ Backend Code (Runs on the Server)
Backend code is executed on the server and includes:\
✅ API routes (pages/api/)\
✅ Server-side functions (getServerSideProps, getStaticProps)\
✅ Database queries\
✅ Authentication & Authorization (e.g., NextAuth, JWT, OAuth)

**📌 Where to find backend code?**

- ```pages/api/``` (API endpoints, runs only on the server)
- ```lib/``` (Database connections, helpers)
- ```services/``` (Business logic for handling requests)
- ```prisma/``` (ORM files, if using Prisma)
