# product-catalog
1. This repo contains .js file, dockerfile, package.json and package-lock.json.
* .js file contains the main microservice program which has functions for searching, deleting and getting from the product catalog
* dockerfile is to create a docker image
* package.json used by Node.js and npom to maange the project's dependencies, scripts, versioning, other metadata. 
* package-lock.json is all the packages that the microservices used and to be able to make sure that it runs in a diffferent environment but the same packages
2. To run the microservice, build a docker image and run the image. Log in to docker using docker login. Then use the following command
* docker build -t catalog .
* docker run -e PORT=3000 -p 3000:3000 --name=cataglog cataglog
3. Testing microservice functionalities with client browwser interactions using the URL additions. (Through URL such as: https://localhost#3000)
* Testing get fuction, which should show the specified product given in the url, just add /products/:id and change the id to a number of which product you want to retrieve.  
* Testing product delete
* Testing get function, which should show a list of the products in the browser, just add /products to the end of the localhost url.
* Testing post function, which should add a product to the "database" using a curl command to send a JSON payload, use the following command.
 * curl -X POST -H "Content-Type: application/json" -d '{"name": "Product A", "price": 19.99}' http://localhost:3000/products
   * Remeber to open a new terminal(user perspective), adds in a product 
