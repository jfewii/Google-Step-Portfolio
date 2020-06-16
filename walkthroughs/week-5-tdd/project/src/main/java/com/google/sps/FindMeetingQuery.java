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

    Collection<TimeRange> originalAvailableTimes = Arrays.asList(TimeRange.WHOLE_DAY);
    Collection<String> attendees = new ArrayList(request.getAttendees());
    
    // If meeting is longer than the whole day, return empty list 
    if (request.getDuration() > TimeRange.WHOLE_DAY.duration()) {
      return Arrays.asList();
    }

    // If there are no attendees, return TimeRange of whole day 
    if (attendees.isEmpty()) {
      return Arrays.asList(TimeRange.WHOLE_DAY);  
    }

    for (Event event : events) {
      
      Collection<TimeRange> availableTimesAroundEvent = new ArrayList<TimeRange>();  
      
      for (TimeRange availableTime : originalAvailableTimes) {

        TimeRange eventTime = event.getWhen();

        if (!eventTime.overlaps(availableTime)) {
          availableTimesAroundEvent.add(availableTime);
          continue;
        }

        // Creates TimeRange object of the available meeting time range before the event starts 
        if (eventTime.start() > availableTime.start()) {
          TimeRange availableTimeBeforeEvent = TimeRange.fromStartEnd(availableTime.start(), eventTime.start(), false);
          if (availableTimeBeforeEvent.duration() >= request.getDuration()) {
            availableTimesAroundEvent.add(availableTimeBeforeEvent);
          }
        }

        // Creates TimeRange object of the available meeting time range after the event ends 
        if (availableTime.end() > eventTime.end()) {
          TimeRange availableTimeBeforeEvent = TimeRange.fromStartEnd(eventTime.end(), availableTime.end(), false);
          if (availableTimeBeforeEvent.duration() >= request.getDuration()) {
            availableTimesAroundEvent.add(availableTimeBeforeEvent);
          } 
        }
      }
      originalAvailableTimes = availableTimesAroundEvent;
    }
    return originalAvailableTimes;
  }
}
