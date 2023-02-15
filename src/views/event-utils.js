
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    //임시 데이터
    id: createEventId(),
    title: 'All-day event',
    start: todayStr
  }
]

export function createEventId() {
  return String(eventGuid++)
}