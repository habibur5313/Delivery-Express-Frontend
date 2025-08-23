// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Input,
// } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { formatISO } from "date-fns";

// type ParcelForm = {
//   name: string;
//   trackingId: string;
//   senderInfo: {
//     division: string;
//     city: string;
//     zip: string;
//     street: string;
//   };
//   deliveryLocation: {
//     division: string;
//     city: string;
//     zip: string;
//     street: string;
//   };
//   sameDivision: boolean;
//   sender: string;
//   receiver: string;
//   status: string;
//   weight: number;
//   estimatedDeliveryDate: string;
//   pickUpDate: string;
//   deliveryDate: string | null;
//   cost: number;
// };

// export default function CreateParcelPage() {
//   const [parcel, setParcel] = useState<ParcelForm>({
//     name: "",
//     trackingId: `TRK${Math.floor(Math.random() * 1000000000)}`,
//     senderInfo: { division: "", city: "", zip: "", street: "" },
//     deliveryLocation: { division: "", city: "", zip: "", street: "" },
//     sameDivision: true,
//     sender: "",
//     receiver: "",
//     status: "REQUESTED",
//     weight: 0,
//     estimatedDeliveryDate: formatISO(new Date()),
//     pickUpDate: formatISO(new Date()),
//     deliveryDate: null,
//     cost: 0,
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     const keys = name.split(".");
//     if (keys.length === 1) {
//       setParcel((prev) => ({ ...prev, [name]: value }));
//     } else if (keys.length === 2) {
//       setParcel((prev) => ({
//         ...prev,
//         [keys[0]]: { ...prev[keys[0] as keyof ParcelForm], [keys[1]]: value },
//       }));
//     }
//   };

//   const handleSubmit = () => {
//     console.log(parcel);
//     alert("Parcel created! Check console for data.");
//   };

//   return (
//     <div className="container mx-auto py-12">
//       <h1 className="text-3xl font-bold mb-8 text-center">Create Parcel</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Parcel Info */}
//         <div className="space-y-4">
//           <div>
//             <Label>Name</Label>
//             <Input
//               name="name"
//               value={parcel.name}
//               onChange={handleChange}
//               placeholder="Electronics Parcel"
//             />
//           </div>
//           <div>
//             <Label>Tracking ID</Label>
//             <Input
//               name="trackingId"
//               value={parcel.trackingId}
//               disabled
//             />
//           </div>
//           <div>
//             <Label>Weight (kg)</Label>
//             <Input
//               name="weight"
//               type="number"
//               value={parcel.weight}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <Label>Cost (BDT)</Label>
//             <Input
//               name="cost"
//               type="number"
//               value={parcel.cost}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         {/* Sender Info */}
//         <div className="space-y-4">
//           <h2 className="font-semibold">Sender Info</h2>
//           <div>
//             <Label>Division</Label>
//             <Input
//               name="senderInfo.division"
//               value={parcel.senderInfo.division}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <Label>City</Label>
//             <Input
//               name="senderInfo.city"
//               value={parcel.senderInfo.city}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <Label>ZIP</Label>
//             <Input
//               name="senderInfo.zip"
//               value={parcel.senderInfo.zip}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <Label>Street</Label>
//             <Input
//               name="senderInfo.street"
//               value={parcel.senderInfo.street}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         {/* Delivery Location */}
//         <div className="space-y-4">
//           <h2 className="font-semibold">Delivery Location</h2>
//           <div>
//             <Label>Division</Label>
//             <Input
//               name="deliveryLocation.division"
//               value={parcel.deliveryLocation.division}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <Label>City</Label>
//             <Input
//               name="deliveryLocation.city"
//               value={parcel.deliveryLocation.city}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <Label>ZIP</Label>
//             <Input
//               name="deliveryLocation.zip"
//               value={parcel.deliveryLocation.zip}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <Label>Street</Label>
//             <Input
//               name="deliveryLocation.street"
//               value={parcel.deliveryLocation.street}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         {/* Dates & Status */}
//         <div className="space-y-4">
//           <h2 className="font-semibold">Dates & Status</h2>
//           <div>
//             <Label>Pick Up Date</Label>
//             <Input
//               type="date"
//               name="pickUpDate"
//               value={parcel.pickUpDate.split("T")[0]}
//               onChange={(e) =>
//                 setParcel((prev) => ({
//                   ...prev,
//                   pickUpDate: e.target.value,
//                 }))
//               }
//             />
//           </div>
//           <div>
//             <Label>Estimated Delivery Date</Label>
//             <Input
//               type="date"
//               name="estimatedDeliveryDate"
//               value={parcel.estimatedDeliveryDate.split("T")[0]}
//               onChange={(e) =>
//                 setParcel((prev) => ({
//                   ...prev,
//                   estimatedDeliveryDate: e.target.value,
//                 }))
//               }
//             />
//           </div>
//           <div>
//             <Label>Status</Label>
//             <Select
//               onValueChange={(value) =>
//                 setParcel((prev) => ({ ...prev, status: value }))
//               }
//             >
//               <SelectTrigger>
//                 <SelectValue>{parcel.status}</SelectValue>
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectGroup>
//                   <SelectItem value="REQUESTED">REQUESTED</SelectItem>
//                   <SelectItem value="IN_TRANSIT">IN_TRANSIT</SelectItem>
//                   <SelectItem value="DELIVERED">DELIVERED</SelectItem>
//                 </SelectGroup>
//               </SelectContent>
//             </Select>
//           </div>
//         </div>
//       </div>

//       <div className="mt-8 text-center">
//         <Button onClick={handleSubmit}>Create Parcel</Button>
//       </div>
//     </div>
//   );
// }
