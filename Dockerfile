FROM node:16-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN apt-get update && apt-get install -y \
    build-essential \
    libstdc++6 \
    && rm -rf /var/lib/apt/lists/*

RUN npm install 

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
