import ProductPage from '@/presentation/pages/products/product.page';
import { rfidProduct ,biometricProduct,hydroponicProduct} from '@/infrastructure/data/prodcuts-data/prodcut';

export default function Page() {
  return <ProductPage 
    product={biometricProduct} 
    otherProducts={[rfidProduct, hydroponicProduct]}
  />;
} 