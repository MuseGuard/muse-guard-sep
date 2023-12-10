# Stage 1: Build
FROM node:14-alpine as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm cache clean --force
RUN npm install --verbose
COPY . .

# Stage 2: Final Image
FROM node:14-alpine
WORKDIR /usr/src/app
COPY --from=build /usr/src/app .
EXPOSE 3000
CMD ["npm", "start"]
