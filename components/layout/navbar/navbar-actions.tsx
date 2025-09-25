'use client';

import CartModal from 'components/cart/modal';
import { ModeToggle } from 'components/mode-toggle';

export function NavbarActions() {
  return (
    <div className="flex items-center justify-end gap-2 md:w-1/3">
      <ModeToggle />
      <CartModal />
    </div>
  );
}