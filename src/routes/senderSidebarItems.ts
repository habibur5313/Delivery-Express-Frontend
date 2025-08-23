import createParcelDeliveryRequests from "@/pages/sender/CreateParcelDeliveryRequests";
import type { ISidebarItem } from "@/types";

export const senderSidebarItems: ISidebarItem[] = [
  {
    title: "History",
    items: [
      {
        title: "Create parcel delivery request",
        url: "/sender/parcel-request",
        component: createParcelDeliveryRequests,
      },
    ],
  },
];
