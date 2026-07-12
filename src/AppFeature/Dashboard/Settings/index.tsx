"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaCrown } from "react-icons/fa";
import useUserStore from "@/store/User.Store";
import {
  SettingsPage,
  MainGrid,
  ProfileCard,
  AvatarCircle,
  ProfileName,
  ProfileEmail,
  MembershipBanner,
  MembershipTitle,
  MembershipDate,
  UpgradeButton,
  FormCard,
  FormTitle,
  FormGrid,
  FormGroup,
  Label,
  Input,
  Select,
  SaveButton,
} from "./style";

const goalOptions = [
  { value: "lose weight", label: "Lose Weight" },
  { value: "gain weight", label: "Gain Weight" },
  { value: "build muscle", label: "Build Muscle" },
  { value: "stay in shape", label: "Stay in Shape" },
];

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const maritalOptions = [
  { value: "single", label: "Single" },
  { value: "married", label: "Married" },
  { value: "divorced", label: "Divorced" },
  { value: "widowed", label: "Widowed" },
];

const financialOptions = [
  { value: "low", label: "Low" },
  { value: "middle", label: "Middle" },
  { value: "high", label: "High" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const SettingsDashboard = () => {
  const user = useUserStore((state) => state.user);

  const [formData, setFormData] = useState({
    firstName: user?.firstName ?? "",
    lastName: user?.lastName ?? "",
    email: user?.email ?? "",
    country: user?.country ?? "",
    city: user?.city ?? "",
    weight: user?.weight ?? 0,
    height: user?.height ?? 0,
    birthDate: user?.birthDate ?? "",
    gender: user?.gender ?? "male",
    goals: user?.goals ?? "lose weight",
    maritalStatus: user?.maritalStatus ?? "single",
    financialStatus: user?.financialStatus ?? "middle",
    healthConditions: user?.healthConditions?.join(", ") ?? "",
  });

  const memoizedGoalOptions = useMemo(() => goalOptions, []);
  const memoizedGenderOptions = useMemo(() => genderOptions, []);
  const memoizedMaritalOptions = useMemo(() => maritalOptions, []);
  const memoizedFinancialOptions = useMemo(() => financialOptions, []);

  const handleChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: persist changes back to Supabase
  };

  return (
    <SettingsPage>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <MainGrid>
          {/* ── Left: Profile Card ── */}
          <motion.div variants={itemVariants}>
            <ProfileCard>
              <AvatarCircle>
                {user
                  ? `${user.firstName?.[0] || ""}${user.lastName?.[0] || ""}`.toUpperCase()
                  : "?"}
              </AvatarCircle>
              <ProfileName>
                {user ? `${user.firstName} ${user.lastName}` : "—"}
              </ProfileName>
              <ProfileEmail>{user ? user.email : "—"}</ProfileEmail>

              <MembershipBanner>
                <MembershipTitle>
                  <FaCrown /> Pro Member
                </MembershipTitle>
                <MembershipDate>Renews Feb 20</MembershipDate>
              </MembershipBanner>

              <UpgradeButton type="button">
                Upgrade To Premium Coach
              </UpgradeButton>
            </ProfileCard>
          </motion.div>

          {/* ── Right: Form Card ── */}
          <motion.div variants={itemVariants}>
            <FormCard>
              <FormTitle>Profile Settings</FormTitle>
              <form onSubmit={handleSubmit}>
                <FormGrid>

                  {/* Personal Info */}
                  <FormGroup>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleChange("firstName", e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="birthDate">Birth Date</Label>
                    <Input
                      id="birthDate"
                      type="date"
                      value={formData.birthDate}
                      onChange={(e) => handleChange("birthDate", e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      type="text"
                      value={formData.country}
                      onChange={(e) => handleChange("country", e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      type="text"
                      value={formData.city}
                      onChange={(e) => handleChange("city", e.target.value)}
                    />
                  </FormGroup>

                  {/* Body Stats */}
                  <FormGroup>
                    <Label htmlFor="weight">Weight (KG)</Label>
                    <Input
                      id="weight"
                      type="number"
                      value={formData.weight}
                      onChange={(e) => handleChange("weight", Number(e.target.value))}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="height">Height (CM)</Label>
                    <Input
                      id="height"
                      type="number"
                      value={formData.height}
                      onChange={(e) => handleChange("height", Number(e.target.value))}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="gender">Gender</Label>
                    <Select
                      id="gender"
                      value={formData.gender}
                      onChange={(e) => handleChange("gender", e.target.value)}
                    >
                      {memoizedGenderOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </Select>
                  </FormGroup>

                  {/* Lifestyle */}
                  <FormGroup>
                    <Label htmlFor="goals">Goal</Label>
                    <Select
                      id="goals"
                      value={formData.goals}
                      onChange={(e) => handleChange("goals", e.target.value)}
                    >
                      {memoizedGoalOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </Select>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="maritalStatus">Marital Status</Label>
                    <Select
                      id="maritalStatus"
                      value={formData.maritalStatus}
                      onChange={(e) => handleChange("maritalStatus", e.target.value)}
                    >
                      {memoizedMaritalOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </Select>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="financialStatus">Financial Status</Label>
                    <Select
                      id="financialStatus"
                      value={formData.financialStatus}
                      onChange={(e) => handleChange("financialStatus", e.target.value)}
                    >
                      {memoizedFinancialOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </Select>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="healthConditions">Health Conditions</Label>
                    <Input
                      id="healthConditions"
                      type="text"
                      value={formData.healthConditions}
                      onChange={(e) => handleChange("healthConditions", e.target.value)}
                    />
                  </FormGroup>

                </FormGrid>

                <SaveButton type="submit">Save Changes</SaveButton>
              </form>
            </FormCard>
          </motion.div>
        </MainGrid>
      </motion.div>
    </SettingsPage>
  );
};

export default SettingsDashboard;
