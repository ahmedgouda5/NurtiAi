import { EmptyContainer, EmptyIcon, EmptyTitle, EmptyText } from "../style";

interface EmptyStateProps {
  icon: string;
  title: string;
  text: string;
}

const EmptyState = ({ icon, title, text }: EmptyStateProps) => {
  return (
    <EmptyContainer>
      <EmptyIcon>{icon}</EmptyIcon>
      <EmptyTitle>{title}</EmptyTitle>
      <EmptyText>{text}</EmptyText>
    </EmptyContainer>
  );
};

export default EmptyState;
