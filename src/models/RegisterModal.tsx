"use client";
import Modal from "@/components/ui/Modal";
import { useAuthModal } from "@/store/useAuthModalStore";
export const RegisterModal = () => {
  const { isRegisterOpen, closeRegister } = useAuthModal();
  return (
    <Modal title="Register" isOpen={isRegisterOpen} onClose={closeRegister}>
      <div className="mb-6 space-y-1">
        {/* header */}
        <h2 className="text-2xl font-semibold text-gray-900">
          Welcome to RoomSathi
        </h2>
        <p className="text-sm text-gray-500">Create an account</p>

        <form>
          
        </form>
      </div>
    </Modal>
  );
};
