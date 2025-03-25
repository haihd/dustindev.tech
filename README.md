## dustindev.tech

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running with Docker

To build and run the project using Docker, follow these steps:

1. Build the Docker image:
   ```bash
   docker build -t dustindev-tech .
   ```

2. Run the Docker container:
   ```bash
   docker run -p 3000:3000 dustindev-tech
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.