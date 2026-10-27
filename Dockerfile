FROM node:24-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 7180

ENV BACKEND_API_URL="http://localhost:7280"

CMD ["npm", "start"]
