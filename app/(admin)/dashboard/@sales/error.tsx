'use client';

import React from 'react';

interface ErrorComponentProps {
  error: Error;
}

export default function ErrorComponent({}: ErrorComponentProps) {
  return <div>Unexpected error inside slot sales</div>;
}
