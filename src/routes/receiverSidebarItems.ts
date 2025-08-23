import createParcelDeliveryRequests from "@/pages/sender/CreateParcelDeliveryRequests";
import type { ISidebarItem } from "@/types";

export const receiverSidebarItems: ISidebarItem[] = [
  {
    title: "History",
    items: [
      {
        title: "Create parcel delivery request",
        url: "/receiver/View-incoming-parcels",
        component: createParcelDeliveryRequests,
      },
    ],
  },
];