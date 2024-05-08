import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserprofileForm from "@/form/user-profile-form/UserProfileForm";
export default function UserProfilePage() {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updateuser, isLoading: isUpdateLoading } = useUpdateMyUser();

  if (isGetLoading) {
    return <span>Loading ..</span>;
  }

  if (!currentUser) {
    return <span>Unable to load user profile</span>;
  }

  return (
    <UserprofileForm
      currentUser={currentUser}
      onSave={updateuser}
      isLoading={isUpdateLoading}
    />
  );
}
