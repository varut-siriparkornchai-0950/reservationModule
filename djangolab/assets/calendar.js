$(document).ready(function(){ // document ready

    var calendar = $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'agendaWeek,agendaDay'
      },
      defaultView: 'agendaWeek',
      defaultTimedEventDuration: '01:00',
      allDaySlot: false,
      scrollTime: '08:00',
      businessHours: {
        start: '9:00',
        end: '18:00',
      },
      lang: /^en-/.test(navigator.language) ? 'en' : 'zh-cn',
      eventOverlap: function(stillEvent, movingEvent) {
        return true;
      },
      events: [{
        title: '技术部周例会',
        start: '2015-05-22T15:00+08:00'
      }, {
        title: '运营部',
        start: '2015-05-22T12:00+08:00'
      }],
      editable: true,
      selectable: true,
      selectHelper: true,
      select: function(start, end) {
        var duration = (end - start) /1000;
        if(duration == 1800) {
          // set default duration to 1 hr.
            end = start.add(30, 'mins');
          return calendar.fullCalendar('select', start, end);
        }
        var title = prompt('Optional discription:');
        var verification = prompt('verify your data (YES/NO):');
        var eventData;
        if (verification && verification.trim() == "YES") {
          eventData = {
            title: title,
            start: start,
            end: end
          };
          calendar.fullCalendar('renderEvent', eventData);
        }
        calendar.fullCalendar('unselect');
      },
      eventRender: function(event, element, defaultView) {
        var start = moment(event.start).fromNow();
        element.attr('title', start);
      },
      eventRender: function(event, element, view) {
        if (view.name == 'listDay') {
            element.find(".fc-list-item-time").append("<span class='closeon'>X</span>");
        } else {
            element.find(".fc-content").prepend("<span class='closeon'>X</span>");
        }
        element.find(".closeon").on('click', function() {
            $('#calendar').fullCalendar('removeEvents',event._id);
            console.log('delete');
            }); 
      },
      eventDrop: function(event, el, revertFunc){
        if (!confirm("the timetable have been moved, choose OK for confirmation?")) {
          revertFunc();}
      },
      loading: function() {
      }
  });
  
  });