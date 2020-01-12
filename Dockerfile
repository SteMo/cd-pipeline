# base image
FROM node:12.14.1-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
#RUN yarn build
RUN yarn react-scripts@3.0.1 -g --silent

# build app
CMD ["yarn", "build"]