'use client';

import React, { useEffect, useState } from 'react';
import Button from '@/app/components/button';

interface MagicButtonProps {}

export default function MagicButton({ ...props }: MagicButtonProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 2) {
      throw new Error('Unexpected error');
    }
  }, [count]);
  return (
    <Button {...props} onClick={() => setCount(count + 1)}>
      Magic button
    </Button>
  );
}
