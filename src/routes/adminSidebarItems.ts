import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const Analytics = lazy(() => import("@/pages/admin/Analytics"));
const manageAllUsers = lazy(() => import("@/pages/admin/ManageAllUsers"));
const manageAllParcels = lazy(() => import("@/pages/admin/manageAllParcels"));

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
        component: manageAllUsers,
      },
      {
        title: " manage all parcels",
        url: "/admin/all-parcels",
        component: manageAllParcels,
      },
    ],
  },
];