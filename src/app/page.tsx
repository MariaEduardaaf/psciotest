export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Icon */}
        <div className="mx-auto w-16 h-16 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
          <svg
            className="w-8 h-8 text-white/30"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Message */}
        <div className="space-y-3">
          <h1 className="text-white/90 text-xl font-medium">
            Este domínio está com pendências
          </h1>
          <p className="text-white/40 text-sm leading-relaxed">
            Entre em contato com o administrador.
          </p>
        </div>

        {/* Divider */}
        <div className="w-12 h-px bg-white/[0.08] mx-auto" />

        {/* Footer */}
        <p className="text-white/20 text-xs">
          Serviço temporariamente suspenso
        </p>
      </div>
    </div>
  );
}
