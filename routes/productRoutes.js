import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  getAllProviderProducts,
} from "../controllers/productController.js";

const router = express.Router();


// PROVIDER PRODUCTS
router.get(
  "/provider-products",
  getAllProviderProducts
);


// ALL PRODUCTS
router.get("/", getProducts);


// SINGLE PRODUCT
router.get("/:id", getSingleProduct);


// CREATE
router.post(
  "/create",
  upload.single("image"),
  createProduct
);


// UPDATE
router.put(
  "/:id",
  upload.single("image"),
  updateProduct
);


// DELETE
router.delete("/:id", deleteProduct);

export default router;

// =======================================

// import express from "express";
// import upload from "../middleware/uploadMiddleware.js";

// import {
//   createProduct,
//   getProducts,
//   getSingleProduct,
//   updateProduct,
//   deleteProduct,
//   getAllProviderProducts
// } from "../controllers/productController.js";

// const productRouter = express.Router();

// productRouter.post("/", upload.single("image"), createProduct);

// productRouter.get("/", getProducts);
// productRouter.get("/provider-products", getAllProviderProducts);

// productRouter.get("/:id", getSingleProduct);

// productRouter.put("/:id", updateProduct);

// productRouter.delete("/:id", deleteProduct);

// export default productRouter;