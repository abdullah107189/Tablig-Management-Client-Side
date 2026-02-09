// types/index.ts
export interface Mosque {
  id: string;
  name: string;
  type: "JAME" | "WAQTIYA";
  district: string;
  thana: string;
  ward?: string;
  village?: string;
  address?: string;
  notes?: string;
  status: "PENDING" | "ACTIVE" | "REJECTED";
  public_code: string;
  created_at: Date;
  updated_at: Date;
}

export interface User {
  id: string;
  name: string;
  email?: string;
  phone: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface UserMosqueRole {
  user_id: string;
  mosque_id: string;
  role: "MOSQUE_ADMIN" | "EDITOR" | "VIEWER";
  created_at: Date;
}

export interface Sathi {
  id: string;
  mosque_id: string;
  name: string;
  phone?: string;
  address?: string;
  notes?: string;
  is_active: boolean;
  created_by: string;
  updated_by: string;
  created_at: Date;
  updated_at: Date;
}

export interface SathiCategory {
  id: string;
  mosque_id: string;
  name: string;
  order: number;
  created_at: Date;
}

export interface SathiCategoryMembership {
  sathi_id: string;
  category_id: string;
  from_date?: Date;
  to_date?: Date;
  created_at: Date;
}

export interface TalimDailyEntry {
  id: string;
  mosque_id: string;
  date: Date;
  today_amir: string;
  tomorrow_amir: string;
  tomorrow_talim_responsibility: string;
  attendance_count: number;
  ghore_talim: boolean;
  ghore_talim_count?: number;
  mehnat_2_5h: boolean;
  notes?: string;
  created_by: string;
  updated_by: string;
  created_at: Date;
  updated_at: Date;
}

export interface Khuruj3DayPlan {
  id: string;
  mosque_id: string;
  month: number;
  year: number;
  location: string;
  notes?: string;
  created_by: string;
  updated_by: string;
  created_at: Date;
  updated_at: Date;
}

export interface Khuruj3DayDate {
  plan_id: string;
  date: Date;
  attendance_count?: number;
}

export interface ShabgujariEntry {
  id: string;
  mosque_id: string;
  week_date: Date;
  start_time: Date;
  end_time: Date;
  attendance_count: number;
  notes?: string;
  created_by: string;
  updated_by: string;
  created_at: Date;
  updated_at: Date;
}

export interface ActiveKhuruj {
  id: string;
  mosque_id: string;
  start_date: Date;
  duration: number;
  end_date: Date;
  destination?: string;
  notes?: string;
  status: "PLANNED" | "ACTIVE" | "COMPLETED";
  created_by: string;
  updated_by: string;
  created_at: Date;
  updated_at: Date;
}

export interface ActiveKhurujParticipant {
  khuruj_id: string;
  sathi_id: string;
  joined_date: Date;
  left_date?: Date;
  created_at: Date;
}
