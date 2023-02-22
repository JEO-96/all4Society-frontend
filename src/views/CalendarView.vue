<script>
import { defineComponent } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import axios from 'axios';
import { listenerCount } from 'process'
import {reactive, toRefs} from '@vue/reactivity';

export default defineComponent({
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: {
        timezone: 'local',
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
       events: []
      },
      currentEvents: [
      ],
      insertDate: [],
      removeDate: [],
    }
  }, 
  methods: {
    getAllEventsFromServer() {
      // Data 받아오기
       axios.get(`api/calendarview`)
        .then(response => {
        // 스프링 부트 이벤트 데이터 받아오기
        // 받아온 이벤트 데이터에 넣어주기
         this.currentEvents = response['data']
         this.calendarOptions.events = response['data']
         console.log("currentEvents : ", this.currentEvents)
         console.log("INITIAL_EVENTS : ", INITIAL_EVENTS)
      }).catch(e => console.error(e)) 
    },
    deleteData() {
       const headers = {"Content-Type":"application/json"};
      const body = {
        title : this.removeDate.title,
        start : this.removeDate.start,
        end : this.removeDate.end
      }
      const data = axios.post(`api/calendarDelete`, body, {headers});
    },
    sendData() {
      const headers = {"Content-Type":"application/json"};
      const body = {
        title : this.insertDate.title,
        start : this.insertDate.start,
        end : this.insertDate.end
      }
      console.log("insert calendar : " , body)
      const data = axios.post(`api/calendarInsert`, body, {headers});
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
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
        })
        this.insertDate = {
          title,
          start: selectInfo.start,
          end: selectInfo.end
        }
        console.log("콘솔에 찍어봐~", this.insertDate)
        this.sendData()
      }
    },
    handleEventClick(clickInfo) {
      if (confirm(`'${clickInfo.event.title}' 일정을 삭제하시겠습니까?`)) {
        clickInfo.event.remove()
        this.removeDate = {
          title : clickInfo.event.title,
          start: new Date(clickInfo.event.start).toISOString().replace(/T.*$/, ''),
          end : new Date(clickInfo.event.end).toISOString().replace(/T.*$/, ''),
        }
        console.log("삭제 데이터 : " , this.removeDate)
        this.deleteData()
      }
    },
    handleEvents(events) {
      this.currentEvents = events
      console.log(this.currentEvents)
    },
  },
  mounted() {
    this.getAllEventsFromServer();
  }
})

</script>

<template>
  <div id="header">


    <nav id="nav" >
      <router-link to="/">Home</router-link> |
      <router-link to="/registerSociety">동호회 게시판 생성</router-link> |
      <router-link to="/myInfo">myInfo</router-link> |
      <router-link to="/Logout">Logout</router-link>
      

    </nav>
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
<!--       <div class='demo-app-sidebar-section'>
        <h2 style="color: #ffffff; margin-top: 20px;">뭐넣지</h2>
        <ul>
          <li>11111111111</li>
          <li>22222222222</li>
          <li>33333333333</li>
        </ul>
      </div> -->
      <div class='demo-app-sidebar-section'>
      </div>
      <div class='demo-app-sidebar-section'>
        <h2 style="color: #ffffff;">모든 일정 ({{ currentEvents.length }})</h2>
        <br>
        <ul>
          <li v-for='event in currentEvents' :key='event.id'>
            <b style="color: #ffffff;">{{ event.startStr }}</b>&nbsp;
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
