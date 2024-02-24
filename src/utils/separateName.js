export const separateName = (fullName) => {
  const [firstName, lastName] = fullName?.split(" ") || [];
  return { firstName, lastName };
};
