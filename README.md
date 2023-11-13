# product-catalog
1. Make a program file, docker file, and json for each microservice (.go, .js, .py, etc.)
2. Testing microservice functionalities(Through URL such as: https://localhost#PORTNUM)
* Testing product search 
* Testing product delete
* Testing product get 

3. curl -X POST -H "Content-Type: application/json" -d '{"name": "Product A", "price": 19.99}' http://localhost:3000/products
   * new terminal(user perspective), adds in a product 
5. docker login
6. docker build -t catalog . 
7. docker run -e PORT=3000 -p 3000:3000 --name=cataglog cataglog
* Port number being your local host and --name container name image name
