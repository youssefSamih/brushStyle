import Link from 'next/link';
import React from 'react';
import { LinkControl } from './style';

const CustomLink = ({ link, label }: { link?: string; label?: string }) => {
  return (
    <Link href={link ? link : '/'}>
      <LinkControl>{label ? label : 'Forgot password?'}</LinkControl>
    </Link>
  );
};

export default CustomLink;
