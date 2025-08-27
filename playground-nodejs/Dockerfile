FROM node:18-alpine

WORKDIR /app

# 1. Copy dependency manifests first (caching layer)
COPY package*.json ./
COPY tsconfig.json ./

# 2. Install dependencies
RUN npm install --legacy-peer-deps

# 3. Copy application code
COPY src ./src

CMD ["npm", "run", "start:dev"]