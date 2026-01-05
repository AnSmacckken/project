# شرح ملف .env.local

## ما هو ملف .env.local؟

ملف `.env.local` هو ملف خاص بـ **Next.js** لتخزين **متغيرات البيئة** (Environment Variables) الحساسة والمحلية.

## لماذا مهم؟

### 1. **الأمان**
- يحفظ المعلومات الحساسة (مثل API keys, secrets) خارج الكود
- لا يتم رفعه على GitHub (موجود في `.gitignore`)
- كل مطور له قيمه الخاصة

### 2. **المرونة**
- يمكن تغيير الإعدادات بدون تعديل الكود
- قيم مختلفة للـ Development و Production
- سهولة التبديل بين بيئات مختلفة

### 3. **أفضل الممارسات**
- فصل الإعدادات عن الكود
- سهولة الصيانة والتطوير

## كيف يعمل في Next.js؟

### القواعد:
1. **`NEXT_PUBLIC_`** - متغيرات متاحة في المتصفح (Browser)
2. **بدون `NEXT_PUBLIC_`** - متغيرات متاحة فقط في Server-side

### ترتيب الأولوية:
1. `.env.local` - أعلى أولوية (يُستخدم دائماً)
2. `.env.development` - للـ Development
3. `.env.production` - للـ Production
4. `.env` - القيم الافتراضية

## مثال عملي لمشروعك:

### الملف الحالي:
```javascript
// src/utils/baseUrl.jsx
export const baseUrl = "https://ecommerce.routemisr.com/api/v1";
```

### الطريقة المحسنة:

**1. إنشاء ملف `.env.local`:**
```env
NEXT_PUBLIC_API_BASE_URL=https://ecommerce.routemisr.com/api/v1
NEXT_PUBLIC_FRONTEND_URL=https://fresh-cart-ecommerce-three.vercel.app
```

**2. تحديث `baseUrl.jsx`:**
```javascript
export const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://ecommerce.routemisr.com/api/v1";
export const baseUrlFrontend = process.env.NEXT_PUBLIC_FRONTEND_URL || "https://fresh-cart-ecommerce-three.vercel.app";
```

## متى تستخدمه؟

✅ **استخدم `.env.local` عندما:**
- لديك API keys أو secrets
- تريد تغيير URLs بسهولة
- تعمل مع بيئات مختلفة (dev, staging, production)
- تريد إخفاء معلومات حساسة

❌ **لا تحتاجه عندما:**
- القيم ثابتة ولا تتغير
- القيم ليست حساسة
- المشروع بسيط جداً

## ملاحظات مهمة:

⚠️ **لا ترفع `.env.local` على GitHub!**
- موجود في `.gitignore` تلقائياً
- إذا رفعت معلومات حساسة بالخطأ، غيّرها فوراً

⚠️ **أعد تشغيل السيرفر بعد التعديل**
- بعد تعديل `.env.local`، أعد تشغيل `npm run dev`

## مثال لملف .env.local:

```env
# API Configuration
NEXT_PUBLIC_API_BASE_URL=https://ecommerce.routemisr.com/api/v1
NEXT_PUBLIC_FRONTEND_URL=http://localhost:3000

# Optional: API Keys (if needed in future)
# NEXT_PUBLIC_STRIPE_KEY=pk_test_...
# NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-...

# Server-side only (without NEXT_PUBLIC_)
# DATABASE_URL=postgresql://...
# JWT_SECRET=your-secret-key
```
