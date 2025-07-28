import ProductPage from '@/presentation/components/productstemplate/ProductPage';
import { rfidProduct ,biometricProduct,hydroponicProduct} from '@/data/prodcuts-data/prodcut';

export default function Page() {
  return <ProductPage 
    product={biometricProduct} 
    otherProducts={[rfidProduct, hydroponicProduct]}
  />;
} 