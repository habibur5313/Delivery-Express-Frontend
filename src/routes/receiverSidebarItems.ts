import confirmParcelDelivery from "@/pages/receiver/confirmParcelDelivery";
import viewDeliveryHistory from "@/pages/receiver/viewDeliveryHistory";
import viewIncomingParcels from "@/pages/receiver/viewIncomingParcels";
import type { ISidebarItem } from "@/types";

export const receiverSidebarItems: ISidebarItem[] = [
  {
    title: "History",
    items: [
      {
        title: "View incoming parcels",
        url: "/receiver/incoming-parcels",
        component: viewIncomingParcels,
      },
      {
        title: "Confirm parcel delivery",
        url: "/receiver/confirm-parcels",
        component: confirmParcelDelivery,
      },
      {
        title: "View delivery history",
        url: "/receiver/delivery-history",
        component: viewDeliveryHistory,
      },
      
    ],
  },
];