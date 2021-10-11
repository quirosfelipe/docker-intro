FROM ubuntu:20.04
EXPOSE 8081
LABEL "team"="mentorship"
COPY server.js /   
COPY helloworld.html / 
RUN apt-get update \ 
 && apt-get install -y curl \
 && curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - \
 && apt-get install -y nodejs \
 && rm -rf /var/lib/apt/lists
CMD ["node","server.js"]
