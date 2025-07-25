// Common types used across the application

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface SearchParams {
  query?: string;
  category?: string;
  tags?: string[];
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}

export type EntityId = string;

export interface Repository<T> {
  findAll(): Promise<T[]>;
  findById(id: EntityId): Promise<T | null>;
  create(entity: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): Promise<T>;
  update(id: EntityId, entity: Partial<T>): Promise<T>;
  delete(id: EntityId): Promise<void>;
}

export interface UseCase<TInput, TOutput> {
  execute(input: TInput): Promise<TOutput>;
}

export interface ValidationError {
  field: string;
  message: string;
}

export class DomainError extends Error {
  constructor(message: string, public code?: string) {
    super(message);
    this.name = 'DomainError';
  }
}

export class ValidationErrors extends Error {
  constructor(public errors: ValidationError[]) {
    super('Validation failed');
    this.name = 'ValidationErrors';
  }
}