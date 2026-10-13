import type { ServiceCategory, ServiceListing, Donor } from "@/lib/types";
import { supabaseConfigured, supabase } from "@/lib/supabase/client";

export const hotlineCategories: ServiceCategory[] = [
  { id: "hospital", name: "Hospital", slug: "hospital", kind: "hotline" },
  { id: "ambulance", name: "Ambulance", slug: "ambulance", kind: "hotline" },
  { id: "police", name: "Police Station", slug: "police-station", kind: "hotline" },
  { id: "fire", name: "Fire Station", slug: "fire-station", kind: "hotline" },
  { id: "blood-bank", name: "Blood Banks", slug: "blood-banks", kind: "hotline" },
  { id: "child-line", name: "Child Line", slug: "child-line", kind: "hotline" },
  { id: "medical-shop", name: "Medical Shops", slug: "medical-shop", kind: "hotline" },
  { id: "doctor", name: "Doctor's Clinic", slug: "doctors-clinic", kind: "hotline" },
];

export const transportCategories: ServiceCategory[] = [
  { id: "cars", name: "Cars", slug: "cars", kind: "transport" },
  { id: "auto", name: "Auto", slug: "auto", kind: "transport" },
  { id: "tourist-bus", name: "Tourist Bus", slug: "tourist-bus", kind: "transport" },
  { id: "rent-a-car", name: "Rent a Car", slug: "rent-a-car", kind: "transport" },
];

export const workerCategories: ServiceCategory[] = [
  { id: "plumbing-wiring", name: "Plumbing & Wiring", slug: "plumbing-wiring", kind: "worker" },
  { id: "repair", name: "Repair", slug: "repair", kind: "worker" },
  { id: "construction", name: "Construction", slug: "construction", kind: "worker" },
  { id: "painting", name: "Painting", slug: "painting", kind: "worker" },
];

export async function getListings(kind: "hotline" | "transport" | "worker", categorySlug?: string): Promise<ServiceListing[]> {
  if (!supabaseConfigured || !supabase) return [];
  let query = supabase
    .from("service_listings")
    .select("id,name,phone,area,address,description,vehicle_type,is_active,sort_order,category_id,service_categories!inner(name,slug,kind)")
    .eq("is_active", true)
    .eq("service_categories.kind", kind)
    .order("sort_order", { ascending: true }).order("name");
  if (categorySlug) query = query.eq("service_categories.slug", categorySlug);
  const { data, error } = await query;
  if (error || !data) return [];
  return data.map((row: any) => ({
    id: row.id,
    name: row.name,
    phone: row.phone,
    area: row.area,
    address: row.address,
    description: row.description,
    vehicle_type: row.vehicle_type,
    is_active: row.is_active,
    sort_order: row.sort_order ?? 0,
    category_name: row.service_categories?.name,
    category_slug: row.service_categories?.slug,
  }));
}

export async function findDonors(group?: string): Promise<Donor[]> {
  if (!supabaseConfigured || !supabase) return [];
  let query = supabase.from("donors").select("id,name,blood_group,phone,area,available").eq("available", true).order("area");
  if (group) query = query.eq("blood_group", group);
  const { data, error } = await query;
  if (error || !data) return [];
  return data as Donor[];
}
