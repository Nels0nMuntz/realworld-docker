export function Header() {
  const handleRequest = () => {
    fetch('/api/user/123')
      .then((response) => response.json())
      .then(data => {
        console.log({data});        
      })  
      .catch(err => console.log({err}))
  }
  return <header className='h-header flex-shrink-0 border-b border-grays-muted flex items-center justify-center'>
    <button className="p-2 border-[2px] border-solid border-gray-400 rounded-sm" onClick={handleRequest}>Make a request here...</button>
  </header>;
}
