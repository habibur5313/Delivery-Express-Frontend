import cancelParcel from "@/pages/sender/cancelParcel";
import createParcelDeliveryRequests from "@/pages/sender/createParcelDeliveryRequests";
import viewAllCreatedParcels from "@/pages/sender/viewAllCreatedParcels";
import type { ISidebarItem } from "@/types";

export const senderSidebarItems: ISidebarItem[] = [
  {
    title: "Delivery express",
    items: [
      {
        title: "Create parcel delivery request",
        url: "/sender/parcel-request",
        component: createParcelDeliveryRequests,
      },
      {
        title: "Cancel parcel",
        url: "/sender/cancel-parcel",
        component: cancelParcel,
      },
      {
        title: "View all created parcels",
        url: "/sender/all-created-parcels",
        component: viewAllCreatedParcels,
      },
    ],
  },
];
