import {
  FaHome,
  FaHeart,
  FaStar,
  FaEnvelope,
  FaCog,
  FaChevronRight,
  FaPen,
} from "react-icons/fa";
import { Switch } from "@headlessui/react";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import { auth } from "../firebase";

const Account = () => {
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex text-sm text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r px-6 py-8">
        <div className="flex flex-col items-center mb-10">
          <div className="w-20 h-20 rounded-full bg-gray-300 mb-2" />
          <div className="font-semibold text-base">
            {user?.displayName || "Anonymous"}
          </div>
          <div className="text-xs text-gray-500">{user?.email || "No email"}</div>
        </div>

        <nav className="space-y-5">
          <SidebarItem icon={<FaHome />} label="Home" />
          <SidebarItem icon={<FaHeart />} label="Adoptions" />
          <SidebarItem icon={<FaStar />} label="Favorites" />
          <SidebarItem icon={<FaEnvelope />} label="Messages" />
          <SidebarItem icon={<FaCog />} label="Settings" active />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-10 py-12 bg-white">
        <h1 className="text-xl font-semibold mb-8">Settings</h1>

        <Section title="Profile">
          <Field label="Name" value={user?.displayName || "Not set"} />
          <Field label="Email" value={user?.email || "Not set"} />
          <Field label="UID" value={user?.uid || "Not available"} />
        </Section>

        <Section title="Notifications">
          <Toggle
            label="Email notifications"
            description="Receive notifications about new animals needing help via email"
            enabled={emailNotifications}
            onChange={setEmailNotifications}
          />
          <Toggle
            label="Push notifications"
            description="Receive notifications via push"
            enabled={pushNotifications}
            onChange={setPushNotifications}
          />
        </Section>

        <Section title="Subscriptions">
          <Row label="Manage subscriptions" />
        </Section>

        <Section title="Donations">
          <Row label="Recent donations" />
        </Section>

        <Section title="Preferences">
          <Row label="Preferred ways to help" />
        </Section>

        <Section title="Account">
          <Row label="Delete account" />
        </Section>
      </main>
    </div>
  );
};

// COMPONENTS

const SidebarItem = ({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) => (
  <div
    className={`flex items-center gap-3 cursor-pointer px-2 py-1 rounded-md ${
      active ? "text-blue-600 font-semibold bg-blue-50" : "hover:text-blue-600"
    }`}
  >
    <div className="text-lg">{icon}</div>
    <span>{label}</span>
  </div>
);

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mb-10">
    <h2 className="text-sm font-medium mb-4">{title}</h2>
    <div className="space-y-4">{children}</div>
  </div>
);

const Field = ({
  label,
  value,
  isLink = false,
}: {
  label: string;
  value: string;
  isLink?: boolean;
}) => (
  <div className="flex justify-between items-center border-b pb-2">
    <div>
      <div className="text-gray-500">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
    {isLink && <FaPen className="text-gray-400 hover:text-blue-600 cursor-pointer" />}
  </div>
);

const Toggle = ({
  label,
  description,
  enabled,
  onChange,
}: {
  label: string;
  description: string;
  enabled: boolean;
  onChange: (v: boolean) => void;
}) => (
  <div className="flex justify-between items-start border-b pb-2">
    <div>
      <div className="font-medium">{label}</div>
      <div className="text-xs text-gray-500">{description}</div>
    </div>
    <Switch
      checked={enabled}
      onChange={onChange}
      className={`${
        enabled ? "bg-blue-600" : "bg-gray-300"
      } relative inline-flex h-5 w-10 items-center rounded-full`}
    >
      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition" />
    </Switch>
  </div>
);

const Row = ({ label }: { label: string }) => (
  <div className="flex justify-between items-center border-b pb-2 cursor-pointer hover:text-blue-600">
    <div>{label}</div>
    <FaChevronRight className="text-gray-400" />
  </div>
);

export default Account;
