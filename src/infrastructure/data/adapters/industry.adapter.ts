import { Industry } from '../../../core/entities/industry';
import { industriesData } from '../industries-home/industries.data';

/**
 * Adapter to transform static industries data to Industry entities
 */
export class IndustryDataAdapter {
  static transformToEntity(data: typeof industriesData[0]): Industry {
    return {
      id: data.id,
      name: data.title,
      description: data.description,
      slug: data.slug,
      imageUrl: data.image,
      applications: [], // Will be populated from detailed data files
      challenges: [], // Will be populated from detailed data files
      solutions: [], // Will be populated from detailed data files
      isActive: data.featured || true,
    };
  }

  static transformAllToEntities(): Industry[] {
    return industriesData.map(this.transformToEntity);
  }
}