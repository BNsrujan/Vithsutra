import ProductPage from '@/components/ProductsTemplate/ProductPage';
import { rfidProduct, biometricProduct, hydroponicProduct } from '@/data/products';

export default function RFIDTelephonePage() {
  return (
    <ProductPage
      product={rfidProduct}
      otherProducts={[biometricProduct, hydroponicProduct]}
    />
  );
} 