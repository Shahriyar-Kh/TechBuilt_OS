# TechBuilt OS Frontend

Complete frontend documentation for backend integration and dynamic content delivery.

This README is written for both frontend and backend developers so you can move from static demo data to production APIs without guesswork.

## 1) Overview

This frontend is a React + TypeScript + Vite application for TechBuilt OS (an education platform).

Current status:
- UI is complete and production-buildable.
- Most content (courses, specializations, testimonials, blog, FAQs, roadmaps) is currently loaded from static arrays in `src/lib/data.ts`.
- `react-query` is already installed and wrapped at app root, so the app is ready for API-based dynamic data.

Primary business entities:
- Course
- Specialization
- Blog Post
- Testimonial
- FAQ
- Roadmap
- Lead/Application (from forms)

## 2) Tech Stack

- React 18
- TypeScript
- Vite 5
- React Router v6
- @tanstack/react-query v5
- TailwindCSS
- shadcn/ui + Radix UI
- zod (form validation)
- sonner (toast notifications)

## 3) Commands

Run from the `frontend/` directory.

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
npm run test
```

## 4) Current App Routes

Defined in `src/App.tsx`:

- `/`
- `/about`
- `/courses`
- `/courses/:slug`
- `/specializations`
- `/specializations/:slug`
- `/roadmaps`
- `/pricing`
- `/testimonials`
- `/faq`
- `/blog`
- `/contact`
- `/apply`
- `/thank-you`
- `/privacy`
- `/terms`
- `*` (404)

## 5) Current Project Structure

```text
frontend/
	public/
	src/
		assets/
			blog-1.jpg
			blog-2.jpg
			blog-3.jpg
			course-backend.jpg
			course-frontend.jpg
			course-fullstack.jpg
			course-python.jpg
			cta-bg.jpg
			hero-2.jpg
			hero-3.jpg
			hero-4.jpg
			hero-5.jpg
			hero-main.jpg
			testimonial-1.jpg
			testimonial-2.jpg
			testimonial-3.jpg
		components/
			CourseCard.tsx
			Footer.tsx
			HeroCarousel.tsx
			Layout.tsx
			Navbar.tsx
			NavLink.tsx
			PageHero.tsx
			Reveal.tsx
			SEO.tsx
			SpecializationCard.tsx
			ui/
				...shadcn ui components
		hooks/
			use-mobile.tsx
			use-toast.ts
		lib/
			data.ts            # Static content source (current)
			utils.ts
		pages/
			About.tsx
			Apply.tsx
			Blog.tsx
			Contact.tsx
			CourseDetail.tsx
			Courses.tsx
			FAQ.tsx
			Home.tsx
			NotFound.tsx
			Pricing.tsx
			Privacy.tsx
			Roadmaps.tsx
			SpecializationDetail.tsx
			Specializations.tsx
			Terms.tsx
			Testimonials.tsx
			ThankYou.tsx
		test/
			example.test.ts
			setup.ts
		App.tsx
		main.tsx
		index.css
	package.json
	vite.config.ts
	tailwind.config.ts
	tsconfig*.json
```

## 6) Where Dynamic Data Is Needed

Current static source:
- `src/lib/data.ts`

Used by these pages/components:
- `src/pages/Home.tsx`
- `src/pages/Courses.tsx`
- `src/pages/CourseDetail.tsx`
- `src/pages/Specializations.tsx`
- `src/pages/SpecializationDetail.tsx`
- `src/pages/Blog.tsx`
- `src/pages/FAQ.tsx` (page-specific list currently hardcoded there)
- `src/pages/Roadmaps.tsx` (roadmaps from data)
- `src/pages/Apply.tsx` (course/specialization options)
- `src/components/CourseCard.tsx`
- `src/components/SpecializationCard.tsx`

Form pages that should call backend:
- `src/pages/Apply.tsx`
- `src/pages/Contact.tsx`

## 7) Recommended Frontend Data Layer (Add These Folders)

Create this structure:

```text
src/
	api/
		client.ts
		endpoints.ts
		errors.ts
	features/
		courses/
			api.ts
			hooks.ts
			types.ts
		specializations/
			api.ts
			hooks.ts
			types.ts
		blog/
			api.ts
			hooks.ts
			types.ts
		testimonials/
			api.ts
			hooks.ts
			types.ts
		faqs/
			api.ts
			hooks.ts
			types.ts
		roadmaps/
			api.ts
			hooks.ts
			types.ts
		leads/
			api.ts
			types.ts
