import ProductPage from '@/components/ProductsTemplate/ProductPage';
import { hydroponicProduct, biometricProduct, rfidProduct } from '@/data/products';

export default function HydroponicControllerPage() {
  return <ProductPage 
    product={hydroponicProduct} 
    otherProducts={[biometricProduct, rfidProduct]}
  />;
} 