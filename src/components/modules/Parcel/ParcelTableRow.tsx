/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import type { IParcel } from "@/types";

export const ParcelTableRow = ({ parcel, handleUnblock, handleBlock }:{parcel: IParcel, handleUnblock: any, handleBlock: any}) => {
  return (
    <TableRow>
      <TableCell className="font-medium">{parcel.trackingId}</TableCell>
      <TableCell>{parcel.name}</TableCell>
      <TableCell>
        {parcel.senderInfo.city}, {parcel.senderInfo.division}
      </TableCell>
      <TableCell>
        {parcel.deliveryLocation.city}, {parcel.deliveryLocation.division}
      </TableCell>
      <TableCell>
        <Badge
          variant={
            parcel.status === "PENDING"
              ? "default"
              : parcel.status === "IN_TRANSIT"
              ? "secondary"
              : parcel.status === "DELIVERED"
              ? "outline"
              : "destructive"
          }
          className="capitalize"
        >
          {parcel.status}
        </Badge>
      </TableCell>
      <TableCell className="text-center">
        {parcel.isBlocked ? (
          <Button variant="outline" onClick={() => handleUnblock(parcel._id)}>
            Unblock
          </Button>
        ) : (
          <Button variant="destructive" onClick={() => handleBlock(parcel._id)}>
            Block
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
};
