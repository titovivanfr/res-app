FROM php:8.3-fpm-alpine

RUN apk add --no-cache curl git build-base zlib-dev oniguruma-dev autoconf bash postgresql-dev && \
    docker-php-ext-install pgsql pdo_pgsql

RUN apk add --no-cache linux-headers nodejs npm

#Composer
COPY --from=composer /usr/bin/composer /usr/bin/composer
RUN echo 'COMPOSER END'

COPY ./ /var/www/
WORKDIR /var/www/

CMD php-fpm

EXPOSE 9000
