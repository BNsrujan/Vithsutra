import ProductPage from '@/components/productstemplate/ProductPage';
import { rfidProduct ,biometricProduct,hydroponicProduct} from '@/data/prodcuts/prodcut';

export default function Page() {
  return <ProductPage 
    product={biometricProduct} 
    otherProducts={[rfidProduct, hydroponicProduct]}
  />;
} 