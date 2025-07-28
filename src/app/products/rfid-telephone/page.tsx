import ProductPage from '@/presentation/components/productstemplate/ProductPage';
import { rfidProduct, biometricProduct, hydroponicProduct } from '@/data/prodcuts-data/prodcut';

export default function Page() {
  return (
    <ProductPage
      product={rfidProduct}
      otherProducts={[biometricProduct, hydroponicProduct]}
    />
  );
} 