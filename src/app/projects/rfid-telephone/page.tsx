import ProductPage from '@/components/products/ProductPage';
import { rfidProduct, biometricProduct, hydroponicProduct } from '@/data/products';

export default function RFIDTelephonePage() {
  return (
    <ProductPage
      product={rfidProduct}
      otherProducts={[biometricProduct, hydroponicProduct]}
    />
  );
} 