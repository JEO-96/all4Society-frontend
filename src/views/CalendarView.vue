<script>
import { defineComponent } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import axios from 'axios';
import { listenerCount } from 'process'

export default defineComponent({
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin // needed for dateClick
        ],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: ''
        },
        initialView: 'dayGridMonth',
        initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents,
        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
      },
      currentEvents: [
      ]
    }
  }, 
  methods: {
    getAllEventsFromServer() {
      // Data 받아오기
       axios.get(`api/calendarview`)
        .then(response => {
        // 스프링 부트 이벤트 데이터 받아오기
        const data = response['data']
        // 받아온 이벤트 데이터에 넣어주기
         this.currentEvents = data
         console.log("data : ", data)
         console.log("currentEvents : ", this.currentEvents)
         console.log("INITIAL_EVENTS : ", INITIAL_EVENTS)
      }).catch(e => console.error(e)) 
    },
    handleWeekendsToggle() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends // update a property
    },
    handleDateSelect(selectInfo) {
      let title = prompt('일정을 적어주세요!')
      let calendarApi = selectInfo.view.calendar

      calendarApi.unselect() // clear date selection

      if (title) {
        calendarApi.addEvent({
          id: createEventId(),
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
        })
      }
    },
    handleEventClick(clickInfo) {
      if (confirm(`'${clickInfo.event.title}' 일정을 삭제하시겠습니까?`)) {
        clickInfo.event.remove()
      }
    },
    handleEvents(events) {
      this.currentEvents = events
      console.log(this.currentEvents)
    },
  },
  created() {
    this.getAllEventsFromServer();
  }
})
</script>

<template>
  <div id="header">

<!-- Inner -->
  <div class="inner">
    <header>
      <h1><router-link to="/">All4SOCIETY</router-link></h1>
      <hr />
      <p>AllTogether</p>
    </header>
  </div>

<!-- Nav -->
</div>
  <div class='demo-app'>
    <div class='demo-app-sidebar'>
      <div class='demo-app-sidebar-section'>
        <h2 style="color: #ffffff; margin-top: 20px;">뭐넣지</h2>
        <ul>
          <li>11111111111</li>
          <li>22222222222</li>
          <li>33333333333</li>
        </ul>
      </div>
      <div class='demo-app-sidebar-section'>
      </div>
      <div class='demo-app-sidebar-section'>
        <h2 style="color: #ffffff;">모든 일정 ({{ currentEvents.length }})</h2>
        <ul>
          <li v-for='event in currentEvents' :key='event.id'>
            <b style="color: #ffffff;">{{ event.start }}</b>&nbsp;
            <i>{{ event.title }}</i>
          </li>
        </ul>
      </div>
    </div>
    <div class='demo-app-main'>
      <FullCalendar
        class='demo-app-calendar'
        :options='calendarOptions'>
        <template v-slot:eventContent='arg'>
          <b>{{ arg.timeText }}</b>
          <i>{{ arg.event.title }}</i>
        </template>
      </FullCalendar>
    </div>
  </div>
</template>

<style lang='css'>

@font-face {
    font-family: 'Humanbumsuk';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-2@1.0/Humanbumsuk.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

h2 {
  margin: 0;
  font-size: 16px;
  color: #ffffff;
}

ul {
  margin: 0;
  padding: 0 0 0 1.5em;
}

li {
  margin: 1.5em 0;
  padding: 0;
}

b { /* used for event dates/times */
  margin-right: 3px;
}
.demo-app {
  display: flex;
  min-height: 100%;
  font-family: Humanbumsuk;
  font-size: 18px;
}

.demo-app-sidebar {
  width: 300px;
  line-height: 1.5;
  background: #483949;
  border-right: 1px solid #d3e2e8;
  color: #ffffff;
  font-size: 16px;
}

.demo-app-sidebar-section {
  padding: 2em;
}

.demo-app-main {
  flex-grow: 1;
  padding: 3em;
}
.demo-app-calendar{
  width: 100%;
}

.fc { /* the calendar root */
  max-width: 1100px;
  margin: 0 auto;
}

.fc-daygrid-day-number {
  color: #000000;
}

.fc-col-header-cell-cushion {
  color: #000000;
}

.fc-event-main {
  background-color: #483949;
  color: #ffffff;
}
.demo-app-sidebar-section {
  color: #ffffff;
}


</style>
