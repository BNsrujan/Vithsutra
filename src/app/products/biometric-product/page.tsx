import ProductPage from '@/presentation/pages/products/product.page';
import { biometricProduct,hydroponicProduct, rfidProduct} from '@/infrastructure/data/prodcuts-data/prodcut';

export default function Page() {
  return <ProductPage 
    product={biometricProduct} 
    otherProducts={[ hydroponicProduct,rfidProduct]}
  />;
} 