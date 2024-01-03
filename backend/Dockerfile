# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/engine/reference/builder/

# RUN curl -fsSL https://bun.sh/install | BUN_INSTALL=/usr bash

FROM oven/bun:latest AS base

# Run the application as a non-root user and copy files for user bun
USER bun

# copy env file
WORKDIR /home/bun/backend
COPY .env.production .

WORKDIR /home/bun/backend/app

# Use production node environment by default.
ENV NODE_ENV production

# Expose the port that the application listens on.
EXPOSE $BACKEND_API_PORT

# Copy the rest of the source files into the image.
COPY backend .

# RUN ~/.bun/bin/bun install
RUN bun install

# built project
# RUN bun run build

# Run the application.
CMD bun run start