"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaCrown } from "react-icons/fa";
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
  { value: "lose", label: "Lose Weight" },
  { value: "maintain", label: "Maintain Weight" },
  { value: "gain", label: "Gain Weight" },
  { value: "muscle", label: "Build Muscle" },
];

const activityOptions = [
  { value: "sedentary", label: "Sedentary" },
  { value: "light", label: "Lightly Active" },
  { value: "moderate", label: "Moderately Active" },
  { value: "very", label: "Very Active" },
];

const dietOptions = [
  { value: "none", label: "No Restrictions" },
  { value: "vegetarian", label: "Vegetarian" },
  { value: "vegan", label: "Vegan" },
  { value: "keto", label: "Keto" },
  { value: "lowcarb", label: "Low Carb" },
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
  const [formData, setFormData] = useState({
    goal: "lose",
    activity: "moderate",
    calories: 2200,
    water: 8,
    targetWeight: 70,
    diet: "none",
  });

  const memoizedGoalOptions = useMemo(() => goalOptions, []);
  const memoizedActivityOptions = useMemo(() => activityOptions, []);
  const memoizedDietOptions = useMemo(() => dietOptions, []);

  const handleChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <SettingsPage>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <MainGrid>
          <motion.div variants={itemVariants}>
            <ProfileCard>
              <AvatarCircle>SJ</AvatarCircle>
              <ProfileName>Sarah Johnson</ProfileName>
              <ProfileEmail>sarah@email.com</ProfileEmail>

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

          <motion.div variants={itemVariants}>
            <FormCard>
              <FormTitle>Profile Settings</FormTitle>
              <form onSubmit={handleSubmit}>
                <FormGrid>
                  <FormGroup>
                    <Label htmlFor="goal">Goal</Label>
                    <Select
                      id="goal"
                      value={formData.goal}
                      onChange={(e) => handleChange("goal", e.target.value)}
                    >
                      {memoizedGoalOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </Select>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="activity">Activity Level</Label>
                    <Select
                      id="activity"
                      value={formData.activity}
                      onChange={(e) => handleChange("activity", e.target.value)}
                    >
                      {memoizedActivityOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </Select>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="calories">Daily Calorie Goal</Label>
                    <Input
                      id="calories"
                      type="number"
                      value={formData.calories}
                      onChange={(e) =>
                        handleChange("calories", Number(e.target.value))
                      }
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="water">Water Goal (Glasses)</Label>
                    <Input
                      id="water"
                      type="number"
                      value={formData.water}
                      onChange={(e) =>
                        handleChange("water", Number(e.target.value))
                      }
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="targetWeight">Target Weight (KG)</Label>
                    <Input
                      id="targetWeight"
                      type="number"
                      value={formData.targetWeight}
                      onChange={(e) =>
                        handleChange("targetWeight", Number(e.target.value))
                      }
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="diet">Dietary Preference</Label>
                    <Select
                      id="diet"
                      value={formData.diet}
                      onChange={(e) => handleChange("diet", e.target.value)}
                    >
                      {memoizedDietOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </Select>
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
