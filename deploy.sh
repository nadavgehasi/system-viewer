docker build -t ophirt/sv-backend backend
docker build -t ophirt/sv-data-sender data-sender
docker build -t ophirt/sv-frontend frontend
docker push ophirt/sv-backend
docker push ophirt/sv-data-sender
docker push ophirt/sv-frontend
