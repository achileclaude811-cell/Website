import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Daymark — Make today count',
  description: 'A focused, interactive daily task list.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-[#f7f8f5]">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
