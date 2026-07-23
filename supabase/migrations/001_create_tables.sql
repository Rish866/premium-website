-- AgencyOS Database Schema
-- Run this in your Supabase Dashboard > SQL Editor

-- ============================================
-- TABLE: projects
-- ============================================
CREATE TABLE IF NOT EXISTS public.projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  owner UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  industry TEXT,
  template TEXT,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  primary_color TEXT DEFAULT '#06b6d4',
  secondary_color TEXT DEFAULT '#8b5cf6',
  logo TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- TABLE: pages
-- ============================================
CREATE TABLE IF NOT EXISTS public.pages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  is_home BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- TABLE: sections
-- ============================================
CREATE TABLE IF NOT EXISTS public.sections (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page_id UUID NOT NULL REFERENCES public.pages(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  variant TEXT DEFAULT 'A',
  sort_order INTEGER DEFAULT 0,
  config JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- TABLE: themes
-- ============================================
CREATE TABLE IF NOT EXISTS public.themes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID UNIQUE NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  primary_color TEXT DEFAULT '#06b6d4',
  secondary_color TEXT DEFAULT '#8b5cf6',
  font TEXT DEFAULT 'Inter',
  radius TEXT DEFAULT 'xl',
  mode TEXT DEFAULT 'dark',
  design_tokens JSONB,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- ENABLE ROW LEVEL SECURITY
-- ============================================
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.themes ENABLE ROW LEVEL SECURITY;

-- ============================================
-- RLS POLICIES: projects
-- ============================================
CREATE POLICY "users_select_own_projects" ON public.projects
  FOR SELECT USING (auth.uid() = owner);
CREATE POLICY "users_insert_own_projects" ON public.projects
  FOR INSERT WITH CHECK (auth.uid() = owner);
CREATE POLICY "users_update_own_projects" ON public.projects
  FOR UPDATE USING (auth.uid() = owner);
CREATE POLICY "users_delete_own_projects" ON public.projects
  FOR DELETE USING (auth.uid() = owner);
CREATE POLICY "public_view_published_projects" ON public.projects
  FOR SELECT USING (published = true);

-- ============================================
-- RLS POLICIES: pages
-- ============================================
CREATE POLICY "users_select_own_pages" ON public.pages
  FOR SELECT USING (
    project_id IN (SELECT id FROM public.projects WHERE owner = auth.uid())
  );
CREATE POLICY "users_insert_own_pages" ON public.pages
  FOR INSERT WITH CHECK (
    project_id IN (SELECT id FROM public.projects WHERE owner = auth.uid())
  );
CREATE POLICY "users_update_own_pages" ON public.pages
  FOR UPDATE USING (
    project_id IN (SELECT id FROM public.projects WHERE owner = auth.uid())
  );
CREATE POLICY "users_delete_own_pages" ON public.pages
  FOR DELETE USING (
    project_id IN (SELECT id FROM public.projects WHERE owner = auth.uid())
  );
CREATE POLICY "public_view_published_pages" ON public.pages
  FOR SELECT USING (
    project_id IN (SELECT id FROM public.projects WHERE published = true)
  );

-- ============================================
-- RLS POLICIES: sections
-- ============================================
CREATE POLICY "users_select_own_sections" ON public.sections
  FOR SELECT USING (
    page_id IN (
      SELECT p.id FROM public.pages p
      JOIN public.projects pr ON pr.id = p.project_id
      WHERE pr.owner = auth.uid()
    )
  );
CREATE POLICY "users_insert_own_sections" ON public.sections
  FOR INSERT WITH CHECK (
    page_id IN (
      SELECT p.id FROM public.pages p
      JOIN public.projects pr ON pr.id = p.project_id
      WHERE pr.owner = auth.uid()
    )
  );
CREATE POLICY "users_update_own_sections" ON public.sections
  FOR UPDATE USING (
    page_id IN (
      SELECT p.id FROM public.pages p
      JOIN public.projects pr ON pr.id = p.project_id
      WHERE pr.owner = auth.uid()
    )
  );
CREATE POLICY "users_delete_own_sections" ON public.sections
  FOR DELETE USING (
    page_id IN (
      SELECT p.id FROM public.pages p
      JOIN public.projects pr ON pr.id = p.project_id
      WHERE pr.owner = auth.uid()
    )
  );
CREATE POLICY "public_view_published_sections" ON public.sections
  FOR SELECT USING (
    page_id IN (
      SELECT p.id FROM public.pages p
      JOIN public.projects pr ON pr.id = p.project_id
      WHERE pr.published = true
    )
  );

-- ============================================
-- RLS POLICIES: themes
-- ============================================
CREATE POLICY "users_select_own_themes" ON public.themes
  FOR SELECT USING (
    project_id IN (SELECT id FROM public.projects WHERE owner = auth.uid())
  );
CREATE POLICY "users_insert_own_themes" ON public.themes
  FOR INSERT WITH CHECK (
    project_id IN (SELECT id FROM public.projects WHERE owner = auth.uid())
  );
CREATE POLICY "users_update_own_themes" ON public.themes
  FOR UPDATE USING (
    project_id IN (SELECT id FROM public.projects WHERE owner = auth.uid())
  );
CREATE POLICY "users_delete_own_themes" ON public.themes
  FOR DELETE USING (
    project_id IN (SELECT id FROM public.projects WHERE owner = auth.uid())
  );
CREATE POLICY "public_view_published_themes" ON public.themes
  FOR SELECT USING (
    project_id IN (SELECT id FROM public.projects WHERE published = true)
  );
