# base image
FROM node:12.14.1-alpine

# set working directory
#RUN mkdir -p /usr/src/app
#WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# Versions
RUN npm -v
RUN node -v

# install and cache app dependencies
#COPY package.json /usr/src/app/
#COPY yarn.lock /usr/src/app/

# load dependencies
RUN yarn

# build app
CMD ["yarn", "build"]