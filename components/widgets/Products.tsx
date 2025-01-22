'use client'

import React, { useEffect, useState } from 'react';
import Product from '../ui/Product';
import { ProductType } from '@/types/product';
import Categories from '../ui/Cateogories';

const Products = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products');
      const data: ProductType[] = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-full flex flex-col gap-4 md:px-10 px-4 over">
      <div className="flex items-center w-full justify-between text-primarycolor">
        <div className="text-[24px] ">New ({products.length})</div>
      </div>
      <div className="flex">
        <div className="w-[20%] md:flex hidden flex-col gap-6 pr-4">
          <div className="text-2xl">Categories</div>
          <div className="border-t-[0.5px] border-zinc-600 pt-4">
            <Categories />
          </div>
        </div>
        <div className="md:w-[80%] w-full grid grid-cols-1 md:grid-cols-3 gap-2">
          {products.map((item, index) => (
            <Product
              category={item.category}
              image={item.imageUrl as any}
              price={item.price}
              title={item.productName}
              id={item._id}
              status={item.status}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
