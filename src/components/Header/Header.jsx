export default function Header() {
  return (
    <header className="header">
      <h1>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--accent-color)'}}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
        Student Information Portal
      </h1>
      <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
        <span style={{fontSize: '0.875rem', color: 'var(--text-secondary)'}}>Assignment 2</span>
      </div>
    </header>
  )
}
