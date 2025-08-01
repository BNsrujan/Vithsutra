import ProductPage from '@/presentation/components/productstemplate/product.page';
import { hydroponicProduct, biometricProduct, rfidProduct } from '@/data/prodcuts-data/prodcut';

export default function Page() {
  return <ProductPage 
    product={hydroponicProduct} 
    otherProducts={[biometricProduct, rfidProduct]}
  />;
} 