```

Why this matters:
- Keeps API concerns isolated by domain.
- Makes React Query hooks reusable across pages.
- Makes backend contract changes easier to track.

## 8) Environment Variables

Create `.env` and `.env.production` in `frontend/`.

```env
VITE_API_BASE_URL=http://localhost:8000/api/v1
VITE_SITE_URL=http://localhost:8080
```

Rules:
- All frontend env vars must start with `VITE_`.
- Do not hardcode backend URLs in components.

## 9) API Contract (Backend Requirements)

Base URL example:
- `https://api.techbuiltos.com/api/v1`

General response format (recommended):

```json
{
	"data": {},
	"meta": {
		"page": 1,
		"page_size": 20,
		"total": 100
	},
	"error": null
}
```

General error format (recommended):

```json
{
	"data": null,
	"meta": null,
	"error": {
		"code": "VALIDATION_ERROR",
		"message": "Invalid input",
		"fields": {
			"email": ["Enter a valid email address"]
		}
	}
}
```

### 9.1 Courses API

Endpoints:
- `GET /courses`
- `GET /courses/:slug`

`GET /courses` query params:
- `level` = `Beginner | Intermediate | Advanced`
- `search` = full-text query for title/tagline
- `page`
- `page_size`
- `ordering` (e.g. `price`, `-created_at`)

Course payload shape:

```json
{
	"id": 1,
	"slug": "django",
	"title": "Django Backend",
	"tagline": "Scalable web backends",
	"level": "Advanced",
	"duration": "10 weeks",
	"lessons": 72,
	"price": "$199",
	"description": "Build production-ready APIs...",
	"outcomes": ["MVT architecture", "ORM & migrations"],
	"modules": [
		{
			"title": "Django Core",
			"lessons": ["Models & ORM", "Views & templates"]
		}
	],
	"icon": "DJ",
	"color": "from-green-600 to-emerald-700",
	"thumbnail_url": "https://cdn.example.com/courses/django.jpg",
	"is_published": true,
	"created_at": "2026-04-01T10:00:00Z",
	"updated_at": "2026-04-20T11:00:00Z"
}
```

### 9.2 Specializations API

Endpoints:
- `GET /specializations`
- `GET /specializations/:slug`

Specialization payload shape:

```json
{
	"id": 10,
	"slug": "backend-web-development",
	"title": "Backend Web Development",
	"tagline": "Engineer scalable backends",
	"duration": "4 months",
	"courses_count": 3,
	"price": "$449",
	"description": "Master Python, Django and REST API design.",
	"image_url": "https://cdn.example.com/specs/backend.jpg",
	"outcomes": ["Design & build REST APIs", "Authentication & security"],
	"curriculum": ["Python Programming", "Django Backend"],
	"career": ["Backend Developer", "API Engineer"],
	"course_slugs": ["python", "django"],
	"is_published": true
}
```

### 9.3 Blog API

Endpoints:
- `GET /blog-posts`
- `GET /blog-posts/:slug`

Fields:
- `slug`, `title`, `excerpt`, `content`, `cover_image_url`, `category`, `published_at`, `read_time`

### 9.4 Testimonials API

Endpoint:
Fields:
- `name`, `role`, `text`, `image_url`, `rating`, `is_featured`

### 9.5 FAQs API

Endpoint:
- `GET /faqs`

Fields:
- `question`, `answer`, `sort_order`, `is_published`

### 9.6 Roadmaps API

Endpoint:
- `GET /roadmaps`

Shape:

```json
{
	"title": "Backend Developer",
	"icon": "DJ",
	"steps": [
		{
			"title": "Python Foundations",
			"weeks": "Weeks 1-8",
			"desc": "Syntax, data structures, OOP, file handling."
		}
	]
}
```

### 9.7 Lead/Application APIs (Critical for Dynamic Workflow)

`Apply` page should call:
- `POST /applications`

Request:

```json
{
	"name": "Jane Doe",
	"email": "jane@example.com",
	"phone": "+14155550123",
	"selection_type": "specialization",
	"selection_slug": "backend-web-development",
	"experience": "Some basics",
	"goal": "Land my first backend role in 6 months"
}
```

`Contact` page should call:
- `POST /contact-messages`

Request:

```json
{
	"name": "Jane Doe",
	"email": "jane@example.com",
	"subject": "Pricing question",
	"message": "Can I pay in installments?"
}
```

Success response example:

```json
{
	"data": {
		"id": "lead_12345",
		"status": "received"
	},
	"meta": null,
	"error": null
}
```

## 10) TypeScript Types for Frontend (Recommended)

Use these interfaces in feature modules.

