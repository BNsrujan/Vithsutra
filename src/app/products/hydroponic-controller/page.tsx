import ProductPage from '@/components/productstemplate/ProductPage';
import { hydroponicProduct, biometricProduct, rfidProduct } from '@/data/prodcuts/prodcut';

export default function Page() {
  return <ProductPage 
    product={hydroponicProduct} 
    otherProducts={[biometricProduct, rfidProduct]}
  />;
} 