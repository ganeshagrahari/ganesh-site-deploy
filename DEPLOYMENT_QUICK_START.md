# 🚀 Deploy Backend to Render - Complete Guide

## 📋 Your Current Setup

- **Frontend URL**: https://ganesh-portfolio-site.vercel.app/
- **Frontend Hosting**: Vercel ✅ (Already deployed)
- **Backend URL**: https://portfolio-backend-9g97.onrender.com
- **Backend Hosting**: Render ✅ (Already deployed)
- **Backend Repository**: Separate GitHub repository

---

## ✅ Cleanup Complete!

Removed unnecessary files:
- ❌ `test_prototype.py` (11 KB)
- ❌ `test_api.py` (1.9 KB)  
- ❌ `setup_env.sh` (746 bytes)

## 📦 What's Left in Backend (Ready for Deployment)

```
backend/
├── app/                    # Application code ✅
│   ├── main.py            # FastAPI entry point
│   ├── api/               # API endpoints
│   ├── core/              # RAG system & config
│   └── models/            # Data schemas
├── data/                   # Knowledge base ✅
│   ├── about_ganesh.md
│   ├── experience.md
│   ├── projects.txt
│   ├── contact_info.txt
│   └── Ganesh-Agrahari-2.pdf
├── requirements.txt        # Dependencies ✅
├── Dockerfile             # Docker config ✅
├── render.yaml            # Render config ✅
├── .env.example           # Env template ✅
├── .gitignore             # Git ignore ✅
├── README.md              # Documentation ✅
├── start_server.sh        # Local dev script ✅
└── rebuild_index.sh       # Local rebuild script ✅
```

**Total Size**: ~50 KB (excluding data files and dependencies)

---

## 🎯 Step-by-Step Deployment (15 Minutes)

### 📝 Prerequisites

