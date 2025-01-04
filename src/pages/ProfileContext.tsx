import React, { createContext, useContext, useState } from "react";

export type InvestmentProfile =
  | "안전형 투자자"
  | "균형형 투자자"
  | "공격형 투자자";

interface ProfileContextProps {
  profile: InvestmentProfile | null;
  setProfile: React.Dispatch<React.SetStateAction<InvestmentProfile | null>>;
}

const ProfileContext = createContext<ProfileContextProps | undefined>(
  undefined
);

export const ProfileProvider: React.FC = ({ children }) => {
  const [profile, setProfile] = useState<InvestmentProfile | null>(null);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
};
