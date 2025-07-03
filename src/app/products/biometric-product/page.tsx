import ProductPage from '@/components/products/ProductPage';
import { biometricProduct, rfidProduct, hydroponicProduct } from '@/data/products';

export default function BiometricProductPage() {
  return <ProductPage 
    product={biometricProduct} 
    otherProducts={[rfidProduct, hydroponicProduct]}
  />;
} 