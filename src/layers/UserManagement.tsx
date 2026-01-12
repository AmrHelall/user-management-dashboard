import { Route, Routes, Navigate } from "react-router-dom";
import { UserDetails } from "./user-details/UserDetails";
import { UsersList } from "./users-list/UsersList";
import { users, User } from ".././data/users";
import { useEffect, useState } from "react";

export function UserManagement() {
  const [userData, setUserData] = useState<User[]>(() => {
    const saved = localStorage.getItem("users");
    return saved ? JSON.parse(saved) : users;
  });
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(userData));
  }, [userData]);
  function toggleUserStatus(id: number) {
    setUserData((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id
          ? {
              ...user,
              status: user.status === "active" ? "inactive" : "active",
            }
          : user
      )
    );
  }
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/users" replace />} />

      <Route path="/users" element={<UsersList users={userData} />} />
      <Route
        path="/users/:id"
        element={
          <UserDetails users={userData} onToggleUserStatus={toggleUserStatus} />
        }
      />
    </Routes>
  );
}
