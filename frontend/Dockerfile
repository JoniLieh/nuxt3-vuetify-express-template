# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/engine/reference/builder/


# oven/bun not working with bun install "error: zlib.BrotliDecompress is not implemented" https://github.com/oven-sh/bun/issues/5990#issuecomment-1738422089
FROM node:lts-bullseye-slim

RUN apt-get -y update; apt-get -y install curl; apt-get -y install unzip
# Run the application as a non-root user and copy files
USER node 

# RUN curl -fsSL https://bun.sh/install | BUN_INSTALL=/usr bash
RUN curl -fsSL https://bun.sh/install | bash

# copy env file
WORKDIR /home/bun/frontend
COPY .env.production .

WORKDIR /home/bun/frontend/app

# Use production node environment by default.
ENV NODE_ENV production

# Expose the port that the application listens on.
EXPOSE $NITRO_PORT

# Copy the rest of the source files into the image.
COPY frontend .

# https://github.com/oven-sh/bun/issues/5990#issuecomment-1738422089
RUN ~/.bun/bin/bun install

# built project
RUN ~/.bun/bin/bun run build

# Run the application.
CMD ~/.bun/bin/bun run start

