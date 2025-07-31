# TravelBook Backend API

A Node.js Express backend API for the TravelBook application, providing endpoints for trips, hotels, and attractions.

## Features

- **RESTful API** with comprehensive endpoints
- **Search functionality** across all data types
- **Error handling** with proper HTTP status codes
- **Security middleware** (Helmet, CORS)
- **Request logging** with Morgan
- **Environment configuration** support

## API Endpoints

### Health Check

- `GET /health` - Check API status

### Trips

- `GET /api/trips` - Get all trips
- `GET /api/trips/:id` - Get trip by ID
- `GET /api/trips/city/:city` - Get trips by city
- `GET /api/trips/category/:category` - Get trips by category
- `GET /api/trips/price/:min/:max` - Get trips by price range
- `GET /api/trips/search/:query` - Search trips

### Hotels

- `GET /api/hotels` - Get all hotels
- `GET /api/hotels/:id` - Get hotel by ID
- `GET /api/hotels/city/:city` - Get hotels by city
- `GET /api/hotels/price/:min/:max` - Get hotels by price range
- `GET /api/hotels/rating/:min` - Get hotels by minimum rating
- `GET /api/hotels/amenities/:amenity` - Get hotels by amenities
- `GET /api/hotels/search/:query` - Search hotels

### Attractions

- `GET /api/attractions` - Get all attractions
- `GET /api/attractions/:id` - Get attraction by ID
- `GET /api/attractions/city/:city` - Get attractions by city
- `GET /api/attractions/category/:category` - Get attractions by category
- `GET /api/attractions/search/:query` - Search attractions

### Global Search

- `GET /api/search/:query` - Search across all data types
- `GET /api/search/city/:city` - Search by city across all data types

## Installation

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file (copy from `env.example`):

```bash
cp env.example .env
```

4. Start the development server:

```bash
npm run dev
```

## Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

## Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
PORT=5000
NODE_ENV=development
```

## API Response Format

All API responses follow a consistent format:

### Success Response

```json
{
  "success": true,
  "data": [...],
  "count": 6
}
```

### Error Response

```json
{
  "success": false,
  "message": "Error message",
  "error": "Detailed error information"
}
```

## Data Structure

### Trip

```json
{
  "id": "1",
  "title": "Magical Manali Adventure",
  "city": "Manali",
  "duration": "5 Days 4 Nights",
  "price": 15999,
  "description": "Experience the breathtaking beauty...",
  "image": "https://images.pexels.com/...",
  "rating": 4.5,
  "category": "Adventure"
}
```

### Hotel

```json
{
  "id": "1",
  "name": "Snow Valley Resort",
  "city": "Manali",
  "pricePerNight": 3500,
  "rating": 4.4,
  "image": "https://images.pexels.com/...",
  "description": "Luxury resort with mountain views...",
  "amenities": ["Spa", "Restaurant", "WiFi", "Parking"],
  "location": "Old Manali"
}
```

### Attraction

```json
{
  "id": "1",
  "name": "Rohtang Pass",
  "city": "Manali",
  "image": "https://images.pexels.com/...",
  "description": "High mountain pass offering spectacular views...",
  "location": "51 km from Manali",
  "category": "Adventure",
  "timings": "6:00 AM - 6:00 PM"
}
```

## Development

The backend is structured with:

- **Routes**: API endpoints organized by resource type
- **Middleware**: Error handling and security
- **Data**: Mock data (can be replaced with database)
- **Configuration**: Environment-based settings

## Future Enhancements

- Database integration (MongoDB/PostgreSQL)
- User authentication and authorization
- Booking system
- Payment integration
- Real-time notifications
- Image upload functionality
- Rate limiting
- API documentation with Swagger

