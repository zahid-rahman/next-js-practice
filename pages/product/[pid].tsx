import React, { useEffect } from 'react'
import { useRouter } from 'next/router';

const ProductDetails = () => {
  const router = useRouter();
  const { pid } = router.query;
  
  useEffect(() => {
    if (router.isReady) {
      // Code using query
      console.log(router.query);
    }
  }, [router.isReady]);

  return (
    <div>{pid}</div>
  )
}

export default ProductDetails;