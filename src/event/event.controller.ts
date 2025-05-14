import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { EventService } from './event.service';
import { RegisterAttendanceDto } from './dto/register-attendance.dto';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post(':eventId/register')
  registerAttendance(
    @Param('eventId') eventId: string,
    @Body() registerDto: RegisterAttendanceDto,
  ) {
    return this.eventService.registerAttendance({
      ...registerDto,
      eventId,
    });
  }

  @Post(':eventId/attendance')
  markAttendance(
    @Param('eventId') eventId: string,
    @Body('email') email: string,
  ) {
    return this.eventService.markAttendance(email, eventId);
  }

  @Get(':eventId/summary')
  getAttendanceSummary(@Param('eventId') eventId: string) {
    return this.eventService.getAttendanceSummary(eventId);
  }
}
