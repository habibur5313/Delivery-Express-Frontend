import { UpdateStatus } from "@/pages/admin/UpdateStatus";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const Analytics = lazy(() => import("@/pages/admin/Analytics"));
const ManageAllUsers = lazy(() => import("@/pages/admin/ManageAllUsers"));
const ManageAllParcels = lazy(() => import("@/pages/admin/ManageAllParcels"));

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: Analytics,
      },
      {
        title: "manage all users",
        url: "/admin/all-users",
        component: ManageAllUsers,
      },
      {
        title: " manage all parcels",
        url: "/admin/all-parcels",
        component: ManageAllParcels,
      },
      {
        title: " update parcel status",
        url: "/admin/update-status",
        component: UpdateStatus,
      },
    ],
  },
];