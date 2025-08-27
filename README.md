# NITech Board

名古屋工業大学学生向け知識共有掲示板

A student-only knowledge-sharing bulletin board for Nagoya Institute of Technology (NITech) that helps students exchange study information including classes, tests, experiments, past exams, graduate exams, job hunting, and more.

## Features

### Core Features
- **Authentication**: NITech email (@ict.nitech.ac.jp) only with email verification
- **Guest Mode**: Browse boards without logging in (read-only)
- **Department-based Organization**: Official NITech departments and courses
- **Topic Categories**: Assignments, Lab Work, Exams, Job Hunting, etc.
- **Board System**: Create and manage discussion boards within topics
- **Posting**: Text and image support with likes and reactions
- **Archive System**: Auto-save images into organized folders by board and year
- **Direct Messaging**: 1:1 chat with mutual follow system
- **Events**: Public announcements for school events
- **Notifications**: Star boards and receive activity notifications
- **Moderation**: Report system with automatic suspensions
- **Internationalization**: Japanese (default) and English support

### Technical Features
- **Modern UI**: ChatGPT-like design with iPhone Settings patterns
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Dark/Light Mode**: Automatic theme switching with system preference
- **Real-time Updates**: Live notifications and activity feeds
- **Image Upload**: Drag & drop with preview and optimization
- **Search & Filter**: Find boards by name, sort by activity
- **Accessibility**: WCAG AA compliant with semantic HTML

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom design system
- **Backend**: Firebase (Auth, Firestore, Storage, Cloud Messaging)
- **State Management**: Zustand with persistence
- **Internationalization**: react-i18next with Japanese/English
- **UI Components**: Lucide React icons + custom components
- **Testing**: Vitest + Testing Library
- **Deployment**: Firebase Hosting

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Firebase CLI (for deployment)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nitech-board
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   The Firebase configuration is already set up in `src/firebase.ts` with the production project:
   - Project ID: `nitboard-57de2`
   - Hosting URL: `https://nitboard-57de2.web.app/`

4. **Development Server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:5173](http://localhost:5173) to view the app.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run unit tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── stores/             # Zustand state management
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── constants/          # Application constants
├── locales/            # i18n translation files
│   ├── ja/            # Japanese translations
│   └── en/            # English translations
├── i18n/              # i18n configuration
├── firebase.ts        # Firebase configuration
└── main.tsx           # Application entry point
```

## Firebase Configuration

The application uses the existing Firebase project with the following services:

### Authentication
- Email/password authentication
- NITech domain restriction (@ict.nitech.ac.jp)
- Email verification required
- Guest mode support

### Firestore Collections
- `users` - User profiles and preferences
- `departments` - Official NITech departments
- `topics` - Discussion topics (assignments, exams, etc.)
- `boards` - Discussion boards within topics
- `posts` - Posts within boards
- `likes` - Post likes/reactions
- `follows` - User follow relationships
- `chats` - Direct message conversations
- `messages` - Individual chat messages
- `reports` - Content moderation reports
- `events` - School event announcements
- `feedback` - User feedback (admin only)
- `notifications` - User notifications
- `archives` - Archived board images

### Storage Rules
- Avatar images: 5MB max, user-owned
- Board images: 10MB max, authenticated users
- Event images: 10MB max, authenticated users
- Archive images: 10MB max, authenticated users
- Message images: 5MB max, chat participants

## Deployment

### Prerequisites
1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

### Deploy to Production
```bash
# Build the application
npm run build

# Deploy to Firebase Hosting
firebase deploy
```

The application will be deployed to: https://nitboard-57de2.web.app/

### Deploy Firestore Rules & Indexes
```bash
# Deploy Firestore security rules
firebase deploy --only firestore:rules

# Deploy Firestore indexes
firebase deploy --only firestore:indexes

# Deploy Storage rules
firebase deploy --only storage
```

## Internationalization (i18n)

The application supports Japanese (default) and English languages.

### Translation Files
- `src/locales/ja/` - Japanese translations
- `src/locales/en/` - English translations

### Adding New Languages
1. Create new locale directory: `src/locales/[locale]/`
2. Add translation files: `common.json`, `auth.json`, `boards.json`
3. Update `src/i18n/index.ts` to include new locale
4. Add locale to `src/types/index.ts` Locale type

### Usage in Components
```typescript
import { useI18n } from '@/utils/i18n'

const { t, currentLocale, changeLanguage } = useI18n()

// Translate text
t('common.welcome')

// Change language
changeLanguage('en')
```

## Official NITech Departments

### 高度工学教育課程 (Advanced Engineering Education Program)
- 生命・応用化学科 (Life Science and Applied Chemistry)
- 物理工学科 (Physical Science and Engineering)
- 電気・機械工学科 (Electrical and Mechanical Engineering)
- 情報工学科 (Computer Science)
- 社会工学科 (Architecture, Civil Engineering, and Industrial Management Engineering)

### 創造工学教育課程（6年一貫）(Creative Engineering Education Program)
- 材料エネルギーコース (Materials and Energy)
- 情報・社会コース (Computer and Social Engineering)

### 基幹工学教育課程（夜間主）5年課程 (Core Engineering Education Program)
- 電気・機械工学コース (Electrical and Mechanical Engineering)
- 環境都市工学コース (Environmental and Urban Engineering)

## Topics

Fixed topic categories available across all departments:
- 授業課題 (Assignments)
- 実験課題 (Lab Work)
- 中間試験 (Midterm Exams)
- 期末試験 (Final Exams)
- 大学院試験 (Graduate Exams)
- 就職活動 (Job Hunting)
- その他 (Other)

## Moderation System

### Reporting
- Users can report posts, messages, and other users
- Reports are stored with reason and timestamp
- Admin review required for action

### Automatic Suspensions
- 3+ unique reports on a user → 3-month automatic suspension
- Suspension period stored with start/end dates
- Admin can override or extend suspensions

### Admin Features
- View all reports and user suspensions
- Override automatic suspensions
- Manage user accounts and content

## Notifications

### Types
- New posts in starred boards
- New followers
- New likes on posts
- New direct messages

### Settings
- Per-board notification toggles
- Global notification preferences
- Browser push notification support (if enabled)

## Archive System

### Auto-Archive
- Images posted in boards are automatically saved to archives
- Organized by board name and creation year
- Folder naming: `<BoardName>_<YearCreated>`

### Search & Access
- Keyword search across archived images
- Year-based filtering
- Board-specific archive access

## Testing

### Unit Tests
```bash
npm run test
```

### Test Coverage
```bash
npm run test:coverage
```

### Test Structure
- `src/test/setup.ts` - Test configuration
- Component tests in `__tests__` directories
- i18n tests for translation coverage

## Performance

### Optimizations
- Lazy loading of components and routes
- Image optimization and compression
- Firestore query optimization with indexes
- Client-side caching with Zustand persistence

### Monitoring
- Firebase Analytics integration
- Error tracking and reporting
- Performance monitoring

## Security

### Authentication
- NITech email domain restriction
- Email verification required
- Secure password requirements
- Session management

### Data Protection
- Firestore security rules
- Storage access controls
- Input validation and sanitization
- Rate limiting on API calls

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## License

This project is proprietary software for Nagoya Institute of Technology.

## Support

For technical support or questions:
- Check the documentation
- Review Firebase console logs
- Contact the development team

## Changelog

### v1.0.0
- Initial release
- Complete authentication system
- Board and posting functionality
- i18n support (Japanese/English)
- Moderation and reporting system
- Archive and notification features
