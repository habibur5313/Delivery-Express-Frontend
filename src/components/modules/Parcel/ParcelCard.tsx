import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router";

type Parcel = {
  _id: string;
  name: string;
  trackingId: string;
  status: string;
  senderInfo: {
    division: string;
    city: string;
    zip: number;
    street: string;
  };
  deliveryLocation: {
    division: string;
    city: string;
    zip: number;
    street: string;
  };
  weight: number;
  cost: number;
  pickUpDate: string;
  estimatedDeliveryDate: string;
};

interface ParcelCardProps {
  parcel: Parcel;
}

export const ParcelCard: React.FC<ParcelCardProps> = ({ parcel }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  const handleCancel = () => {
    console.log(parcel._id);
  };

  return (
    <Card className="w-full max-w-md mx-auto my-4">
      <CardHeader>
        <CardTitle>{parcel.name}</CardTitle>
        <CardDescription>Tracking ID: {parcel.trackingId}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 flex flex-col w-full h-full">
        <div className="flex justify-between">
          <span>Status:</span>
          <Badge
            variant={parcel.status === "REQUESTED" ? "outline" : "default"}
          >
            {parcel.status}
          </Badge>
        </div>
        <div>
          <strong>Sender:</strong> {parcel.senderInfo.division},{" "}
          {parcel.senderInfo.city}, {parcel.senderInfo.street} -{" "}
          {parcel.senderInfo.zip}
        </div>
        <div>
          <strong>Delivery Location:</strong> {parcel.deliveryLocation.division}
          , {parcel.deliveryLocation.city}, {parcel.deliveryLocation.street} -{" "}
          {parcel.deliveryLocation.zip}
        </div>
        <div>
          <strong>Weight:</strong> {parcel.weight} kg
        </div>
        <div>
          <strong>Cost:</strong> ${parcel.cost}
        </div>
        <div>
          <strong>Pick Up:</strong>{" "}
          {new Date(parcel.pickUpDate).toLocaleString()}
        </div>
        <div>
          <strong>Estimated Delivery:</strong>{" "}
          {new Date(parcel.estimatedDeliveryDate).toLocaleString()}
        </div>
        {pathname === "/sender/cancel-parcel" && (
          <div className="mt-auto flex justify-end">
            <Button variant="destructive" onClick={handleCancel}>
              Cancel Parcel
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
