import ProductPage from '@/presentation/pages/hydrophonic/hydrophonic.page';
import { hydroponicProduct, biometricProduct, rfidProduct } from '@/infrastructure/data/prodcuts-data/prodcut';

export default function Page() {
  return <ProductPage 
    product={hydroponicProduct} 
    otherProducts={[biometricProduct,rfidProduct]}
  />;
} 