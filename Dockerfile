FROM node:10.16

RUN npm install -g typescript @types/node

RUN mkdir app
WORKDIR app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install --only=prod

COPY src/ src/
COPY tsconfig.json tsconfig.json
COPY tsconfig.build.json tsconfig.build.json

RUN npm run build
RUN rm -rf src/
RUN rm tsconfig.json
RUN rm tsconfig.build.json

ENTRYPOINT [ "node", "dist/main.js" ]
