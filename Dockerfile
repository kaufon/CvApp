FROM node:latest

WORKDIR /home/pn

COPY . .

RUN npm i

EXPOSE 5173 

CMD npm run dev 
