import Section from 'components/Section';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import ContactEditor from 'components/ContactEditor';

import { Container } from 'pages/Pages.styled';

export default function Home() {

  return (
    <Container>
        <Section title="Add Contact">
          <ContactEditor />
        </Section>
      <Section title="Filter Contacts">
        <Filter />
      </Section>
      <Section title="Contacts List">
        <ContactsList />
      </Section>
    </Container>
  );
}
