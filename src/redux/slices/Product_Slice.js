import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Product_Services from "../services/Product_Services";
import { toast } from "react-toastify";

// create data ------

export const createProduct = createAsyncThunk(
  "post/createProduct",
  async (formData, thunkAPI) => {
    try {
      await Product_Services.createProduct(formData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// get all data ------

export const getAllProducts = createAsyncThunk(
  "get/getAllProducts",
  async (_, thunkAPI) => {
    try {
      return await Product_Services.getAllProducts();
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) ||  error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// Update data ------

export const updateProduct = createAsyncThunk("put/updatePorduct", async ({formData,id}, thunkAPI) => {
    try {
      console.log("slice",id)
      return await Product_Services.updateProduct({formData, id})
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) ||  error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const getLocalProductsData = ()=>{
  let localStorageData = localStorage.getItem("allproducts")
  if(localStorageData === ""){
    return [];
  }else{
    return JSON.parse(localStorageData)
  }
}
const getLocalCartItems = ()=>{
  let localStorageData = localStorage.getItem("cartItems")
  if(localStorageData === ""){
    return [];
  }else{
    return JSON.parse(localStorageData)
  }
}

const Product_Slice = createSlice({
  name: "product",
  initialState: {
    isLoggedIn: false,
    // AllProducts:[],
    AllProducts:getLocalProductsData(),
    products:[],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    cartItems: getLocalCartItems(),
    totalCount: 0,
    totalPrice: 0,
    grid:true,

  },
  reducers: {
    addItem: (state, action) => {
      // add to Cart---------------

      // state.cartItems = [...state.cartItems, action.payload]
      // based on conditon if you click two time than increase quantity (if you not qunty or not)
      const indexNum = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (indexNum >= 0) {
        state.cartItems[indexNum].qunty += 1;
      } else {
        state.cartItems = [...state.cartItems, { ...action.payload, qunty: 1 }];
      }

      // delete Item---------------
    },

    // remove All carts---------------

    deleteItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
    },

    // remove All carts---------------

    removeAll: (state, action) => {
      state.cartItems = [];
    },

    // decrement Value---------------

    decrementItem: (state, action) => {
      const indexNum = state.cartItems.findIndex(
        (item) => item._id === action.payload
      );
      if (indexNum >= 0) {
        state.cartItems[indexNum].qunty -= 1;
      } else {
        state.cartItems = [...state.cartItems, { ...action.payload, qunty: 1 }];
      }
    },

    // count All Quntity---------------

    totalQunty: (state, action) => {
      let total = 0;
      state.cartItems.map((item) => {
        total = total + item.qunty;
      });
      state.totalCount = total;
    },

    // Total Price ---------------

    totalAmount: (state, action) => {
      let total = 0;
      state.cartItems.map((item) => {
        total += item.price + total;
      });
      state.totalPrice = total;
    },

    // search product ----------------

    searchProduct: (state, action) => {
        const keys = ["title", "brand", "desc"];
          state.products = state.AllProducts?.filter((cur) =>
              keys?.some((key) =>
                cur[key]?.toLowerCase().includes(action.payload?.toLowerCase())
              ));   
  },

  // sort product ----------------

    sortingProduct: (state, action) => {
      state.products = state.AllProducts?.sort((a, b) => {
  
        if (action.payload === "lowest") {
          return a.price - b.price;
        }

        if (action.payload === "highest") {
          return b.price - a.price;
        }

        if (action.payload === "assending") {
          return a.title.localeCompare(b.title);
        }

        if (action.payload === "dessending") {
          return b.title.localeCompare(a.title);
        } });
  },

     // filter category ----------------

     filterCategory: (state, action) => {
      state.products = state.AllProducts?.filter((item)=>{
        if(action.payload === "laptop"){
          return item.category === action.payload
        }
        if(action.payload === "phone"){
          return item.category === action.payload
        }
        if(action.payload === "Samsung"){
          return item.brand === action.payload
        }
        if(action.payload === "Oppo"){
          return item.brand === action.payload
        }
        if(action.payload === "Nokia"){
          return item.brand === action.payload
        }
        if(action.payload === "Dell"){
          return item.brand === action.payload
        }
        if(action.payload === "Acer"){
          return item.brand === action.payload
        }
        if(action.payload === "Hp"){
          return item.brand === action.payload
        }
        if(action.payload === "20000"){
          return item.price < action.payload
        }
        if(action.payload === "20000-50000"){
          return item.price > 20000 && item.price < 50000
        }
        if(action.payload === "50000"){
          return item.price > action.payload
        }
        if(action.payload === "white"){
          return item.color === action.payload
        }
        if(action.payload === "black"){
          return item.color === action.payload
        }
        if(action.payload === "blue"){
          return item.color === action.payload
        }
        else{
          return state.AllProducts
        }
      })
},
  gridView :(state, action)=>{
    state.grid = action.payload;
  }

  },

  extraReducers: (builder) => {
    builder

      // create Data --------------------

      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.AllProducts = action.payload;
        toast.success("create product successfully..");
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

      // get All Data --------------------

      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.AllProducts = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

      // update Data --------------------

      .addCase(updateProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.AllProducts = action.payload;
        toast.success("update product successfully..");
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      });
  },
});

export const {
  addItem,
  totalQunty,
  totalAmount,
  searchProduct,
  deleteItem,
  removeAll,
  decrementItem,
  sortingProduct,
  filterCategory,
  gridView,
} = Product_Slice.actions;

export default Product_Slice.reducer;
