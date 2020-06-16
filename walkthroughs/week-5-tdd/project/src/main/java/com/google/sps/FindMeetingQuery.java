// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.logging.Logger;

/* FindMeetingQuery determines if people can have meetings based on each persons avaliable times */
public final class FindMeetingQuery {

  private static Logger log = Logger.getLogger(FindMeetingQuery.class.getName());

  public Collection<TimeRange> query(Collection<Event> events, MeetingRequest request) {

    if (request.getDuration() > TimeRange.WHOLE_DAY.duration()){
        return Arrays.asList();
    }


    Collection<TimeRange> available = Arrays.asList(TimeRange.WHOLE_DAY);
    Collection<String> attendees = new ArrayList(request.getAttendees());

    if (request.getDuration() > TimeRange.WHOLE_DAY.duration()){
        return Arrays.asList();
    }

    if (attendees.isEmpty()) {
      return Arrays.asList(TimeRange.WHOLE_DAY);  
    }

    for (Event event: events) {
      
      Collection<TimeRange> newAvailableTimes = new ArrayList<TimeRange>();  
      TimeRange eventTime = event.getWhen();
      
      for (TimeRange avaliableTime: available) {
        if (! eventTime.overlaps(avaliableTime)) {
          newAvailableTimes.add(avaliableTime);
          continue;
        }

        if (eventTime.start() > avaliableTime.start()) {
          TimeRange timeDifference = TimeRange.fromStartEnd(avaliableTime.start(), eventTime.start(), false);
          if (timeDifference.duration() >= request.getDuration()) {
            newAvailableTimes.add(timeDifference);
          }
        }

        if (eventTime.end() > eventTime.end()) {
          TimeRange timeDifference = TimeRange.fromStartEnd(eventTime.end(), avaliableTime.end(), false);
          if (timeDifference.duration() >= request.getDuration()) {
            newAvailableTimes.add(timeDifference);
          } 
        }
        
      }

      available = newAvailableTimes;

    }

    return available;

  }

}