Before starting, make sure you have:
- ✅ GitHub account
- ✅ Render account (sign up at https://render.com - it's free!)
- ✅ Your OpenAI API key (see below if you don't have one)

---

## 🔑 Step 0: Get Your OpenAI API Key (If You Don't Have One)

### Option A: You Already Have an API Key
- ✅ Your key starts with `sk-proj-...`
- ✅ It's in your `backend/.env` file
- ✅ **Keep it safe!** You'll need it for Render

### Option B: You Need a New API Key

1. **Go to OpenAI Platform**
   - Visit: https://platform.openai.com/api-keys

2. **Sign In**
   - Use your OpenAI account
   - If you don't have one, create a free account

3. **Create New API Key**
   - Click "Create new secret key"
   - Name it: "Portfolio Backend"
   - Click "Create secret key"
   - **IMPORTANT**: Copy the key immediately (starts with `sk-proj-...`)
   - You won't be able to see it again!

4. **Save It Securely**
   - Store it in a password manager
   - You'll need it in Step 3

### 💰 Pricing Note
- OpenAI charges per API call (~$0.002 per request)
- Estimated cost: $1-5/month for personal portfolio
- Add credits at: https://platform.openai.com/account/billing

---

## 📦 Step 1: Create Separate GitHub Repository

### 1.1 Create New Directory and Copy Backend Files

```bash
# Navigate to Desktop (or wherever you want)
cd ~/Desktop

# Create new directory for backend
mkdir Portfolio-Backend
cd Portfolio-Backend

# Copy all backend files INCLUDING hidden files (.gitignore, .env.example)
cp -r /home/ganesh/Portfolio-Site/backend/* .
cp /home/ganesh/Portfolio-Site/backend/.gitignore .
cp /home/ganesh/Portfolio-Site/backend/.env.example .

# Remove venv if it was copied (we don't want it)
rm -rf venv/

# Remove .env if it exists (we don't want to commit secrets)
rm -f .env

# Verify files copied correctly
ls -la
```

You should see:
```
app/
data/
requirements.txt
Dockerfile
render.yaml
.env.example          ← Important!
.gitignore            ← Important!
README.md
start_server.sh
rebuild_index.sh
```

**Important files to verify:**
- ✅ `.gitignore` exists (prevents committing venv, .env)
- ✅ `.env.example` exists (template for environment variables)
- ❌ `.env` should NOT exist (contains secrets)
- ❌ `venv/` should NOT exist (too large, not needed)

### 1.2 Initialize Git Repository

```bash
# Initialize git
git init

# Check what will be committed (should NOT include venv/ or .env)
git status

# You should see files like:
# - app/
# - data/
# - requirements.txt
# - .gitignore
# - etc.
#
# You should NOT see:
# - venv/
# - .env
# - __pycache__/

# If you see venv/ or .env, something is wrong!
# Make sure .gitignore exists and contains the right rules

# Add all files (git will respect .gitignore)
git add .

# Verify what's staged
git status

# Commit
git commit -m "Initial commit: AI Chatbot Backend for Portfolio"
```

**⚠️ Important Check:**
After `git add .`, run `git status` and verify:
- ✅ `.gitignore` is included
- ✅ `app/`, `data/`, `requirements.txt` are included
- ❌ `venv/` is NOT included
- ❌ `.env` is NOT included

### 1.3 Create GitHub Repository

1. **Go to GitHub**: https://github.com/new
2. **Repository name**: `Portfolio-Backend`
3. **Description**: "AI Chatbot Backend for Portfolio Site"
4. **Visibility**: Public (or Private if you prefer)
5. **DO NOT** initialize with README (we already have one)
6. Click **"Create repository"**

### 1.4 Push to GitHub

```bash
# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/Portfolio-Backend.git

# Push to GitHub
git branch -M main
git push -u origin main
```

✅ **Checkpoint**: Your backend code is now on GitHub!

---

## 🚀 Step 2: Deploy on Render

### 2.1 Sign Up / Sign In to Render

1. Go to: https://render.com
2. Click **"Get Started"** or **"Sign In"**
3. Sign in with GitHub (recommended)
4. Authorize Render to access your repositories

### 2.2 Create New Web Service

1. Click **"New +"** button (top right)
2. Select **"Web Service"**
3. Click **"Connect a repository"**
4. Find and select **"Portfolio-Backend"**
5. Click **"Connect"**

### 2.3 Configure Web Service

Fill in these settings:

**Basic Settings:**
```
Name: portfolio-backend
Region: Oregon (US West) or closest to you
Branch: main
Runtime: Python 3
```

**Build & Deploy:**
```
Build Command: pip install -r requirements.txt
Start Command: uvicorn app.main:app --host 0.0.0.0 --port $PORT
```

**Instance Type:**
```
Free (or Starter if you want better performance)
```

### 2.4 Add Environment Variables

Scroll down to **"Environment Variables"** section and add these:

Click **"Add Environment Variable"** for each:

1. **OPENAI_API_KEY**
   ```
   Key: OPENAI_API_KEY
   Value: sk-proj-YOUR_ACTUAL_KEY_HERE
   ```
   ⚠️ **IMPORTANT**: Paste your actual OpenAI API key here!

2. **ENVIRONMENT**
   ```
   Key: ENVIRONMENT
   Value: production
   ```

3. **CORS_ORIGINS**
   ```
   Key: CORS_ORIGINS
   Value: https://ganesh-portfolio-site.vercel.app,http://localhost:3000
   ```
   ⚠️ **IMPORTANT**: This allows your Vercel site to call the backend!

4. **OPENAI_MODEL** (Optional)
   ```
   Key: OPENAI_MODEL
   Value: gpt-3.5-turbo
   ```

5. **OPENAI_TEMPERATURE** (Optional)
   ```
   Key: OPENAI_TEMPERATURE
   Value: 0.7
   ```

### 2.5 Deploy!

1. Click **"Create Web Service"** (bottom of page)
2. Wait 5-10 minutes for deployment
3. Watch the logs - you'll see:
   ```
   Installing dependencies...
   Building FAISS index...
   Starting server...
   ```

### 2.6 Get Your Backend URL

Once deployed, you'll see:
```
Your service is live at https://portfolio-backend-xxxx.onrender.com
```

**✅ YOUR BACKEND URL**: https://portfolio-backend-9g97.onrender.com

✅ **Checkpoint**: Your backend is now live on Render!

---

## 🎨 Step 3: Update Frontend to Use Production Backend

### 3.1 Update Local Environment File

In your Portfolio-Site directory:

```bash
cd /home/ganesh/Portfolio-Site

# Create production environment file
nano .env.production
```

Add this line:
```bash
NEXT_PUBLIC_API_URL=https://portfolio-backend-9g97.onrender.com
```

Save and exit (Ctrl+X, Y, Enter)

### 3.2 Update Vercel Environment Variables

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Select your project**: "ganesh-portfolio-site" or similar
3. **Go to Settings** (top menu)
4. **Click "Environment Variables"** (left sidebar)
5. **Add New Variable**:
   ```
   Name: NEXT_PUBLIC_API_URL
   Value: https://portfolio-backend-9g97.onrender.com
   Environment: Production, Preview, Development (check all)
   ```
6. Click **"Save"**

### 3.3 Redeploy Frontend

**Option A: Automatic (Recommended)**
```bash
# Commit and push the .env.production file
git add .env.production
git commit -m "Add production backend URL"
git push origin main
```
Vercel will auto-deploy.

**Option B: Manual**
1. Go to Vercel Dashboard
2. Click "Deployments"
3. Click "..." on latest deployment
4. Click "Redeploy"

Wait 2-3 minutes for redeployment.

✅ **Checkpoint**: Frontend now uses production backend!

---

## ✅ Step 4: Test Everything Works!

### 4.1 Test Backend Health Endpoint

```bash
# Test your deployed backend
curl https://portfolio-backend-9g97.onrender.com/health
```

Expected response:
```json
{
  "status": "healthy",
  "message": "Ganesh's AI Assistant API is running"
}
```

### 4.2 Test Chat Endpoint

```bash
# Test your deployed backend chat endpoint
curl -X POST https://portfolio-backend-9g97.onrender.com/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "What are Ganesh'\''s skills?", "session_id": "test123"}'
```

Expected response:
```json
{
  "response": "Ganesh has expertise in...",
  "sources": ["about_ganesh.md", "experience.md"],
  "session_id": "test123"
}
```

### 4.3 Test on Your Live Website

1. **Visit your site**: https://ganesh-portfolio-site.vercel.app/
2. **Click the purple chat button** (bottom-right corner)
3. **Send a test message**: "What are your skills?"
4. **Verify you get a response** from Viag

### 4.4 Check Browser Console (If Issues)

1. Open browser DevTools (F12)
2. Go to Console tab
3. Look for errors
4. Common issues:
   - CORS error → Check CORS_ORIGINS in Render
   - 404 error → Check API_URL in Vercel
   - 500 error → Check Render logs

---

## 🎉 Success! Your Chatbot is Live!

### 📊 Final Setup Summary

✅ **Backend (Render)**
- Repository: `Portfolio-Backend` on GitHub
- URL: `https://portfolio-backend-9g97.onrender.com`
- Status: ✅ Live and running
- Cost: Free tier (or $7/month for Starter)

✅ **Frontend (Vercel)**
- Repository: `Portfolio-Site` on GitHub  
- URL: `https://ganesh-portfolio-site.vercel.app/`
- Status: Live and connected to backend
- Cost: Free

✅ **OpenAI**
- API Key: Configured in Render
- Model: GPT-3.5-turbo
- Cost: ~$1-5/month (pay-as-you-go)

### 🔗 Architecture

```
User visits website
    ↓
https://ganesh-portfolio-site.vercel.app/
    ↓
Clicks chat button
    ↓
Frontend sends request to backend
    ↓
https://portfolio-backend-9g97.onrender.com/api/chat
    ↓
Backend queries FAISS vector store
    ↓
Backend calls OpenAI API
    ↓
Response sent back to frontend
    ↓
User sees Viag's response!
```

---

## 🔧 Maintenance & Updates

### Update Knowledge Base (Data Files)

```bash
# In Portfolio-Backend directory
cd ~/Portfolio-Backend

# Edit your data files
nano data/experience.md
nano data/projects.txt

# Commit and push
git add data/
git commit -m "Update: experience and projects"
git push origin main

# Render will auto-deploy and rebuild FAISS index
```

### Update Backend Code

```bash
cd ~/Portfolio-Backend

# Make changes to app/
nano app/core/rag.py

# Commit and push
git add .
git commit -m "Update: improved RAG system"
git push origin main

# Render will auto-deploy
```

### Monitor Backend

1. **Render Dashboard**: https://dashboard.render.com
2. Click your service → "Logs"
3. Monitor requests, errors, performance

### Check Costs

- **Render**: Free tier or check billing
- **OpenAI**: https://platform.openai.com/usage
- **Vercel**: Free tier

---

## 🆘 Troubleshooting

### Issue: Chat button not responding

**Solution:**
1. Check browser console for errors
2. Verify `NEXT_PUBLIC_API_URL` in Vercel
3. Test backend health endpoint

### Issue: CORS error

**Solution:**
1. Go to Render → Your service → Environment
2. Check `CORS_ORIGINS` includes: `https://ganesh-portfolio-site.vercel.app`
3. Restart service if needed

### Issue: Backend not responding

**Solution:**
1. Check Render logs for errors
2. Verify `OPENAI_API_KEY` is set correctly
3. Check if FAISS index built successfully

### Issue: "Rate limit exceeded"

**Solution:**
1. You've hit OpenAI rate limit
2. Wait a few minutes
3. Or upgrade OpenAI plan

### Issue: Render service sleeping (Free tier)

**Solution:**
- Free tier sleeps after 15 min inactivity
- First request takes 30-60 seconds to wake up
- Upgrade to Starter ($7/month) for always-on

---

## 📚 Useful Links

### Your URLs
- **Frontend**: https://ganesh-portfolio-site.vercel.app/
- **Backend**: https://portfolio-backend-9g97.onrender.com
- **Backend Health**: https://portfolio-backend-9g97.onrender.com/health
- **API Docs**: https://portfolio-backend-9g97.onrender.com/docs

### Dashboards
- **Vercel**: https://vercel.com/dashboard
- **Render**: https://dashboard.render.com
- **OpenAI**: https://platform.openai.com/usage
- **GitHub Backend**: https://github.com/YOUR_USERNAME/Portfolio-Backend
- **GitHub Frontend**: https://github.com/YOUR_USERNAME/Portfolio-Site

### Documentation
- **FastAPI**: https://fastapi.tiangolo.com/
- **LangChain**: https://python.langchain.com/
- **Render Docs**: https://render.com/docs
- **Vercel Docs**: https://vercel.com/docs

---

## 🎯 Quick Reference Commands

```bash
# Test backend health
curl https://portfolio-backend-9g97.onrender.com/health

# Test chat
curl -X POST https://portfolio-backend-9g97.onrender.com/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello", "session_id": "test"}'

# Update backend
cd ~/Portfolio-Backend
git add .
git commit -m "Update: description"
git push origin main

# Check Render logs
# Go to: https://dashboard.render.com → Your service → Logs
```

---

## 🎉 Congratulations!

Your AI chatbot is now **live and deployed**! 🚀

**What you've accomplished:**
- ✅ Built a custom RAG-powered AI chatbot
- ✅ Deployed backend to Render
- ✅ Connected frontend to backend
- ✅ Created a professional portfolio feature

**Next steps:**
- Share your portfolio with the world!
- Monitor usage and costs
- Update knowledge base as you gain experience
- Add more features if desired

---

**Need help?** Check the troubleshooting section or review the steps above. Everything is set up and ready to go! 💪
