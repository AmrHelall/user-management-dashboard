import { UsersTable } from "./components/UsersTable/UsersTable";
import { SearchInputs } from "./components/SearchInput/SearchInput";
import { User } from "../../data/users";
import { StatusFilters } from "./components/StatusFilters/StatusFilters";
import { Pagination } from "./components/Pagination/Pagination";
import { useUsers } from "../../hooks/useUsers";

type UsersListProps = {
  users: User[];
};
export function UsersList({ users }: UsersListProps) {
  const {
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
  } = useUsers(users);

  if (isLoading) {
    return <div>Loading users...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="p-4">
      <SearchInputs value={search} onChange={setSearch} />
      <StatusFilters value={status} onChange={setStatus} />
      <UsersTable users={paginatedUsers} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
