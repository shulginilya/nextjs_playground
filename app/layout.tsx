export default function RootLayout({
    children,
}: {
    children: react.ReactNode
}) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    )
}
