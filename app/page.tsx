'use client'

import { useMemo, useState } from 'react'

type Task = { id: number; title: string; tag: string; done: boolean }

const starterTasks: Task[] = [
  { id: 1, title: 'Review project brief', tag: 'Work', done: true },
  { id: 2, title: 'Reply to priority emails', tag: 'Work', done: false },
  { id: 3, title: 'Book a morning walk', tag: 'Personal', done: false },
  { id: 4, title: 'Read 20 pages', tag: 'Personal', done: false },
]

const filters = ['All tasks', 'Today', 'Work', 'Personal']

export default function Home() {
  const [tasks, setTasks] = useState(starterTasks)
  const [filter, setFilter] = useState('All tasks')
  const [draft, setDraft] = useState('')

  const visibleTasks = useMemo(() => tasks.filter((task) => {
    if (filter === 'All tasks' || filter === 'Today') return true
    return task.tag === filter
  }), [tasks, filter])

  const completed = tasks.filter((task) => task.done).length
  const addTask = () => {
    const title = draft.trim()
    if (!title) return
    setTasks((current) => [...current, { id: Date.now(), title, tag: 'Today', done: false }])
    setDraft('')
  }

  return (
    <main className="shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-mark">✓</span><span>Daymark</span></div>
        <p className="eyebrow">Workspace</p>
        <nav aria-label="Task views">
          {filters.map((item) => (
            <button className={`nav-item ${filter === item ? 'active' : ''}`} key={item} onClick={() => setFilter(item)}>
              <span className="nav-icon">{item === 'All tasks' ? '◈' : item === 'Today' ? '◷' : item === 'Work' ? '▣' : '♡'}</span>{item}
              {item === 'All tasks' && <span className="count">{tasks.length}</span>}
            </button>
          ))}
        </nav>
        <div className="sidebar-note"><span>✦</span><div><strong>Small steps.</strong><br />Big momentum.</div></div>
      </aside>

      <section className="content">
        <header className="topbar"><div><p className="date">MONDAY, SEPTEMBER 8, 2026</p><h1>Good morning, Alex<span>.</span></h1></div><button className="avatar" aria-label="Open profile">AL</button></header>
        <div className="overview"><div><p className="section-kicker">Your focus</p><h2>Make today count</h2><p className="muted">{completed} of {tasks.length} tasks complete</p></div><div className="progress-wrap"><div className="progress-label"><span>Daily progress</span><strong>{tasks.length ? Math.round((completed / tasks.length) * 100) : 0}%</strong></div><div className="progress"><span style={{ width: `${tasks.length ? (completed / tasks.length) * 100 : 0}%` }} /></div></div></div>

        <div className="task-header"><div><p className="section-kicker">{filter === 'All tasks' ? 'Today' : filter}</p><h2>{visibleTasks.length} tasks</h2></div><div className="view-toggle"><button className="selected" aria-label="List view">☷</button><button aria-label="Grid view">⊞</button></div></div>
        <div className="task-list">
          {visibleTasks.map((task) => <div className={`task ${task.done ? 'done' : ''}`} key={task.id}><button className="checkbox" onClick={() => setTasks((current) => current.map((item) => item.id === task.id ? { ...item, done: !item.done } : item))} aria-label={task.done ? `Mark ${task.title} incomplete` : `Complete ${task.title}`}>{task.done ? '✓' : ''}</button><span className="task-title">{task.title}</span><span className={`tag ${task.tag.toLowerCase()}`}>{task.tag}</span><button className="more" aria-label={`More options for ${task.title}`}>···</button></div>)}
          {visibleTasks.length === 0 && <div className="empty">Nothing here yet. Add a task to get moving.</div>}
        </div>
        <div className="add-row"><input value={draft} onChange={(event) => setDraft(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter' && !event.nativeEvent.isComposing && event.keyCode !== 229) addTask() }} placeholder="What needs to be done?" aria-label="New task" /><button onClick={addTask}>＋ Add task</button></div>
        <p className="tip">Tip: Keep your list focused. The best to-do list is the one you can finish.</p>
      </section>
      <style jsx>{`*{box-sizing:border-box}.shell{min-height:100vh;background:#f7f8f5;color:#25352e;display:flex;font-family:Arial,sans-serif}.sidebar{width:240px;background:#eef1eb;padding:35px 22px;display:flex;flex-direction:column}.brand{font-size:21px;font-weight:700;letter-spacing:-.04em;display:flex;gap:10px;align-items:center;margin-bottom:65px}.brand-mark{display:grid;place-items:center;background:#315f4c;color:#fff;width:27px;height:27px;border-radius:8px;font-size:16px}.eyebrow,.section-kicker,.date{font-size:11px;letter-spacing:.13em;text-transform:uppercase;color:#8a968d;font-weight:700}.eyebrow{padding-left:12px;margin-bottom:14px}.nav-item{width:100%;border:0;background:none;color:#718078;text-align:left;padding:12px;border-radius:10px;font-size:14px;display:flex;align-items:center;gap:12px;cursor:pointer;margin-bottom:3px}.nav-item.active{background:#dce7dd;color:#315f4c;font-weight:700}.nav-icon{font-size:18px;width:18px;text-align:center}.count{margin-left:auto;font-size:12px}.sidebar-note{margin-top:auto;border-top:1px solid #d7ded5;padding:20px 10px;color:#738078;font-size:12px;line-height:1.6;display:flex;gap:10px}.sidebar-note span{color:#c69a45;font-size:18px}.sidebar-note strong{color:#315f4c}.content{width:min(920px,100%);margin:0 auto;padding:55px 70px}.topbar{display:flex;justify-content:space-between;align-items:flex-start}.date{margin:0 0 13px}h1{font-size:34px;letter-spacing:-.05em;margin:0;font-weight:700}h1 span{color:#c69a45}.avatar{border:0;background:#315f4c;color:#fff;width:40px;height:40px;border-radius:50%;font-size:12px;font-weight:700}.overview{margin-top:55px;background:#315f4c;color:#fff;border-radius:17px;padding:27px 31px;display:flex;justify-content:space-between;align-items:end}.overview .section-kicker{color:#aec4b1;margin:0 0 8px}.overview h2{margin:0 0 5px;font-size:24px;letter-spacing:-.04em}.muted{margin:0;color:#c6d7c8;font-size:13px}.progress-wrap{width:225px}.progress-label{display:flex;justify-content:space-between;color:#c6d7c8;font-size:11px;margin-bottom:9px}.progress-label strong{color:#fff}.progress{height:6px;background:#557a66;border-radius:8px;overflow:hidden}.progress span{display:block;height:100%;background:#e4b35a;border-radius:8px;transition:width .25s}.task-header{display:flex;justify-content:space-between;align-items:end;margin:48px 0 18px}.section-kicker{margin:0 0 7px}.task-header h2{font-size:23px;margin:0;letter-spacing:-.04em}.view-toggle{display:flex;gap:3px}.view-toggle button{border:0;background:none;color:#9ca79f;font-size:20px;padding:4px 7px;cursor:pointer}.view-toggle .selected{color:#315f4c;background:#e5ebe4;border-radius:6px}.task-list{border-top:1px solid #dfe5de}.task{min-height:64px;border-bottom:1px solid #dfe5de;display:flex;align-items:center;gap:14px}.checkbox{width:20px;height:20px;border:1.5px solid #9eaaa0;background:transparent;border-radius:6px;color:#fff;font-weight:bold;cursor:pointer}.done .checkbox{background:#315f4c;border-color:#315f4c}.task-title{font-size:14px;flex:1}.done .task-title{text-decoration:line-through;color:#a7b0aa}.tag{font-size:11px;padding:5px 9px;border-radius:20px;background:#e7eee6;color:#557062}.tag.personal{background:#f3ebdc;color:#a2783b}.more{border:0;background:none;color:#a6afa8;letter-spacing:2px;cursor:pointer}.add-row{display:flex;margin-top:22px;gap:10px}.add-row input{flex:1;background:#fff;border:1px solid #d9e1d8;border-radius:9px;padding:13px 15px;font:inherit;font-size:13px;outline:none}.add-row input:focus{border-color:#74967c;box-shadow:0 0 0 3px #dce7dd}.add-row button{border:0;background:#c69a45;color:#fff;border-radius:9px;padding:0 18px;font-weight:700;cursor:pointer}.tip{text-align:center;color:#9ba69e;font-size:11px;margin-top:37px}.empty{text-align:center;padding:30px;color:#9ba69e;font-size:14px}@media(max-width:700px){.sidebar{width:68px;padding:22px 10px}.brand span:last-child,.eyebrow,.nav-item:not(.active)::after,.nav-item{font-size:0}.brand{margin-bottom:45px;justify-content:center}.nav-item{justify-content:center;padding:12px}.nav-item.active{font-size:0}.nav-icon{font-size:18px}.count,.sidebar-note{display:none}.content{padding:35px 22px}.overview{display:block;margin-top:35px;padding:23px}.progress-wrap{width:100%;margin-top:22px}.topbar h1{font-size:28px}.tag{display:none}.add-row{flex-direction:column}.add-row button{padding:13px}.task{gap:10px}}`}</style>
    </main>
  )
}
