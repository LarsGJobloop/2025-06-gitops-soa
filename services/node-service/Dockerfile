FROM node:22 AS build-env
COPY . /app
WORKDIR /app

RUN npm clean-install --omit=dev

FROM gcr.io/distroless/nodejs22-debian12
COPY --from=build-env /app /app
WORKDIR /app
CMD ["main.js"]
