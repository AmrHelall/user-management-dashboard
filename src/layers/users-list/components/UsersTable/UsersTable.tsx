import { useNavigate } from "react-router-dom";
import { User } from "../../../../data/users";

type UsersTableProps = {
  users: User[];
};

export function UsersTable({ users }: UsersTableProps) {
  const navigate = useNavigate();
  return (
    <div className="overflow-x-auto mt-4">
      <table className="w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left ">Name</th>
            <th className="px-4 py-3 text-left ">Email</th>
            <th className="px-4 py-3 text-left ">Role</th>
            <th className="px-4 py-3 text-left ">Status</th>
          </tr>
        </thead>

        <tbody>
          {users.length === 0 ? (
            <tr>
              <td>No users found.</td>
            </tr>
          ) : null}
          {users.map((user) => (
            <tr
              key={user.id}
              onClick={() => navigate(`/users/${user.id}`)}
              className="cursor-pointer hover:bg-gray-50"
            >
              <td className="px-4 py-3 text-left ">{user.name}</td>
              <td className="px-4 py-3 text-left ">{user.email}</td>
              <td className="px-4 py-3 text-left ">{user.role}</td>
              <td className="px-4 py-3 text-left ">{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
