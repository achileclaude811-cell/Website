import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AZOMBI CACHAREL PLANIFICATION',
  description: 'Votre assistant personnel de planification, de tâches et de projets.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fr" className="bg-[#0e0e11]"><body style={{ margin: 0 }}>{children}</body></html>
}
