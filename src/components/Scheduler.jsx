import React, { useState } from 'react'

const Scheduler = () => {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [appointments, setAppointments] = useState([])

  const avaliableTimes = ['09:00', '10:00', '11:00', '14:00', '15:00']

  const schedule = () => {
    if (!name || !date || !time) return alert('Preencha todos os campos!')

    const alreadyExist = appointments.some(
      a => a.date === date && a.time === time
    )

    if (alreadyExist) {
      alert('Esse horário já está agendado!')
      return
    }

    const novo = { name, date, time }
    setAppointments([...appointments, novo])
    setName('')
    setDate('')
    setTime('')
  }

  return (
    <div className="scheduler">
      <input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)}/>
      <input type="date" value={date} onChange={e => setDate(e.target.value)} />

      <select value={time} onChange={e => setTime(e.target.value)}>
        <option value="">Selecione um horário</option>
        {avaliableTimes.map(h => (
          <option key={h} value={h}>  {h} </option>
        ))}
      </select>

      <button onClick={schedule}>Agendar</button>
      <h3>Horários Agendados:</h3>
      <ul>
        {appointments.map((a, index) => (
          <li key={index}>
            {a.name} - {a.date} às {a.time}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Scheduler