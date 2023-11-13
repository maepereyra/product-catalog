# product-catalog
1. This repo contains .js file, dockerfile, package.json and package-lock.json.
   *.js file contains the main microservice program which has functions for searching, deleting and getting from the product catalog
   *dockerfile is to create a docker image
   *package.json used by Node.js and npom to maange the project's dependencies, scripts, versioning, other metadata. 
   *package-lock.json is all the packages that the microservices used and to be able to make sure that it runs in a diffferent environment but the same packages
3. Testing microservice functionalities(Through URL such as: https://localhost#PORTNUM)
* Testing product search 
* Testing product delete
* Testing product get 

3. curl -X POST -H "Content-Type: application/json" -d '{"name": "Product A", "price": 19.99}' http://localhost:3000/products
   * new terminal(user perspective), adds in a product 
5. docker login
6. docker build -t catalog . 
7. docker run -e PORT=3000 -p 3000:3000 --name=cataglog cataglog
* Port number being your local host and --name container name image name
