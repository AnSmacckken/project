# دليل البدء السريع

## 1. تثبيت الحزم

```bash
npm install
```

## 2. إعداد Environment Variables

انسخ ملف `.env.example` إلى `.env.local`:

```bash
# Windows PowerShell
Copy-Item .env.example .env.local

# أو يدوياً: أنشئ ملف .env.local وانسخ محتوى .env.example
```

عدّل القيم في `.env.local` حسب احتياجك:

```env
NEXT_PUBLIC_API_BASE_URL=https://ecommerce.routemisr.com/api/v1
NEXT_PUBLIC_FRONTEND_URL=http://localhost:3000
```

## 3. تشغيل المشروع

```bash
# Development
npm run dev

# Production Build
npm run build
npm start
```

## 4. رفع المشروع على GitHub

راجع ملف `GITHUB_SETUP.md` للتعليمات التفصيلية.

**ملاحظة مهمة:** تأكد من أن ملف `.env.local` غير موجود قبل الرفع (موجود في `.gitignore` تلقائياً).
