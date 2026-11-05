# Md Shahriyar Soykot — Portfolio

সর্বশেষ আপডেট করা portfolio: ১৫০+ project count, ১০টি featured project, portrait,
downloadable PDF CV এবং Call, WhatsApp ও LinkedIn বাটনসহ।

এটি HTML, CSS ও JavaScript দিয়ে তৈরি static website। কোনো dependency install,
database, API key বা environment variable প্রয়োজন নেই।

## GitHub-এ আপলোড

1. ZIP ফাইলটি extract করুন।
2. GitHub-এ একটি repository তৈরি করুন বা আপনার নির্ধারিত repository খুলুন।
3. Extract করা ফাইলগুলো ও সম্পূর্ণ `assets` folder আপলোড করে commit করুন।
4. Repository খুললেই যেন `index.html`, `styles.css`, `site.js`, `vercel.json`
   এবং `assets/` দেখা যায়। ZIP ফাইলটি নিজে আপলোড করবেন না এবং ফাইলগুলোকে
   অতিরিক্ত কোনো folder-এর মধ্যে রাখবেন না।

## Vercel-এ import

1. Vercel dashboard থেকে **Add New → Project** খুলুন।
2. সংশ্লিষ্ট GitHub repository import করুন।
3. নিচের settings রাখুন, তারপর Deploy দিন। `vercel.json`-এ প্রয়োজনীয় configuration আছে।

| Setting | Value |
| --- | --- |
| Framework Preset | Other |
| Root Directory | `./` (repository root) |
| Build Command | খালি রাখুন; build প্রয়োজন নেই |
| Output Directory | `.` |
| Install Command | default রাখুন; dependency নেই |
| Environment Variables | প্রয়োজন নেই |

Official references: [Vercel build settings](https://vercel.com/docs/builds/configure-a-build)
and [vercel.json configuration](https://vercel.com/docs/project-configuration/vercel-json).

## Local preview

Extract করা folder-এর `index.html` browser-এ খুলুন। Python থাকলে একই folder-এ
`python -m http.server 8000` চালিয়ে `http://localhost:8000`-এও দেখতে পারবেন।

## ফাইল পরিবর্তনের গাইড

- `index.html`: লেখা, project links, contact details ও CV download link
- `styles.css`: রং, layout, spacing ও responsive design
- `site.js`: theme toggle, mobile navigation, project filters ও email draft form
- `assets/`: portrait, project illustrations, favicon এবং PDF CV
- `assets/Md-Shahriyar-Soykot-CV.pdf`: Download CV বাটনের বর্তমান PDF

CV আপডেট করতে একই filename রেখে PDF replace করতে পারবেন।

Contact form-এর **Open email draft** বাটন visitor-এর email app-এ draft খোলে।
এটি server থেকে সরাসরি email পাঠায় না। Phone বাটন dialer খোলে; WhatsApp ও
LinkedIn বাটন সংশ্লিষ্ট link খুলবে।

## ফাইল কাঠামো

```text
index.html
styles.css
site.js
vercel.json
README.md
.gitignore
assets/
```
