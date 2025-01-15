'use client'

import { API_ENDPOINTS } from '@/constants/api-endpoints';
import { URL } from './../constants/url';
import { useEffect, useState } from "react"
import { IProduct } from '@/types/product.interface';

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const getProducts = async() => {
      setLoading(true); 
      try {
        const response = await fetch(`${URL}${API_ENDPOINTS.PRODUCTS}`);
        if(!response.ok) {
          throw new Error("Failed to fetch products" + response.status);
        }
        const data = await response.json();
        setProducts(data);
      } catch(error) {
        if(error instanceof Error) {
          setError(error.message)
        } else {
          setError("Unknown error occurred")
        }
      } finally {
        setLoading(false);
      }
    }
    getProducts(); 
  }, []);

  return { products, loading, error }
}