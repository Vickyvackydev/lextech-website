import React from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";

interface ModalProps {
  isOpen: boolean;
  isClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, isClose, children }: ModalProps) {
  return (
    <>
      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog as="div" className="relative z-10" onClose={isClose}>
          {/* Backdrop with opacity transition */}
          <TransitionChild
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogBackdrop className="fixed inset-0 bg-[#18181B]/50" />
          </TransitionChild>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              {/* Panel with bottom-to-top and opacity transition */}
              <TransitionChild
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 -translate-y-full"
                enterTo="opacity-100 -translate-y-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 -translate-y-0"
                leaveTo="opacity-0 -translate-y-full"
              >
                <DialogPanel className="lg:w-[1000px] h-[500px] bg-white w-full rounded-xl p-6 backdrop-blur-2xl overflow-y-scroll">
                  {children}
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
