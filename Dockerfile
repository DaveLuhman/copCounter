FROM node:18-alpine as base
WORKDIR /src
COPY . /
EXPOSE 3000

FROM base as production
ENV NODE_ENV=production
RUN npm install
COPY . /
CMD ["npm", "start"]