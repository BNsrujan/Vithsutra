import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Industry } from '../../core/entities/Industry';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

interface IndustryCardProps {
  industry: Industry;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({ industry }) => {
  return (
    <Card className="h-full flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={industry.imageUrl}
          alt={industry.name}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      
      <CardHeader>
        <CardTitle>{industry.name}</CardTitle>
        <CardDescription className="line-clamp-3">
          {industry.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-sm text-gray-700 mb-2">Key Applications:</h4>
            <div className="flex flex-wrap gap-1">
              {industry.applications.slice(0, 3).map((app, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                >
                  {app}
                </span>
              ))}
              {industry.applications.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  +{industry.applications.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <Link href={`/industries/${industry.slug}`}>
            <Button className="w-full">
              Explore Solutions
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};