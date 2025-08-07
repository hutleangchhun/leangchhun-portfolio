# Step 1: Build the React app
FROM node:20 AS builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:stable-alpine

# Copy the built app to nginx's public folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Replace default config (optional)
RUN rm /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
