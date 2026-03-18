FROM node:24-alpine AS base
RUN mkdir -p /usr/app
WORKDIR /usr/app

# Prepare static files
FROM base AS build
COPY ./ ./
RUN npm install
RUN npm run build

# Release
FROM base AS release
COPY --from=build /usr/app/dist ./public
COPY ./server/package.json ./
COPY ./server/package-lock.json ./
COPY ./server/index.js ./
RUN npm ci --omit=dev

ENV PORT=8080
CMD ["node", "index.js"]