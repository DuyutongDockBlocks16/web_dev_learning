FROM denoland/deno:alpine-1.42.2

WORKDIR /app

COPY deps.js .

RUN deno cache deps.js

COPY . .

EXPOSE 8000

CMD [ "run", "--allow-net", "--allow-env", "--watch", "--unstable", "app-run.js" ]