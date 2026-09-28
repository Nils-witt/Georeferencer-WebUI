FROM node:24-bookworm AS builder

WORKDIR /app
ENV HUSKY=0

# Install dependencies in their own layer so it is cached until the lockfile changes
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY . .
RUN npm run build



FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
