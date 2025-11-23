"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SupportModalProps {
  children: React.ReactNode; 
}

export default function SupportModal({ children }: SupportModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 backdrop-blur-sm" />

        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#121010] p-6 rounded-xl shadow-[0_0_15px_#00ff37] w-[90%] max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-white">Customer Support</h2>
            <Dialog.Close asChild>
              <button className="text-gray-400 hover:text-red-500 transition">
                <X />
              </button>
            </Dialog.Close>
          </div>

          <p className="text-gray-300 mb-6">
            Our support team will contact you shortly.
          </p>

          <div className="flex justify-end">
            <Dialog.Close asChild>
              <Button className="bg-neonGreen text-black hover:bg-green-500 transition">
                Close
              </Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
