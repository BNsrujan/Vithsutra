// Simple test script to verify API endpoints
const baseUrl = 'http://localhost:3001/api';

const testEndpoints = [
  '/health',
  '/docs',
  '/stats',
  '/blog',
  '/products',
  '/faq',
  '/team',
  '/industries'
];

async function testAPI() {
  console.log('🧪 Testing API endpoints...\n');
  
  for (const endpoint of testEndpoints) {
    try {
      const response = await fetch(`${baseUrl}${endpoint}`);
      const status = response.status;
      const statusText = response.ok ? '✅' : '❌';
      
      console.log(`${statusText} ${endpoint} - Status: ${status}`);
      
      if (response.ok) {
        const data = await response.json();
        if (endpoint === '/health') {
          console.log(`   Status: ${data.status}, Uptime: ${Math.round(data.uptime)}s`);
        } else if (endpoint === '/stats') {
          console.log(`   Blog posts: ${data.stats?.blog?.totalPosts || 0}, Products: ${data.stats?.products?.totalProducts || 0}`);
        } else if (data.total !== undefined) {
          console.log(`   Total items: ${data.total}`);
        }
      }
    } catch (error) {
      console.log(`❌ ${endpoint} - Error: ${error.message}`);
    }
  }
  
  console.log('\n🎉 API testing completed!');
}

// Run the test
testAPI().catch(console.error);