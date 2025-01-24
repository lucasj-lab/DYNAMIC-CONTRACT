# Use the official PHP 8.2 + Apache image from Docker Hub
FROM php:8.2-apache

# Set the working directory to the default Apache document root
WORKDIR /var/www/html

# Copy all your project files (including .php, .js, .css) into the container
COPY . /var/www/html

# Expose port 80 so Render (or Docker) knows to route HTTP traffic here
EXPOSE 80

# Use the base image’s default startup command, which launches Apache in the foreground
CMD ["apache2-foreground"]
