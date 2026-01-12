import { useParams, useNavigate } from "react-router-dom";
import { User } from "../../data/users";

type userDetailsProps = {
  users: User[];
  onToggleUserStatus: (id: number) => void;
};
export function UserDetails({ users, onToggleUserStatus }: userDetailsProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div className="flex justify-center mt-10">
      <div className="  w-4/5 flex flex-col p-4 border border-gray-300 rounded-lg pt-10 gap-4">
        <h2 className="font-bold">{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
        <p>Status: {user.status}</p>
        <button
          className="bg-red-700 text-white px-4 py-2 rounded-md mt-4 w-40 flex justify-center hover:bg-red-500"
          onClick={() => {
            onToggleUserStatus(user.id);
            navigate("/users");
          }}
        >
          {user.status === "active" ? "Deactivate" : "Activate"}
        </button>
      </div>
    </div>
  );
}
