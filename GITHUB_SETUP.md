# تعليمات رفع المشروع على GitHub

## الخطوات:

### 1. إنشاء مستودع جديد على GitHub
- اذهب إلى [GitHub](https://github.com)
- اضغط على "New repository"
- اختر اسم للمستودع (مثلاً: `FreshCart-Ecommerce`)
- اختر Public أو Private حسب رغبتك
- **لا** تضع علامة على "Initialize this repository with a README"

### 2. رفع المشروع من الجهاز المحلي

افتح Terminal/Command Prompt في مجلد المشروع وقم بتنفيذ الأوامر التالية:

```bash
# تهيئة Git (إذا لم تكن مهيأة)
git init

# إضافة جميع الملفات
git add .

# عمل commit أولي
git commit -m "Initial commit: FreshCart Ecommerce App with Next.js"

# إضافة remote repository (استبدل YOUR_USERNAME و YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# رفع المشروع
git branch -M main
git push -u origin main
```

### 3. إذا كان لديك مستودع موجود بالفعل

```bash
# إضافة remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# رفع المشروع
git push -u origin main
```

## ملاحظات مهمة:

✅ **تم إعداد المشروع بشكل كامل:**
- `.gitignore` - يتجاهل الملفات غير الضرورية
- `.gitattributes` - لضمان توحيد تنسيق الملفات
- `README.md` - وثائق المشروع
- `LICENSE` - رخصة MIT
- `CONTRIBUTING.md` - دليل المساهمة
- `DEPLOYMENT.md` - دليل النشر
- GitHub Actions workflow للـ CI/CD

✅ **الملفات التي سيتم تجاهلها تلقائياً:**
- `node_modules/`
- `.next/`
- `.env` و `.env.local`
- ملفات النظام مثل `.DS_Store`

## بعد الرفع:

1. اذهب إلى صفحة المستودع على GitHub
2. ستجد جميع الملفات موجودة
3. يمكنك إضافة وصف للمستودع في Settings
4. يمكنك تفعيل GitHub Pages إذا أردت (للملفات الثابتة)

## نصائح إضافية:

- أضف صور للمشروع في مجلد `.github/images` إذا أردت
- أضف badges في README.md (مثل build status, license, etc.)
- استخدم Issues و Projects لإدارة المشروع
- أضف Topics/Keywords للمستودع لتسهيل البحث
