import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/core/entities/product';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/presentation/components/ui/card';
import { Button } from '@/presentation/components/ui/button';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="h-full flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      
      <CardHeader>
        <CardTitle className="line-clamp-2">{product.name}</CardTitle>
        <CardDescription className="line-clamp-3">
          {product.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <div className="flex flex-wrap gap-1">
            {product.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
              >
                {feature}
              </span>
            ))}
            {product.features.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                +{product.features.length - 3} more
              </span>
            )}
          </div>
          
          {product.price && (
            <div className="text-lg font-semibold text-green-600">
              ${product.price.toLocaleString()}
            </div>
          )}
        </div>
        
        <div className="mt-4 space-y-2">
          <Link href={`/products/${product.category}/${product.id}`}>
            <Button className="w-full">
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};