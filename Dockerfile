# Two stages so a deploy ships only what runs (2026-11-12).
#
# The single-stage image was 2.6 GB — node_modules and the whole source tree,
# to run a server that needs neither — and saving it took 3 minutes of every
# deploy. Nuxt's .output is self-contained, so the runtime stage copies that
# alone. The yarn cache mount keeps downloaded packages on the box, so even
# when the layer cache is pruned a reinstall does not refetch everything.

FROM node:22-alpine AS build
WORKDIR /app
COPY package.json yarn.lock ./
RUN --mount=type=cache,target=/usr/local/share/.cache/yarn \
    yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM node:22-alpine
WORKDIR /app
COPY --from=build /app/.output ./.output
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
