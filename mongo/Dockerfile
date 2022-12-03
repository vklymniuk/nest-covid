FROM mongo:latest

LABEL maintainer="Volodymyr Klymniuk <volodymyr.klymniuk@gmail.com>"

#COPY mongo.conf /usr/local/etc/mongo/mongo.conf
VOLUME /data/db /data/configdb

CMD ["mongod"]

EXPOSE 27017