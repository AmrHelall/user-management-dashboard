import { useState , useEffect } from "react";
import { User } from "../data/users";

export function useUsers(users: User[]) {
const [search, setSearch] = useState("");
const [status, setStatus] = useState<"all" | "active" | "inactive">("all");
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState<string | null>(null);
const filteredUsers = users.filter((user) => {
const searchMatch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());
    const statusMatch = status === "all" || user.status === status;
    return searchMatch && statusMatch;
  });
  const ITEMS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
  useEffect(() => {
    setCurrentPage(1);
  }, [search, status]);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedUsers = filteredUsers.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const shouldFail = false;
      if (shouldFail) {
        setError("Failed to load users.");
      }
      setIsLoading(false);
    }, 1000);
  }, []);

  return {
    search,
    setSearch,
    status,
    setStatus,
    paginatedUsers,
    currentPage,
    setCurrentPage,
    totalPages,
    isLoading,
    error,
  }
};