FROM gplane/pnpm as Builder

RUN mkdir -p /home/paddlepaddle-datastat/web
WORKDIR /home/paddlepaddle-datastat/web
COPY . /home/paddlepaddle-datastat/web

RUN pnpm install

RUN pnpm build:paddlepaddle

FROM nginx:1.20.0


COPY --from=Builder /home/paddlepaddle-datastat/web/dist/paddlepaddle /usr/share/nginx/html/
RUN chmod -R 755 /usr/share/nginx/html
COPY ./deploy/paddlepaddle/nginx.conf /etc/nginx/nginx.conf


ENV RUN_USER nginx
ENV RUN_GROUP nginx
EXPOSE 8080
ENTRYPOINT ["nginx", "-g", "daemon off;"]

