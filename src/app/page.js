'use client';

export default function Home() {
  function handleLinkSubmit(ev) {
    ev.preventDefault();
    const url  = ev.target.querySelector('input');
  }
  return (
    <div>
      <form onSubmit={handleLinkSubmit}>
        link: <input name="url" type="url"/> <button type="submit">submit</button>
      </form>
    </div>
  );
}
