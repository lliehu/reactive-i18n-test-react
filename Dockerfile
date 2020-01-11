# https://medium.com/@deanslamajr/develop-that-nodejs-app-inside-a-docker-container-d7b93b8c89db
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md
FROM node:10

# install dependencies
WORKDIR /opt/app

COPY package.json package-lock.json* ./
RUN npm cache clean --force && npm install

# copy app source to image _after_ npm install so that
# application code changes don't bust the docker cache of npm install step
COPY . /opt/app

# set application PORT and expose docker PORT, 80 is what Elastic Beanstalk expects
ENV PORT 3000
EXPOSE 3000

# This could be changed to do deploy instead,
# so perhaps npm run build?
CMD [ "npm", "start"]
