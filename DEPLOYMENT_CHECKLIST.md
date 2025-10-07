# ✅ Deployment Checklist

Use this checklist to track your deployment progress.

## 📋 Pre-Deployment

- [ ] Backend cleaned up (test files removed)
- [ ] OpenAI API key ready
- [ ] GitHub account ready
- [ ] Render account created (https://render.com)

---

## 🔑 Step 0: OpenAI API Key

- [ ] Have existing API key OR
- [ ] Created new API key at https://platform.openai.com/api-keys
- [ ] Saved API key securely (starts with `sk-proj-...`)
- [ ] Added billing credits if needed

---

## 📦 Step 1: GitHub Repository

- [ ] Created new directory: `~/Portfolio-Backend`
- [ ] Copied backend files
- [ ] Initialized git repository
- [ ] Created GitHub repo: `Portfolio-Backend`
- [ ] Pushed code to GitHub
- [ ] Verified repo is public/accessible

---

## 🚀 Step 2: Render Deployment

- [ ] Signed in to Render with GitHub
- [ ] Created new Web Service
- [ ] Connected `Portfolio-Backend` repository
- [ ] Configured settings:
  - [ ] Name: `portfolio-backend`
  - [ ] Runtime: Python 3
  - [ ] Build: `pip install -r requirements.txt`
  - [ ] Start: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
- [ ] Added environment variables:
  - [ ] `OPENAI_API_KEY` = your actual key
  - [ ] `ENVIRONMENT` = production
  - [ ] `CORS_ORIGINS` = https://ganesh-portfolio-site.vercel.app,http://localhost:3000
- [ ] Clicked "Create Web Service"
- [ ] Waited for deployment (5-10 min)
- [ ] Copied backend URL: `https://portfolio-backend-xxxx.onrender.com`

---

## 🎨 Step 3: Frontend Update

- [ ] Created `.env.production` in Portfolio-Site
- [ ] Added `NEXT_PUBLIC_API_URL` with Render URL
- [ ] Updated Vercel environment variables:
  - [ ] Added `NEXT_PUBLIC_API_URL`
  - [ ] Set to Render backend URL
  - [ ] Applied to all environments
- [ ] Redeployed frontend (automatic or manual)
- [ ] Waited for redeployment (2-3 min)

---

## ✅ Step 4: Testing

- [ ] Tested backend health: `curl https://portfolio-backend-xxxx.onrender.com/health`
- [ ] Tested chat endpoint with curl
- [ ] Visited live site: https://ganesh-portfolio-site.vercel.app/
- [ ] Clicked chat button
- [ ] Sent test message
- [ ] Received response from Viag
- [ ] Tested on mobile device
- [ ] Checked browser console (no errors)

---

## 🎉 Post-Deployment

- [ ] Bookmarked Render dashboard
- [ ] Bookmarked Vercel dashboard
- [ ] Bookmarked OpenAI usage page
- [ ] Set up cost monitoring
- [ ] Shared portfolio with friends/recruiters
- [ ] Updated LinkedIn/resume with portfolio link

---

## 📊 Final Verification

**Your URLs:**
- Frontend: https://ganesh-portfolio-site.vercel.app/ ✅
- Backend: https://portfolio-backend-xxxx.onrender.com ✅
- Backend Health: https://portfolio-backend-xxxx.onrender.com/health ✅
- API Docs: https://portfolio-backend-xxxx.onrender.com/docs ✅

**Repositories:**
- Frontend: https://github.com/YOUR_USERNAME/Portfolio-Site ✅
- Backend: https://github.com/YOUR_USERNAME/Portfolio-Backend ✅

**Status:**
- [ ] Everything working perfectly!
- [ ] Chatbot responding correctly
- [ ] No errors in console
- [ ] Mobile responsive
- [ ] Ready to share!

---

## 🎯 Success Criteria

✅ **Backend is live** - Health endpoint returns 200 OK
✅ **Frontend connects** - No CORS errors
✅ **Chat works** - Viag responds to messages
✅ **Knowledge accurate** - Answers match your data
✅ **Mobile works** - Responsive on all devices

---

**All checked? Congratulations! Your AI chatbot is live! 🎉**

**Share your portfolio:** https://ganesh-portfolio-site.vercel.app/
