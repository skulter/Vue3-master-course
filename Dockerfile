FROM node:18-alpine as build

WORKDIR /irteam/app

COPY package*.json ./

RUN npm install

COPY . ./
RUN npm run build

FROM nginx:stable-alpine as production
COPY --from=build /irteam/app/dist /usr/share/nginx/web
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
