FROM node:12 AS build

# create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install dependencies
COPY package.json yarn.lock /usr/src/app/
RUN yarn install

# include app source
COPY . /usr/src/app

# build the app
RUN yarn build-storybook

# build a lightweight production image
FROM node:12-alpine
COPY --from=build /usr/src/app/storybook-static /usr/storybook
RUN npm i -g http-server
CMD ["http-server", "/usr/storybook", "--silent", "--proxy", "http://localhost:8080?"]
