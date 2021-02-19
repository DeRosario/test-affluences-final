docker container rm -f backend-test reservation-service

docker-compose build

docker-compose up -d

cd ./frontend-app
npm install
npm run build
cd ../
docker cp ./dist/public/ backend-test:/affluences/app/