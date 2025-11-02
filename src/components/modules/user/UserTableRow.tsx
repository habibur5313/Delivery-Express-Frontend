/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";

export const UserTableRow = ({
  user,
  handleToggle,
  isLoading,
}: {
  user: any;
  handleToggle: any;
  isLoading: boolean;
}) => {
  return (
    <TableRow>
      <TableCell className="font-medium">{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>
        <Badge
          variant={user.role === "ADMIN" ? "destructive" : "secondary"}
          className="capitalize"
        >
          {user.role}
        </Badge>
      </TableCell>
      <TableCell>
        <Badge
          variant={
            user.isActive === "ACTIVE"
              ? "default"
              : user.isActive === "BLOCKED"
              ? "destructive"
              : "outline"
          }
          className="capitalize"
        >
          {user.isActive}
        </Badge>
      </TableCell>
      <TableCell className="text-center">
        <Button
          variant={user.isActive === "ACTIVE" ? "destructive" : "default"}
          size="sm"
          disabled={isLoading}
          onClick={() => handleToggle(user._id, user.isActive)}
        >
          {user.isActive === "ACTIVE"
            ? "Block"
            : user.isActive === "BLOCKED"
            ? "Unblock"
            : "Activate"}
        </Button>
      </TableCell>
    </TableRow>
  );
};
