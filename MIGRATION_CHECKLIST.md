# Data Migration Checklist

## ✅ Completed

- [x] Navigation data (navbar, footer)
- [x] Content data (FAQ, case studies)
- [x] Industries data
- [x] Training data (robotics workshop)
- [x] Created proper index files
- [x] Updated repository imports

## 📝 Remaining Tasks

### 1. Move Product Data Files

```bash
# Create products directory
mkdir -p src/infrastructure/data/products

# Move product files
mv src/data/prodcuts-data/prodcut.ts src/infrastructure/data/products/products.data.ts
mv src/data/prodcuts-data/biometric.product.ts src/infrastructure/data/products/biometric.data.ts
mv src/data/prodcuts-data/rfid.product.ts src/infrastructure/data/products/rfid.data.ts
mv src/data/prodcuts-data/hydroponic.product.ts src/infrastructure/data/products/hydroponic.data.ts

# Create index file
echo "export * from './products.data';
export * from './biometric.data';
export * from './rfid.data';
export * from './hydroponic.data';" > src/infrastructure/data/products/index.ts
```

### 2. Move Industry Detail Files

```bash
# Move detailed industry data
mv src/data/industries-data/healthcaremedical.industries.ts src/infrastructure/data/industries/healthcare-detail.data.ts
mv src/data/industries-data/educationresearch.industries.ts src/infrastructure/data/industries/education-detail.data.ts
mv src/data/industries-data/foodprocessing.industries.ts src/infrastructure/data/industries/food-processing-detail.data.ts
mv src/data/industries-data/farmingagriculture.industries.ts src/infrastructure/data/industries/agriculture-detail.data.ts
```

### 3. Move Training Domain Files

```bash
# Move training domain files
mv src/data/domain/robotics_page.data.ts src/infrastructure/data/training/robotics-page.data.ts
mv src/data/domain/iiot_pages.data.ts src/infrastructure/data/training/iiot-page.data.ts
mv src/data/domain/training_page.data.tsx src/infrastructure/data/training/training-page.data.tsx
```

### 4. Update Import Statements

After moving files, update all imports throughout your codebase:

**Old imports:**

```typescript
import { menuData } from "@/data/navbar";
import { faqData } from "@/data/faq";
import { industries } from "@/data/industries";
import { caseStudies } from "@/data/casestudies";
import { roboticsWorkshop } from "@/data/roboticsworkshop";
```

**New imports:**

```typescript
import { navbarData } from "@/infrastructure/data/navigation";
import { faqData } from "@/infrastructure/data/content";
import { industriesData } from "@/infrastructure/data/industries";
import { caseStudiesData } from "@/infrastructure/data/content";
import { roboticsWorkshopData } from "@/infrastructure/data/training";
```

### 5. Update Repository Files

Update these repository files to use new data locations:

- [ ] `src/infrastructure/repositories/MockProductRepository.ts`
- [ ] `src/infrastructure/repositories/MockTeamRepository.ts`
- [ ] Update any components using old data imports

### 6. Clean Up Old Data Directory

After confirming everything works:

```bash
# Remove old data directory
rm -rf src/data/
```

## 🎯 Benefits of This Migration

1. **Clean Architecture Compliance**: Data is now properly organized in the infrastructure layer
2. **Better Separation of Concerns**: Static data is separated from business logic
3. **Easier Testing**: Data can be easily mocked or replaced for testing
4. **Better Maintainability**: Clear structure makes it easy to find and update data
5. **Scalability**: Easy to add new data types following the same pattern

## 🚀 Next Steps After Migration

1. **Create Data Adapters**: Transform static data to match entity interfaces
2. **Add Data Validation**: Ensure data integrity with TypeScript interfaces
3. **Implement Caching**: Add caching layer for better performance
4. **Add Data Versioning**: Track changes to static data over time
