import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://axzhwommpganfqksoehb.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4emh3b21tcGdhbmZxa3NvZWhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzNTIzMDcsImV4cCI6MTk4MzkyODMwN30.j56dl1GAz77LXoA7pWwgh8ybkMJEO-PVsLByqRaowOw";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video").select("*")
        }
    }
}