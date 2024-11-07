interface UserType {
  name: string;
  age: number;
  email: string;
}

const user: UserType = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
};

const updateProfile = (myProfile: UserType, updatedData: Partial<UserType>) => {
  const profileUpdatedData = {
    ...myProfile,
    ...updatedData,
  };
  return profileUpdatedData;
};

console.log(updateProfile(user, { age: 29 }));
