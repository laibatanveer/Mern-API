
# Beutify: Elevating E-Commerce with the MERN Touch

## Description:

It is a contemporary e-commerce platform tailored to redefine the shopping experience. Built using the robust MERN stack, this platform interweaves user experience with efficiency, presenting a marketplace that is both visually enticing and functionally comprehensive.

### 🌐 Features:

#### User-Centric Navigation:
 With a sleek navigation bar, users can seamlessly transition between different pages like Home, Brands, Categories, and their Profile.

#### Diverse Product Exploration:
 Whether you're hunting for products from a specific brand, within a certain category, or just exploring the wide range available, it ensures a fluid browsing experience. Product details are just a click away on individual product pages, ensuring that customers are well-informed before making a purchase.

#### Personalized Shopping Cart:
 Our custom cart ensures that your selected products are safely stored until you're ready to proceed with the purchase.

#### Dynamic Backend:
 Powering the platform is a backend that operates on Express.js. It efficiently manages different API routes, handling user registrations, products, categories, brands, orders, and even mailing functionalities.

#### Secure & Streamlined Registration: 
New users can securely register, and returning users can smoothly log in, thanks to the dedicated Registration API.

#### Responsive Design: 
Regardless of device or screen size, the platform's design adjusts gracefully, offering an optimal viewing experience.

### 💡 Technical Highlights:

#### Frontend:
 The frontend harnesses the power of React, allowing for dynamic rendering of components and ensuring efficient state management with the Global Context.

#### Backend:
 Express.js, coupled with other middleware, provides a robust foundation for the platform's backend operations. Whether it's handling database interactions or processing requests, the backend has been crafted to ensure smooth operations.

#### Database Integration:
 Powering its extensive product catalog and user data is MongoDB, a NoSQL database known for its flexibility and scalability. MongoDB's document-oriented structure is ideally suited for our e-commerce platform, ensuring efficient data retrieval and storage. With its performance and reliability, MongoDB provides a solid backbone for this project, allowing users to seamlessly browse, shop, and manage their profiles without a hitch.

#### Middleware & Utilities:
 Usage of packages like 'cors' ensures that the application is secure and can handle cross-origin requests. The 'dotenv' package aids in managing environment variables, while the 'path' module allows for efficient directory and file operations.



## API Reference
### REGISTRATION
#### Get all Users

```http
  GET /api/registration/getAllUsers
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|none |  |  Get all users |


#### Signup

```http
  POST /api/registration/signUp
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|    | | **Required**.  username, password, email, role  |

#### Login

```http
  POST /api/registration/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|    | | **Required**.   email, password |

#### Delete User

```http
  DELETE /api/registration/deleteUser
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|   _id | | **Required**.   User _id |

#### Update User

```http
  PUT /api/registration/updateProfile
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|    | | **Required**.  _id, email, username, ProfilePic|

### PRODUCTS
#### Get all Products

```http
  GET /api/products/allProducts
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|none |  |  Get all products |

#### Create a Product

```http
  POST /api/products/createProduct
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|none |  |  **Required**.  ProductName, ProductImage, brand, category, price  |

#### Delete a Product

```http
  DELETE /api/products/deleteProduct/:_id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|_id |  |  **Required**.  _id of the product  |

#### Update a Product 

```http
  PUT /api/products/updateProduct/:_id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|_id |  |  **Required**.  _id of the product as params; ProductName, ProductImage, brand, category, price in body |

#### Get Product By Brand

```http
  GET /api/products/brand/:brand
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|brand |  |  **Required**. brandName as parameter |

#### Get Product By Category

```http
  GET /api/products/category/:category
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|category |  |  **Required**. category as parameter


#### Get Product By ID

```http
  GET /api/products/product/:_id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|_id |  |  **Required**. _id of the product as parameter

#### Get Product By Name

```http
  GET /api/products/name/:ProductName
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|ProductName |  |  **Required**. ProductName as parameter

### BRANDS
#### Get all Brands

```http
  GET /api/brands/allBrands
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|none |  |  Get all brands |

#### Create a Brand

```http
  POST /api/brands/createBrand
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|none |  |  **Required**. BrandName, BrandImage  |

#### Delete a Brand

```http
  DELETE /api/brands/deleteBrand/:_id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|_id |  |  **Required**.  _id of the brand  |

#### Update a Brand

```http
  PUT /api/brands/updateBrand/:_id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|_id |  |  **Required**.  _id of the brand as params; BrandName and BrandImage in body |

#### Get Brand By ID

```http
  GET /api/brands/brandById/:_id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|_id |  | **Required**.  _id of the brand as params |

#### Get Brand By Brand Name

```http
  GET /api/brands/brandByName/:BrandName
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|BrandName |  | **Required**.  BrandName as params |

### CATEGORIES
#### Get all Categories

```http
  GET /api/category/allCategories
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|none |  |  Get all categories |

#### Create a Category

```http
  POST /api/category/createCategory
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|none |  |  **Required**. CategoryName, CategoryImage  |

#### Delete a Category

```http
  DELETE /api/category/deleteCategory/:_id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|_id |  |  **Required**.  _id of the  category  |

#### Update a Category

```http
  PUT /api/category/upateCateogry/:_id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|_id |  |  **Required**.  _id of the category as params; CategoryName and CategoryImage in body |

#### Get Category By ID

```http
  GET /api/category/categoryById/:_id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|_id |  | **Required**.  _id of the category as params |

#### Get Category By Category Name

```http
  GET /api/category/categoryByName/:CategoryName
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|CategoryName |  | **Required**.  CategoryName as params |

### ORDERS
#### Get all Orders

```http
  GET /api/order/getAllOrders
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|none |  |  Get all categories |

#### Place Order

```http
  POST /api/order/placeOrder
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|none |  |  **Required**.  customerName, customerEmail, customerId, customerContact, customerAddress,  order, totalBill|

#### Track Order

```http
  GET /api/order/:orderId
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|_id |  | **Required**.  _id of the order  |




