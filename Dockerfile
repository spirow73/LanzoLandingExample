# Usa la imagen oficial de Nginx basada en Alpine para un entorno ligero
FROM nginx:1.27.4-alpine-slim

# Copia el contenido de tu proyecto al directorio donde Nginx busca archivos estáticos
COPY . /usr/share/nginx/html

# Expone el puerto 80 para acceder a la web
EXPOSE 80
