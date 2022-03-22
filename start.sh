echo "[Inicializando Container]"
docker-compose up -d --build
echo "[Container Inicializado]"

echo "[API]: http://localhost:9000"
echo "[UI]: http://localhost:4000"
echo "[DB]: http://localhost:3307"
echo "[DOCS]: http://localhost:4040"