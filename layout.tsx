
export const metadata = {
  title: "ACNAA FERME",
  description: "Ferme moderne - vente d'animaux d'élevage"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body style={{fontFamily:"Arial", margin:0, padding:0}}>
        {children}
      </body>
    </html>
  )
}
