import ProductPage from '@/components/ProductsTemplate/ProductPage';
import { rfidProduct, biometricProduct, hydroponicProduct } from '@/data/prodcuts/prodcut';

export default function Page() {
  return (
    <ProductPage
      product={rfidProduct}
      otherProducts={[biometricProduct, hydroponicProduct]}
    />
  );
} 