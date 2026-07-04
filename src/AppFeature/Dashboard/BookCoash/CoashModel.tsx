import type { Coach } from "@/data/Coaches";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalAvatar,
  ModalName,
  ModalTitle,
  ModalRating,
  ModalCloseButton,
  ModalBody,
  ModalSection,
  ModalSectionTitle,
  ModalBio,
  ModalStatsGrid,
  ModalStat,
  ModalStatValue,
  ModalStatLabel,
  TagList,
  Tag,
  InfoRow,
  InfoIcon,
  InfoLabel,
  InfoValue,
  ModalFooter,
  SubscribeButton,
  CancelButton,
  Stars,
} from "./style";
import { useEffect } from "react";

interface CoachModalProps {
  coach: Coach | null;
  onClose: () => void;
}

export default function CoachModal({ coach, onClose }: CoachModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (coach) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [coach, onClose]);

  if (!coach) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <ModalHeader $gradient={coach.gradient}>
          <ModalCloseButton onClick={onClose}>✕</ModalCloseButton>
          <ModalAvatar $gradient={coach.gradient}>{coach.initials}</ModalAvatar>
          <ModalName>{coach.name}</ModalName>
          <ModalTitle>{coach.title}</ModalTitle>
          <ModalRating>
            <Stars>★★★★★</Stars>
            <span
              style={{ color: "#F0F6FF", fontWeight: 700, fontSize: "0.9rem" }}
            >
              {coach.rate}
            </span>
            <span style={{ color: "#7A90B3", fontSize: "0.8rem" }}>
              ({coach.reviews} reviews)
            </span>
          </ModalRating>
        </ModalHeader>

        <ModalBody>
          <ModalSection>
            <ModalSectionTitle>About</ModalSectionTitle>
            <ModalBio>{coach.bio}</ModalBio>
          </ModalSection>

          <ModalSection>
            <ModalStatsGrid>
              <ModalStat>
                <ModalStatValue>{coach.experience}+</ModalStatValue>
                <ModalStatLabel>Years Exp</ModalStatLabel>
              </ModalStat>
              <ModalStat>
                <ModalStatValue>
                  {coach.sessionsCompleted.toLocaleString()}
                </ModalStatValue>
                <ModalStatLabel>Sessions</ModalStatLabel>
              </ModalStat>
              <ModalStat>
                <ModalStatValue>{coach.reviews}</ModalStatValue>
                <ModalStatLabel>Reviews</ModalStatLabel>
              </ModalStat>
            </ModalStatsGrid>
          </ModalSection>

          <ModalSection>
            <ModalSectionTitle>Certifications</ModalSectionTitle>
            <TagList>
              {coach.certifications.map((cert, i) => (
                <Tag key={i}>{cert}</Tag>
              ))}
            </TagList>
          </ModalSection>

          <ModalSection>
            <ModalSectionTitle>Details</ModalSectionTitle>
            <InfoRow>
              <InfoIcon>💰</InfoIcon>
              <InfoLabel>Price per session</InfoLabel>
              <InfoValue>${coach.price}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoIcon>🗣️</InfoIcon>
              <InfoLabel>Languages</InfoLabel>
              <InfoValue>{coach.languages.join(", ")}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoIcon>📅</InfoIcon>
              <InfoLabel>Availability</InfoLabel>
              <InfoValue>{coach.availability}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoIcon>🎯</InfoIcon>
              <InfoLabel>Specialty</InfoLabel>
              <InfoValue>{coach.specialty}</InfoValue>
            </InfoRow>
          </ModalSection>
        </ModalBody>

        <ModalFooter>
          <CancelButton onClick={onClose}>Close</CancelButton>
          <SubscribeButton>Subscribe — ${coach.price}/session</SubscribeButton>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
}
