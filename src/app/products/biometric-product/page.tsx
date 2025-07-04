import ProductPage from '@/pages/ProductsTemplate/ProductPage';
import { biometricProduct, rfidProduct, hydroponicProduct } from '@/data/products';

export default function BiometricProductPage() {
  return <ProductPage 
    product={biometricProduct} 
    otherProducts={[rfidProduct, hydroponicProduct]}
  />;
} 