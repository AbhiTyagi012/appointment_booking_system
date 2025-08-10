# Use official MySQL image
FROM mysql:8.0

# Set environment variables for MySQL root password, database, and user
ENV MYSQL_ROOT_PASSWORD=rootpassword
ENV MYSQL_DATABASE=skill_assessment
ENV MYSQL_USER=myuser
ENV MYSQL_PASSWORD=mypassword

# Expose MySQL port
EXPOSE 3306
