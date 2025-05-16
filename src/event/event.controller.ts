import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { EventService } from './event.service';
import { RegisterAttendanceDto } from './dto/register-attendance.dto';
import { Attendance, Event } from './event.service';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  /**
   * Get all available events
   * @returns List of all events
   */
  @Get()
  getEvents() {
    return this.eventService.getEvents();
  }

  /**
   * Get details of a specific event
   * @param eventId - The ID of the event (1, 2, or 3)
   * @returns Event details
   */
  @Get(':eventId')
  getEvent(@Param('eventId') eventId: string) {
    return this.eventService.getEventById(eventId);
  }

  /**
   * Get all attendees for a specific event
   * @param eventId - The ID of the event (1, 2, or 3)
   * @returns List of attendees with their details
   */
  @Get(':eventId/attendees')
  getEventAttendees(@Param('eventId') eventId: string) {
    return this.eventService.getEventAttendees(eventId);
  }

  /**
   * Register a new attendee for an event
   * @param eventId - The ID of the event (1, 2, or 3)
   * @param registerDto - Attendee information (name and email)
   * @returns Registration confirmation
   *
   * @example
   * POST /events/1/register
   * {
   *   "name": "Juan Pérez",
   *   "email": "juan@example.com"
   * }
   */
  @Post(':eventId/register')
  registerAttendance(
    @Param('eventId') eventId: string,
    @Body() registerDto: RegisterAttendanceDto,
  ) {
    return this.eventService.registerAttendance(eventId, registerDto);
  }

  /**
   * Mark attendance for a registered attendee
   * @param eventId - The ID of the event (1, 2, or 3)
   * @param email - Email of the attendee
   * @returns Attendance confirmation
   *
   * @example
   * POST /events/1/attendance
   * {
   *   "email": "juan@example.com"
   * }
   */
  @Post(':eventId/attendance')
  markAttendance(
    @Param('eventId') eventId: string,
    @Body('email') email: string,
  ) {
    return this.eventService.markAttendance(email, eventId);
  }

  /**
   * Get attendance summary for an event
   * @param eventId - The ID of the event (1, 2, or 3)
   * @returns Summary of total, present, and absent attendees
   */
  @Get(':eventId/summary')
  getAttendanceSummary(@Param('eventId') eventId: string) {
    return this.eventService.getAttendanceSummary(eventId);
  }
}
