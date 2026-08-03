# 📄 ResumeCheck — Full Project Architecture

> An intelligent resume analyzer that accepts multiple document formats, evaluates resume quality, and delivers actionable feedback to help job seekers stand out.

---

## 📌 Table of Contents

1. [Project Overview](#1-project-overview)
2. [Core Features](#2-core-features)
3. [Tech Stack](#3-tech-stack)
4. [System Architecture](#4-system-architecture)
5. [Frontend / UI Structure](#5-frontend--ui-structure)
6. [Backend Structure](#6-backend-structure)
7. [AI / Analysis Engine](#7-ai--analysis-engine)
8. [Database Schema](#8-database-schema)
9. [API Endpoints](#9-api-endpoints)
10. [File & Folder Structure](#10-file--folder-structure)
11. [User Flow](#11-user-flow)
12. [Deployment Strategy](#12-deployment-strategy)
13. [Roadmap & Future Enhancements](#13-roadmap--future-enhancements)

---

## 1. Project Overview

**ResumeCheck** is a web-based resume analysis platform that allows users to upload their resumes in various formats (PDF, DOCX, TXT, etc.) and receive intelligent, structured feedback. The platform uses AI/NLP to evaluate the resume across multiple dimensions — formatting, content quality, keyword relevance, ATS compatibility, and more — and returns a score along with actionable improvement tips.

---

## 2. Core Features

### MVP Features (Phase 1)
- [x] Multi-format resume upload (PDF, DOCX, TXT, ODT)
- [x] Resume text extraction from all supported formats
- [x] AI-powered analysis scoring (0-100)
- [x] Section detection (Contact, Summary, Experience, Education, Skills)
- [x] ATS (Applicant Tracking System) compatibility check
- [x] Actionable feedback & suggestions per section
- [x] User authentication UI (Sign Up / Login)
- [x] Analysis history dashboard

---

## 3. Tech Stack

### Frontend
- Framework: Next.js 14 (App Router) + TypeScript
- Styling: Tailwind CSS + Custom Dark Navy Design Tokens (`#0F0F1A`)
- Components & Viz: Lucide React, Recharts, Framer Motion
- File Upload: React Dropzone & Axios

### Backend
- Framework: Express.js + TypeScript
- Text Parsers: `pdf-parse` (PDF), `mammoth` (DOCX/DOC), Native (TXT/ODT)
- AI Engine: `@google/generative-ai` (Gemini AI API) + Intelligent Fallback Engine
