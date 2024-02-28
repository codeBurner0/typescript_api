// import { Request, Response } from "express";
// import {
//   addProductService,
//   deleteProductService,
//   getAllCategoryService,
//   getProductByCategoryService,
//   getSingleProductService,
//   limitResultService,
//   sortService,
//   updateProductService,
// } from "./cart";

// // ADD ITEM CONTROLLER
// const addProductController = async (req: Request, res: Response) => {
//   try {
//     const body = req.body;
//     const savedProduct = await addProductService(body);
//     return res
//       .status(201)
//       .json({ msg: "item create successfully", data: savedProduct });
//   } catch (err: any) {
//     console.error("Error creating product:", err);
//     res.status(500).json({ msg: err.message, data: [] });
//   }
// };

// // GET SINGLE ITEM CONTROLLER
// const getSingleProductController = async (req: Request, res: Response) => {
//   try {
//     const id = req.params.id;
//     const product = await getSingleProductService(id);
//     return res
//       .status(200)
//       .json({ msg: "product fetch successfully", data: product });
//   } catch (err: any) {
//     return res.status(500).json({ msg: err.message, data: [] });
//   }
// };

// // LIMIT RESULT CONTROLLLER
// const limitResultController = async (req: Request, res: Response) => {
//   try {
//     const limit = parseInt(req.params.limit);
//     const result = await limitResultService(limit);
//     return res
//       .status(200)
//       .json({ msg: "products fetch successfully", data: result });
//   } catch (err: any) {
//     return res.status(500).json({ msg: err.message, data: [] });
//   }
// };

// // SORTING CONTROLLER
// const sortController = async (req: Request, res: Response) => {
//   try {
//     const sortOrder = req.params.sortVal;
//     const sortedResults = await sortService(sortOrder);
//     return res
//       .status(200)
//       .json({ msg: "sorted result successfully", data: [sortedResults] });
//   } catch (err: any) {
//     return res.status(500).json({ msg: err.message, data: [] });
//   }
// };

// // GET ALL CATEGORIES
// const getAllCategoryController = async (req: Request, res: Response) => {
//   try {
//     const categoryList = await getAllCategoryService();
//     return res
//       .status(200)
//       .json({ msg: "fetch all categories successfully", data: [categoryList] });
//   } catch (err: any) {
//     return res.status(500).json({ msg: err.message, data: [] });
//   }
// };

// // GET ITEMS BY CATEGORIES CONTROLLER
// const getProductByCategoryController = async (req: Request, res: Response) => {
//   try {
//     const category = req.params.cat;
//     const result = await getProductByCategoryService(category);
//     return res.status(200).json({
//       msg: "fetch all result by category successfully",
//       data: [result],
//     });
//   } catch (err: any) {
//     return res.status(500).json({ msg: err.message, data: [] });
//   }
// };

// // UPDATE ITEMS CONTROLLER
// const updateItemController = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const { body } = req;
//     const updatedItem = await updateProductService(id, body);
//     if (updatedItem) {
//       return res
//         .status(201)
//         .json({ msg: "item create successfully", data: updatedItem });
//     }
//   } catch (err: any) {
//     return res.status(500).json({ msg: err.message, data: [] });
//   }
// };

// // DELETE ITEMS CONTROLLER
// const deleteProductController = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;

//     const deletedItem = await deleteProductService(id);

//     return res.status(200).json({
//       msg: "delete product successfully",
//       data: [deletedItem],
//     });
//   } catch (err: any) {
//     return res.status(500).json({ msg: err.message, data: [] });
//   }
// };

// export {
//   addProductController,
//   getSingleProductController,
//   limitResultController,
//   sortController,
//   getAllCategoryController,
//   getProductByCategoryController,
//   updateItemController,
//   deleteProductController,
// };
