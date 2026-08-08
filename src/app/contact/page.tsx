import { ContactView } from '@/components/sections/ContactView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | ahmtstia',
  description: 'Get in touch with ahmtstia',
};

export default function ContactPage() {
  return <ContactView />;
}
