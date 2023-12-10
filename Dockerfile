# Stage 1: Build
FROM node:alpine as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2: Final Image
FROM node:alpine
WORKDIR /usr/src/app
COPY --from=build /usr/src/app .
EXPOSE 3000
CMD ["npm", "start"]
