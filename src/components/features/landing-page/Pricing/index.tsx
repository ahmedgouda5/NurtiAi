'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Button } from '@/components/shared/Button';
import { Modal } from '@/components/shared/Modal';
import { useModal } from '@/hooks/useModal';
import { fadeUp, staggerContainer } from '@/utils/animations';
import { FeaturedTag, Grid, Item, List, Name, Plan, Price, Section } from './styles';

const plans = [
  {
    name: 'Starter',
    price: '$19',
    items: ['Food scanning', 'Basic dashboard', 'Weekly habit reminders'],
  },
  {
    name: 'Pro',
    price: '$49',
    featured: true,
    items: ['Advanced analytics', 'Coach sessions', 'Meal prediction', 'Dashboard workflows'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    items: ['Teams', 'Role-based access', 'White-label flows', 'Priority support'],
  },
];

export function Pricing() {
  const paymentModal = useModal();

  return (
    <Section id="pricing">
      <div className="container">
        <SectionTitle
          eyebrow="Pricing"
          title={<>Simple packaging with enough room for premium healthcare workflows.</>}
          description="The payment path can open a modal so conversion remains in flow instead of pushing the user away."
        />

        <Grid as={motion.div} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {plans.map((plan) => (
            <Plan key={plan.name} $featured={plan.featured} as={motion.article} variants={fadeUp}>
              {plan.featured ? <FeaturedTag>Most popular</FeaturedTag> : null}
              <Name>{plan.name}</Name>
              <Price>{plan.price}</Price>
              <List>
                {plan.items.map((item) => (
                  <Item key={item}>{item}</Item>
                ))}
              </List>
              <Button variant={plan.featured ? 'primary' : 'secondary'} onClick={paymentModal.onOpen} fullWidth>
                Choose plan
              </Button>
            </Plan>
          ))}
        </Grid>
      </div>

      <Modal
        isOpen={paymentModal.open}
        onClose={paymentModal.onClose}
        title="Payment modal"
        description="A premium checkout overlay for plan upgrades and session purchases."
      >
        <Button fullWidth onClick={paymentModal.onClose}>
          Confirm payment
        </Button>
      </Modal>
    </Section>
  );
}

