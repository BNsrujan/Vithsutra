// Environment configuration
export const config = {
  app: {
    name: process.env.NEXT_PUBLIC_APP_NAME || 'Phase 2',
    version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
    environment: process.env.NODE_ENV || 'development',
  },
  
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api',
    timeout: parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT || '10000'),
  },
  
  database: {
    url: process.env.DATABASE_URL || '',
    maxConnections: parseInt(process.env.DATABASE_MAX_CONNECTIONS || '10'),
  },
  
  email: {
    smtpHost: process.env.SMTP_HOST || '',
    smtpPort: parseInt(process.env.SMTP_PORT || '587'),
    smtpUser: process.env.SMTP_USER || '',
    smtpPassword: process.env.SMTP_PASSWORD || '',
    fromEmail: process.env.FROM_EMAIL || 'noreply@company.com',
  },
  
  storage: {
    provider: process.env.STORAGE_PROVIDER || 'local',
    awsRegion: process.env.AWS_REGION || 'us-east-1',
    awsBucket: process.env.AWS_BUCKET || '',
    awsAccessKey: process.env.AWS_ACCESS_KEY_ID || '',
    awsSecretKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
  
  features: {
    enableBlog: process.env.NEXT_PUBLIC_ENABLE_BLOG === 'true',
    enableTraining: process.env.NEXT_PUBLIC_ENABLE_TRAINING === 'true',
    enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
  },
  
  security: {
    jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '24h',
    bcryptRounds: parseInt(process.env.BCRYPT_ROUNDS || '12'),
  },
  
  monitoring: {
    sentryDsn: process.env.SENTRY_DSN || '',
    logLevel: process.env.LOG_LEVEL || 'info',
  }
};

export const isDevelopment = config.app.environment === 'development';
export const isProduction = config.app.environment === 'production';
export const isTest = config.app.environment === 'test';