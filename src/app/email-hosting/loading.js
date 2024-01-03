import { ImSpinner2 } from 'react-icons/im';

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <p className="text-6xl text-domain h-6 w-6">
        <ImSpinner2 className="animate-spin-fast" />
      </p>
    </div>
  );
}
