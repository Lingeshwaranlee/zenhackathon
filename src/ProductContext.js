import React, { useState } from "react";

const ProductContext = React.createContext();

export default ProductContext;

const INITIAL_PRODUCTS = [
  {
    productName: "I20 Sportz",
    productCompany: "Hyundai Motor Company",
    type: "Car",
    availableFrom: "1967-12-29",
    price: "918000",
  },
  {
    productName: "Altroz",
    productCompany: "Tata Motors",
    type: "Car",
    availableFrom: "1945-03-15",
    price: "956000",
  },
  {
    productName: "Kia Carens",
    productCompany: "Kia Motors",
    type: "Car",
    availableFrom: "1944-12-11",
    price: "1195000",
  },
  {
    productName: "Polo GT",
    productCompany: "Volkswagen",
    type: "Car",
    availableFrom: "1937-02-15",
    price: "1800000",
  },
  {
    productName: "Harrier",
    productCompany: "Tata Motors",
    type: "Car",
    availableFrom: "1945-03-15",
    price: "1850000",
  }
];
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};