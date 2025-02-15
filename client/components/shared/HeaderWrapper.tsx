// components/HeaderWrapper.tsx
'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/shared/Header';

const ROUTES_WITHOUT_HEADER = ['/profile', '/home/interview'];

export default function HeaderWrapper() {
  const pathname = usePathname();
  const showHeader = !ROUTES_WITHOUT_HEADER.some(route => pathname?.startsWith(route));

  if (!showHeader) return null;
  return <Header />;
}