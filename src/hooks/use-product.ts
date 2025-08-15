'use client'

import { API_ENDPOINTS } from "@/constants/api-endpoints";
import { URL } from "@/constants/url";
import { IProduct } from "@/types/product.interface";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export function useProduct() {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const { slug } = useParams<{ slug: string }>();
  
  useEffect(() => {
    async function getProduct() {
      setLoading(true);
      setError('');
      
      try {
        const response = await fetch(`${URL}${API_ENDPOINTS.PRODUCTS}/${slug}`)
      if(!response.ok) {
        throw new Error("Failed to fetch product" + response.status);
      }
      const data = await response.json();
      setProduct(data);
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
  if(slug) {
    getProduct();
  }
}, [slug]);
  return { product, loading, error }
}