```ts
export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export interface CourseModule {
	title: string;
	lessons: string[];
}

export interface Course {
	id: number;
	slug: string;
	title: string;
	tagline: string;
	level: CourseLevel;
	duration: string;
	lessons: number;
	price: string;
	description: string;
	outcomes: string[];
	modules: CourseModule[];
	icon: string;
	color: string;
	thumbnail_url?: string;
	is_published: boolean;
}

export interface Specialization {
	id: number;
	slug: string;
	title: string;
	tagline: string;
	duration: string;
	courses_count: number;
	price: string;
	description: string;
	image_url: string;
	outcomes: string[];
	curriculum: string[];
	career: string[];
	course_slugs: string[];
	is_published: boolean;
}
```

## 11) Frontend Integration Plan (Static -> Dynamic)

### Phase A: API Foundation
- Add `src/api/client.ts` with base URL from `VITE_API_BASE_URL`.
- Add global request timeout and JSON parsing.
- Add centralized error mapper.

### Phase B: Read Endpoints
- Replace imports from `src/lib/data.ts` in:
	- Home
	- Courses
	- CourseDetail
	- Specializations
	- SpecializationDetail
	- Blog
	- FAQ
	- Roadmaps
- Use `useQuery` hooks per domain.
- Keep old static data only as fallback during migration.

### Phase C: Write Endpoints
- Replace `setTimeout` submit simulation in:
	- `Apply.tsx` with `POST /applications`
	- `Contact.tsx` with `POST /contact-messages`
- Show backend validation messages in form fields.

### Phase D: Cache + Invalidation
- Query keys examples:
	- `['courses', filters]`
	- `['course', slug]`
	- `['specializations']`
	- `['specialization', slug]`
- On admin-side updates, invalidate relevant keys.

## 12) Adding New Courses and Specializations (Dynamic Flow)

### Add New Course
1. Backend admin creates course with unique `slug` and `is_published=true`.
2. `GET /courses` includes new item.
3. Courses page auto-lists it.
4. `GET /courses/:slug` returns detail payload.
5. Route `/courses/:slug` renders without frontend code changes.

### Add New Specialization
1. Backend admin creates specialization with unique `slug`.
2. Backend links included course slugs.
3. `GET /specializations` returns the new specialization.
4. List page and detail route `/specializations/:slug` auto-work.
5. Apply form options also auto-update.

## 13) Backend Validation Rules (Must-Have)

- Slugs must be unique and URL-safe.
- `selection_slug` in applications must exist in selected entity type.
- `selection_type` must be one of: `course`, `specialization`.
- Enforce max lengths consistent with frontend zod rules.
- Sanitize rich text/content fields.
- Return field-level validation errors in machine-readable format.

## 14) Security and Platform Requirements

- Enable CORS for frontend origin(s).
- Enable HTTPS in production.
- Rate-limit public POST endpoints:
	- `/applications`
	- `/contact-messages`
- Add bot protection (reCAPTCHA/hCaptcha) for forms.
- Store request IDs for observability and support.

## 15) SEO/Data Requirements for Backend

For dynamic pages (`/courses/:slug`, `/specializations/:slug`, blog detail):
- Include `meta_title` (optional override)
- Include `meta_description` (optional override)
- Include image URL for social previews
- Keep canonical slug stable after publish

## 16) Suggested Django/DRF Backend Resource Map

Suggested app names:
- `catalog` (courses, specializations, roadmaps)
- `content` (blog, testimonials, faqs)
- `leads` (applications, contact messages)

Suggested DRF routes:
- `/api/v1/courses/`
- `/api/v1/courses/{slug}/`
- `/api/v1/specializations/`
- `/api/v1/specializations/{slug}/`
- `/api/v1/blog-posts/`
- `/api/v1/blog-posts/{slug}/`
- `/api/v1/testimonials/`
- `/api/v1/faqs/`
- `/api/v1/roadmaps/`
- `/api/v1/applications/`
- `/api/v1/contact-messages/`

## 17) Quick Backend-Ready Checklist

- [ ] `.env` has `VITE_API_BASE_URL`
- [ ] API client created and used globally
- [ ] React Query hooks per feature added
- [ ] Pages no longer import static arrays directly
- [ ] Apply/Contact use real POST APIs
- [ ] Backend returns field-level validation errors
- [ ] Slug-based detail endpoints are live
- [ ] CORS + rate limiting configured
- [ ] Error monitoring/logging is enabled

## 18) Known Current Gaps

- No real API calls yet (data is static in `src/lib/data.ts`).
- Forms are simulated with `setTimeout` and local navigation.
- No auth/session handling in current frontend.

---

If you want, the next step is to implement the API layer and migrate one module end-to-end first (recommended order: `courses` -> `specializations` -> `apply/contact`).
