import AdminVideoManager from "@/components/AdminVideoManager";

export const metadata = {
  title: "YouTube Video Management | Admin Dashboard",
  description: "Manage automated YouTube channel sync, video categories, and website visibility for ModularHome.com.",
};

export default function AdminVideosPage() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdminVideoManager />
      </div>
    </div>
  );
}
